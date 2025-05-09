"use client"

import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { ProfileCard } from "@/components/profile-card"
import { EditorSidebar } from "@/components/editor-sidebar"
import { Button } from "@/components/ui/button"
import { Download, Share2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export type ProfileData = {
  name: string
  title: string
  company: string
  avatar: string
  availability: boolean
  buttons: {
    id: string
    label: string
    icon: string
    link: string
    enabled: boolean
    textColor: string
    borderColor: string
    backgroundColor: string
  }[]
  socials: {
    instagram: boolean
    linkedin: boolean
    twitter: boolean
  }
}

export type DesignSettings = {
  availabilityColor: string
  unavailabilityColor: string
  cardBackgroundColor: string
  avatarSize: number
  roundedButtons: boolean
  showAvailability: boolean
  showSocials: boolean
  showThemeToggle: boolean
}

const defaultProfileData: ProfileData = {
  name: "Janez Novak",
  title: "Najboljši svetovalec pri nakupu!",
  company: "podjetje d.o.o.",
  avatar: "./placeholder.svg?height=400&width=400",
  availability: true,
  buttons: [
    {
      id: "1",
      label: "Pošlji sporočilo",
      icon: "mail",
      link: "#",
      enabled: true,
      textColor: "#3b82f6",
      borderColor: "#3b82f6",
      backgroundColor: "transparent",
    },
    {
      id: "2",
      label: "Mobilni kontakt",
      icon: "phone",
      link: "#",
      enabled: true,
      textColor: "#3b82f6",
      borderColor: "#3b82f6",
      backgroundColor: "transparent",
    },
    {
      id: "3",
      label: "Spletno mesto 1",
      icon: "globe",
      link: "#",
      enabled: true,
      textColor: "#3b82f6",
      borderColor: "#3b82f6",
      backgroundColor: "transparent",
    },
    {
      id: "4",
      label: "Spletno mesto 2",
      icon: "globe",
      link: "#",
      enabled: true,
      textColor: "#3b82f6",
      borderColor: "#3b82f6",
      backgroundColor: "transparent",
    },
    {
      id: "5",
      label: "Katalog 1",
      icon: "file-text",
      link: "#",
      enabled: true,
      textColor: "#3b82f6",
      borderColor: "#3b82f6",
      backgroundColor: "transparent",
    },
  ],
  socials: {
    instagram: true,
    linkedin: true,
    twitter: true,
  },
}

const defaultDesignSettings: DesignSettings = {
  availabilityColor: "#10b981",
  unavailabilityColor: "#ef4444",
  cardBackgroundColor: "#ffffff",
  avatarSize: 180,
  roundedButtons: true,
  showAvailability: true,
  showSocials: true,
  showThemeToggle: true,
}

export default function ProfileCardEditor() {
  const [profileData, setProfileData] = useState<ProfileData>(defaultProfileData)
  const [designSettings, setDesignSettings] = useState<DesignSettings>(defaultDesignSettings)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b fixed top-0 left-0 right-0 bg-background z-50">
        <div className="px-4 h-16 flex items-center justify-center">
          <h1 className="text-2xl font-bold">Shadcn Urejevalnik Profila Prototip</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden pt-16">
        {/* Sidebar */}
        <EditorSidebar
          profileData={profileData}
          setProfileData={setProfileData}
          designSettings={designSettings}
          setDesignSettings={setDesignSettings}
          open={sidebarOpen}
          setOpen={setSidebarOpen}
        />

        {/* Preview Area */}
        <div
          className={`flex-1 overflow-auto bg-muted/40 p-4 flex items-center justify-center z-0 ${
            sidebarOpen ? "ml-80" : "ml-0"
          } transition-all duration-300`}
        >
          <div className="max-w-md w-full">
            <ProfileCard profileData={profileData} designSettings={designSettings} />
          </div>
        </div>
      </div>
    </div>
  )
}
