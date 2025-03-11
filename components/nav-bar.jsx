import { NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
              <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md text-sm font-medium bg-primary text-white"
                  : "px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-accent hover:text-white"
              }
            >
              Shape Pattern Generator
            </NavLink>
          </div>
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md text-sm font-medium bg-primary text-white"
                  : "px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-accent hover:text-white"
              }
            >
              Design
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md text-sm font-medium bg-primary text-white"
                  : "px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-accent hover:text-foreground"
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

