import { forwardRef } from "react"
import { cn } from "../../lib/utils"

const Button = forwardRef(({ className, variant = "default", size = "default", children, ...props }, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center text-white rounded-md font-medium transition-colors focus-visible:outline-white focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

  const variants = {
    default: "text-white hover:bg-primary/90",
    destructive: "bg-destructive text-white hover:bg-destructive/90",
    outline: "border text-white border-input",
    secondary: "bg-secondary text-white hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-white",
    link: "underline-offset-4 hover:underline text-blue",
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

