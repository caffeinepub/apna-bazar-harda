import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Harda',
    rating: 5,
    quote:
      'Apna Bazar Harda is my go-to supermarket! The variety of products is amazing and the prices are very reasonable. The staff is always helpful and the store is clean and well-organized.',
    initials: 'PS',
    color: 'oklch(0.42 0.18 255)',
  },
  {
    name: 'Ramesh Patel',
    location: 'Harda',
    rating: 5,
    quote:
      'I love shopping here! The billing counter is super fast and I never have to wait long. They have all the daily essentials I need and the dairy section is always fresh.',
    initials: 'RP',
    color: 'oklch(0.55 0.18 260)',
  },
  {
    name: 'Sunita Verma',
    location: 'Harda',
    rating: 4,
    quote:
      'Best supermarket in Harda! The trolley system makes shopping so convenient. I can find everything from groceries to kitchen items in one place at affordable prices.',
    initials: 'SV',
    color: 'oklch(0.60 0.18 30)',
  },
  {
    name: 'Anil Gupta',
    location: 'Harda',
    rating: 5,
    quote:
      'The staff at Apna Bazar are truly friendly and welcoming. They helped me find exactly what I needed. The store has a great selection of brands and the quality is always top-notch.',
    initials: 'AG',
    color: 'oklch(0.65 0.20 55)',
  },
  {
    name: 'Meena Joshi',
    location: 'Harda',
    rating: 5,
    quote:
      'Shopping at Apna Bazar feels like visiting a family store. The prices are the best in town and they always have fresh produce. Highly recommend to all families in Harda!',
    initials: 'MJ',
    color: 'oklch(0.42 0.18 255)',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          style={{
            color: i < rating ? 'oklch(0.75 0.16 85)' : 'oklch(0.85 0.02 255)',
            fill: i < rating ? 'oklch(0.75 0.16 85)' : 'transparent',
          }}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <div
      className="section-padding"
      style={{ background: 'oklch(0.25 0.18 255)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{
              background: 'oklch(1 0 0 / 0.15)',
              color: 'oklch(1 0 0)',
            }}
          >
            Happy Customers
          </span>
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-white mb-4"
          >
            What Our Customers Say
          </h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mb-6"
            style={{ background: 'oklch(0.70 0.16 255)' }}
          />
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from the families and shoppers
            who trust Apna Bazar Harda every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-white rounded-2xl p-7 shadow-card flex flex-col gap-4 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Quote Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'oklch(0.94 0.05 255)' }}
              >
                <Quote className="w-5 h-5" style={{ color: testimonial.color }} />
              </div>

              {/* Quote Text */}
              <p
                className="text-sm leading-relaxed flex-1 italic"
                style={{ color: 'oklch(0.40 0.04 255)' }}
              >
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: 'oklch(0.92 0.04 255)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: testimonial.color }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: 'oklch(0.18 0.02 255)' }}
                  >
                    {testimonial.name}
                  </div>
                  <div className="text-xs" style={{ color: 'oklch(0.55 0.04 255)' }}>
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Banner */}
        <div
          className="mt-12 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left"
          style={{ background: 'oklch(1 0 0 / 0.10)', border: '1px solid oklch(1 0 0 / 0.20)' }}
        >
          <div>
            <div className="text-5xl font-bold text-white font-display">4.5</div>
            <div className="flex justify-center md:justify-start mt-1">
              <StarRating rating={5} />
            </div>
          </div>
          <div
            className="hidden md:block w-px h-16 self-center"
            style={{ background: 'oklch(1 0 0 / 0.25)' }}
          />
          <div>
            <div className="text-white font-semibold text-lg">Overall Rating</div>
            <div className="text-white/70 text-sm mt-1">Based on 100+ customer reviews</div>
          </div>
          <div
            className="hidden md:block w-px h-16 self-center"
            style={{ background: 'oklch(1 0 0 / 0.25)' }}
          />
          <div>
            <div className="text-white font-semibold text-lg">Trusted by Families</div>
            <div className="text-white/70 text-sm mt-1">Serving Harda, Madhya Pradesh</div>
          </div>
        </div>
      </div>
    </div>
  );
}
