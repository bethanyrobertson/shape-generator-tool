
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ColorPicker({ color, onChange }) {
  const [inputValue, setInputValue] = useState(color)

  // Update input value when color prop changes
  useEffect(() => {
    setInputValue(color)
  }, [color])

  // Handle input change
  const handleInputChange = (e) => {
    const newValue = e.target.value
    setInputValue(newValue)

    // Only update parent if it's a valid hex color
    if (/^#[0-9A-F]{6}$/i.test(newValue)) {
      onChange(newValue)
    }
  }

  // Handle color picker change
  const handleColorChange = (e) => {
    const newColor = e.target.value
    setInputValue(newColor)
    onChange(newColor)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="hex-color">Hex Color</Label>
          <Input
            id="hex-color"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="font-mono bg-background text-white"
          />
        </div>
        <div>
          <Label htmlFor="color-picker">Color Picker</Label>
          <div className="flex h-10 items-center">
            <Input
              id="color-picker"
              type="color"
              value={color}
              onChange={handleColorChange}
              className="h-10 w-full cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="pt-2">
        <div className="h-16 rounded-md border border-gray-600" style={{ backgroundColor: color }} />
      </div>
    </div>
  )
}

