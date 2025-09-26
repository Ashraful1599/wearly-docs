'use client'

import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, ChevronRight, Home, Book, Settings, Package, HelpCircle, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const DocumentationLayout = ({ children, currentSection }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    'getting-started': true,
    'global-sections': false,
    'wearly-sections': false,
    'theme-settings': false,
    'pages': false,
    'advanced-features': false
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Expand section containing current page
  useEffect(() => {
    if (currentSection) {
      const sectionKey = getSectionKeyForItem(currentSection);
      if (sectionKey) {
        setExpandedSections(prev => ({
          ...prev,
          [sectionKey]: true
        }));
      }
    }
  }, [currentSection]);

  const getSectionKeyForItem = (itemId) => {
    const sectionMap = {
      'install-wearly-theme': 'getting-started',
      'update-wearly-theme': 'getting-started',
      'theme-license-transfer': 'getting-started',
      'homepage-banner-setup': 'getting-started',
      'announcement-bar': 'global-sections',
      'header': 'global-sections',
      'footer': 'global-sections',
      'cart-drawer': 'global-sections',
      'cart-notification': 'global-sections',
      'mega-menu-setup': 'global-sections',
      'wearly-image-banner': 'wearly-sections',
      'wearly-testimonials': 'wearly-sections',
      'wearly-trust-row': 'wearly-sections',
      'wearly-icon-features': 'wearly-sections',
      'wearly-contact-faq': 'wearly-sections',
      'wearly-collection-grid': 'wearly-sections',
      'wearly-breadcrumbs': 'wearly-sections',
      'general': 'theme-settings',
      'colors': 'theme-settings',
      'typography': 'theme-settings',
      'product-page': 'pages',
      'collection-page': 'pages',
      'blog-page': 'pages',
      'article-page': 'pages',
      'about-page': 'pages',
      'contact-page': 'pages',
      'search-page': 'pages',
      '404-page': 'pages',
      'customer-help': 'pages',
      'product-grid-setup': 'advanced-features',
      'sub-collection-setup': 'advanced-features',
      'review-rating-setup': 'advanced-features'
    };
    return sectionMap[itemId];
  };

  const navigationItems = {
    'getting-started': {
      title: 'Getting Started',
      icon: Home,
      items: [
        { id: 'install-wearly-theme', title: 'Install Wearly theme' },
        { id: 'update-wearly-theme', title: 'Update Wearly theme' },
        { id: 'theme-license-transfer', title: 'Theme license & Transfer' },
        { id: 'homepage-banner-setup', title: 'Homepage Banner Setup' }
      ]
    },
    'global-sections': {
      title: 'Global Sections',
      icon: FileText,
      items: [
        { id: 'announcement-bar', title: 'Announcement bar' },
        { id: 'header', title: 'Header' },
        { id: 'footer', title: 'Footer' },
        { id: 'cart-drawer', title: 'Cart drawer' },
        { id: 'cart-notification', title: 'Cart notification' },
        { id: 'mega-menu-setup', title: 'Mega Menu Setup' }
      ]
    },
    'wearly-sections': {
      title: 'Wearly Sections',
      icon: Package,
      items: [
        { id: 'wearly-image-banner', title: 'Image Banner' },
        { id: 'wearly-testimonials', title: 'Testimonials' },
        { id: 'wearly-trust-row', title: 'Trust Row' },
        { id: 'wearly-icon-features', title: 'Icon Features' },
        { id: 'wearly-contact-faq', title: 'Contact & FAQ' },
        { id: 'wearly-collection-grid', title: 'Collection Grid' },
        { id: 'wearly-breadcrumbs', title: 'Breadcrumbs' }
      ]
    },
    'theme-settings': {
      title: 'Theme Settings',
      icon: Settings,
      items: [
        { id: 'general', title: 'General' },
        { id: 'colors', title: 'Colors' },
        { id: 'typography', title: 'Typography' }
      ]
    },
    'pages': {
      title: 'Page Templates',
      icon: Book,
      items: [
        { id: 'product-page', title: 'Product page' },
        { id: 'collection-page', title: 'Collection page' },
        { id: 'blog-page', title: 'Blog page' },
        { id: 'article-page', title: 'Article page' },
        { id: 'about-page', title: 'About page' },
        { id: 'contact-page', title: 'Contact page' },
        { id: 'search-page', title: 'Search page' },
        { id: '404-page', title: '404 page' },
        { id: 'customer-help', title: 'Customer Help' }
      ]
    },
    'advanced-features': {
      title: 'Advanced Features',
      icon: HelpCircle,
      items: [
        { id: 'product-grid-setup', title: 'Product Grid Setup' },
        { id: 'sub-collection-setup', title: 'Sub Collection Setup' },
        { id: 'review-rating-setup', title: 'Review & Rating Setup' }
      ]
    }
  };

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
    router.push(`/wearly-theme/${item.id}`);
    setShowSearchResults(false);
    setSearchQuery('');
    setIsMobileMenuOpen(false);
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const renderNavItem = (item, sectionId, depth = 0) => {
    const isActive = currentSection === item.id;
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className={`ml-${depth * 4}`}>
        <Link
          href={`/wearly-theme/${item.id}`}
          className={`
            w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors
            flex items-center justify-between group block
            ${isActive
              ? 'bg-orange-100 text-orange-900 dark:bg-blue-900 dark:text-blue-100'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }
          `}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span>{item.title}</span>
          {hasChildren && <ChevronRight className="w-4 h-4" />}
        </Link>
        {hasChildren && (
          <div className="ml-4 mt-1 space-y-1">
            {item.children.map(child => renderNavItem(child, sectionId, depth + 1))}
          </div>
        )}
      </div>
    );
  };

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
                  <Link
                    href="/"
                    className="focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image
                      src="/wearly-logo-croped.webp"
                      alt="Wearly"
                      width={160}
                      height={32}
                      className="h-8 w-auto hover:opacity-80 transition-opacity"
                      priority
                    />
                  </Link>
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
                        No results found for {searchQuery}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Support Button */}
              <Link
                href="mailto:info@softiustech.com?subject=Wearly Theme Support Request"
                className="text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
                style={{ backgroundColor: 'rgb(255, 106, 31)' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(229, 90, 21)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(255, 106, 31)'}
              >
                Contact Support
              </Link>
            </div>
          </div>
        </header>

        <div className="flex min-h-[calc(100vh-64px)]">
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
                          onClick={() => handleSearchResultClick(result)}
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
                        No results found for {searchQuery}
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
          <main className="flex-1 bg-gray-50 dark:bg-gray-900">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DocumentationLayout;