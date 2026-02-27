import { Star, Tag, ShoppingBag, Smile, ShoppingCart, Zap } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: '4.5 Star Rated',
    description: 'Consistently rated 4.5 stars by 100+ happy customers for quality and service.',
    color: 'oklch(0.75 0.16 85)',
    bg: 'oklch(0.97 0.04 85)',
  },
  {
    icon: Tag,
    title: 'Affordable Pricing',
    description: 'Everyday low prices on all products — quality shopping that fits every budget.',
    color: 'oklch(0.42 0.18 255)',
    bg: 'oklch(0.94 0.05 255)',
  },
  {
    icon: ShoppingBag,
    title: 'Wide Range of Products',
    description: 'Thousands of products across grocery, dairy, kitchen, and household categories.',
    color: 'oklch(0.55 0.18 260)',
    bg: 'oklch(0.95 0.04 260)',
  },
  {
    icon: Smile,
    title: 'Friendly Staff',
    description: 'Our warm and helpful team is always ready to assist you with a smile.',
    color: 'oklch(0.60 0.18 30)',
    bg: 'oklch(0.96 0.04 30)',
  },
  {
    icon: ShoppingCart,
    title: 'Easy Trolley Shopping',
    description: 'Spacious aisles and well-maintained trolleys for a comfortable shopping experience.',
    color: 'oklch(0.42 0.18 255)',
    bg: 'oklch(0.94 0.05 255)',
  },
  {
    icon: Zap,
    title: 'Fast Billing',
    description: 'Dedicated fast billing counters to get you checked out quickly and efficiently.',
    color: 'oklch(0.65 0.20 55)',
    bg: 'oklch(0.97 0.04 55)',
  },
];

export default function WhyChooseUsSection() {
  return (
    <div
      className="section-padding"
      style={{ background: 'oklch(0.97 0.02 255)' }}
    >
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
            Our Advantages
          </span>
          <h2 className="section-title font-display mb-4">Why Choose Us?</h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mb-6"
            style={{ background: 'oklch(0.42 0.18 255)' }}
          />
          <p className="section-subtitle max-w-2xl mx-auto">
            We go above and beyond to make your shopping experience at Apna Bazar Harda
            truly exceptional — every single visit.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border"
                style={{ borderColor: 'oklch(0.92 0.04 255)' }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: feature.bg }}
                >
                  <Icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>

                {/* Content */}
                <h3
                  className="font-display text-lg font-bold mb-2"
                  style={{ color: 'oklch(0.18 0.02 255)' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.45 0.04 255)' }}>
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="mt-5 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                  style={{ background: feature.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
