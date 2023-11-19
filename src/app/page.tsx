import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";


function HomePage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <DocumentMagnifyingGlassIcon 
          className="w-64 h-64 text-indigo-600/20" 
        />
        <h1
          className="text-3xl font-bold text-center text-black mb-5"
        >
          Welcome to the Amazon Web Scraper
        </h1>

        <h2 className="text-lg italic text-center text-black/50">
          Effortlessly extract product data and insights.
          Maximize your e-commerce strategy with precision and ease.
        </h2>

        <h3 className="text-lg text-center italic text-black/50">
          Get started by entering a product URL.
        </h3>
      </div>
    </div>
  )
}

export default  HomePage;