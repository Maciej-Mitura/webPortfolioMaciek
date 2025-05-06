import "./globals.css"
import { ThemeProvider } from "next-themes"
import Navbar from "@/../components/Navbar"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Maciej Mitura",
  description: "Maciej Mitura's portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar /> {/* This renders the nav bar on every page */}
          {children} {/* This renders the content of each page */}
        </ThemeProvider>
      </body>
    </html>
  )
}
