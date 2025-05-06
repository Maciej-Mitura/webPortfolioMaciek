"use client"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  // Only run on mount (client)
  useEffect(() => {
    const root = document.documentElement
    const isDark = root.classList.contains("dark")
    setDark(isDark)
    setHasMounted(true)
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

  return (
    <button className="hover:cursor-pointer" onClick={toggleTheme}>
      {dark ? (
        <Moon className="stroke-[var(--color-text)] stroke-[2]" />
      ) : (
        <Sun className="h-7 w-7 stroke-[var(--color-text)] stroke-[2.5]" />
      )}
    </button>
  )
}
