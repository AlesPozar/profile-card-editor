"use client"

import type React from "react"

import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ColorPickerProps {
  color: string
  onChange: (color: string) => void
}

export function ColorPicker({ color, onChange }: ColorPickerProps) {
  const [inputValue, setInputValue] = useState(color)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
      onChange(e.target.value)
    }
  }

  const presetColors = [
    "#ef4444", // red
    "#f97316", // orange
    "#f59e0b", // amber
    "#10b981", // emerald
    "#06b6d4", // cyan
    "#3b82f6", // blue
    "#8b5cf6", // violet
    "#d946ef", // fuchsia
    "#ec4899", // pink
  ]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal h-10"
          style={{ borderLeftWidth: "6px", borderLeftColor: color }}
        >
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full border" style={{ backgroundColor: color }} />
            <span>{color}</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="flex flex-wrap gap-1 mb-2">
          {presetColors.map((presetColor) => (
            <button
              key={presetColor}
              className="h-6 w-6 rounded-md border"
              style={{ backgroundColor: presetColor }}
              onClick={() => {
                onChange(presetColor)
                setInputValue(presetColor)
              }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <Input value={inputValue} onChange={handleInputChange} placeholder="#000000" />
          <div className="h-10 w-10 rounded-md border" style={{ backgroundColor: color }} />
        </div>
      </PopoverContent>
    </Popover>
  )
}
