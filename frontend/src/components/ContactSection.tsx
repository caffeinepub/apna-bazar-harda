import { MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    lines: ['Apna Bazar Harda', 'Harda, Madhya Pradesh'],
    color: 'oklch(0.42 0.18 255)',
    bg: 'oklch(0.94 0.05 255)',
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['Call us for inquiries', 'Visit us in store'],
    color: 'oklch(0.55 0.18 260)',
    bg: 'oklch(0.95 0.04 260)',
  },
  {
    icon: Clock,
    title: 'Store Hours',
    lines: ['Open Daily', 'Morning to Evening'],
    color: 'oklch(0.65 0.20 55)',
    bg: 'oklch(0.97 0.04 55)',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['Get in touch online', 'We respond promptly'],
    color: 'oklch(0.60 0.18 30)',
    bg: 'oklch(0.96 0.04 30)',
  },
];

export default function ContactSection() {
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
            Find Us
          </span>
          <h2 className="section-title font-display mb-4">Contact & Location</h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mb-6"
            style={{ background: 'oklch(0.42 0.18 255)' }}
          />
          <p className="section-subtitle max-w-2xl mx-auto">
            We're conveniently located in the heart of Harda, Madhya Pradesh.
            Come visit us — we'd love to serve you!
          </p>
        </div>

        {/* Status Badge */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
            style={{
              background: 'oklch(0.94 0.12 145)',
              color: 'oklch(0.30 0.14 145)',
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            Open Daily — Visit Us Today!
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <div
                key={info.title}
                className="bg-white rounded-2xl p-6 shadow-card border text-center"
                style={{ borderColor: 'oklch(0.92 0.04 255)' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: info.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: info.color }} />
                </div>
                <h3
                  className="font-semibold text-sm mb-2"
                  style={{ color: 'oklch(0.18 0.02 255)' }}
                >
                  {info.title}
                </h3>
                {info.lines.map((line) => (
                  <p key={line} className="text-xs" style={{ color: 'oklch(0.50 0.04 255)' }}>
                    {line}
                  </p>
                ))}
              </div>
            );
          })}
        </div>

        {/* Map + CTA */}
        <div className="rounded-3xl overflow-hidden shadow-card-hover border" style={{ borderColor: 'oklch(0.88 0.07 255)' }}>
          {/* Map */}
          <div className="relative h-80 md:h-96 bg-gray-100">
            <iframe
              title="Apna Bazar Harda Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.123456789!2d77.0900!3d22.3400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDIwJzI0LjAiTiA3N8KwMDUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

          {/* CTA Bar */}
          <div
            className="p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: 'oklch(0.28 0.18 255)' }}
          >
            <div>
              <h3 className="text-white font-bold text-lg">Apna Bazar Harda</h3>
              <p className="text-white/70 text-sm mt-0.5">Harda, Madhya Pradesh, India</p>
            </div>
            <a
              href="https://maps.google.com/?q=Harda,Madhya+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-blue-50 transition-all duration-200 shadow-sm flex-shrink-0"
              style={{ color: 'oklch(0.28 0.18 255)' }}
            >
              <ExternalLink className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
