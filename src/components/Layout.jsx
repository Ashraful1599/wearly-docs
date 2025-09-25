import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search, Home, Settings, Layers, Palette, ShoppingBag, Grid3X3, AlertCircle, HelpCircle } from 'lucide-react'
import SimpleSearchModal from './SimpleSearchModal'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Getting Started', href: '/getting-started', icon: Home },
  { name: 'Theme Settings', href: '/theme-settings', icon: Settings },
  { name: 'Sections', href: '/sections', icon: Layers },
  { name: 'Customization', href: '/customization', icon: Palette },
  { name: 'Product Pages', href: '/product-pages', icon: ShoppingBag },
  { name: 'Collections', href: '/collections', icon: Grid3X3 },
  { name: 'Troubleshooting', href: '/troubleshooting', icon: AlertCircle },
  { name: 'Support', href: '/support', icon: HelpCircle },
]

export default function Layout({ children, sidebarOpen, setSidebarOpen }) {
  const location = useLocation()
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-wearly-orange rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <span className="font-semibold text-wearly-dark">Documentation</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md text-wearly-gray-600 hover:bg-wearly-gray-100"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-wearly-gray-200
          transition-transform duration-300 ease-in-out lg:transition-none`}>

          {/* Logo */}
          <div className="hidden lg:flex items-center space-x-3 p-6 border-b border-wearly-gray-200">
            <div className="h-8 w-8 bg-wearly-orange rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-semibold text-wearly-dark">Documentation</span>
          </div>

          {/* Search */}
          <div className="p-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-full flex items-center space-x-3 px-3 py-2 text-left text-wearly-gray-500
                hover:bg-wearly-gray-50 rounded-md transition-colors"
            >
              <Search size={18} />
              <span>Search documentation...</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="px-4 pb-4">
            <ul className="space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                const Icon = item.icon
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors
                        ${isActive
                          ? 'bg-wearly-orange text-white'
                          : 'text-wearly-gray-700 hover:bg-wearly-gray-50'
                        }`}
                    >
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 lg:pl-0">
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </div>

      {/* Search Modal */}
      <SimpleSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-25"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}