function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">W</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Wearly Theme Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete guide to installing, customizing, and optimizing your Shopify store
            with the Wearly theme. Get up and running in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Get Started
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors">
              Download Theme
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App