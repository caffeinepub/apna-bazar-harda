import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'shadow-hero'
          : ''
      }`}
      style={{ background: 'oklch(0.28 0.18 255)' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
            aria-label="Apna Bazar Harda - Home"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white/30 flex-shrink-0 bg-white/10">
              <img
                src="/assets/generated/logo-icon.dim_256x256.png"
                alt="Apna Bazar Harda Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <span className="block text-white font-display font-bold text-base md:text-lg leading-tight">
                Apna Bazar
              </span>
              <span className="block text-white/70 text-xs font-medium tracking-widest uppercase">
                Harda
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-white/85 hover:text-white text-sm font-medium rounded-md hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#contact')}
              className="flex items-center gap-2 bg-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-blue-50 transition-all duration-200 shadow-sm"
              style={{ color: 'oklch(0.28 0.18 255)' }}
            >
              <ShoppingCart className="w-4 h-4" />
              Visit Us
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/20 py-4 pb-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-white/85 hover:text-white text-sm font-medium rounded-md hover:bg-white/10 transition-all duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-4">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full flex items-center justify-center gap-2 bg-white font-semibold text-sm px-5 py-3 rounded-full hover:bg-blue-50 transition-all duration-200"
                style={{ color: 'oklch(0.28 0.18 255)' }}
              >
                <ShoppingCart className="w-4 h-4" />
                Visit Us Today
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
