"use client"

import { forwardRef, useState, useRef, useEffect } from "react"
import { cn } from "../../lib/utils"

const Slider = forwardRef(({ className, min = 0, max = 100, step = 1, value = [0], onValueChange, ...props }, ref) => {
  const [localValue, setLocalValue] = useState(value[0])
  const trackRef = useRef(null)

  useEffect(() => {
    setLocalValue(value[0])
  }, [value])

  const handleChange = (e) => {
    const newValue = Number(e.target.value)
    setLocalValue(newValue)
    onValueChange?.([newValue])
  }

  const percentage = ((localValue - min) / (max - min)) * 100

  return (
    <div ref={ref} className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
      <div className="relative w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div ref={trackRef} className="absolute h-full bg-primary" style={{ width: `${percentage}%` }} />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={localValue}
        onChange={handleChange}
        className="absolute w-full h-2 opacity-0"
      />
      <div
        className="absolute h-4 w-4 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        style={{ left: `calc(${percentage}% - 0.5rem)` }}
      />
    </div>
  )
})
Slider.displayName = "Slider"

export { Slider }
