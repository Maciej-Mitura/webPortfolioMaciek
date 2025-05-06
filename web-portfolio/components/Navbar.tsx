"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "./buttons/toggleDarkmodeBtn"

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Projects",
    href: "/projects",
  },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="font-poppins relative flex items-center justify-between bg-[var(--color-background)] px-9 py-7">
      {/* Left: Logo */}
      <Link href="/" className="block h-[27px] w-[37px]">
        <svg
          width="37"
          height="27"
          viewBox="0 0 74 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-[var(--color-text)]"
        >
          <path
            d="M74 0H65.3718L54.0231 13.3697L42.3634 0.466387H37V8.55042L47.8046 20.5987L37 33.3466V46.3277L65.3718 13.3697V48.8151H74V0Z"
            fill="[var(--color-text)]"
          />
          <path
            d="M0 0H8.62815L19.9769 13.3697L31.6366 0.466387H37V8.55042L26.1954 20.5987L37 33.3466V46.3277L8.62815 13.3697V48.8151H0V0Z"
            fill="[var(--color-text)]"
          />
        </svg>
      </Link>

      {/* Center: Navigation Links */}
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-10 font-semibold">
        {navItems.map(item => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-2xl transition-colors ${
                isActive
                  ? "text-[var(--color-accentcolor)]"
                  : "text-[var(--color-text)] hover:text-[var(--color-accentcolor)]"
              }`}
            >
              {item.name}
            </Link>
          )
        })}
      </div>

      {/* Right: Theme Toggle (or any other button) */}
      <ThemeToggle />
    </nav>
  )
}
