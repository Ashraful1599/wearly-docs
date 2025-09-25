import { Palette, Type, Layout, Image } from 'lucide-react'

export default function ThemeSettings() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-wearly-dark mb-4">
          Theme Settings
        </h1>
        <p className="text-xl text-wearly-gray-600">
          Customize your store's appearance with Wearly's extensive theme settings.
          All changes are applied in real-time through the theme customizer.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-wearly-dark mb-8 flex items-center">
          <Palette className="mr-3 text-wearly-orange" size={28} />
          Colors & Branding
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Color Schemes</h3>
            <p className="text-wearly-gray-600 mb-4">
              Choose from predefined color schemes or create custom combinations:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Background colors and gradients</li>
              <li>• Text and accent colors</li>
              <li>• Button styles and hover states</li>
              <li>• Border and shadow colors</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Logo & Favicon</h3>
            <p className="text-wearly-gray-600 mb-4">
              Upload and configure your brand assets:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Main logo with custom width settings</li>
              <li>• Mobile logo optimization</li>
              <li>• Favicon for browser tabs</li>
              <li>• Retina display support</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-wearly-dark mb-8 flex items-center">
          <Type className="mr-3 text-wearly-orange" size={28} />
          Typography
        </h2>
        <div className="bg-wearly-gray-50 p-6 rounded-lg">
          <p className="text-wearly-gray-700 mb-6">
            Customize fonts and text styling throughout your store:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Headings</h4>
              <ul className="text-sm space-y-1">
                <li>• Font family selection</li>
                <li>• Font weights and styles</li>
                <li>• Letter spacing</li>
                <li>• Line height</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Body Text</h4>
              <ul className="text-sm space-y-1">
                <li>• Base font size</li>
                <li>• Reading line height</li>
                <li>• Font weight options</li>
                <li>• Text color variations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Special Elements</h4>
              <ul className="text-sm space-y-1">
                <li>• Button text styling</li>
                <li>• Navigation font</li>
                <li>• Price and currency</li>
                <li>• Form input text</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-wearly-dark mb-8 flex items-center">
          <Layout className="mr-3 text-wearly-orange" size={28} />
          Layout & Structure
        </h2>
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Page Layout</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Container Width</h4>
                <p className="text-sm text-wearly-gray-600">
                  Adjust the maximum width of your content containers for different screen sizes.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Spacing & Padding</h4>
                <p className="text-sm text-wearly-gray-600">
                  Control the spacing between sections and elements throughout your store.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="font-semibold text-yellow-900 mb-3">
          💡 Pro Tip: Theme Settings Organization
        </h3>
        <p className="text-yellow-800">
          Theme settings are organized into logical groups in the Shopify customizer.
          Changes are automatically saved and can be previewed before publishing.
        </p>
      </section>
    </div>
  )
}