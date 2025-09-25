import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { X, Search } from 'lucide-react'

const searchData = [
  { title: 'Wearly Theme Documentation', path: '/', description: 'Complete guide for the Shopify Wearly theme', keywords: ['wearly', 'theme', 'shopify', 'documentation', 'guide'] },
  { title: 'Getting Started', path: '/getting-started', description: 'Installation and setup guide with step-by-step instructions', keywords: ['installation', 'setup', 'upload', 'theme store', 'publish'] },
  { title: 'Theme Settings', path: '/theme-settings', description: 'Customize colors, fonts, layout, logo, and branding options', keywords: ['colors', 'fonts', 'typography', 'logo', 'favicon', 'branding', 'customization'] },
  { title: 'Theme Sections', path: '/sections', description: '65+ customizable sections for homepage and content pages', keywords: ['sections', 'homepage', 'hero', 'banner', 'featured products', 'testimonials', 'newsletter'] },
  { title: 'Product Pages', path: '/product-pages', description: 'Product galleries, variants, reviews, and optimization features', keywords: ['product', 'gallery', 'variants', 'reviews', 'zoom', 'related products'] },
  { title: 'Collection Pages', path: '/collections', description: 'Advanced filtering, sorting, and collection page layouts', keywords: ['collections', 'filters', 'sorting', 'product grid', 'pagination'] },

  // Specific features
  { title: 'Logo Configuration', path: '/theme-settings', description: 'Upload and configure your brand logo and favicon', keywords: ['logo', 'favicon', 'branding', 'upload'] },
  { title: 'Color Schemes', path: '/theme-settings', description: 'Customize background, text, accent, and button colors', keywords: ['colors', 'background', 'accent', 'buttons', 'gradients'] },
  { title: 'Typography Settings', path: '/theme-settings', description: 'Font selection, heading scale, and body text configuration', keywords: ['fonts', 'typography', 'headings', 'body text', 'scale'] },
  { title: 'Product Gallery', path: '/product-pages', description: 'Multi-image galleries with zoom and mobile swipe', keywords: ['gallery', 'zoom', 'mobile', 'images', 'thumbnails'] },
  { title: 'Variant Selection', path: '/product-pages', description: 'Color swatches, size guides, and stock indicators', keywords: ['variants', 'colors', 'sizes', 'stock', 'swatches'] },
  { title: 'Collection Filtering', path: '/collections', description: 'Advanced filters by price, size, color, and brand', keywords: ['filters', 'price', 'size', 'color', 'brand', 'search'] },

  // Section types
  { title: 'Hero Banners', path: '/sections', description: 'Image banners, slideshows, and video hero sections', keywords: ['hero', 'banner', 'slideshow', 'video', 'background'] },
  { title: 'Featured Collections', path: '/sections', description: 'Showcase products from specific collections', keywords: ['featured', 'collections', 'products', 'showcase'] },
  { title: 'Newsletter Signup', path: '/sections', description: 'Email collection forms for marketing', keywords: ['newsletter', 'email', 'signup', 'form', 'marketing'] },
  { title: 'Testimonials', path: '/sections', description: 'Customer reviews and social proof sections', keywords: ['testimonials', 'reviews', 'social proof', 'customers'] }
]

export default function SimpleSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  if (!isOpen) return null

  const filteredResults = searchData.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    (item.keywords && item.keywords.some(keyword =>
      keyword.toLowerCase().includes(query.toLowerCase())
    ))
  )

  const handleResultClick = (path) => {
    navigate(path)
    onClose()
    setQuery('')
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center p-4 pt-16">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl">
        {/* Search input */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search documentation..."
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              autoFocus
            />
            <button
              onClick={() => {
                onClose()
                setQuery('')
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Search results */}
        <div className="max-h-96 overflow-y-auto">
          {filteredResults.length > 0 ? (
            <div className="p-2">
              {filteredResults.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleResultClick(result.path)}
                  className="w-full text-left p-3 rounded-lg hover:bg-gray-50 block"
                >
                  <div className="font-medium text-gray-900 mb-1">
                    {result.title}
                  </div>
                  <div className="text-sm text-gray-600">
                    {result.description}
                  </div>
                </button>
              ))}
            </div>
          ) : query ? (
            <div className="p-6 text-center text-gray-500">
              No results found for "{query}"
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              Start typing to search the documentation
            </div>
          )}
        </div>
      </div>
    </div>
  )
}