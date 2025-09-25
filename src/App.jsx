import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, ChevronRight, Home, Book, Settings, Package, HelpCircle, FileText } from 'lucide-react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('getting-started');
  const [expandedSections, setExpandedSections] = useState({
    'getting-started': true,
    'page-global-sections': false,
    'theme-sections': false,
    'theme-settings': false,
    'collections-products': false,
    'other-pages': false,
    'faqs': false
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Create searchable index
  const createSearchIndex = () => {
    const searchIndex = [];

    Object.entries(navigationItems).forEach(([sectionId, section]) => {
      section.items.forEach(item => {
        searchIndex.push({
          id: item.id,
          title: item.title,
          section: section.title,
          sectionId: sectionId
        });

        if (item.children) {
          item.children.forEach(child => {
            searchIndex.push({
              id: child.id,
              title: child.title,
              section: section.title,
              sectionId: sectionId,
              parent: item.title
            });
          });
        }
      });
    });

    return searchIndex;
  };

  // Search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const searchIndex = createSearchIndex();
    const results = searchIndex.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.section.toLowerCase().includes(query.toLowerCase()) ||
      (item.parent && item.parent.toLowerCase().includes(query.toLowerCase()))
    );

    setSearchResults(results);
    setShowSearchResults(true);
  };

  // Navigate to search result
  const handleSearchResultClick = (item) => {
    setActiveSection(item.id);

    // Expand the parent section if needed
    const sectionKey = item.sectionId;
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: true
    }));

    setShowSearchResults(false);
    setSearchQuery('');
  };

  const navigationItems = {
    'getting-started': {
      title: 'Getting Started',
      icon: Home,
      items: [
        { id: 'install-wearly-theme', title: 'Install Wearly theme' },
        { id: 'update-wearly-theme', title: 'Update Wearly theme' },
        { id: 'theme-license-transfer', title: 'Theme license & Transfer' }
      ]
    },
    'page-global-sections': {
      title: "Page's Global Sections",
      icon: FileText,
      items: [
        { id: 'announcement-bar', title: 'Announcement bar' },
        { id: 'header', title: 'Header' },
        { id: 'footer', title: 'Footer' },
        { id: 'cart-drawer', title: 'Cart drawer' },
        { id: 'predictive-search', title: 'Predictive search' },
        { id: 'cart-notification', title: 'Cart notification' }
      ]
    },
    'wearly-sections': {
      title: 'Wearly Sections',
      icon: Package,
      items: [
        { id: 'wearly-image-banner', title: 'Image Banner' },
        { id: 'wearly-product-grid', title: 'Product Grid' },
        { id: 'wearly-collection-grid', title: 'Collection Grid' },
        { id: 'wearly-testimonials', title: 'Testimonials' },
        { id: 'wearly-icon-features', title: 'Icon Features' },
        { id: 'wearly-promo-banner', title: 'Promo Banner' },
        { id: 'wearly-trust-row', title: 'Trust Row' },
        { id: 'wearly-subcollections', title: 'Subcollections' },
        { id: 'wearly-breadcrumbs', title: 'Breadcrumbs' },
        { id: 'wearly-contact-faq', title: 'Contact & FAQ' },
        { id: 'wearly-customer-help', title: 'Customer Help' }
      ]
    },
    'theme-settings': {
      title: 'Theme Settings',
      icon: Settings,
      items: [
        { id: 'general', title: 'General' },
        { id: 'animations', title: 'Animations' },
        { id: 'colors', title: 'Colors' },
        { id: 'typography', title: 'Typography' },
        { id: 'layout-configurations', title: 'Layout configurations' }
      ]
    },
    'collections-products': {
      title: 'Collections & Products',
      icon: Package,
      items: [
        { id: 'product-page', title: 'Product page' },
        { id: 'collection-page', title: 'Collection page' },
        { id: 'collections-list-page', title: 'Collections list page' }
      ]
    },
    'other-pages': {
      title: 'Other Pages',
      icon: Book,
      items: [
        { id: 'blogs', title: 'Blogs' },
        { id: 'blog-posts', title: 'Blog posts' },
        { id: 'cart', title: 'Cart' },
        { id: 'password-page', title: 'Password page' },
        { id: 'search-page', title: 'Search page' }
      ]
    },
    'faqs': {
      title: 'FAQs and Troubleshooting',
      icon: HelpCircle,
      items: [
        { id: 'configuration-guides', title: 'Configuration guides' },
        { id: 'customization-guides', title: 'Customization guides' },
        { id: 'common-issues', title: 'Common issue resolution' }
      ]
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const renderNavItem = (item, sectionId, depth = 0) => {
    const isActive = activeSection === item.id;
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className={`ml-${depth * 4}`}>
        <button
          onClick={() => setActiveSection(item.id)}
          className={`
            w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors
            flex items-center justify-between group
            ${isActive
              ? 'bg-orange-100 text-orange-900 dark:bg-blue-900 dark:text-blue-100'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }
          `}
        >
          <span>{item.title}</span>
          {hasChildren && <ChevronRight className="w-4 h-4" />}
        </button>
        {hasChildren && (
          <div className="ml-4 mt-1 space-y-1">
            {item.children.map(child => renderNavItem(child, sectionId, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const getContentForSection = () => {
    switch(activeSection) {
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
            <p class="mb-4">The announcement bar appears at the top of your site to display important messages:</p>
            <h3 class="text-xl font-semibold mb-3">Configuration</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Navigate to Theme Settings > Announcement Bar</li>
              <li>Enable/disable the announcement bar</li>
              <li>Set the message text and link</li>
              <li>Choose colors and styling options</li>
              <li>Configure display timing and conditions</li>
            </ul>
            <h3 class="text-xl font-semibold mb-3">Customization Options</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Background colors</li>
              <li>Text colors and fonts</li>
              <li>Animation effects</li>
              <li>Close button settings</li>
            </ul>
          `
        };
      case 'top-bar':
        return {
          title: 'Top Bar',
          content: `
            <h2 class="text-2xl font-bold mb-4">Top Bar</h2>
            <p class="mb-4">Configure the top bar section above your main header:</p>
            <h3 class="text-xl font-semibold mb-3">Features</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Contact information display</li>
              <li>Social media links</li>
              <li>Currency selector</li>
              <li>Language selector</li>
              <li>Account links</li>
            </ul>
            <h3 class="text-xl font-semibold mb-3">Customization</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Show/hide on mobile devices</li>
              <li>Background and text colors</li>
              <li>Content alignment options</li>
              <li>Border and spacing controls</li>
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
              <li><strong>Responsive Design:</strong> Mobile-optimized navigation</li>
              <li><strong>Logo Support:</strong> Upload your brand logo</li>
              <li><strong>Search Integration:</strong> Predictive search functionality</li>
              <li><strong>Cart Integration:</strong> Live cart updates and notifications</li>
            </ul>
            <h3 class="text-xl font-semibold mb-3">Configuration Options</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Logo upload and sizing</li>
              <li>Navigation menu assignment</li>
              <li>Search bar visibility</li>
              <li>Cart icon and counter</li>
              <li>Social media links</li>
              <li>Sticky header settings</li>
            </ul>
          `
        };
      case 'mega-menu':
        return {
          title: 'Mega Menu',
          content: `
            <h2 class="text-2xl font-bold mb-4">Mega Menu</h2>
            <p class="mb-4">Create rich navigation experiences with mega menus:</p>
            <h3 class="text-xl font-semibold mb-3">Setup Instructions</h3>
            <ol class="list-decimal list-inside space-y-2 mb-6">
              <li>Create a new navigation menu in Shopify admin</li>
              <li>Add your main categories as top-level items</li>
              <li>Add subcategories and links as nested items</li>
              <li>Assign the menu to your header in theme settings</li>
              <li>Enable mega menu display in header settings</li>
            </ol>
            <h3 class="text-xl font-semibold mb-3">Features</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Multi-column layouts</li>
              <li>Featured product displays</li>
              <li>Category images</li>
              <li>Promotional banners</li>
              <li>Rich text content blocks</li>
            </ul>
          `
        };
      case 'colors':
        return {
          title: 'Colors',
          content: `
            <h2 class="text-2xl font-bold mb-4">Color Settings</h2>
            <p class="mb-4">Customize your theme's color palette to match your brand:</p>
            <h3 class="text-xl font-semibold mb-3">Color Categories</h3>
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
                  <li>Link colors</li>
                  <li>Heading colors</li>
                </ul>
              </div>
              <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Accent Colors</h4>
                <ul class="list-disc list-inside space-y-1 text-sm">
                  <li>Primary button color</li>
                  <li>Secondary button color</li>
                  <li>Border colors</li>
                  <li>Highlight colors</li>
                </ul>
              </div>
            </div>
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
              <li><strong>Headings Font:</strong> Choose from Google Fonts or system fonts</li>
              <li><strong>Body Font:</strong> Separate font selection for body text</li>
              <li><strong>Font Weights:</strong> Light, Regular, Medium, Bold, Extra Bold</li>
              <li><strong>Font Loading:</strong> Optimized for performance</li>
            </ul>
            <h3 class="text-xl font-semibold mb-3">Scale and Spacing</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong>Heading Scale:</strong> 100% to 150% size adjustment</li>
              <li><strong>Body Scale:</strong> 100% to 130% size adjustment</li>
              <li><strong>Line Height:</strong> Automatic optimal spacing</li>
              <li><strong>Letter Spacing:</strong> Fine-tune character spacing</li>
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
              <li><strong>Gallery Position:</strong> Left, right, or centered</li>
              <li><strong>Image Zoom:</strong> Hover zoom or click to enlarge</li>
              <li><strong>Thumbnail Style:</strong> Vertical, horizontal, or dots</li>
              <li><strong>Mobile Layout:</strong> Optimized for touch devices</li>
            </ul>
            <h3 class="text-xl font-semibold mb-3">Product Information</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Dynamic pricing display</li>
              <li>Inventory level indicators</li>
              <li>Variant selection (color swatches, dropdown)</li>
              <li>Product reviews and ratings</li>
              <li>Related product recommendations</li>
              <li>Social sharing buttons</li>
            </ul>
          `
        };
      case 'collection-page':
        return {
          title: 'Collection Page',
          content: `
            <h2 class="text-2xl font-bold mb-4">Collection Page Settings</h2>
            <p class="mb-4">Configure how your product collections are displayed:</p>
            <h3 class="text-xl font-semibold mb-3">Layout and Grid</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li><strong>Grid Columns:</strong> 2, 3, 4, or 5 columns</li>
              <li><strong>Products Per Page:</strong> 12, 24, 48, or 96 items</li>
              <li><strong>Pagination Style:</strong> Numbers or load more button</li>
              <li><strong>Image Aspect Ratio:</strong> Square, portrait, or natural</li>
            </ul>
            <h3 class="text-xl font-semibold mb-3">Filtering and Sorting</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Advanced filtering by price, size, color, brand</li>
              <li>Sort by price, popularity, newest, alphabetical</li>
              <li>Filter sidebar or dropdown options</li>
              <li>Search within collection</li>
              <li>Clear all filters option</li>
            </ul>
          `
        };
      case 'banner-variations':
        return {
          title: 'Banner Variations',
          content: `
            <h2 class="text-2xl font-bold mb-4">Banner Variations</h2>
            <p class="mb-4">Choose from multiple banner styles to create engaging hero sections:</p>
            <h3 class="text-xl font-semibold mb-3">Banner Types</h3>
            <div class="space-y-4 mb-6">
              <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Image Banner</h4>
                <p class="text-sm mb-2">Full-width hero sections with background images and overlay text</p>
                <ul class="list-disc list-inside space-y-1 text-sm">
                  <li>Multiple content alignment options</li>
                  <li>Overlay opacity controls</li>
                  <li>Call-to-action button styling</li>
                </ul>
              </div>
              <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Slideshow Banner</h4>
                <p class="text-sm mb-2">Rotating banner images with navigation controls</p>
                <ul class="list-disc list-inside space-y-1 text-sm">
                  <li>Auto-play and manual controls</li>
                  <li>Transition effects</li>
                  <li>Individual slide customization</li>
                </ul>
              </div>
              <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Video Banner</h4>
                <p class="text-sm mb-2">Background video with overlay content</p>
                <ul class="list-disc list-inside space-y-1 text-sm">
                  <li>MP4 video support</li>
                  <li>Muted autoplay</li>
                  <li>Fallback image for mobile</li>
                </ul>
              </div>
            </div>
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
              <li><strong>Logo Upload:</strong> SVG, PNG, or JPG formats supported</li>
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
          `
        };
      case 'wearly-image-banner':
        return {
          title: 'Wearly Image Banner',
          content: `
            <h2 class="text-2xl font-bold mb-4">Wearly Image Banner</h2>
            <p class="mb-4">Create stunning hero sections with the Wearly Image Banner section:</p>
            <h3 class="text-xl font-semibold mb-3">Features</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Responsive background images with multiple size options</li>
              <li>Overlay opacity controls for text readability</li>
              <li>Multiple content alignment options (left, center, right)</li>
              <li>Call-to-action button customization</li>
              <li>Mobile-specific image optimization</li>
              <li>Ambient, fixed, or zoom-in image behaviors</li>
            </ul>
            <h3 class="text-xl font-semibold mb-3">Configuration</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Upload desktop and mobile images separately</li>
              <li>Set image height: Small (400px), Medium (500px), Large (600px), or Adapt to image</li>
              <li>Configure overlay color and opacity</li>
              <li>Add heading, subheading, and button text</li>
              <li>Choose content position and alignment</li>
            </ul>
          `
        };
      case 'wearly-product-grid':
        return {
          title: 'Wearly Product Grid',
          content: `
            <h2 class="text-2xl font-bold mb-4">Wearly Product Grid</h2>
            <p class="mb-4">Showcase your products with flexible grid layouts:</p>
            <h3 class="text-xl font-semibold mb-3">Grid Options</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>2, 3, 4, or 5 columns on desktop</li>
              <li>Responsive mobile layouts (1-2 columns)</li>
              <li>Product limit: 4, 8, 12, 16, or 20 products</li>
              <li>Collection source selection</li>
              <li>Manual product selection override</li>
            </ul>
            <h3 class="text-xl font-semibold mb-3">Product Display</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Product image with hover effects</li>
              <li>Product title and pricing</li>
              <li>Quick add to cart functionality</li>
              <li>Sale badges and inventory indicators</li>
              <li>Color variant swatches</li>
            </ul>
          `
        };
      case 'wearly-testimonials':
        return {
          title: 'Wearly Testimonials',
          content: `
            <h2 class="text-2xl font-bold mb-4">Wearly Testimonials</h2>
            <p class="mb-4">Build trust with customer testimonials and reviews:</p>
            <h3 class="text-xl font-semibold mb-3">Display Options</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Slider or static grid layout</li>
              <li>1, 2, or 3 columns on desktop</li>
              <li>Star ratings display</li>
              <li>Customer photos and names</li>
              <li>Auto-rotating slider with controls</li>
            </ul>
            <h3 class="text-xl font-semibold mb-3">Content Management</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Add unlimited testimonials</li>
              <li>Rich text formatting for reviews</li>
              <li>Customer image uploads</li>
              <li>Rating system (1-5 stars)</li>
              <li>Custom styling options</li>
            </ul>
          `
        };
      case 'wearly-trust-row':
        return {
          title: 'Wearly Trust Row',
          content: `
            <h2 class="text-2xl font-bold mb-4">Wearly Trust Row</h2>
            <p class="mb-4">Display trust badges and security certifications:</p>
            <h3 class="text-xl font-semibold mb-3">Trust Elements</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>SSL security badges</li>
              <li>Payment method icons</li>
              <li>Satisfaction guarantees</li>
              <li>Customer service badges</li>
              <li>Shipping and return policies</li>
            </ul>
            <h3 class="text-xl font-semibold mb-3">Display Options</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Horizontal scrolling on mobile</li>
              <li>Centered or justified alignment</li>
              <li>Badge size controls</li>
              <li>Background styling options</li>
              <li>Spacing and margin controls</li>
            </ul>
          `
        };
      case 'predictive-search':
        return {
          title: 'Predictive Search',
          content: `
            <h2 class="text-2xl font-bold mb-4">Predictive Search</h2>
            <p class="mb-4">Enhanced search experience with real-time suggestions:</p>
            <h3 class="text-xl font-semibold mb-3">Search Features</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Real-time product suggestions as you type</li>
              <li>Product images and pricing in results</li>
              <li>Collection and page suggestions</li>
              <li>Popular searches display</li>
              <li>Search filters and sorting</li>
            </ul>
            <h3 class="text-xl font-semibold mb-3">Configuration</h3>
            <ul class="list-disc list-inside space-y-2 mb-6">
              <li>Enable/disable predictive search</li>
              <li>Control number of suggestions shown</li>
              <li>Customize search placeholder text</li>
              <li>Search result styling options</li>
              <li>Mobile search optimization</li>
            </ul>
          `
        };
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
                <button class="text-orange-600 dark:text-blue-400 font-medium hover:underline">
                  View installation guide →
                </button>
              </div>

              <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 class="text-xl font-semibold mb-3">🎨 Customization</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">Customize colors, fonts, layouts and more.</p>
                <button class="text-orange-600 dark:text-blue-400 font-medium hover:underline">
                  Explore theme settings →
                </button>
              </div>

              <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 class="text-xl font-semibold mb-3">📱 Sections</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">Learn about all available theme sections.</p>
                <button class="text-orange-600 dark:text-blue-400 font-medium hover:underline">
                  Browse sections →
                </button>
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
              <a href="mailto:info@softiustech.com?subject=Wearly Theme Support Request" class="inline-block bg-orange-600 dark:bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-700 dark:hover:bg-blue-700 transition-colors text-decoration-none">
                Contact Support
              </a>
            </div>
          `
        };
    }
  };

  const currentContent = getContentForSection();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo and mobile menu */}
              <div className="flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                <div className="ml-4 md:ml-0">
                  <button
                    onClick={() => {
                      setActiveSection('getting-started');
                      setIsMobileMenuOpen(false);
                    }}
                    className="focus:outline-none"
                  >
                    <img
                      src="/wearly-logo-croped.webp"
                      alt="Wearly"
                      className="h-8 w-auto hover:opacity-80 transition-opacity"
                    />
                  </button>
                </div>
              </div>

              {/* Search Bar */}
              <div className="hidden md:block flex-1 max-w-md mx-8">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => searchQuery && setShowSearchResults(true)}
                    onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-500"
                  />

                  {/* Search Results Dropdown */}
                  {showSearchResults && searchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
                      {searchResults.slice(0, 8).map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearchResultClick(result)}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700"
                        >
                          <div className="font-medium text-gray-900 dark:text-gray-100">
                            {result.title}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {result.section} {result.parent && `> ${result.parent}`}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* No Results */}
                  {showSearchResults && searchQuery && searchResults.length === 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 px-4 py-3">
                      <div className="text-gray-500 dark:text-gray-400 text-sm">
                        No results found for "{searchQuery}"
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Support Button */}
              <a
                href="mailto:info@softiustech.com?subject=Wearly Theme Support Request"
                className="text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
                style={{ backgroundColor: 'rgb(255, 106, 31)' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(229, 90, 21)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(255, 106, 31)'}
              >
                Contact Support
              </a>
            </div>
          </div>
        </header>

        <div className="flex" style={{ height: 'calc(100vh - 64px)' }}>
          {/* Sidebar */}
          <nav className={`
            fixed md:static inset-y-0 left-0 z-40 w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
            transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform
            flex flex-col h-full
          `}>
            <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
              {/* Mobile Search */}
              <div className="md:hidden mb-4">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => searchQuery && setShowSearchResults(true)}
                    onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-500"
                  />

                  {/* Mobile Search Results Dropdown */}
                  {showSearchResults && searchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 max-h-80 overflow-y-auto">
                      {searchResults.slice(0, 6).map((result, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            handleSearchResultClick(result);
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700"
                        >
                          <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                            {result.title}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {result.section} {result.parent && `> ${result.parent}`}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Mobile No Results */}
                  {showSearchResults && searchQuery && searchResults.length === 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 px-3 py-2">
                      <div className="text-gray-500 dark:text-gray-400 text-sm">
                        No results found for "{searchQuery}"
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation */}
              {Object.entries(navigationItems).map(([sectionId, section]) => {
                const IconComponent = section.icon;
                const isExpanded = expandedSections[sectionId];

                return (
                  <div key={sectionId} className="space-y-1">
                    <button
                      onClick={() => toggleSection(sectionId)}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5" />
                        <span>{section.title}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    {isExpanded && (
                      <div className="ml-8 space-y-1">
                        {section.items.map(item => renderNavItem(item, sectionId))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          {/* Mobile overlay */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          {/* Main Content */}
          <main className="flex-1 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
                <div
                  className="prose prose-gray dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: currentContent.content }}
                />
              </article>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;