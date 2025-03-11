import { forwardRef, createContext, useContext, useState } from "react"
import { cn } from "../../lib/utils"

const RadioGroupContext = createContext(null)

const RadioGroup = forwardRef(({ className, value, onValueChange, ...props }, ref) => {
  const [selectedValue, setSelectedValue] = useState(value)

  const handleValueChange = (newValue) => {
    setSelectedValue(newValue)
    onValueChange?.(newValue)
  }

  return (
    <RadioGroupContext.Provider value={{ value: selectedValue, onValueChange: handleValueChange }}>
      <div ref={ref} className={cn("flex gap-2", className)} role="radiogroup" {...props} />
    </RadioGroupContext.Provider>
  )
})
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = forwardRef(({ className, value, id, ...props }, ref) => {
  const context = useContext(RadioGroupContext)
  const checked = context?.value === value

  return (
    <span className="relative flex h-4 w-4 items-center justify-center">
      <input
        type="radio"
        ref={ref}
        id={id}
        className="sr-only"
        checked={checked}
        value={value}
        onChange={() => context?.onValueChange(value)}
        {...props}
      />
      <span
        className={cn(
          "h-4 w-4 rounded-full border border-zinc-700",
          checked ? "bg-zinc-900" : "bg-zinc-800",
          className,
        )}
      >
        {checked && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-zinc-300" />
          </span>
        )}
      </span>
    </span>
  )
})
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
