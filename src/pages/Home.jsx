import { Link } from 'react-router-dom'
import { ArrowRight, Download, Github, ExternalLink, Zap, Palette, ShoppingCart, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Built with speed in mind. Optimized for Core Web Vitals and excellent PageSpeed scores.'
  },
  {
    icon: Palette,
    title: 'Fully Customizable',
    description: 'Extensive theme settings with color schemes, typography options, and layout controls.'
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Ready',
    description: 'Complete product pages, cart functionality, and checkout optimization built-in.'
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Responsive design that looks great on all devices, from phones to desktops.'
  }
]

const quickStart = [
  {
    title: 'Install Theme',
    description: 'Upload the theme to your Shopify store',
    link: '/getting-started#installation'
  },
  {
    title: 'Configure Settings',
    description: 'Customize colors, fonts, and layout',
    link: '/theme-settings'
  },
  {
    title: 'Add Content',
    description: 'Setup your homepage sections',
    link: '/sections'
  },
  {
    title: 'Launch Store',
    description: 'Go live with your new theme',
    link: '/getting-started#launch'
  }
]

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 bg-wearly-orange rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-2xl">W</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-wearly-dark">
          Wearly Theme Documentation
        </h1>
        <p className="text-xl text-wearly-gray-600 max-w-3xl mx-auto">
          Complete guide to installing, customizing, and optimizing your Shopify store
          with the Wearly theme. Get up and running in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/getting-started"
            className="btn-primary flex items-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://themes.shopify.com/themes/wearly"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center space-x-2"
          >
            <Download size={16} />
            <span>Download Theme</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Features */}
      <section>
        <h2 className="text-3xl font-bold text-wearly-dark text-center mb-12">
          Why Choose Wearly?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-wearly-orange/10 rounded-full">
                  <feature.icon className="text-wearly-orange" size={24} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-wearly-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="bg-wearly-gray-50 -mx-8 px-8 py-12 rounded-2xl">
        <h2 className="text-3xl font-bold text-wearly-dark text-center mb-12">
          Quick Start Guide
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStart.map((step, index) => (
            <Link
              key={index}
              to={step.link}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow
                border-2 border-transparent hover:border-wearly-orange/20 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-wearly-orange text-white rounded-full
                  flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-wearly-dark group-hover:text-wearly-orange transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-wearly-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Sections */}
      <section>
        <h2 className="text-3xl font-bold text-wearly-dark text-center mb-12">
          Popular Documentation
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/theme-settings" className="card group hover:border-wearly-orange/30">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-wearly-orange transition-colors">
              Theme Settings
            </h3>
            <p className="text-wearly-gray-600 mb-4">
              Configure colors, typography, layout, and branding options to match your store's identity.
            </p>
            <div className="flex items-center text-wearly-orange font-medium">
              <span>Learn more</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link to="/sections" className="card group hover:border-wearly-orange/30">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-wearly-orange transition-colors">
              Homepage Sections
            </h3>
            <p className="text-wearly-gray-600 mb-4">
              Build stunning homepages with hero banners, featured products, testimonials, and more.
            </p>
            <div className="flex items-center text-wearly-orange font-medium">
              <span>Explore sections</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link to="/product-pages" className="card group hover:border-wearly-orange/30">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-wearly-orange transition-colors">
              Product Pages
            </h3>
            <p className="text-wearly-gray-600 mb-4">
              Optimize your product pages with galleries, reviews, variant selectors, and related products.
            </p>
            <div className="flex items-center text-wearly-orange font-medium">
              <span>Customize products</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Support */}
      <section className="text-center bg-gradient-to-r from-wearly-orange to-orange-500
        text-white -mx-8 px-8 py-12 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
        <p className="text-lg mb-8 opacity-90">
          Our support team is here to help you get the most out of your Wearly theme.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/support"
            className="bg-white text-wearly-orange px-6 py-3 rounded-lg font-medium
              hover:bg-wearly-gray-50 transition-colors"
          >
            Contact Support
          </Link>
          <Link
            to="/troubleshooting"
            className="border border-white/30 px-6 py-3 rounded-lg font-medium
              hover:bg-white/10 transition-colors"
          >
            View FAQ
          </Link>
        </div>
      </section>
    </div>
  )
}