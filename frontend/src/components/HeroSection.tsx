import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const handleScrollDown = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVisitUs = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/hero-banner.dim_1440x600.png')`,
        }}
        aria-hidden="true"
      />

      {/* Gradient Overlay — Royal Blue */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, oklch(0.22 0.20 255 / 0.92) 0%, oklch(0.38 0.20 255 / 0.80) 50%, oklch(0.22 0.20 255 / 0.88) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div
        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'oklch(0.75 0.18 255)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10"
        style={{ background: 'oklch(0.75 0.18 255)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Harda, Madhya Pradesh
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Apna Bazar Harda
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 font-semibold text-white/90">
            – Your Trusted Supermarket
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/85 font-medium mb-10 tracking-wide">
          Quality Products • Affordable Prices • Friendly Service
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { value: '4.5★', label: 'Star Rating' },
            { value: '100+', label: 'Happy Customers' },
            { value: 'Daily', label: 'Open 7 Days' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 text-center"
            >
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/70 font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleVisitUs}
            className="group inline-flex items-center gap-3 bg-white font-bold text-base px-8 py-4 rounded-full shadow-hero hover:shadow-card-hover transition-all duration-300 hover:scale-105"
            style={{ color: 'oklch(0.28 0.18 255)' }}
          >
            Visit Us Today
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
              style={{ background: 'oklch(0.94 0.05 255)' }}
            >
              →
            </span>
          </button>
          <button
            onClick={handleScrollDown}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            Learn More
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80L60 69.3C120 58.7 240 37.3 360 32C480 26.7 600 37.3 720 42.7C840 48 960 48 1080 42.7C1200 37.3 1320 26.7 1380 21.3L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="oklch(0.99 0 0)"
          />
        </svg>
      </div>
    </div>
  );
}
