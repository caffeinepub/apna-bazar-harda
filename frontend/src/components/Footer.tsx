import { MapPin, Phone, Clock, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const categories = [
  'Grocery & Staples',
  'Dairy Products',
  'Fresh Produce',
  'Kitchen Essentials',
  'Household Items',
  'Beverages',
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'apna-bazar-harda'
  );

  return (
    <footer
      className="text-white"
      style={{ background: 'oklch(0.18 0.18 255)' }}
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-full overflow-hidden border-2 flex-shrink-0"
                style={{ borderColor: 'oklch(0.50 0.18 255)' }}
              >
                <img
                  src="/assets/generated/logo-icon.dim_256x256.png"
                  alt="Apna Bazar Harda Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-display font-bold text-lg leading-tight">Apna Bazar</div>
                <div className="text-white/60 text-xs tracking-widest uppercase">Harda</div>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Your trusted neighbourhood supermarket in Harda, Madhya Pradesh.
              Quality products, affordable prices, and friendly service — every day.
            </p>
            {/* Visit CTA */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="inline-flex items-center gap-2 bg-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-blue-50 transition-all duration-200"
              style={{ color: 'oklch(0.28 0.18 255)' }}
            >
              <MapPin className="w-4 h-4" />
              Visit Us Today
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-widest mb-5 pb-2 border-b"
              style={{ borderColor: 'oklch(0.35 0.18 255)' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/65 hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-widest mb-5 pb-2 border-b"
              style={{ borderColor: 'oklch(0.35 0.18 255)' }}
            >
              Our Products
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <span className="text-white/65 text-sm">{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-widest mb-5 pb-2 border-b"
              style={{ borderColor: 'oklch(0.35 0.18 255)' }}
            >
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: 'oklch(0.65 0.16 255)' }}
                />
                <span className="text-white/65 text-sm">
                  Apna Bazar Harda,<br />Harda, Madhya Pradesh
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: 'oklch(0.65 0.16 255)' }}
                />
                <span className="text-white/65 text-sm">Visit us in store</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: 'oklch(0.65 0.16 255)' }}
                />
                <span className="text-white/65 text-sm">Open Daily<br />Morning to Evening</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: 'oklch(0.28 0.18 255)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Apna Bazar Harda. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with{' '}
            <Heart className="w-3 h-3 text-red-400 fill-red-400 mx-0.5" />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
