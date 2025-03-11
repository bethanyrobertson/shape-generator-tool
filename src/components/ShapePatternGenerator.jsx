import { useState, useRef, useEffect } from "react"
import ColorCombinationPicker from "./ColorCombinationPicker"

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

  function generatePattern() {
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

  function downloadPattern() {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement("a")
    link.download = `${shape}-pattern.png`
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  function resetCanvas() {
    setShape(DEFAULT_SHAPE)
    setSize(DEFAULT_SIZE)
    setSpacing(DEFAULT_SPACING)
    setRotation(DEFAULT_ROTATION)
    setBgColor(DEFAULT_BG_COLOR)
    setFgColor(DEFAULT_FG_COLOR)
  }

  function handleColorCombinationChange(bg, fg) {
    setBgColor(bg)
    setFgColor(fg)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Controls Panel */}
      <div className="lg:col-span-1 rounded-lg bg-black text-white p-6">
        <div className="space-y-6">
          {/* Shape Selection */}
          <div>
            <h3 className="text-lg font-medium mb-2">Shape</h3>
            <div className="flex space-x-4">
              {["circle", "square", "triangle"].map((shapeOption) => (
                <label key={shapeOption} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={shapeOption}
                    checked={shape === shapeOption}
                    onChange={() => setShape(shapeOption)}
                    className="sr-only"
                  />
                  <span
                    className={`h-4 w-4 rounded-full border ${shape === shapeOption ? "bg-primary" : "border-gray-500"}`}
                  >
                    {shape === shapeOption && (
                      <span className="block h-2 w-2 rounded-full bg-teal mx-auto mt-0.5"></span>
                    )}
                  </span>
                  <span>
                    {shapeOption === "circle" ? "🔵 Circle" : shapeOption === "square" ? "🟨 Square" : "🔺 Triangle"}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Pattern Controls */}
          <div>
            <h3 className="text-lg font-medium mb-2">Pattern Controls</h3>
            <div className="space-y-4">
              {/* Size Slider */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="size">Size: {size}px</label>
                </div>
                <input
                  id="size"
                  type="range"
                  min={10}
                  max={100}
                  step={1}
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-full appearance-none"
                />
              </div>

              {/* Spacing Slider */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="spacing">Spacing: {spacing}px</label>
                </div>
                <input
                  id="spacing"
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={spacing}
                  onChange={(e) => setSpacing(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-full appearance-none"
                />
              </div>

              {/* Rotation Slider */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="rotation">Rotation: {rotation}°</label>
                </div>
                <input
                  id="rotation"
                  type="range"
                  min={0}
                  max={360}
                  step={5}
                  value={rotation}
                  onChange={(e) => setRotation(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-full appearance-none"
                />
              </div>
            </div>
          </div>

          {/* Color Combinations */}
          <div>
            <h3 className="text-lg font-medium mb-2">Color Combinations</h3>
            <ColorCombinationPicker bgColor={bgColor} fgColor={fgColor} onColorChange={handleColorCombinationChange} />

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={resetCanvas}
              className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M23 4v6h-6"></path>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
              </svg>
              Reset
            </button>
            <button
              onClick={downloadPattern}
              className="flex-1 flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Canvas Display */}
      <div className="lg:col-span-2 rounded-lg bg-card text-white p-6">
        <div className="aspect-video w-full bg-slate-800 rounded-md overflow-hidden">
          <canvas ref={canvasRef} width={800} height={450} className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}

