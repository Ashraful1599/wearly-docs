import { CheckCircle, Download, Upload, Settings, Play } from 'lucide-react'

const steps = [
  {
    icon: Download,
    title: 'Download the Theme',
    content: `
1. Purchase the Wearly theme from the Shopify Theme Store
2. Download the theme ZIP file to your computer
3. Keep the ZIP file handy - you'll need it in the next step

**Alternative:** You can also install directly from the Theme Store through your Shopify admin.
    `
  },
  {
    icon: Upload,
    title: 'Upload to Shopify',
    content: `
1. Go to your Shopify Admin → Online Store → Themes
2. Click "Upload theme" button
3. Select the Wearly theme ZIP file
4. Click "Upload" and wait for the process to complete
5. The theme will appear in your theme library

**Note:** Don't publish the theme yet - we'll customize it first.
    `
  },
  {
    icon: Settings,
    title: 'Basic Configuration',
    content: `
Before publishing, configure these essential settings:

**Logo & Branding:**
- Upload your store logo
- Set your brand colors
- Configure your favicon

**Store Information:**
- Add your store name and contact details
- Set up your social media links
- Configure your store policies

**Payment & Shipping:**
- Ensure payment methods are configured
- Set up shipping zones and rates
- Test the checkout process
    `
  },
  {
    icon: Play,
    title: 'Publish & Launch',
    content: `
1. Preview your theme to ensure everything looks good
2. Click "Publish" to make it live
3. Test your store thoroughly:
   - Browse products
   - Add items to cart
   - Complete a test purchase
4. Monitor your store for the first few days

**Tip:** Keep your old theme as a backup until you're confident everything works perfectly.
    `
  }
]

const requirements = [
  'Shopify store (any plan)',
  'Store administrator access',
  'Basic understanding of Shopify admin',
  'Your branding assets (logo, colors, etc.)'
]

export default function GettingStarted() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-wearly-dark mb-4">
          Getting Started with Wearly
        </h1>
        <p className="text-xl text-wearly-gray-600">
          Follow this step-by-step guide to install and setup your new Shopify theme.
          The entire process should take about 30 minutes.
        </p>
      </div>

      {/* Requirements */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">
          Before You Start
        </h2>
        <ul className="space-y-2">
          {requirements.map((requirement, index) => (
            <li key={index} className="flex items-center text-blue-800">
              <CheckCircle size={16} className="text-blue-600 mr-3 flex-shrink-0" />
              {requirement}
            </li>
          ))}
        </ul>
      </section>

      {/* Installation Steps */}
      <section>
        <h2 className="text-2xl font-bold text-wearly-dark mb-8">
          Installation Steps
        </h2>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-wearly-orange rounded-full flex items-center justify-center">
                  <step.icon size={24} className="text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-wearly-dark mb-4">
                  Step {index + 1}: {step.title}
                </h3>
                <div className="prose prose-wearly max-w-none">
                  {step.content.split('\n').map((line, lineIndex) => {
                    if (line.trim() === '') return <br key={lineIndex} />
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <h4 key={lineIndex} className="font-semibold text-wearly-dark mt-4 mb-2">
                        {line.replace(/\*\*/g, '')}
                      </h4>
                    }
                    if (line.match(/^\d+\./)) {
                      return <p key={lineIndex} className="text-wearly-gray-700 mb-2">{line}</p>
                    }
                    return <p key={lineIndex} className="text-wearly-gray-700 mb-2">{line}</p>
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Tips */}
      <section className="bg-wearly-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-wearly-dark mb-6">
          Pro Tips for Success
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-wearly-dark mb-3">🎨 Design First</h3>
            <p className="text-wearly-gray-600">
              Plan your store's design before installation. Gather your brand colors,
              fonts, and imagery to streamline the setup process.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-wearly-dark mb-3">📱 Test Mobile</h3>
            <p className="text-wearly-gray-600">
              Always test your store on mobile devices. Most customers shop on mobile,
              so ensure everything works perfectly on phones and tablets.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-wearly-dark mb-3">⚡ Performance Matters</h3>
            <p className="text-wearly-gray-600">
              Optimize your images and minimize apps to maintain fast loading speeds.
              Use our performance guidelines for best results.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-wearly-dark mb-3">🔄 Keep Backups</h3>
            <p className="text-wearly-gray-600">
              Always keep a backup of your current theme before making major changes.
              This allows you to quickly revert if needed.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="border-t border-wearly-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-wearly-dark mb-6">
          What's Next?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="/theme-settings"
            className="card hover:border-wearly-orange/30 group"
          >
            <h3 className="font-semibold group-hover:text-wearly-orange transition-colors">
              Configure Theme Settings
            </h3>
            <p className="text-wearly-gray-600 text-sm mt-2">
              Customize colors, typography, and layout options
            </p>
          </a>
          <a
            href="/sections"
            className="card hover:border-wearly-orange/30 group"
          >
            <h3 className="font-semibold group-hover:text-wearly-orange transition-colors">
              Setup Homepage Sections
            </h3>
            <p className="text-wearly-gray-600 text-sm mt-2">
              Add hero banners, featured products, and more
            </p>
          </a>
          <a
            href="/customization"
            className="card hover:border-wearly-orange/30 group"
          >
            <h3 className="font-semibold group-hover:text-wearly-orange transition-colors">
              Advanced Customization
            </h3>
            <p className="text-wearly-gray-600 text-sm mt-2">
              Learn about custom CSS and advanced features
            </p>
          </a>
        </div>
      </section>
    </div>
  )
}