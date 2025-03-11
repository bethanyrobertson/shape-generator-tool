import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import ShapePatternGenerator from "./components/ShapePatternGenerator"
import AboutPage from "./components/AboutPage"
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <div className="dark bg-black min-h-screen">
        {/* Navigation */}
        <nav className="border-b border-border bg-card">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <span className="text-xl font-bold text-white">Shape Pattern Generator</span>
              </div>
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 py-2 rounded-md text-sm font-medium bg-primary text-primary-white"
                      : "px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  }
                >
                  Design
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 py-2 rounded-md text-sm font-medium bg-primary text-primary-white"
                      : "px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-accent hover:text-accent-white"
                  }
                >
                  About
                </NavLink>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={<ShapePatternGenerator />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ShapePatternGenerator />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

