"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import {
  RetroDropdown,
  RetroDropdownContent,
  RetroDropdownItem,
  RetroDropdownTrigger,
} from "@/components/common/RetroDropdown"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-9 w-9"></div> 
  }

  return (
    <RetroDropdown>
      <RetroDropdownTrigger asChild>
        <button className="flex items-center justify-center p-1.5 text-foreground cursor-pointer outline-none focus:outline-none transition-none">
          {resolvedTheme === "dark" ? (
             <Moon className="w-6 h-6 stroke-3" />
          ) : (
             <Sun className="w-6 h-6 stroke-3" />
          )}
          <span className="sr-only">Toggle theme</span>
        </button>
      </RetroDropdownTrigger>
      
      <RetroDropdownContent align="end" className="bg-background">
        <RetroDropdownItem onClick={() => setTheme("light")}>
          Light
        </RetroDropdownItem>
        <RetroDropdownItem onClick={() => setTheme("dark")}>
          Dark
        </RetroDropdownItem>
        <RetroDropdownItem onClick={() => setTheme("system")}>
          System
        </RetroDropdownItem>
      </RetroDropdownContent>
    </RetroDropdown>
  )
}