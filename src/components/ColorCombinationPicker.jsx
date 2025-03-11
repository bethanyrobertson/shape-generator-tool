import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../lib/firebase"

// fallback in case Firebase fetch fails
const fallbackCombinations = [
  { bg: "#3b0921", fg: "#ff00ff", name: "Pink on Burgundy" },
  { bg: "#ff00ff", fg: "#3b0921", name: "Burgundy on Pink" },
  { bg: "#0000ff", fg: "#12f9f2", name: "Teal on Blue" },
  { bg: "#12f9f2", fg: "#0000ff", name: "Blue on Teal" },
  { bg: "#00423c", fg: "#00ff73", name: "Green on Pine" },
  { bg: "#00ff73", fg: "#00423c", name: "Pine on Green" },
]

export default function ColorCombinationPicker({ bgColor, fgColor, onColorChange }) {
  const [colorCombinations, setColorCombinations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // color combinations from Firebase
  useEffect(() => {
    async function fetchColorCombinations() {
      try {
        const querySnapshot = await getDocs(collection(db, "colorCombinations"))

        if (querySnapshot.size > 0) {
          const combinations = querySnapshot.docs.map((doc) => {
            const data = doc.data()
            return {
              id: doc.id,
              bg: data.backgroundColor || data.bg || "#000000",
              fg: data.foregroundColor || data.fg || "#ffffff",
              name: data.name || "Unnamed",
            }
          })
          setColorCombinations(combinations)
          setError(null)
        } else {
          // fallbacks if no data
          console.log("No color combinations found in Firebase, using fallbacks")
          setColorCombinations(
            fallbackCombinations.map((combo, index) => ({
              ...combo,
              id: `fallback-${index}`,
            })),
          )
        }
      } catch (err) {
        console.error("Error fetching color combinations:", err)
        setError("Could not load color combinations from Firebase")

        // fallbacks on error
        setColorCombinations(
          fallbackCombinations.map((combo, index) => ({
            ...combo,
            id: `fallback-${index}`,
          })),
        )
      } finally {
        setLoading(false)
      }
    }

    fetchColorCombinations()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    )
  }

  return (
    <div>
      {error && (
        <div className="mb-4 p-2 bg-red-900/20 border border-red-900/50 rounded text-sm text-red-400">
          {error} - Using default color combinations instead.
        </div>
      )}

      <div className="grid grid-cols-3 gap-3">
        {colorCombinations.map((combo) => (
          <button
            key={combo.id}
            className="relative h-16 rounded-md border border-gray-600 overflow-hidden cursor-pointer transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => onColorChange(combo.bg, combo.fg)}
            aria-label={`Select color combination ${combo.name}`}
            title={combo.name}
          >
            <div className="absolute inset-0" style={{ backgroundColor: combo.bg }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: combo.fg }} />
            </div>
            {bgColor === combo.bg && fgColor === combo.fg && (
              <div className="absolute top-1 right-1 bg-primary rounded-full p-0.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}