export default function ProductPages() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-wearly-dark mb-4">
          Product Pages
        </h1>
        <p className="text-xl text-wearly-gray-600">
          Optimize your product pages for conversions with advanced features and customization options.
        </p>
      </div>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Product Gallery</h3>
          <ul className="space-y-2 text-sm text-wearly-gray-600">
            <li>• Zoom functionality on hover/click</li>
            <li>• Thumbnail navigation</li>
            <li>• Video support</li>
            <li>• Mobile-optimized swiping</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Variant Selection</h3>
          <ul className="space-y-2 text-sm text-wearly-gray-600">
            <li>• Color swatches</li>
            <li>• Size guides</li>
            <li>• Stock level indicators</li>
            <li>• Dynamic pricing</li>
          </ul>
        </div>
      </section>
    </div>
  )
}