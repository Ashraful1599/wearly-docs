export default function Collections() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-wearly-dark mb-4">
          Collection Pages
        </h1>
        <p className="text-xl text-wearly-gray-600">
          Create engaging collection pages with filtering, sorting, and advanced layout options.
        </p>
      </div>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-3">Filtering Options</h3>
          <p className="text-sm text-wearly-gray-600">
            Advanced filtering by price, size, color, brand, and custom attributes.
          </p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-3">Sorting Methods</h3>
          <p className="text-sm text-wearly-gray-600">
            Multiple sorting options including price, popularity, and customer ratings.
          </p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-3">Layout Options</h3>
          <p className="text-sm text-wearly-gray-600">
            Grid and list views with customizable product cards and information display.
          </p>
        </div>
      </section>
    </div>
  )
}