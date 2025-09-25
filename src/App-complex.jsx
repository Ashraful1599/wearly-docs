import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import ThemeSettings from './pages/ThemeSettings'
import Sections from './pages/Sections'
import Customization from './pages/Customization'
import ProductPages from './pages/ProductPages'
import Collections from './pages/Collections'
import Troubleshooting from './pages/Troubleshooting'
import Support from './pages/Support'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  try {
    return (
      <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/theme-settings" element={<ThemeSettings />} />
          <Route path="/sections" element={<Sections />} />
          <Route path="/customization" element={<Customization />} />
          <Route path="/product-pages" element={<ProductPages />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/troubleshooting" element={<Troubleshooting />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Layout>
    )
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-red-800 mb-4">Application Error</h1>
          <p className="text-red-600">{error.message}</p>
        </div>
      </div>
    )
  }
}

export default App