# Wearly Theme Documentation

A comprehensive, professional documentation site for the Shopify Wearly theme. Built with React, Vite, and Tailwind CSS.

## ✨ Features

- **Live Search**: Fuzzy search across all documentation with keyboard shortcuts
- **Responsive Design**: Mobile-first design that works on all devices
- **Image Optimization**: Lazy loading and optimized images for fast performance
- **Modern UI**: Clean, professional interface with smooth animations
- **Easy Navigation**: Intuitive sidebar navigation with active states
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:3000`

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.jsx      # Main layout with navigation
│   ├── SearchModal.jsx # Live search functionality
│   └── ...
├── pages/              # Documentation pages
│   ├── Home.jsx        # Landing page
│   ├── GettingStarted.jsx
│   └── ...
├── data/               # Static data and content
├── hooks/              # Custom React hooks
└── utils/              # Utility functions
```

## 📝 Content Management

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to `src/App.jsx`
3. Update navigation in `src/components/Layout.jsx`
4. Add searchable content to `src/data/searchContent.js`

### Adding Images

1. Place images in `public/images/`
2. Use the `ImageOptimizer` component for lazy loading
3. Provide WebP format when possible for better performance

## 🎨 Customization

### Colors

The theme uses a custom color palette defined in `tailwind.config.js`:

- Primary: `wearly-orange` (#FF6A1F)
- Dark: `wearly-dark` (#121212)
- Gray scale: `wearly-gray-*` (50-900)

### Typography

- Primary font: Inter (from Google Fonts)
- Monospace: JetBrains Mono
- Configured in `tailwind.config.js`

## 🔍 Search Functionality

The live search feature:
- Uses Fuse.js for fuzzy matching
- Searches across titles, content, and keywords
- Keyboard shortcut: `Cmd/Ctrl + K`
- Real-time results with highlighting

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-optimized navigation for mobile
- Optimized image sizes for different screens

## ⚡ Performance

- Lazy loading for images and components
- Optimized bundle with Vite
- WebP images where supported
- Minimal dependencies for fast loading

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Vercel

1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Enable automatic deploys

## 📄 License

This documentation site is proprietary to SoftiusTech. All rights reserved.

## 🆘 Support

For questions about the documentation site:
- Create an issue in this repository
- Contact: support@softiustech.com

## 🔄 Version History

- v1.0.0 - Initial release with complete documentation structure
- Full-featured search and navigation
- Responsive design and image optimization
- Comprehensive theme coverage# wearly-docs
