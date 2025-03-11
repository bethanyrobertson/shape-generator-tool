import { forwardRef } from "react"
import { cn } from "../../lib/utils"

const Button = forwardRef(({ className, variant = "default", size = "default", children, ...props }, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

  const variants = {
    default: "bg-primary text-primary-white hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-white hover:bg-destructive/90",
    outline: "border border-input hover:bg-accent hover:text-accent-white",
    secondary: "bg-secondary text-secondary-white hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-white",
    link: "underline-offset-4 hover:underline text-primary",
  }

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
  }

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} ref={ref} {...props}>
      {children}
    </button>
  )
})

Button.displayName = "Button"

export { Button }

