import { forwardRef } from "react"
import { cn } from "../../lib/utils"

const Card = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg bg-card text-white shadow-sm", className)} {...props} />
))
Card.displayName = "Card"

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

export { Card, CardContent }

