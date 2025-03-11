import { useState, useRef, useEffect } from "react"
import { Download, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import ColorCombinationPicker from "./color-combination-picker"

// Default values
const DEFAULT_SHAPE = "circle"
const DEFAULT_SIZE = 30
const DEFAULT_SPACING = 20
const DEFAULT_ROTATION = 0
const DEFAULT_BG_COLOR = "#1e293b"
const DEFAULT_FG_COLOR = "#38bdf8"

export default function ShapePatternGenerator() {
  const [shape, setShape] = useState(DEFAULT_SHAPE)
  const [size, setSize] = useState(DEFAULT_SIZE)
  const [spacing, setSpacing] = useState(DEFAULT_SPACING)
  const [rotation, setRotation] = useState(DEFAULT_ROTATION)
  const [bgColor, setBgColor] = useState(DEFAULT_BG_COLOR)
  const [fgColor, setFgColor] = useState(DEFAULT_FG_COLOR)
  const canvasRef = useRef(null)

  // Regenerate pattern when any parameter changes
  useEffect(() => {
    generatePattern()
  }, [shape, size, spacing, rotation, bgColor, fgColor])

  const generatePattern = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height

    // Clear canvas
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)

    // Calculate number of shapes to draw
    const cols = Math.ceil(canvasWidth / (size + spacing))
    const rows = Math.ceil(canvasHeight / (size + spacing))

    // Draw shapes
    ctx.fillStyle = fgColor

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = j * (size + spacing) + spacing / 2
        const y = i * (size + spacing) + spacing / 2

        ctx.save()
        ctx.translate(x + size / 2, y + size / 2)
        ctx.rotate((rotation * Math.PI) / 180)

        switch (shape) {
          case "circle":
            ctx.beginPath()
            ctx.arc(0, 0, size / 2, 0, Math.PI * 2)
            ctx.fill()
            break
          case "square":
            ctx.fillRect(-size / 2, -size / 2, size, size)
            break
          case "triangle":
            ctx.beginPath()
            ctx.moveTo(0, -size / 2)
            ctx.lineTo(size / 2, size / 2)
            ctx.lineTo(-size / 2, size / 2)
            ctx.closePath()
            ctx.fill()
            break
        }

        ctx.restore()
      }
    }
  }

  const downloadPattern = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement("a")
    link.download = `${shape}-pattern.png`
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  // Reset all settings to default
  const resetCanvas = () => {
    setShape(DEFAULT_SHAPE)
    setSize(DEFAULT_SIZE)
    setSpacing(DEFAULT_SPACING)
    setRotation(DEFAULT_ROTATION)
    setBgColor(DEFAULT_BG_COLOR)
    setFgColor(DEFAULT_FG_COLOR)
  }

  // Handle color combination selection
  const handleColorCombinationChange = (bg, fg) => {
    setBgColor(bg)
    setFgColor(fg)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1 border-border bg-card text-card-white">
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Shape</h3>
              <RadioGroup value={shape} onValueChange={(value) => setShape(value)} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="circle" id="circle" />
                  <Label htmlFor="circle">⚪ Circle</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="square" id="square" />
                  <Label htmlFor="square">⬜ Square</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="triangle" id="triangle" />
                  <Label htmlFor="triangle">Triangle</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Pattern Controls</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="size">Size: {size}px</Label>
                  </div>
                  <Slider
                    id="size"
                    min={10}
                    max={100}
                    step={1}
                    value={[size]}
                    onValueChange={(value) => setSize(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="spacing">Spacing: {spacing}px</Label>
                  </div>
                  <Slider
                    id="spacing"
                    min={0}
                    max={100}
                    step={1}
                    value={[spacing]}
                    onValueChange={(value) => setSpacing(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="rotation">Rotation: {rotation}°</Label>
                  </div>
                  <Slider
                    id="rotation"
                    min={0}
                    max={360}
                    step={5}
                    value={[rotation]}
                    onValueChange={(value) => setRotation(value[0])}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Color Combinations</h3>

              {/* Color Combinations */}
              <ColorCombinationPicker
                bgColor={bgColor}
                fgColor={fgColor}
                onColorChange={handleColorCombinationChange}
              /> </div>

      

            <div className="flex gap-2">
              <Button onClick={resetCanvas} variant="outline" className="flex-1">
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
              <Button onClick={downloadPattern} className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2 border-border bg-card text-card-white">
        <CardContent className="pt-6">
          <div className="aspect-video w-full bg-slate-800 rounded-md overflow-hidden">
            <canvas ref={canvasRef} width={800} height={450} className="w-full h-full" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

