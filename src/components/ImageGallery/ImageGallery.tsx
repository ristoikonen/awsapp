//import React from 'react';

// 1. Define the TypeScript contract for your cloud image metadata
export interface CloudImage {
  id: string;
  url: string;        // Secure CDN or storage URL (e.g., Cloudinary, S3)
  gmurl: string;        // Google map link
  caption: string;    // User-facing description
  uploadedBy?: string; // Optional metadata
  createdAt?: string;  // Optional timestamp
}

interface ImageGalleryProps {
  images: CloudImage[];
  isLoading?: boolean;
}

export default function ImageGallery({ images, isLoading = false }: ImageGalleryProps) {
  // 2. Handle the loading state gracefully
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // 3. Handle empty cloud storage states
  if (images.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <p className="text-gray-500">No cloud images found in this gallery.</p>
      </div>
    );
  }

  // 4. Render the responsive image grid with metadata overlays
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {images.map((image) => (
        <div 
          key={image.id} 
          className="group relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl"
        >
          {/* Image Container */}
          <div className="aspect-square w-full overflow-hidden bg-gray-200">
            <img
              src={image.url}
              alt={image.caption}
              loading="lazy" // Native browser performance boost
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Metadata Footer Panel */}
          <div className="p-4 bg-white">
            <p className="font-medium text-gray-800 line-clamp-2 text-sm">
              {image.caption}
            </p>
            
            {/* Optional Metadata Display */}
            {(image.uploadedBy || image.createdAt) && (
              <div className="mt-2 flex items-center justify-between text-xs text-gray-400 border-t border-gray-50 pt-2">
                {image.uploadedBy && <span>By {image.uploadedBy}</span>}
                {image.createdAt && <span>{new Date(image.createdAt).toLocaleDateString()}</span>}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
