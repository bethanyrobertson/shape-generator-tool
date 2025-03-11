import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ShapePatternGenerator from "@/components/shape-pattern-generator"
import NavBar from "@/components/nav-bar"
import AboutPage from "@/components/about-page"

export default function RouterProvider() {
  // Handle client-side rendering
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Return nothing during SSR
  }

  return (
    <BrowserRouter>
      <NavBar />
      <div className="container mx-auto py-8 px-4">
        <Routes>
          <Route path="/" element={<ShapePatternGenerator />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

