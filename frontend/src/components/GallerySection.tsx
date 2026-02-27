import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    src: '/assets/generated/gallery-produce.dim_600x400.png',
    alt: 'Fresh vegetables and fruits neatly arranged on supermarket shelves',
    label: 'Fresh Produce',
  },
  {
    src: '/assets/generated/gallery-aisle.dim_600x400.png',
    alt: 'Wide store aisle with shelves stocked with packaged grocery products',
    label: 'Store Aisles',
  },
  {
    src: '/assets/generated/gallery-billing.dim_600x400.png',
    alt: 'Modern fast billing counter with cashier and blue-themed signage',
    label: 'Billing Counter',
  },
  {
    src: '/assets/generated/gallery-trolleys.dim_600x400.png',
    alt: 'Shopping trolleys lined up at the entrance of the supermarket',
    label: 'Trolley Area',
  },
  {
    src: '/assets/generated/gallery-dairy.dim_600x400.png',
    alt: 'Dairy and refrigerated products section with glass-door fridges',
    label: 'Dairy Section',
  },
  {
    src: '/assets/generated/gallery-kitchen.dim_600x400.png',
    alt: 'Kitchen items and household essentials display shelf',
    label: 'Kitchen & Household',
  },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{
              background: 'oklch(0.94 0.05 255)',
              color: 'oklch(0.28 0.18 255)',
            }}
          >
            Our Store
          </span>
          <h2 className="section-title font-display mb-4">Gallery</h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mb-6"
            style={{ background: 'oklch(0.42 0.18 255)' }}
          />
          <p className="section-subtitle max-w-2xl mx-auto">
            Take a peek inside Apna Bazar Harda — a clean, spacious, and well-stocked
            supermarket designed for your comfort.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((image, index) => (
            <button
              key={image.label}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ '--tw-ring-color': 'oklch(0.42 0.18 255)' } as React.CSSProperties}
              aria-label={`View ${image.label}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: 'oklch(0.28 0.18 255 / 0.65)' }}
              >
                <ZoomIn className="w-10 h-10 text-white" />
              </div>
              {/* Label Badge */}
              <div
                className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ background: 'oklch(0.28 0.18 255 / 0.85)' }}
              >
                {image.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'oklch(0.10 0.05 255 / 0.95)' }}
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="w-full rounded-2xl shadow-hero"
            />
            {/* Label */}
            <div
              className="absolute bottom-4 left-4 px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{ background: 'oklch(0.28 0.18 255 / 0.85)' }}
            >
              {galleryImages[lightboxIndex].label}
            </div>
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
              style={{ background: 'oklch(0.28 0.18 255 / 0.80)' }}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Prev */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
              style={{ background: 'oklch(0.28 0.18 255 / 0.80)' }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {/* Next */}
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
              style={{ background: 'oklch(0.28 0.18 255 / 0.80)' }}
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
