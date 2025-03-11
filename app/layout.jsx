import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/nav-bar"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark bg-background min-h-screen`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

