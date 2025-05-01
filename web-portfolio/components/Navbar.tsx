"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex gap-4 bg-gray-800 p-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  )
}
