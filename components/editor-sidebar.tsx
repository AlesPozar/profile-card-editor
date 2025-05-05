"use client"

import type React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileTab } from "@/components/tabs/profile-tab"
import { ButtonsTab } from "@/components/tabs/buttons-tab"
import { DesignTab } from "@/components/tabs/design-tab"
import type { ProfileData, DesignSettings } from "./profile-card-editor"

interface EditorSidebarProps {
  profileData: ProfileData
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>
  designSettings: DesignSettings
  setDesignSettings: React.Dispatch<React.SetStateAction<DesignSettings>>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function EditorSidebar({
  profileData,
  setProfileData,
  designSettings,
  setDesignSettings,
  open,
  setOpen,
}: EditorSidebarProps) {
  return (
    <div
      className={`border-r bg-background transition-all duration-300 ${
        open ? "w-80" : "w-0"
      } relative flex flex-col h-[calc(100vh-64px)]`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-10 top-4 bg-background border shadow-sm"
        onClick={() => setOpen(!open)}
      >
        {open ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </Button>

      {open && (
        <div className="p-4 flex-1 overflow-auto flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Customize Profile Card</h2>
          <Tabs defaultValue="profile" className="flex-1 flex flex-col">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="flex-1 mt-0 border-0 p-0 data-[state=active]:block">
              <ProfileTab profileData={profileData} setProfileData={setProfileData} />
            </TabsContent>
            <TabsContent value="buttons" className="flex-1 mt-0 border-0 p-0 data-[state=active]:block">
              <ButtonsTab profileData={profileData} setProfileData={setProfileData} />
            </TabsContent>
            <TabsContent value="design" className="flex-1 mt-0 border-0 p-0 data-[state=active]:block">
              <DesignTab designSettings={designSettings} setDesignSettings={setDesignSettings} />
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}
