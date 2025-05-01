import "./globals.css"
import Navbar from "@/../components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar /> {/* This renders the nav bar on every page */}
        {children} {/* This renders the content of each page */}
      </body>
    </html>
  )
}
