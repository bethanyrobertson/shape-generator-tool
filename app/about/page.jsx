export default function AboutPage() {
    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">About This Project</h1>
  
        <div className="max-w-3xl mx-auto bg-card rounded-lg border border-border p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-white">Shape Pattern Generator</h2>
  
          <p className="text-white mb-4">
            This project is a creative tool that allows you to generate beautiful geometric patterns using different
            shapes, sizes, and color combinations. It was built using React and Next.js with a focus on creating an
            intuitive and enjoyable user experience.
          </p>
  
          <p className="text-white mb-4">The Shape Pattern Generator features:</p>
  
          <ul className="list-disc pl-6 mb-4 text-white">
            <li className="mb-2">Multiple shape options (circles, squares, triangles)</li>
            <li className="mb-2">Customizable size, spacing, and rotation controls</li>
            <li className="mb-2">Curated color combinations from Firebase</li>
            <li className="mb-2">Dark mode interface for comfortable use</li>
            <li className="mb-2">Ability to download your creations as PNG images</li>
          </ul>
  
          <p className="text-white">
            Feel free to experiment with different settings to create unique patterns for your projects, presentations, or
            just for fun!
          </p>
        </div>
      </div>
    )
  }
  
  