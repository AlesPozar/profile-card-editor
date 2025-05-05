"use client"

import type React from "react"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { ColorPicker } from "@/components/color-picker"
import type { DesignSettings } from "../profile-card-editor"

interface DesignTabProps {
  designSettings: DesignSettings
  setDesignSettings: React.Dispatch<React.SetStateAction<DesignSettings>>
}

export function DesignTab({ designSettings, setDesignSettings }: DesignTabProps) {
  return (
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label>Card Background Color</Label>
        <ColorPicker
          color={designSettings.cardBackgroundColor}
          onChange={(color) => setDesignSettings({ ...designSettings, cardBackgroundColor: color })}
        />
      </div>

      <div className="space-y-2">
        <Label>Available Indicator Color</Label>
        <ColorPicker
          color={designSettings.availabilityColor}
          onChange={(color) => setDesignSettings({ ...designSettings, availabilityColor: color })}
        />
      </div>

      <div className="space-y-2">
        <Label>Not Available Indicator Color</Label>
        <ColorPicker
          color={designSettings.unavailabilityColor}
          onChange={(color) => setDesignSettings({ ...designSettings, unavailabilityColor: color })}
        />
      </div>

      <Separator />

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Avatar Size: {designSettings.avatarSize}px</Label>
        </div>
        <Slider
          value={[designSettings.avatarSize]}
          min={100}
          max={240}
          step={10}
          onValueChange={(value) => setDesignSettings({ ...designSettings, avatarSize: value[0] })}
        />
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <Label htmlFor="rounded-buttons">Rounded Buttons</Label>
        <Switch
          id="rounded-buttons"
          checked={designSettings.roundedButtons}
          onCheckedChange={(checked) => setDesignSettings({ ...designSettings, roundedButtons: checked })}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="show-availability">Show Availability</Label>
        <Switch
          id="show-availability"
          checked={designSettings.showAvailability}
          onCheckedChange={(checked) => setDesignSettings({ ...designSettings, showAvailability: checked })}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="show-theme-toggle">Show Theme Toggle</Label>
        <Switch
          id="show-theme-toggle"
          checked={designSettings.showThemeToggle}
          onCheckedChange={(checked) => setDesignSettings({ ...designSettings, showThemeToggle: checked })}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="show-socials">Show Social Icons</Label>
        <Switch
          id="show-socials"
          checked={designSettings.showSocials}
          onCheckedChange={(checked) => setDesignSettings({ ...designSettings, showSocials: checked })}
        />
      </div>
    </div>
  )
}
