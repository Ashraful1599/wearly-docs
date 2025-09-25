import { useState } from 'react'

export default function ImageGallery({ images, title, description }) {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="space-y-6">
      {title && <h3 className="text-xl font-semibold text-gray-900">{title}</h3>}
      {description && <p className="text-gray-600">{description}</p>}

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden
              hover:ring-2 hover:ring-orange-500 transition-all duration-200 group shadow-sm hover:shadow-md"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20
              transition-opacity duration-200 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium
                bg-black bg-opacity-50 px-3 py-1 rounded-full">
                Click to enlarge
              </span>
            </div>
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <p className="text-white text-xs font-medium truncate">{image.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
             onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-6xl max-h-full bg-white rounded-lg overflow-hidden">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain"
            />

            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white w-8 h-8
                rounded-full hover:bg-opacity-70 transition-colors flex items-center justify-center"
            >
              ✕
            </button>

            {/* Caption */}
            {selectedImage.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t">
                <p className="text-gray-900 font-medium">{selectedImage.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}