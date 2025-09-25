export default function Troubleshooting() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-wearly-dark mb-4">
          Troubleshooting
        </h1>
        <p className="text-xl text-wearly-gray-600">
          Common issues and solutions to help you get the most out of your Wearly theme.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="card">
            <h3 className="font-semibold mb-3">How do I change the homepage layout?</h3>
            <p className="text-wearly-gray-600">
              Go to Online Store → Themes → Customize. Use the sections panel to add, remove, 
              and rearrange homepage sections by dragging and dropping.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-3">My images look blurry on mobile devices</h3>
            <p className="text-wearly-gray-600">
              Upload high-resolution images (at least 2x the display size) to ensure crisp display 
              on retina screens. Wearly automatically optimizes images for different devices.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-3">The theme is loading slowly</h3>
            <p className="text-wearly-gray-600">
              Check your image sizes, minimize installed apps, and consider using a CDN. 
              Wearly is optimized for speed, but large images and too many apps can impact performance.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}