"use client"

import type React from "react"

import Image from "next/image"
import {
  Mail,
  Phone,
  Globe,
  FileText,
  Instagram,
  Linkedin,
  Twitter,
  FileImage,
  FileCode,
  Video,
  Music,
  LinkIcon,
} from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import type { ProfileData, DesignSettings } from "./profile-card-editor"

const iconMap: Record<string, React.ReactNode> = {
  mail: <Mail className="h-4 w-4" />,
  phone: <Phone className="h-4 w-4" />,
  globe: <Globe className="h-4 w-4" />,
  "file-text": <FileText className="h-4 w-4" />,
  "file-image": <FileImage className="h-4 w-4" />,
  "file-code": <FileCode className="h-4 w-4" />,
  video: <Video className="h-4 w-4" />,
  music: <Music className="h-4 w-4" />,
  link: <LinkIcon className="h-4 w-4" />,
}

interface ProfileCardProps {
  profileData: ProfileData
  designSettings: DesignSettings
}

export function ProfileCard({ profileData, designSettings }: ProfileCardProps) {
  const {
    availabilityColor,
    unavailabilityColor,
    cardBackgroundColor,
    avatarSize,
    roundedButtons,
    showAvailability,
    showSocials,
    showThemeToggle,
  } = designSettings

  return (
    <Card
      className="shadow-lg w-full"
      style={{
        minHeight: "667px",
        maxWidth: "375px",
        backgroundColor: cardBackgroundColor,
      }}
    >
      <CardHeader className="relative p-4 pb-0">
        <div className=" h-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {showAvailability && (
              <>
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: profileData.availability ? availabilityColor : unavailabilityColor,
                  }}
                ></div>
                <span className="text-sm text-muted-foreground">{profileData.availability ? "Avl." : "Not Avl."}</span>
              </>
            )}
          </div>
          {showThemeToggle && <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href)
              alert("Link copied to clipboard!") // Replace with toast if needed
            }}
            className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            aria-label="Share"
          >
            <LinkIcon className="h-5 w-5" />
          </button>}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center pt-6 pb-2 overflow-auto">
        <div
          className="rounded-full overflow-hidden mb-6 border-4 border-background"
          style={{ width: avatarSize, height: avatarSize }}
        >
          <Image
            src={profileData.avatar || "/placeholder.svg"}
            alt="Profile"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold mb-1">{profileData.name}</h2>
        <p className="text-muted-foreground mb-6">{profileData.title}</p>

        <div className="space-y-3 w-full">
          {profileData.buttons
            .filter((btn) => btn.enabled)
            .map((button) => (
              <Button
                key={button.id}
                variant="outline"
                className={cn("w-full flex gap-2 justify-center", roundedButtons ? "rounded-full" : "rounded-md")}
                style={{
                  borderColor: button.borderColor,
                  color: button.textColor,
                  backgroundColor: button.backgroundColor,
                }}
                asChild
              >
                <a href={button.link}>
                  {iconMap[button.icon]}
                  {button.label}
                </a>
              </Button>
            ))}
        </div>
      </CardContent>

      {showSocials && (
        <CardFooter className="flex-col">
          <div className="flex justify-center gap-6 py-4">
            {profileData.socials.instagram && <Instagram className="h-6 w-6" />}
            {profileData.socials.linkedin && <Linkedin className="h-6 w-6" />}
            {profileData.socials.twitter && <Twitter className="h-6 w-6" />}
          </div>
          <p className="text-center text-sm text-muted-foreground">{profileData.company}</p>
        </CardFooter>
      )}
    </Card>
  )
}
