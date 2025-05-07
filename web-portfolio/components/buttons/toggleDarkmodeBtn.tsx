"use client"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Only run on mount (client)
  useEffect(() => {
    const root = document.documentElement
    const isDark = root.classList.contains("dark")
    setDark(isDark)
    setHasMounted(true)

    // Check screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Sync dark mode when `dark` state changes
  useEffect(() => {
    if (!hasMounted) return // skip until mounted
    const root = document.documentElement
    if (dark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [dark, hasMounted])

  const toggleTheme = () => setDark(prev => !prev)

  // Prevent hydration error by waiting for mount
  if (!hasMounted) return null

  // Determine icon size based on screen size
  const iconSize = isMobile ? 32 : 28
  const strokeWidth = isMobile ? 2 : 2.5

  return (
    <button
      className="rounded-full bg-[var(--color-background)] p-2 shadow-md transition-shadow hover:cursor-pointer hover:shadow-lg"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {dark ? (
        <Moon
          size={iconSize}
          className="stroke-[var(--color-text)]"
          strokeWidth={strokeWidth}
        />
      ) : (
        <Sun
          size={iconSize}
          className="stroke-[var(--color-text)]"
          strokeWidth={strokeWidth}
        />
      )}
    </button>
  )
}
