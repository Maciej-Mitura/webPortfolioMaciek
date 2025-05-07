"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import ThemeToggle from "./buttons/toggleDarkmodeBtn"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  // Find the index of the active page
  useEffect(() => {
    const index = navItems.findIndex(item => item.href === pathname)
    if (index !== -1) {
      setActiveIndex(index)
    }
  }, [pathname])

  // Check screen widthc
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth < 1280 && window.innerWidth >= 768)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Handle carousel navigation
  const handleNext = () => {
    if (activeIndex < navItems.length - 1) {
      const nextIndex = activeIndex + 1
      setActiveIndex(nextIndex)
      // Navigate to the next page
      router.push(navItems[nextIndex].href)
    }
  }

  const handlePrev = () => {
    if (activeIndex > 0) {
      const prevIndex = activeIndex - 1
      setActiveIndex(prevIndex)
      // Navigate to the previous page
      router.push(navItems[prevIndex].href)
    }
  }

  // Function to get carousel items
  const getCarouselItems = () => {
    const items = []

    // Previous item
    if (activeIndex > 0) {
      items.push(
        <Link
          key={navItems[activeIndex - 1].href}
          href={navItems[activeIndex - 1].href}
          className="carousel-slide absolute top-1/2 left-2 -translate-y-1/2 text-lg text-[var(--color-text)] opacity-60 transition-all duration-300"
        >
          {navItems[activeIndex - 1].name}
        </Link>,
      )
    }

    // Current item
    items.push(
      <Link
        key={navItems[activeIndex].href}
        href={navItems[activeIndex].href}
        className="carousel-slide absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-[var(--color-accentcolor)] transition-all duration-300"
      >
        {navItems[activeIndex].name}
      </Link>,
    )

    // Next item
    if (activeIndex < navItems.length - 1) {
      items.push(
        <Link
          key={navItems[activeIndex + 1].href}
          href={navItems[activeIndex + 1].href}
          className="carousel-slide absolute top-1/2 right-2 -translate-y-1/2 text-lg text-[var(--color-text)] opacity-60 transition-all duration-300"
        >
          {navItems[activeIndex + 1].name}
        </Link>,
      )
    }

    return items
  }

  return (
    <div className="flex w-full flex-col">
      <nav className="font-poppins relative flex items-center justify-between bg-[var(--color-background)] px-4 py-4 sm:px-6 sm:pt-5 md:px-9">
        {/* Left: Logo - Hide on mobile */}
        {!isMobile && (
          <Link
            href="/"
            className="block h-[22px] w-[30px] md:h-[27px] md:w-[37px]"
          >
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
        )}

        {/* Center: Navigation Links for desktop or Carousel for mobile */}
        {isMobile || isTablet ? (
          <div className="relative flex h-12 w-full items-center justify-center">
            {/* Carousel navigation arrows */}
            {activeIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-0 z-10 text-[var(--color-text)] hover:text-[var(--color-accentcolor)]"
                aria-label="Previous page"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Carousel items */}
            <div className="relative h-full w-4/5 overflow-hidden">
              {getCarouselItems()}
            </div>

            {activeIndex < navItems.length - 1 && (
              <button
                onClick={handleNext}
                className="absolute right-0 z-10 text-[var(--color-text)] hover:text-[var(--color-accentcolor)]"
                aria-label="Next page"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-5 font-semibold lg:gap-10">
            {navItems.map(item => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg transition-colors lg:text-xl xl:text-2xl ${
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
        )}

        {/* Right: Theme Toggle - Move to bottom on mobile */}
        {!isMobile && (
          <div className="block">
            <ThemeToggle />
          </div>
        )}
      </nav>

      {/* Bottom Theme Toggle for mobile - moved to right corner */}
      {isMobile && (
        <div className="fixed right-6 bottom-6 z-50">
          <ThemeToggle />
        </div>
      )}
    </div>
  )
}
