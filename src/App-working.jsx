import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState } from 'react'

// Simple components for testing
const Layout = ({ children, sidebarOpen, setSidebarOpen }) => (
  <div className="min-h-screen bg-gray-50">
    {/* Mobile menu button */}
    <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 bg-orange-500 rounded flex items-center justify-center">
          <span className="text-white font-bold text-sm">W</span>
        </div>
        <span className="font-semibold text-gray-900">Documentation</span>
      </div>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>
    </div>

    <div className="flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r
        transition-transform duration-300`}>

        {/* Logo */}
        <div className="hidden lg:flex items-center space-x-3 p-6 border-b">
          <div className="h-8 w-8 bg-orange-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <span className="font-semibold text-gray-900">Documentation</span>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-4">
          <ul className="space-y-1">
            <li>
              <a href="/" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm bg-orange-500 text-white">
                <span>🏠</span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/getting-started" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                <span>🚀</span>
                <span>Getting Started</span>
              </a>
            </li>
            <li>
              <a href="/theme-settings" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                <span>⚙️</span>
                <span>Theme Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </div>

    {/* Mobile overlay */}
    {sidebarOpen && (
      <div
        className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-25"
        onClick={() => setSidebarOpen(false)}
      />
    )}
  </div>
)

const Home = () => (
  <div className="space-y-12">
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <div className="h-16 w-16 bg-orange-500 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-2xl">W</span>
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Wearly Theme Documentation
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Complete guide to installing, customizing, and optimizing your Shopify store
        with the Wearly theme. Get up and running in minutes.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium">
          Get Started
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium">
          Download Theme
        </button>
      </div>
    </div>

    <section>
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: '⚡', title: 'High Performance', desc: 'Optimized for speed and Core Web Vitals' },
          { icon: '🎨', title: 'Customizable', desc: 'Extensive theme settings and options' },
          { icon: '🛒', title: 'Ecommerce Ready', desc: 'Complete product and cart functionality' },
          { icon: '📱', title: 'Mobile First', desc: 'Responsive design for all devices' }
        ].map((feature, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
)

const GettingStarted = () => (
  <div>
    <h1 className="text-4xl font-bold mb-4">Getting Started</h1>
    <p className="text-xl text-gray-600 mb-8">Quick setup guide for the Wearly theme.</p>
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Installation Steps</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Download the theme from Shopify Theme Store</li>
        <li>Upload to your Shopify admin</li>
        <li>Configure basic settings</li>
        <li>Publish and go live</li>
      </ol>
    </div>
  </div>
)

const ThemeSettings = () => (
  <div>
    <h1 className="text-4xl font-bold mb-4">Theme Settings</h1>
    <p className="text-xl text-gray-600 mb-8">Customize your theme appearance and functionality.</p>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Colors & Branding</h3>
        <p>Customize your brand colors and logo settings.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Typography</h3>
        <p>Configure fonts and text styling options.</p>
      </div>
    </div>
  </div>
)

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <BrowserRouter>
      <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/theme-settings" element={<ThemeSettings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App