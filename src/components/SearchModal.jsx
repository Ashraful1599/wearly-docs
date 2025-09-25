import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { X, Search, ArrowRight } from 'lucide-react'
import Fuse from 'fuse.js'
import { searchableContent } from '../data/searchContent'

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const modalRef = useRef(null)

  const fuse = new Fuse(searchableContent, {
    keys: ['title', 'content', 'keywords'],
    threshold: 0.3,
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 2,
  })

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setQuery('')
      setResults([])
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim().length >= 2) {
      const searchResults = fuse.search(query).slice(0, 10)
      setResults(searchResults)
    } else {
      setResults([])
    }
  }, [query])

  const handleResultClick = (result) => {
    navigate(result.item.path)
    onClose()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center p-4 pt-16"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={modalRef}
        className="w-full max-w-2xl bg-white rounded-lg shadow-xl animate-fade-in"
      >
        {/* Search input */}
        <div className="p-4 border-b border-wearly-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wearly-gray-400" size={20} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search documentation..."
              className="w-full pl-10 pr-10 py-3 border border-wearly-gray-300 rounded-lg
                focus:ring-2 focus:ring-wearly-orange focus:border-transparent
                text-wearly-gray-900 placeholder-wearly-gray-500"
            />
            <button
              onClick={onClose}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-wearly-gray-400 hover:text-wearly-gray-600"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Search results */}
        <div className="max-h-96 overflow-y-auto">
          {query.trim().length >= 2 && results.length === 0 && (
            <div className="p-6 text-center text-wearly-gray-500">
              No results found for "{query}"
            </div>
          )}

          {results.length > 0 && (
            <div className="p-2">
              {results.map((result, index) => (
                <button
                  key={result.item.id}
                  onClick={() => handleResultClick(result)}
                  className="w-full text-left p-3 rounded-lg hover:bg-wearly-gray-50
                    flex items-center justify-between group transition-colors"
                >
                  <div className="flex-1">
                    <div className="font-medium text-wearly-gray-900 mb-1">
                      {result.item.title}
                    </div>
                    <div className="text-sm text-wearly-gray-600 line-clamp-2">
                      {result.item.description}
                    </div>
                    <div className="text-xs text-wearly-gray-400 mt-1">
                      {result.item.section}
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-wearly-gray-400 group-hover:text-wearly-orange transition-colors"
                  />
                </button>
              ))}
            </div>
          )}

          {query.trim().length < 2 && (
            <div className="p-6 text-center text-wearly-gray-500">
              <Search size={32} className="mx-auto mb-3 text-wearly-gray-300" />
              <p>Start typing to search the documentation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}