import "./globals.css"
import { ThemeProvider } from "next-themes"
import Navbar from "@/../components/Navbar"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar /> {/* This renders the nav bar on every page */}
          <main className="flex min-h-[calc(100vh-90px)] flex-col">
            {children} {/* This renders the content of each page */}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
