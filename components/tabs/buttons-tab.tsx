"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import type { ProfileData } from "../profile-card-editor"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { GripVertical, Trash2 } from "lucide-react"
import { ColorPicker } from "@/components/color-picker"

interface ButtonsTabProps {
  profileData: ProfileData
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>
}

export function ButtonsTab({ profileData, setProfileData }: ButtonsTabProps) {
  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const items = Array.from(profileData.buttons)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setProfileData({
      ...profileData,
      buttons: items,
    })
  }

  const updateButton = (id: string, field: string, value: string | boolean) => {
    setProfileData({
      ...profileData,
      buttons: profileData.buttons.map((button) => (button.id === id ? { ...button, [field]: value } : button)),
    })
  }

  const addNewButton = () => {
    const newId = String(Date.now())
    setProfileData({
      ...profileData,
      buttons: [
        ...profileData.buttons,
        {
          id: newId,
          label: "New Button",
          icon: "link",
          link: "#",
          enabled: true,
          textColor: "#3b82f6",
          borderColor: "#3b82f6",
          backgroundColor: "transparent",
        },
      ],
    })
  }

  const removeButton = (id: string) => {
    setProfileData({
      ...profileData,
      buttons: profileData.buttons.filter((button) => button.id !== id),
    })
  }

  return (
    <div className="space-y-4 py-4">
      <Button onClick={addNewButton} className="w-full" variant="outline">
        <PlusCircle className="mr-2 h-4 w-4" />
        Dodaj Nov Gumb
      </Button>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="buttons">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
              {profileData.buttons.map((button, index) => (
                <Draggable key={button.id} draggableId={button.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="border rounded-md p-3 bg-background"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div {...provided.dragHandleProps} className="mr-2 cursor-grab">
                            <GripVertical className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <Label className="font-medium">Gumb {index + 1}</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={button.enabled}
                            onCheckedChange={(checked) => updateButton(button.id, "enabled", checked)}
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive"
                            onClick={() => removeButton(button.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2 mt-2">
                        <div className="space-y-1">
                          <Label htmlFor={`label-${button.id}`} className="text-xs">
                            Besedilo
                          </Label>
                          <Input
                            id={`label-${button.id}`}
                            value={button.label}
                            onChange={(e) => updateButton(button.id, "label", e.target.value)}
                            className="h-8"
                          />
                        </div>

                        <div className="space-y-1">
                          <Label htmlFor={`link-${button.id}`} className="text-xs">
                            Povezava
                          </Label>
                          <Input
                            id={`link-${button.id}`}
                            value={button.link}
                            onChange={(e) => updateButton(button.id, "link", e.target.value)}
                            className="h-8"
                          />
                        </div>

                        <div className="space-y-1">
                          <Label htmlFor={`icon-${button.id}`} className="text-xs">
                            Ikona
                          </Label>
                          <Select value={button.icon} onValueChange={(value) => updateButton(button.id, "icon", value)}>
                            <SelectTrigger className="h-8">
                              <SelectValue placeholder="Select icon" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mail">Mail</SelectItem>
                              <SelectItem value="phone">Phone</SelectItem>
                              <SelectItem value="globe">Globe</SelectItem>
                              <SelectItem value="file-text">File Text</SelectItem>
                              <SelectItem value="file-image">File Image</SelectItem>
                              <SelectItem value="file-code">File Code</SelectItem>
                              <SelectItem value="video">Video</SelectItem>
                              <SelectItem value="music">Music</SelectItem>
                              <SelectItem value="link">Link</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-1">
                          <Label htmlFor={`text-color-${button.id}`} className="text-xs">
                            Barva Besedila
                          </Label>
                          <ColorPicker
                            color={button.textColor || "#3b82f6"}
                            onChange={(color) => updateButton(button.id, "textColor", color)}
                          />
                        </div>

                        <div className="space-y-1">
                          <Label htmlFor={`border-color-${button.id}`} className="text-xs">
                            Barva Robu
                          </Label>
                          <ColorPicker
                            color={button.borderColor || "#3b82f6"}
                            onChange={(color) => updateButton(button.id, "borderColor", color)}
                          />
                        </div>

                        <div className="space-y-1">
                          <Label htmlFor={`background-color-${button.id}`} className="text-xs">
                            Barva Ozadja
                          </Label>
                          <ColorPicker
                            color={button.backgroundColor || "transparent"}
                            onChange={(color) => updateButton(button.id, "backgroundColor", color)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
