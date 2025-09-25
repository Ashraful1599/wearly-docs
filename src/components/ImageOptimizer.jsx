import { useState } from 'react'

export default function ImageOptimizer({ src, alt, className, ...props }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className={`relative ${className || ''}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-wearly-gray-100 animate-pulse rounded-lg" />
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className || ''}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
        {...props}
      />
      {error && (
        <div className="absolute inset-0 bg-wearly-gray-100 flex items-center justify-center rounded-lg">
          <span className="text-wearly-gray-400 text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  )
}