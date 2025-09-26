// Content helper functions for documentation sections

export const getContentForSection = (sectionId) => {
  switch(sectionId) {
    case 'install-wearly-theme':
      return {
        title: 'Install Wearly theme',
        content: `
          <h2 class="text-2xl font-bold mb-4">Install Wearly theme</h2>
          <p class="mb-4">Follow these steps to install the Wearly theme on your Shopify store:</p>
          <ol class="list-decimal list-inside space-y-2 mb-6">
            <li>Download the theme files from your purchase confirmation email</li>
            <li>Log in to your Shopify admin panel</li>
            <li>Navigate to Online Store > Themes</li>
            <li>Click "Upload theme" and select the downloaded ZIP file</li>
            <li>Once uploaded, click "Actions" > "Publish" to make it live</li>
          </ol>
          <div class="bg-orange-50 dark:bg-blue-900 border-l-4 border-orange-400 dark:border-blue-400 p-4 mb-4">
            <p class="text-sm"><strong>Note:</strong> Always backup your current theme before installing a new one.</p>
          </div>
        `
      };
    case 'update-wearly-theme':
      return {
        title: 'Update Wearly theme',
        content: `
          <h2 class="text-2xl font-bold mb-4">Update Wearly theme</h2>
          <p class="mb-4">Keep your theme up to date with the latest features and bug fixes:</p>
          <ol class="list-decimal list-inside space-y-2 mb-6">
            <li>Download the latest version from your account dashboard</li>
            <li>Export your current theme settings (Theme Settings > Export)</li>
            <li>Upload the new theme version</li>
            <li>Import your saved settings</li>
            <li>Test thoroughly before publishing</li>
          </ol>
          <div class="bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 mb-4">
            <p class="text-sm"><strong>Warning:</strong> Custom code modifications may be lost during updates.</p>
          </div>
        `
      };
    case 'theme-license-transfer':
      return {
        title: 'Theme license & Transfer',
        content: `
          <h2 class="text-2xl font-bold mb-4">Theme License & Transfer</h2>
          <p class="mb-4">Understanding your theme license and how to transfer it between stores:</p>
          <h3 class="text-xl font-semibold mb-3">License Information</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Each theme purchase includes a license for one Shopify store</li>
            <li>You can use the theme on development/staging stores</li>
            <li>Commercial use is included in your purchase</li>
            <li>You retain rights to customizations you make</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Transferring Between Stores</h3>
          <ol class="list-decimal list-inside space-y-2 mb-6">
            <li>Export your theme from the current store</li>
            <li>Download the theme file to your computer</li>
            <li>Upload to the new store following installation steps</li>
            <li>Reconfigure theme settings as needed</li>
          </ol>
        `
      };
    case 'announcement-bar':
      return {
        title: 'Announcement Bar',
        content: `
          <h2 class="text-2xl font-bold mb-4">Announcement Bar</h2>
          <p class="mb-4">Display important messages at the top of your site with the announcement bar:</p>
          <h3 class="text-xl font-semibold mb-3">Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Customizable Text:</strong> Add promotional messages, announcements, or important updates</li>
            <li><strong>Link Support:</strong> Make the entire bar clickable or add CTA buttons</li>
            <li><strong>Color Schemes:</strong> Choose from multiple color schemes to match your brand</li>
            <li><strong>Close Button:</strong> Allow customers to dismiss the announcement</li>
            <li><strong>Mobile Responsive:</strong> Automatically adapts to mobile screens</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Configuration</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Navigate to Theme Settings > Announcement Bar</li>
            <li>Enable/disable the announcement bar</li>
            <li>Set the message text and optional link URL</li>
            <li>Choose from available color schemes</li>
            <li>Configure close button behavior</li>
          </ul>
        `
      };
    case 'header':
      return {
        title: 'Header',
        content: `
          <h2 class="text-2xl font-bold mb-4">Header Configuration</h2>
          <p class="mb-4">The header is one of the most important elements of your theme:</p>
          <h3 class="text-xl font-semibold mb-3">Header Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Responsive Design:</strong> Mobile-optimized navigation with hamburger menu</li>
            <li><strong>Logo Support:</strong> Upload your brand logo with customizable sizing</li>
            <li><strong>Navigation Menus:</strong> Support for main navigation and secondary menus</li>
            <li><strong>Search Integration:</strong> Built-in search functionality</li>
            <li><strong>Cart Integration:</strong> Cart icon with item count bubble</li>
            <li><strong>Customer Account:</strong> Login/account links</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Configuration Options</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Logo upload and sizing (recommended: 200px width)</li>
            <li>Navigation menu assignment from your Shopify menus</li>
            <li>Search bar visibility and positioning</li>
            <li>Cart icon style and counter display</li>
            <li>Color scheme selection</li>
            <li>Sticky header behavior</li>
          </ul>
        `
      };
    case 'footer':
      return {
        title: 'Footer',
        content: `
          <h2 class="text-2xl font-bold mb-4">Footer Configuration</h2>
          <p class="mb-4">Configure your site footer with essential information and navigation:</p>
          <h3 class="text-xl font-semibold mb-3">Footer Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Multi-column Layout:</strong> Organize content in up to 4 columns</li>
            <li><strong>Newsletter Signup:</strong> Mailchimp and Klaviyo integration</li>
            <li><strong>Social Media Links:</strong> Connect to all major social platforms</li>
            <li><strong>Payment Icons:</strong> Display accepted payment methods</li>
            <li><strong>Footer Menu:</strong> Additional navigation links</li>
            <li><strong>Copyright Text:</strong> Customizable legal text</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Configuration</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Configure newsletter integration settings</li>
            <li>Add social media profile URLs</li>
            <li>Select payment method icons to display</li>
            <li>Set up footer navigation menus</li>
            <li>Customize copyright and legal text</li>
            <li>Choose footer color scheme</li>
          </ul>
        `
      };
    case 'cart-drawer':
      return {
        title: 'Cart Drawer',
        content: `
          <h2 class="text-2xl font-bold mb-4">Cart Drawer</h2>
          <p class="mb-4">The cart drawer provides a seamless shopping experience without leaving the current page:</p>
          <h3 class="text-xl font-semibold mb-3">Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Slide-out Panel:</strong> Opens from the right side of the screen</li>
            <li><strong>Real-time Updates:</strong> Automatically updates when items are added</li>
            <li><strong>Product Details:</strong> Shows product images, titles, and variants</li>
            <li><strong>Quantity Controls:</strong> Increase/decrease quantities directly in drawer</li>
            <li><strong>Quick Checkout:</strong> Proceed to checkout without page reload</li>
            <li><strong>Empty State:</strong> Helpful messaging and continue shopping link</li>
            <li><strong>Customer Login:</strong> Optional login prompts for registered customers</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Configuration</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Enable/disable cart drawer functionality</li>
            <li>Configure color scheme to match your brand</li>
            <li>Set up related product recommendations</li>
            <li>Customize empty cart messaging</li>
            <li>Configure customer account integration</li>
          </ul>
          <div class="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-400 p-4 mb-4">
            <p class="text-sm"><strong>Technical Note:</strong> The cart drawer uses custom JavaScript for smooth animations and AJAX functionality.</p>
          </div>
        `
      };
    case 'cart-notification':
      return {
        title: 'Cart Notification',
        content: `
          <h2 class="text-2xl font-bold mb-4">Cart Notification</h2>
          <p class="mb-4">Show customers a confirmation when items are successfully added to their cart:</p>
          <h3 class="text-xl font-semibold mb-3">Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Product Preview:</strong> Shows added product image and details</li>
            <li><strong>Variant Information:</strong> Displays selected size, color, and other options</li>
            <li><strong>Quantity Confirmation:</strong> Shows how many items were added</li>
            <li><strong>Cart Total:</strong> Updated cart total and item count</li>
            <li><strong>Action Buttons:</strong> Continue shopping or view cart options</li>
            <li><strong>Auto-dismiss:</strong> Notification automatically fades after a few seconds</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Customization</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Enable/disable cart notifications</li>
            <li>Customize notification display duration</li>
            <li>Configure notification positioning</li>
            <li>Set up color scheme and styling</li>
            <li>Customize button text and actions</li>
          </ul>
        `
      };
    case 'general':
      return {
        title: 'General Settings',
        content: `
          <h2 class="text-2xl font-bold mb-4">General Theme Settings</h2>
          <p class="mb-4">Configure basic theme options and global settings:</p>
          <h3 class="text-xl font-semibold mb-3">Site Identity</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Logo Upload:</strong> SVG, PNG, or JPG formats supported (recommended: 200px width)</li>
            <li><strong>Logo Width:</strong> Adjustable from 50px to 300px</li>
            <li><strong>Favicon:</strong> Browser tab icon (32x32px recommended)</li>
            <li><strong>Brand Colors:</strong> Primary and secondary color selection</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Layout Options</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Page Width:</strong> 1000px to 1600px (default: 1200px)</li>
            <li><strong>Section Spacing:</strong> Control gaps between page sections</li>
            <li><strong>Border Radius:</strong> Rounded corners for buttons and cards</li>
            <li><strong>Shadow Intensity:</strong> Depth effects for elevated elements</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Performance</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Image Optimization:</strong> Automatic WebP conversion</li>
            <li><strong>Lazy Loading:</strong> Improve page load times</li>
            <li><strong>CSS Minification:</strong> Reduced file sizes</li>
          </ul>
        `
      };
    case 'colors':
      return {
        title: 'Colors',
        content: `
          <h2 class="text-2xl font-bold mb-4">Color Settings</h2>
          <p class="mb-4">Customize your theme's color palette to match your brand:</p>
          <h3 class="text-xl font-semibold mb-3">Color Schemes</h3>
          <div class="space-y-4 mb-6">
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">Background Colors</h4>
              <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Page background</li>
                <li>Section backgrounds</li>
                <li>Card backgrounds</li>
                <li>Overlay colors</li>
              </ul>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">Text Colors</h4>
              <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Primary text color</li>
                <li>Secondary text color</li>
                <li>Link colors and hover states</li>
                <li>Heading colors</li>
              </ul>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">Button Colors</h4>
              <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Primary button background and text</li>
                <li>Secondary button styles</li>
                <li>Button hover states</li>
                <li>Border and outline colors</li>
              </ul>
            </div>
          </div>
          <h3 class="text-xl font-semibold mb-3">Color Accessibility</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>All color combinations meet WCAG AA contrast requirements</li>
            <li>Colors are tested for colorblind accessibility</li>
            <li>High contrast mode support</li>
          </ul>
        `
      };
    case 'typography':
      return {
        title: 'Typography',
        content: `
          <h2 class="text-2xl font-bold mb-4">Typography Settings</h2>
          <p class="mb-4">Configure fonts and text styles throughout your theme:</p>
          <h3 class="text-xl font-semibold mb-3">Font Selection</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Headings Font:</strong> Choose from 50+ Google Fonts or system fonts</li>
            <li><strong>Body Font:</strong> Separate font selection for body text</li>
            <li><strong>Font Weights:</strong> Light, Regular, Medium, Bold, Extra Bold</li>
            <li><strong>Font Loading:</strong> Optimized for performance with font display swap</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Typography Scale</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Heading Scale:</strong> 100% to 150% size adjustment</li>
            <li><strong>Body Scale:</strong> 100% to 130% size adjustment</li>
            <li><strong>Line Height:</strong> Automatic optimal spacing based on font</li>
            <li><strong>Letter Spacing:</strong> Fine-tune character spacing</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Responsive Typography</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Automatic scaling for mobile devices</li>
            <li>Optimized reading experience across screen sizes</li>
            <li>Maintained readability and accessibility</li>
          </ul>
        `
      };
    case 'product-page':
      return {
        title: 'Product Page',
        content: `
          <h2 class="text-2xl font-bold mb-4">Product Page Configuration</h2>
          <p class="mb-4">Optimize your product pages for maximum conversions:</p>
          <h3 class="text-xl font-semibold mb-3">Layout Options</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Gallery Position:</strong> Left, right, or centered product images</li>
            <li><strong>Image Zoom:</strong> Hover zoom or click-to-enlarge lightbox</li>
            <li><strong>Thumbnail Style:</strong> Vertical, horizontal, or dot navigation</li>
            <li><strong>Mobile Layout:</strong> Optimized stacking for touch devices</li>
            <li><strong>Video Support:</strong> Product videos in gallery</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Product Information</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Dynamic Pricing:</strong> Shows regular, sale, and unit pricing</li>
            <li><strong>Inventory Tracking:</strong> Stock level indicators and low stock warnings</li>
            <li><strong>Variant Selection:</strong> Color swatches, dropdown, or button styles</li>
            <li><strong>Product Reviews:</strong> Integrated review system with ratings</li>
            <li><strong>Size Guides:</strong> Modal popups with sizing information</li>
            <li><strong>Social Sharing:</strong> Share on Facebook, Twitter, Pinterest</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Additional Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Related product recommendations</li>
            <li>Recently viewed products</li>
            <li>Product tabs for descriptions, shipping, etc.</li>
            <li>Trust badges and security seals</li>
          </ul>
        `
      };
    case 'collection-page':
      return {
        title: 'Collection Page',
        content: `
          <h2 class="text-2xl font-bold mb-4">Collection Page Settings</h2>
          <p class="mb-4">Configure how your product collections are displayed and organized:</p>
          <h3 class="text-xl font-semibold mb-3">Layout and Grid</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Grid Columns:</strong> 2, 3, 4, or 5 columns on desktop</li>
            <li><strong>Products Per Page:</strong> 12, 24, 48, or 96 items</li>
            <li><strong>Pagination Style:</strong> Page numbers or "Load more" button</li>
            <li><strong>Image Aspect Ratio:</strong> Square, portrait, landscape, or natural</li>
            <li><strong>Mobile Grid:</strong> 1 or 2 columns on mobile devices</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Filtering and Sorting</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Advanced Filters:</strong> Filter by price, size, color, brand, availability</li>
            <li><strong>Sort Options:</strong> Price (low to high/high to low), popularity, newest, A-Z</li>
            <li><strong>Filter Layout:</strong> Sidebar, dropdown, or drawer options</li>
            <li><strong>Search Within:</strong> Search functionality within collections</li>
            <li><strong>Active Filters:</strong> Clear individual or all filters</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Collection Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Collection banner with description</li>
            <li>Quick add to cart functionality</li>
            <li>Product badges (sale, new, bestseller)</li>
            <li>Hover effects and animations</li>
          </ul>
        `
      };
    case 'wearly-image-banner':
      return {
        title: 'Wearly Image Banner',
        content: `
          <h2 class="text-2xl font-bold mb-4">Wearly Image Banner</h2>
          <p class="mb-4">Create stunning hero sections with the custom Wearly Image Banner section:</p>
          <h3 class="text-xl font-semibold mb-3">Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Responsive Images:</strong> Separate images for desktop and mobile</li>
            <li><strong>Overlay Controls:</strong> Adjustable overlay opacity for text readability</li>
            <li><strong>Content Positioning:</strong> Left, center, right, or custom positioning</li>
            <li><strong>Call-to-Action:</strong> Customizable button with styling options</li>
            <li><strong>Height Options:</strong> Small (400px), Medium (500px), Large (600px), or adapt to image</li>
            <li><strong>Animation Effects:</strong> Parallax, zoom, and slide animations</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Content Options</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Heading:</strong> Main title with size and color controls</li>
            <li><strong>Subheading:</strong> Secondary text with formatting options</li>
            <li><strong>Button:</strong> Custom text, URL, and styling</li>
            <li><strong>Text Alignment:</strong> Left, center, or right alignment</li>
          </ul>
          <div class="bg-green-50 dark:bg-green-900 border-l-4 border-green-400 p-4 mb-4">
            <p class="text-sm"><strong>Pro Tip:</strong> Use high-quality images (1920px width) for best results across all devices.</p>
          </div>
        `
      };
    case 'wearly-testimonials':
      return {
        title: 'Wearly Testimonials',
        content: `
          <h2 class="text-2xl font-bold mb-4">Wearly Testimonials</h2>
          <p class="mb-4">Build trust and credibility with customer testimonials:</p>
          <h3 class="text-xl font-semibold mb-3">Display Options</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Layout Styles:</strong> Carousel slider or static grid layout</li>
            <li><strong>Grid Columns:</strong> 1, 2, or 3 testimonials per row</li>
            <li><strong>Star Ratings:</strong> 5-star rating system display</li>
            <li><strong>Customer Photos:</strong> Profile images for social proof</li>
            <li><strong>Auto-rotation:</strong> Automatic testimonial rotation with pause on hover</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Content Management</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Unlimited Testimonials:</strong> Add as many testimonials as needed</li>
            <li><strong>Rich Text:</strong> Format testimonial text with emphasis and quotes</li>
            <li><strong>Customer Details:</strong> Name, location, and profile image</li>
            <li><strong>Rating System:</strong> 1-5 star ratings for each testimonial</li>
            <li><strong>Custom Styling:</strong> Colors, typography, and spacing options</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Social Proof Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Schema markup for SEO benefits</li>
            <li>Social media integration</li>
            <li>Review platform imports (coming soon)</li>
          </ul>
        `
      };
    case 'wearly-trust-row':
      return {
        title: 'Wearly Trust Row',
        content: `
          <h2 class="text-2xl font-bold mb-4">Wearly Trust Row</h2>
          <p class="mb-4">Display trust badges and security certifications to build customer confidence:</p>
          <h3 class="text-xl font-semibold mb-3">Trust Elements</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Security Badges:</strong> SSL, security seals, and certifications</li>
            <li><strong>Payment Methods:</strong> Visa, MasterCard, PayPal, Apple Pay, and more</li>
            <li><strong>Guarantees:</strong> Money-back, satisfaction, and warranty badges</li>
            <li><strong>Service Badges:</strong> Free shipping, 24/7 support, easy returns</li>
            <li><strong>Awards:</strong> Industry recognition and trust seals</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Display Options</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Layout:</strong> Horizontal row or grid layout</li>
            <li><strong>Alignment:</strong> Left, center, right, or justified</li>
            <li><strong>Mobile Behavior:</strong> Scrollable row or stacked layout</li>
            <li><strong>Badge Sizing:</strong> Small, medium, or large badge sizes</li>
            <li><strong>Spacing:</strong> Adjustable gaps between badges</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Customization</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Upload custom trust badges and logos</li>
            <li>Link badges to relevant pages or external sites</li>
            <li>Color scheme and background options</li>
            <li>Show/hide section on specific pages</li>
          </ul>
        `
      };
    case 'wearly-icon-features':
      return {
        title: 'Wearly Icon Features',
        content: `
          <h2 class="text-2xl font-bold mb-4">Wearly Icon Features</h2>
          <p class="mb-4">Highlight key product or service features with attractive icon blocks:</p>
          <h3 class="text-xl font-semibold mb-3">Layout Options</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Grid Layout:</strong> 2, 3, or 4 features per row</li>
            <li><strong>Icon Position:</strong> Above, left, or right of text content</li>
            <li><strong>Alignment:</strong> Left, center, or right text alignment</li>
            <li><strong>Mobile Layout:</strong> Responsive stacking for mobile devices</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Content Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Custom Icons:</strong> Upload SVG or PNG icons, or use built-in icon library</li>
            <li><strong>Feature Title:</strong> Prominent heading for each feature</li>
            <li><strong>Description Text:</strong> Supporting text with formatting options</li>
            <li><strong>Optional Links:</strong> Make features clickable to relevant pages</li>
            <li><strong>Icon Styling:</strong> Size, color, and background options</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Popular Use Cases</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Free shipping and return policies</li>
            <li>Product quality and certifications</li>
            <li>Customer service features</li>
            <li>Security and privacy assurances</li>
            <li>Unique selling propositions</li>
          </ul>
        `
      };
    case 'wearly-contact-faq':
      return {
        title: 'Wearly Contact & FAQ',
        content: `
          <h2 class="text-2xl font-bold mb-4">Wearly Contact & FAQ</h2>
          <p class="mb-4">Provide customer support with an integrated contact form and FAQ section:</p>
          <h3 class="text-xl font-semibold mb-3">Contact Form Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Custom Fields:</strong> Name, email, subject, message, and custom fields</li>
            <li><strong>Validation:</strong> Client-side and server-side form validation</li>
            <li><strong>Spam Protection:</strong> Built-in honeypot and reCAPTCHA support</li>
            <li><strong>Email Integration:</strong> Sends to your preferred email address</li>
            <li><strong>Success Messages:</strong> Customizable confirmation messages</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">FAQ Section</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Accordion Style:</strong> Collapsible questions and answers</li>
            <li><strong>Search Function:</strong> Allow customers to search FAQs</li>
            <li><strong>Categories:</strong> Organize FAQs by topic or category</li>
            <li><strong>Rich Content:</strong> Support for images, links, and formatting</li>
            <li><strong>SEO Optimized:</strong> Schema markup for FAQ structured data</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Layout Options</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Side-by-side contact form and FAQ</li>
            <li>Stacked layout with contact form first</li>
            <li>FAQ-only mode without contact form</li>
            <li>Contact-only mode without FAQ</li>
          </ul>
        `
      };
    case 'wearly-collection-grid':
      return {
        title: 'Wearly Collection Grid',
        content: `
          <h2 class="text-2xl font-bold mb-4">Wearly Collection Grid</h2>
          <p class="mb-4">Showcase your product collections in an attractive grid layout:</p>
          <h3 class="text-xl font-semibold mb-3">Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Collection Cards:</strong> Beautiful collection cards with images and titles</li>
            <li><strong>Custom Badges:</strong> Add promotional badges (New, Sale, Offer, etc.)</li>
            <li><strong>Grid Layout:</strong> Responsive grid that adapts to different screen sizes</li>
            <li><strong>Custom Titles:</strong> Override collection names with custom titles</li>
            <li><strong>Hover Effects:</strong> Smooth animations and transitions</li>
            <li><strong>Mobile Optimized:</strong> Perfect display on all device sizes</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Configuration</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Select collections to display from your Shopify collections</li>
            <li>Set custom titles for each collection card</li>
            <li>Add promotional badges with custom text and colors</li>
            <li>Configure grid columns (2, 3, or 4 columns)</li>
            <li>Adjust spacing and visual styling</li>
            <li>Set up click actions and linking</li>
          </ul>
          <div class="bg-purple-50 dark:bg-purple-900 border-l-4 border-purple-400 p-4 mb-4">
            <p class="text-sm"><strong>Use Case:</strong> Perfect for homepage collection showcases or dedicated collection listing pages.</p>
          </div>
        `
      };
    case 'wearly-breadcrumbs':
      return {
        title: 'Wearly Breadcrumbs',
        content: `
          <h2 class="text-2xl font-bold mb-4">Wearly Breadcrumbs</h2>
          <p class="mb-4">Improve navigation with SEO-friendly breadcrumb navigation:</p>
          <h3 class="text-xl font-semibold mb-3">Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Automatic Generation:</strong> Breadcrumbs automatically generated based on page hierarchy</li>
            <li><strong>SEO Structured Data:</strong> Built-in schema markup for search engines</li>
            <li><strong>Text Truncation:</strong> Configurable word limits for long collection/product names</li>
            <li><strong>Uppercase Option:</strong> Toggle between normal case and uppercase display</li>
            <li><strong>Custom Styling:</strong> Match your theme's color scheme</li>
            <li><strong>Mobile Responsive:</strong> Optimized display for mobile devices</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Configuration Options</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Color Scheme:</strong> Choose from available theme color schemes</li>
            <li><strong>Padding:</strong> Adjust top and bottom spacing (10-50px)</li>
            <li><strong>Text Style:</strong> Normal case or uppercase display</li>
            <li><strong>Word Truncation:</strong> Limit long names (5-20 words)</li>
            <li><strong>Structured Data:</strong> Enable/disable SEO schema markup</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">SEO Benefits</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Improves search engine understanding of site structure</li>
            <li>Enhanced rich snippets in search results</li>
            <li>Better user experience and navigation</li>
            <li>Reduces bounce rate by improving navigation clarity</li>
          </ul>
        `
      };
    case 'blog-page':
      return {
        title: 'Blog Page',
        content: `
          <h2 class="text-2xl font-bold mb-4">Blog Page Configuration</h2>
          <p class="mb-4">Configure your blog listing page for optimal content presentation:</p>
          <h3 class="text-xl font-semibold mb-3">Layout Options</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Grid Layout:</strong> Display blog posts in a responsive grid</li>
            <li><strong>Featured Images:</strong> Show/hide post featured images</li>
            <li><strong>Image Height:</strong> Small, medium, or large image display</li>
            <li><strong>Post Meta:</strong> Display publish date, author, and tags</li>
            <li><strong>Excerpt Length:</strong> Configure post preview text length</li>
            <li><strong>Read More Links:</strong> Customizable "Continue reading" buttons</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Blog Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Breadcrumb Navigation:</strong> Automatic breadcrumb generation</li>
            <li><strong>Trust Row Integration:</strong> Display trust badges below blog posts</li>
            <li><strong>Social Sharing:</strong> Share buttons for each blog post</li>
            <li><strong>Category Filtering:</strong> Filter posts by tags or categories</li>
            <li><strong>Search Functionality:</strong> Search within blog posts</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">SEO Optimization</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Automatic meta descriptions from post excerpts</li>
            <li>Structured data for blog posts and articles</li>
            <li>Optimized URLs and canonical tags</li>
            <li>Social media Open Graph tags</li>
          </ul>
        `
      };
    case 'contact-page':
      return {
        title: 'Contact Page',
        content: `
          <h2 class="text-2xl font-bold mb-4">Contact Page</h2>
          <p class="mb-4">Create a comprehensive contact page with multiple ways for customers to reach you:</p>
          <h3 class="text-xl font-semibold mb-3">Page Components</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Breadcrumb Navigation:</strong> Clear navigation path for users</li>
            <li><strong>Contact & FAQ Section:</strong> Combined form and frequently asked questions</li>
            <li><strong>Contact Information:</strong> Display business hours, address, phone numbers</li>
            <li><strong>Map Integration:</strong> Embedded Google Maps for physical locations</li>
            <li><strong>Social Media Links:</strong> Connect customers to your social channels</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Contact Form Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Required Fields:</strong> Name, email, subject, and message</li>
            <li><strong>Custom Fields:</strong> Add additional fields as needed</li>
            <li><strong>Form Validation:</strong> Real-time validation and error messages</li>
            <li><strong>Spam Protection:</strong> Built-in protection against spam submissions</li>
            <li><strong>Email Notifications:</strong> Automatic email alerts for new submissions</li>
            <li><strong>Success Messages:</strong> Customizable thank you messages</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">FAQ Integration</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Common questions about shipping and returns</li>
            <li>Product information and sizing guides</li>
            <li>Order tracking and account issues</li>
            <li>Collapsible accordion-style answers</li>
          </ul>
        `
      };
    case 'about-page':
      return {
        title: 'About Page',
        content: `
          <h2 class="text-2xl font-bold mb-4">About Page</h2>
          <p class="mb-4">Tell your brand story with a compelling about page that builds trust and connection:</p>
          <h3 class="text-xl font-semibold mb-3">Page Structure</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Hero Banner:</strong> Eye-catching image banner with your brand message</li>
            <li><strong>Brand Story:</strong> Rich text sections to tell your company history</li>
            <li><strong>Mission & Values:</strong> Icon features highlighting your core principles</li>
            <li><strong>Team Section:</strong> Showcase team members and their roles</li>
            <li><strong>Testimonials:</strong> Customer reviews and success stories</li>
            <li><strong>Trust Elements:</strong> Certifications, awards, and guarantees</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Content Sections</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Breadcrumb Navigation:</strong> Clear page hierarchy</li>
            <li><strong>Image Banner:</strong> Hero section with overlay text and CTAs</li>
            <li><strong>Icon Features:</strong> Mission, values, and key differentiators</li>
            <li><strong>Rich Text:</strong> Detailed company information and story</li>
            <li><strong>Image Gallery:</strong> Behind-the-scenes photos and team images</li>
            <li><strong>Call-to-Action:</strong> Links to products, contact, or newsletter signup</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Customization Options</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Custom color schemes to match brand identity</li>
            <li>Flexible content blocks for unique storytelling</li>
            <li>Mobile-optimized layout and typography</li>
            <li>SEO-optimized content structure</li>
          </ul>
        `
      };
    case 'customer-help':
      return {
        title: 'Customer Help Page',
        content: `
          <h2 class="text-2xl font-bold mb-4">Customer Help Page</h2>
          <p class="mb-4">Provide comprehensive self-service support with a dedicated help center:</p>
          <h3 class="text-xl font-semibold mb-3">Help Center Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>FAQ Categories:</strong> Organized help topics (Orders, Shipping, Returns, etc.)</li>
            <li><strong>Search Functionality:</strong> Quick search through all help articles</li>
            <li><strong>Popular Articles:</strong> Most viewed and helpful content</li>
            <li><strong>Contact Options:</strong> Multiple ways to reach customer service</li>
            <li><strong>Order Tracking:</strong> Links to order status and tracking</li>
            <li><strong>Account Management:</strong> Help with account creation and management</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Content Organization</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Shipping & Delivery:</strong> Delivery times, costs, and tracking info</li>
            <li><strong>Returns & Exchanges:</strong> Return policies and process instructions</li>
            <li><strong>Size Guides:</strong> Detailed sizing charts and fit information</li>
            <li><strong>Product Care:</strong> Washing, care, and maintenance instructions</li>
            <li><strong>Payment & Billing:</strong> Payment methods and billing questions</li>
            <li><strong>Technical Support:</strong> Website and account troubleshooting</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">User Experience</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Intuitive navigation with breadcrumbs</li>
            <li>Mobile-friendly responsive design</li>
            <li>Quick access to live chat or contact forms</li>
            <li>Related articles and suggestions</li>
            <li>Feedback system for article helpfulness</li>
          </ul>
        `
      };
    case 'search-page':
      return {
        title: 'Search Page',
        content: `
          <h2 class="text-2xl font-bold mb-4">Search Page</h2>
          <p class="mb-4">Help customers find exactly what they're looking for with powerful search functionality:</p>
          <h3 class="text-xl font-semibold mb-3">Search Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Product Search:</strong> Search through all products by title, description, and tags</li>
            <li><strong>Predictive Search:</strong> Auto-suggestions as customers type</li>
            <li><strong>Search Filters:</strong> Filter results by price, brand, category, availability</li>
            <li><strong>Sort Options:</strong> Sort by relevance, price, popularity, newest</li>
            <li><strong>Search History:</strong> Save recent searches for quick access</li>
            <li><strong>No Results Handling:</strong> Helpful suggestions when no products found</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Results Display</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Grid/List View:</strong> Toggle between grid and list result layouts</li>
            <li><strong>Product Cards:</strong> Display product images, titles, prices, and reviews</li>
            <li><strong>Quick View:</strong> Preview products without leaving search results</li>
            <li><strong>Pagination:</strong> Navigate through multiple pages of results</li>
            <li><strong>Results Count:</strong> Show total number of matching products</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Search Optimization</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Fuzzy search for typos and misspellings</li>
            <li>Synonym recognition and smart matching</li>
            <li>Search analytics and popular terms tracking</li>
            <li>SEO-friendly search result URLs</li>
            <li>Mobile-optimized search interface</li>
          </ul>
        `
      };
    case '404-page':
      return {
        title: '404 Error Page',
        content: `
          <h2 class="text-2xl font-bold mb-4">404 Error Page</h2>
          <p class="mb-4">Create a helpful 404 page that keeps visitors engaged when they encounter broken links:</p>
          <h3 class="text-xl font-semibold mb-3">Page Elements</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Clear Error Message:</strong> Friendly explanation that the page wasn't found</li>
            <li><strong>Search Functionality:</strong> Help users find what they were looking for</li>
            <li><strong>Popular Products:</strong> Showcase bestselling or featured products</li>
            <li><strong>Navigation Links:</strong> Quick links to main categories and pages</li>
            <li><strong>Contact Information:</strong> Easy way to report broken links or get help</li>
            <li><strong>Brand Consistency:</strong> Maintain your site's design and tone</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">User Experience</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Helpful Tone:</strong> Friendly, non-technical error messaging</li>
            <li><strong>Clear Actions:</strong> Obvious next steps for users to take</li>
            <li><strong>Quick Recovery:</strong> Easy paths back to shopping</li>
            <li><strong>Visual Appeal:</strong> Engaging design that matches your brand</li>
            <li><strong>Mobile Friendly:</strong> Optimized for all device sizes</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">SEO Considerations</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Proper 404 HTTP status code returned</li>
            <li>Custom 404 page instead of browser default</li>
            <li>Internal linking to important pages</li>
            <li>Analytics tracking for broken link monitoring</li>
          </ul>
        `
      };
    case 'article-page':
      return {
        title: 'Article Page',
        content: `
          <h2 class="text-2xl font-bold mb-4">Article Page (Blog Post)</h2>
          <p class="mb-4">Configure individual blog post pages for optimal reading experience and engagement:</p>
          <h3 class="text-xl font-semibold mb-3">Article Layout</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Breadcrumb Navigation:</strong> Clear navigation path back to blog listing</li>
            <li><strong>Featured Image:</strong> Eye-catching hero image with overlay text support</li>
            <li><strong>Article Meta:</strong> Author, publish date, reading time, and tags</li>
            <li><strong>Social Sharing:</strong> Share buttons for major social platforms</li>
            <li><strong>Typography:</strong> Optimized reading experience with proper line height</li>
            <li><strong>Trust Row:</strong> Trust badges at bottom of articles</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Content Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Rich Text Editor:</strong> Full WYSIWYG editor with formatting options</li>
            <li><strong>Image Support:</strong> Inline images with captions and alt text</li>
            <li><strong>Video Embedding:</strong> YouTube, Vimeo, and direct video support</li>
            <li><strong>Code Blocks:</strong> Syntax highlighting for code snippets</li>
            <li><strong>Table of Contents:</strong> Auto-generated TOC for long articles</li>
            <li><strong>Related Posts:</strong> Automatic suggestions based on tags</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">Engagement Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Comment System:</strong> Built-in or third-party comment integration</li>
            <li><strong>Newsletter Signup:</strong> End-of-article subscription forms</li>
            <li><strong>Author Bio:</strong> Author information and social links</li>
            <li><strong>Reading Progress:</strong> Visual reading progress indicator</li>
          </ul>
          <h3 class="text-xl font-semibold mb-3">SEO Optimization</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li>Structured data for articles and authors</li>
            <li>Automatic meta descriptions and social tags</li>
            <li>Canonical URLs and proper heading structure</li>
            <li>Image optimization and lazy loading</li>
          </ul>
        `
      };
    case 'mega-menu-setup':
      return {
        title: 'Mega Menu Setup',
        content: `
          <h2 class="text-2xl font-bold mb-4">How to Setup Mega Menu</h2>
          <p class="mb-4">Create powerful navigation experiences with Wearly's mega menu functionality:</p>

          <h3 class="text-xl font-semibold mb-3">Step 1: Create Navigation Menu</h3>
          <ol class="list-decimal list-inside space-y-2 mb-6">
            <li>Go to <strong>Shopify Admin > Online Store > Navigation</strong></li>
            <li>Click <strong>"Create menu"</strong> or edit existing menu</li>
            <li>Add your main categories as top-level menu items</li>
            <li>For each main category, click <strong>"Add menu item"</strong> to add subcategories</li>
            <li>Continue adding sub-items to create multi-level navigation</li>
            <li>Save your menu structure</li>
          </ol>

          <h3 class="text-xl font-semibold mb-3">Step 2: Configure Header Settings</h3>
          <ol class="list-decimal list-inside space-y-2 mb-6">
            <li>Navigate to <strong>Theme Customizer > Header</strong></li>
            <li>In the <strong>"Menu"</strong> dropdown, select your created navigation menu</li>
            <li>Enable <strong>"Show mega menu"</strong> option</li>
            <li>Configure mega menu display settings</li>
            <li>Set hover delay and animation preferences</li>
            <li>Save your changes</li>
          </ol>

          <h3 class="text-xl font-semibold mb-3">Step 3: Mega Menu Features</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Multi-Column Layout:</strong> Automatically organizes sub-items into columns</li>
            <li><strong>Featured Products:</strong> Showcase products within navigation</li>
            <li><strong>Category Images:</strong> Add visual appeal with collection images</li>
            <li><strong>Promotional Banners:</strong> Include promotional content in menus</li>
            <li><strong>Rich Text Content:</strong> Add descriptions and promotional text</li>
            <li><strong>Custom Links:</strong> Link to any page, collection, or external URL</li>
          </ul>

          <h3 class="text-xl font-semibold mb-3">Advanced Configuration</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Menu Item Limits:</strong> Supports up to 50 items per menu level</li>
            <li><strong>Mobile Behavior:</strong> Automatically converts to accordion on mobile</li>
            <li><strong>Hover vs Click:</strong> Configure activation method (hover/click)</li>
            <li><strong>Animation Speed:</strong> Customize fade-in and slide animations</li>
            <li><strong>Custom CSS:</strong> Add custom styling for unique appearance</li>
          </ul>

          <h3 class="text-xl font-semibold mb-3">Best Practices</h3>
          <div class="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4 mb-6">
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li><strong>Keep it organized:</strong> Limit to 7±2 main categories</li>
              <li><strong>Use clear labels:</strong> Make navigation intuitive and descriptive</li>
              <li><strong>Test on mobile:</strong> Ensure touch-friendly navigation</li>
              <li><strong>Include search:</strong> Add search functionality for large catalogs</li>
              <li><strong>Monitor analytics:</strong> Track which menu items are most used</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3">Troubleshooting</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Menu not appearing:</strong> Check if menu is assigned in header settings</li>
            <li><strong>Items missing:</strong> Verify menu items are published and visible</li>
            <li><strong>Mobile issues:</strong> Clear browser cache and test on different devices</li>
            <li><strong>Styling problems:</strong> Check theme customizer settings and custom CSS</li>
          </ul>
        `
      };
    case 'home':
    default:
      return {
        title: 'Welcome to Wearly Theme Documentation',
        content: `
          <h1 class="text-3xl font-bold text-center mb-6">Wearly Theme Documentation</h1>
          <p class="text-lg mb-6 text-center">Complete documentation for the Shopify Wearly theme - setup, customization, and advanced features.</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 class="text-xl font-semibold mb-3">🚀 Getting Started</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Learn how to install and set up your Wearly theme.</p>
              <a href="/docs/install-wearly-theme" class="text-orange-600 dark:text-blue-400 font-medium hover:underline">
                View installation guide →
              </a>
            </div>

            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 class="text-xl font-semibold mb-3">🎨 Customization</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Customize colors, fonts, layouts and more.</p>
              <a href="/docs/colors" class="text-orange-600 dark:text-blue-400 font-medium hover:underline">
                Explore theme settings →
              </a>
            </div>

            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 class="text-xl font-semibold mb-3">📱 Sections</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Learn about all available theme sections.</p>
              <a href="/docs/wearly-image-banner" class="text-orange-600 dark:text-blue-400 font-medium hover:underline">
                Browse sections →
              </a>
            </div>

            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 class="text-xl font-semibold mb-3">❓ Support</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Get help with common issues and questions.</p>
              <a href="mailto:info@softiustech.com?subject=Wearly Theme FAQ Request" class="text-orange-600 dark:text-blue-400 font-medium hover:underline">
                Contact Support →
              </a>
            </div>
          </div>

          <div class="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-2">Need Help?</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">If you can't find what you're looking for, don't hesitate to reach out to our support team.</p>
            <a href="mailto:info@softiustech.com?subject=Wearly Theme Support Request" class="inline-block bg-orange-600 dark:bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-700 dark:hover:bg-blue-700 transition-colors">
              Contact Support
            </a>
          </div>
        `
      };
    case 'product-grid-setup':
      return {
        title: 'Product Grid Setup',
        content: `
          <h2 class="text-2xl font-bold mb-4">How to Setup Product Grid</h2>
          <p class="mb-4">Learn how to configure and customize product grids, including the popular "Our Latest Products" section:</p>

          <h3 class="text-xl font-semibold mb-3">Adding Product Grid Section</h3>
          <ol class="list-decimal list-inside space-y-2 mb-6">
            <li>Navigate to <strong>Theme Customizer > Home page</strong></li>
            <li>Click <strong>"Add section"</strong></li>
            <li>Select <strong>"Featured collection"</strong> or <strong>"Collection list"</strong></li>
            <li>Choose your desired collection (e.g., "Latest Products", "Featured", etc.)</li>
            <li>Configure the display settings</li>
          </ol>

          <h3 class="text-xl font-semibold mb-3">Grid Configuration Options</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Products per row:</strong> Choose 2, 3, 4, or 5 products per row</li>
            <li><strong>Products to show:</strong> Set maximum number of products (4, 8, 12, 16, etc.)</li>
            <li><strong>Product information:</strong> Show/hide vendor, price, reviews, etc.</li>
            <li><strong>Product badges:</strong> Display sale, new, or custom badges</li>
            <li><strong>Quick view:</strong> Enable quick view modal for products</li>
            <li><strong>Add to cart:</strong> Show add to cart button on product cards</li>
          </ul>

          <h3 class="text-xl font-semibold mb-3">Collection Setup</h3>
          <ol class="list-decimal list-inside space-y-2 mb-6">
            <li>Go to <strong>Shopify Admin > Products > Collections</strong></li>
            <li>Create or edit collection (e.g., "Latest Products")</li>
            <li>Set collection conditions:
              <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
                <li><strong>Manual:</strong> Manually select specific products</li>
                <li><strong>Automated:</strong> Use tags, vendor, price, or publish date</li>
                <li><strong>For "Latest":</strong> Use "Product publish date" > "is after" > specific date</li>
              </ul>
            </li>
            <li>Set sort order (manually, best selling, date created, etc.)</li>
            <li>Save collection</li>
          </ol>

          <h3 class="text-xl font-semibold mb-3">Styling Options</h3>
          <div class="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-400 p-4 mb-6">
            <p class="text-sm"><strong>Grid Layout Styles:</strong></p>
            <ul class="list-disc list-inside mt-2 space-y-1 text-sm">
              <li><strong>Standard Grid:</strong> Equal height cards with consistent spacing</li>
              <li><strong>Masonry Layout:</strong> Pinterest-style layout with varying heights</li>
              <li><strong>Carousel/Slider:</strong> Horizontal scrolling product carousel</li>
              <li><strong>List View:</strong> Products displayed in list format</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3">Advanced Customization</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Custom CSS:</strong> Add custom styling for unique appearance</li>
            <li><strong>Product Card Templates:</strong> Modify product card layouts</li>
            <li><strong>Hover Effects:</strong> Add image zoom, quick view, or overlay effects</li>
            <li><strong>Loading Animation:</strong> Configure lazy loading and fade-in effects</li>
            <li><strong>Filter Integration:</strong> Add product filters and search</li>
          </ul>

          <div class="bg-green-50 dark:bg-green-900 border-l-4 border-green-400 p-4">
            <p class="text-sm"><strong>Pro Tip:</strong> For "Our Latest Products", create an automated collection using "Product publish date is after [30 days ago]" to always show the newest products automatically.</p>
          </div>
        `
      };
    case 'sub-collection-setup':
      return {
        title: 'Sub Collection Setup',
        content: `
          <h2 class="text-2xl font-bold mb-4">How to Setup Sub Collections</h2>
          <p class="mb-4">The Wearly theme includes built-in sub-collection functionality. You just need to create the meta field and add collections to display them on collection pages:</p>

          <div class="bg-green-50 dark:bg-green-900 border-l-4 border-green-400 p-4 mb-6">
            <p class="text-sm"><strong>Note:</strong> The theme code is already implemented. You only need to create the meta field and add values.</p>
          </div>

          <h3 class="text-xl font-semibold mb-3">Step 1: Create Collection Meta Field Definition</h3>
          <ol class="list-decimal list-inside space-y-2 mb-6">
            <li>Go to <strong>Shopify Admin > Settings > Metafields</strong></li>
            <li>Click <strong>"Add definition"</strong> and select <strong>"Collections"</strong></li>
            <li>Create the meta field with these exact details:
              <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                <p><strong>Name:</strong> Subcollections</p>
                <p><strong>Namespace and key:</strong> <code>custom.subcollections</code></p>
                <p><strong>Type:</strong> Collection reference (List of collections)</p>
                <p><strong>Description:</strong> Child collections to display on collection page</p>
              </div>
            </li>
          </ol>

          <h3 class="text-xl font-semibold mb-3">Step 2: Add Sub Collections to Parent Collection</h3>
          <ol class="list-decimal list-inside space-y-2 mb-6">
            <li>Navigate to <strong>Shopify Admin > Products > Collections</strong></li>
            <li>Select your <strong>parent collection</strong> (e.g., "Clothing")</li>
            <li>Scroll down to <strong>"Metafields"</strong> section</li>
            <li>Find the <strong>"Subcollections"</strong> field</li>
            <li>Click <strong>"Select collections"</strong> and choose your sub-collections</li>
            <li>Click <strong>"Save"</strong></li>
          </ol>

          <h3 class="text-xl font-semibold mb-3">How It Works</h3>
          <div class="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-400 p-4 mb-6">
            <p class="text-sm mb-2"><strong>The Wearly theme automatically:</strong></p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Displays selected sub-collections as cards on the collection page</li>
              <li>Shows collection images, titles, and product counts</li>
              <li>Creates clickable links to each sub-collection</li>
              <li>Uses the "wearly-subcollections" section for display</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3">Best Practices</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Logical Grouping:</strong> Group related collections that make sense together</li>
            <li><strong>Clear Names:</strong> Use descriptive collection names customers understand</li>
            <li><strong>Quality Images:</strong> Ensure each sub-collection has a good featured image</li>
            <li><strong>Regular Updates:</strong> Keep sub-collection groupings current</li>
          </ul>

          <div class="bg-orange-50 dark:bg-blue-900 border-l-4 border-orange-400 dark:border-blue-400 p-4">
            <p class="text-sm"><strong>Important:</strong> Use the exact namespace and key <code>custom.subcollections</code> as shown above for the theme to work properly.</p>
          </div>
        `
      };
    case 'review-rating-setup':
      return {
        title: 'Review & Rating Setup',
        content: `
          <h2 class="text-2xl font-bold mb-4">Review & Rating Setup</h2>
          <p class="mb-4">The Wearly theme supports multiple review systems and automatically displays ratings. You can use Shopify's native reviews or third-party review apps:</p>

          <div class="bg-green-50 dark:bg-green-900 border-l-4 border-green-400 p-4 mb-6">
            <p class="text-sm"><strong>Note:</strong> The theme code is already implemented. You just need to add review data using one of the supported methods.</p>
          </div>

          <h3 class="text-xl font-semibold mb-3">Method 1: Shopify Native Reviews (Recommended)</h3>
          <p class="mb-4">The theme automatically reads from Shopify's built-in review system:</p>
          <ol class="list-decimal list-inside space-y-2 mb-6">
            <li>Go to <strong>Shopify Admin > Settings > Metafields</strong></li>
            <li>Click <strong>"Add definition"</strong> and select <strong>"Products"</strong></li>
            <li>Create these meta field definitions:

              <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-4 mb-4">
                <p class="font-semibold mb-2">1. Product Rating:</p>
                <p><strong>Name:</strong> Rating</p>
                <p><strong>Namespace and key:</strong> <code>reviews.rating</code></p>
                <p><strong>Type:</strong> Rating</p>
                <p><strong>Description:</strong> Product star rating (1-5 stars)</p>
              </div>

              <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded mb-4">
                <p class="font-semibold mb-2">2. Rating Count:</p>
                <p><strong>Name:</strong> Rating Count</p>
                <p><strong>Namespace and key:</strong> <code>reviews.rating_count</code></p>
                <p><strong>Type:</strong> Number (integer)</p>
                <p><strong>Description:</strong> Total number of reviews</p>
              </div>
            </li>
            <li>Go to your products and add rating values in the metafields section</li>
          </ol>

          <h3 class="text-xl font-semibold mb-3">Method 2: Custom Reviews (Alternative)</h3>
          <p class="mb-4">For more control, you can use custom review meta fields:</p>
          <ol class="list-decimal list-inside space-y-2 mb-6">
            <li>Create these meta field definitions:

              <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-4 mb-4">
                <p class="font-semibold mb-2">Custom Reviews:</p>
                <p><strong>Name:</strong> Reviews</p>
                <p><strong>Namespace and key:</strong> <code>custom.reviews</code></p>
                <p><strong>Type:</strong> JSON</p>
                <p><strong>Description:</strong> Custom review data</p>
              </div>

              <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded mb-4">
                <p class="font-semibold mb-2">Custom Rating Count:</p>
                <p><strong>Name:</strong> Rating Count</p>
                <p><strong>Namespace and key:</strong> <code>custom.rating_count</code></p>
                <p><strong>Type:</strong> Number (integer)</p>
                <p><strong>Description:</strong> Custom review count</p>
              </div>
            </li>
          </ol>

          <h3 class="text-xl font-semibold mb-3">Method 3: Third-Party Review Apps</h3>
          <p class="mb-4">The theme also supports popular review apps:</p>
          <div class="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-400 p-4 mb-6">
            <p class="text-sm mb-2"><strong>Supported review apps:</strong></p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li><strong>Judge.me:</strong> Automatically detected (uses <code>judgeme.preview_badge</code> and <code>judgeme.badge</code>)</li>
              <li><strong>Stamped.io:</strong> Automatically detected (uses <code>stamped.badge</code>)</li>
              <li><strong>Yotpo:</strong> Install their app and the theme will display their reviews</li>
              <li><strong>Shopify Product Reviews:</strong> Native Shopify app integration</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3">How Reviews Are Displayed</h3>
          <div class="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4 mb-6">
            <p class="text-sm mb-2"><strong>The theme automatically shows:</strong></p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Star ratings on product cards in collections</li>
              <li>Star ratings on product pages</li>
              <li>Review count next to the stars</li>
              <li>Full review details (when using supported apps)</li>
              <li>Rating scale and decimal ratings</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3">Priority Order</h3>
          <p class="mb-4">The theme checks for reviews in this order:</p>
          <ol class="list-decimal list-inside space-y-2 mb-6">
            <li><strong>Shopify Native Reviews</strong> (<code>reviews.rating</code>)</li>
            <li><strong>Custom Reviews</strong> (<code>custom.reviews</code>)</li>
            <li><strong>Judge.me Reviews</strong> (<code>judgeme.badge</code>)</li>
            <li><strong>Stamped.io Reviews</strong> (<code>stamped.badge</code>)</li>
          </ol>

          <h3 class="text-xl font-semibold mb-3">Best Practices</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Choose One Method:</strong> Use either native Shopify reviews OR a third-party app, not both</li>
            <li><strong>Authentic Reviews:</strong> Only display genuine customer reviews</li>
            <li><strong>Regular Updates:</strong> Keep review data current</li>
            <li><strong>App Integration:</strong> For automated review collection, use Judge.me or similar apps</li>
          </ul>

          <div class="bg-orange-50 dark:bg-blue-900 border-l-4 border-orange-400 dark:border-blue-400 p-4">
            <p class="text-sm"><strong>Important:</strong> Use the exact namespace and key formats shown above. The theme automatically detects and displays whichever review system you choose to implement.</p>
          </div>
        `
      };
    case 'homepage-banner-setup':
      return {
        title: 'Homepage Banner Setup',
        content: `
          <h2 class="text-2xl font-bold mb-4">Homepage Banner Setup</h2>
          <p class="mb-4">Create compelling homepage banners to showcase your brand, promotions, and featured products:</p>

          <h3 class="text-xl font-semibold mb-3">Adding Banner Section</h3>
          <ol class="list-decimal list-inside space-y-2 mb-6">
            <li>Navigate to <strong>Theme Customizer > Home page</strong></li>
            <li>Click <strong>"Add section"</strong></li>
            <li>Select from banner options:
              <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
                <li><strong>"Image banner"</strong> - Full-width hero banner</li>
                <li><strong>"Slideshow"</strong> - Multiple rotating banners</li>
                <li><strong>"Video"</strong> - Video background banner</li>
                <li><strong>"Rich text"</strong> - Text-based promotional banner</li>
              </ul>
            </li>
            <li>Configure banner settings and content</li>
            <li>Save and preview changes</li>
          </ol>

          <h3 class="text-xl font-semibold mb-3">Image Banner Configuration</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Banner Image:</strong> Upload high-quality image (recommended: 1920x800px)</li>
            <li><strong>Mobile Image:</strong> Optional separate image optimized for mobile (750x1000px)</li>
            <li><strong>Image Position:</strong> Set focal point (center, top, bottom, left, right)</li>
            <li><strong>Height:</strong> Choose from small (400px), medium (550px), large (750px), or adapt to image</li>
            <li><strong>Overlay:</strong> Add color overlay with opacity control</li>
          </ul>

          <h3 class="text-xl font-semibold mb-3">Banner Content</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Heading:</strong> Main banner title (keep under 50 characters)</li>
            <li><strong>Subheading:</strong> Supporting text or tagline</li>
            <li><strong>Description:</strong> Additional promotional text</li>
            <li><strong>Button Text:</strong> Call-to-action button label</li>
            <li><strong>Button Link:</strong> Link to collection, product, or page</li>
            <li><strong>Text Alignment:</strong> Left, center, right, or custom position</li>
          </ul>

          <h3 class="text-xl font-semibold mb-3">Slideshow Banner Setup</h3>
          <ol class="list-decimal list-inside space-y-2 mb-6">
            <li>Add slideshow section to homepage</li>
            <li>Click <strong>"Add slide"</strong> to create multiple slides</li>
            <li>Configure for each slide:
              <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Upload unique banner image</li>
                <li>Add slide-specific content and CTA</li>
                <li>Set slide duration and transition</li>
              </ul>
            </li>
            <li>Configure slideshow settings:
              <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
                <li><strong>Auto-rotate:</strong> Enable/disable automatic sliding</li>
                <li><strong>Slide duration:</strong> Time per slide (4-8 seconds recommended)</li>
                <li><strong>Navigation:</strong> Show arrows and dots</li>
                <li><strong>Transition style:</strong> Fade, slide, or custom effects</li>
              </ul>
            </li>
          </ol>

          <h3 class="text-xl font-semibold mb-3">Banner Design Best Practices</h3>
          <div class="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-400 p-4 mb-6">
            <h4 class="font-semibold mb-2">Visual Guidelines:</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li><strong>High Contrast:</strong> Ensure text is readable against background</li>
              <li><strong>Focal Point:</strong> Place important text away from busy image areas</li>
              <li><strong>Brand Consistency:</strong> Use brand colors and fonts</li>
              <li><strong>Mobile-First:</strong> Test banner appearance on mobile devices</li>
              <li><strong>Loading Speed:</strong> Optimize images (under 300KB recommended)</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3">Banner Types and Use Cases</h3>
          <div class="grid gap-4 mb-6">
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded">
              <h4 class="font-semibold mb-2">🎯 Promotional Banner</h4>
              <p class="text-sm">Highlight sales, discounts, or special offers with urgency-driven messaging.</p>
              <p class="text-sm mt-1"><strong>Example:</strong> "50% Off Summer Collection - Limited Time!"</p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded">
              <h4 class="font-semibold mb-2">🏷️ Brand Story Banner</h4>
              <p class="text-sm">Introduce your brand values, mission, or unique selling proposition.</p>
              <p class="text-sm mt-1"><strong>Example:</strong> "Sustainable Fashion for the Modern World"</p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded">
              <h4 class="font-semibold mb-2">🆕 Product Launch Banner</h4>
              <p class="text-sm">Feature new arrivals or featured products with direct shopping links.</p>
              <p class="text-sm mt-1"><strong>Example:</strong> "Introducing Our Latest Collection - Shop Now"</p>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3">Advanced Customization</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Custom CSS:</strong> Add unique animations and hover effects</li>
            <li><strong>Parallax Scrolling:</strong> Create depth with background attachment</li>
            <li><strong>Video Backgrounds:</strong> Use video files or YouTube/Vimeo embeds</li>
            <li><strong>Interactive Elements:</strong> Add hotspots or product tags</li>
            <li><strong>A/B Testing:</strong> Test different versions to optimize conversion</li>
          </ul>

          <h3 class="text-xl font-semibold mb-3">Performance Optimization</h3>
          <div class="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4 mb-6">
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li><strong>Image Optimization:</strong> Use WebP format when possible</li>
              <li><strong>Lazy Loading:</strong> Load banner images after critical content</li>
              <li><strong>Responsive Images:</strong> Serve appropriate image sizes per device</li>
              <li><strong>Minimize Slides:</strong> Limit slideshow to 3-5 slides maximum</li>
              <li><strong>Preload Critical Images:</strong> Preload first slide image for instant display</li>
            </ul>
          </div>

          <h3 class="text-xl font-semibold mb-3">Banner Analytics & Testing</h3>
          <ul class="list-disc list-inside space-y-2 mb-6">
            <li><strong>Click-through Rates:</strong> Monitor banner CTA performance</li>
            <li><strong>Conversion Tracking:</strong> Measure sales from banner traffic</li>
            <li><strong>Heat Mapping:</strong> Understand user interaction patterns</li>
            <li><strong>Mobile vs Desktop:</strong> Compare performance across devices</li>
            <li><strong>Seasonal Updates:</strong> Refresh banners regularly for relevance</li>
          </ul>

          <div class="bg-green-50 dark:bg-green-900 border-l-4 border-green-400 p-4">
            <p class="text-sm"><strong>Pro Tip:</strong> Use the "Image with text overlay" section for a more flexible banner that automatically adapts text size and positioning across all devices.</p>
          </div>
        `
      };
  }
};

export const getAllSections = () => {
  return [
    'install-wearly-theme',
    'update-wearly-theme',
    'theme-license-transfer',
    'announcement-bar',
    'header',
    'footer',
    'cart-drawer',
    'cart-notification',
    'wearly-image-banner',
    'wearly-testimonials',
    'wearly-trust-row',
    'wearly-icon-features',
    'wearly-contact-faq',
    'wearly-collection-grid',
    'wearly-breadcrumbs',
    'general',
    'colors',
    'typography',
    'product-page',
    'collection-page',
    'blog-page',
    'article-page',
    'about-page',
    'contact-page',
    'search-page',
    '404-page',
    'customer-help',
    'mega-menu-setup',
    'product-grid-setup',
    'sub-collection-setup',
    'review-rating-setup',
    'homepage-banner-setup'
  ];
};