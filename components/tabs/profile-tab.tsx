"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import type { ProfileData } from "../profile-card-editor"

interface ProfileTabProps {
  profileData: ProfileData
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>
}

export function ProfileTab({ profileData, setProfileData }: ProfileTabProps) {
  return (
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="name">Ime/Naslov</Label>
        <Input
          id="name"
          value={profileData.name}
          onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Opis</Label>
        <Input
          id="title"
          value={profileData.title}
          onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Podjetje</Label>
        <Input
          id="company"
          value={profileData.company}
          onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="avatar">Slika URL</Label>
        <Input
          id="avatar"
          value={profileData.avatar}
          onChange={(e) => setProfileData({ ...profileData, avatar: e.target.value })}
        />
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <Label htmlFor="availability">Dostopnost</Label>
        <Switch
          id="availability"
          checked={profileData.availability}
          onCheckedChange={(checked) => setProfileData({ ...profileData, availability: checked })}
        />
      </div>

      <Separator />

      <div className="space-y-2">
        <Label>Socialna Omrežja</Label>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="instagram">Instagram</Label>
            <Switch
              id="instagram"
              checked={profileData.socials.instagram}
              onCheckedChange={(checked) =>
                setProfileData({
                  ...profileData,
                  socials: { ...profileData.socials, instagram: checked },
                })
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Switch
              id="linkedin"
              checked={profileData.socials.linkedin}
              onCheckedChange={(checked) =>
                setProfileData({
                  ...profileData,
                  socials: { ...profileData.socials, linkedin: checked },
                })
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="twitter">Twitter</Label>
            <Switch
              id="twitter"
              checked={profileData.socials.twitter}
              onCheckedChange={(checked) =>
                setProfileData({
                  ...profileData,
                  socials: { ...profileData.socials, twitter: checked },
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
