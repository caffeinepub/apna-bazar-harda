import { Leaf, Users, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{
              background: 'oklch(0.94 0.05 255)',
              color: 'oklch(0.28 0.18 255)',
            }}
          >
            Our Story
          </span>
          <h2 className="section-title font-display mb-4">About Us</h2>
          <div
            className="w-16 h-1 rounded-full mx-auto"
            style={{ background: 'oklch(0.42 0.18 255)' }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-3xl"
              style={{ background: 'oklch(0.94 0.05 255)' }}
              aria-hidden="true"
            />
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src="/assets/generated/gallery-aisle.dim_600x400.png"
                alt="Apna Bazar Harda store interior with well-stocked aisles"
                className="w-full h-80 lg:h-96 object-cover"
              />
              {/* Floating badge */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-2xl p-4 backdrop-blur-sm border border-white/30"
                style={{ background: 'oklch(0.28 0.18 255 / 0.90)' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'oklch(0.94 0.05 255)' }}
                  >
                    <Award className="w-5 h-5" style={{ color: 'oklch(0.28 0.18 255)' }} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Trusted Since Day One</div>
                    <div className="text-white/70 text-xs">Serving Harda with pride</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <h3
              className="font-display text-2xl md:text-3xl font-bold leading-snug"
              style={{ color: 'oklch(0.18 0.02 255)' }}
            >
              One of the Best Grocery Destinations in{' '}
              <span style={{ color: 'oklch(0.42 0.18 255)' }}>Harda, Madhya Pradesh</span>
            </h3>

            <p className="text-base leading-relaxed" style={{ color: 'oklch(0.40 0.04 255)' }}>
              Welcome to <strong>Apna Bazar Harda</strong> — your neighbourhood supermarket and hypermarket
              right in the heart of Harda, Madhya Pradesh. We are committed to making everyday shopping
              a pleasant, affordable, and convenient experience for every family in our community.
            </p>

            <p className="text-base leading-relaxed" style={{ color: 'oklch(0.40 0.04 255)' }}>
              From fresh <strong>grocery staples</strong> and wholesome <strong>dairy products</strong> to
              essential <strong>kitchen items</strong> and <strong>daily household essentials</strong> —
              we stock everything your home needs under one roof. Our shelves are filled with a wide
              variety of trusted brands at prices that respect your budget.
            </p>

            <p className="text-base leading-relaxed" style={{ color: 'oklch(0.40 0.04 255)' }}>
              We take pride in serving local families and daily shoppers with warmth, honesty, and
              dedication. At Apna Bazar Harda, you are not just a customer — you are family.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: Leaf, label: 'Fresh Products Daily' },
                { icon: Users, label: 'Family-Friendly Store' },
                { icon: Award, label: '4.5 Star Rated' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
                  style={{
                    background: 'oklch(0.94 0.05 255)',
                    borderColor: 'oklch(0.88 0.07 255)',
                    color: 'oklch(0.28 0.18 255)',
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
