import React from 'react';
import { 
  Star, 
  TrendingUp 
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Rohit Kulkarni',
      business: 'The Daily Grind Artisan Cafe',
      category: 'Cafe & Coffee Roasters',
      city: 'Pune',
      quote: 'We were paying huge 25-30% commissions on delivery apps. The direct WhatsApp QR menu on our website lets college students and locals order directly. Weekend table bookings doubled!',
      metric: '+210% Direct Orders',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      rating: 5
    },
    {
      name: 'Dr. Anand Mehta (MD)',
      business: 'CareWell Multispeciality Clinic',
      category: 'Healthcare & Dental',
      city: 'Delhi NCR',
      quote: 'The Admin Panel is a lifesaver. My clinic receptionist easily adjusts doctor time slots, and patients book consultations online smoothly without clogging our phone lines.',
      metric: '3.4x Pre-booked Patients',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop',
      rating: 5
    },
    {
      name: 'Captain Sandeep Rana',
      business: 'IronPulse 24/7 Fitness Club',
      category: 'Gym & CrossFit Studio',
      city: 'Bengaluru',
      quote: 'The "Claim Free 1-Day Trial Workout" form generates 5 to 10 qualified fitness leads every day. The ROI on our ₹40k Dynamic Website was recovered in just 2 weeks!',
      metric: '+85 New Members/Mo',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop',
      rating: 5
    },
    {
      name: 'Mrs. Radhika Iyer',
      business: 'Little Blooms International Play School',
      category: 'Play School & Daycare',
      city: 'Mumbai',
      quote: 'Parents were impressed by the virtual tour, syllabus details, and safe daycare showcase. We filled all nursery & KG admissions 2 months before the session even started.',
      metric: '100% Batch Full',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
      rating: 5
    },
    {
      name: 'Pooja Narang',
      business: 'Sweet Crust Artisan Bakery',
      category: 'Bakery & Cake Studio',
      city: 'Jaipur',
      quote: 'Our custom designer cake orders skyrocketed! Customers choose cake themes from our gallery and click WhatsApp with their flavor and name pre-filled. Super seamless.',
      metric: '320+ Custom Cakes/Mo',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
      rating: 5
    },
    {
      name: 'Harpreet Singh',
      business: 'SpeedTech Multi-Brand Auto Care',
      category: 'Auto Garage & Car Spa',
      city: 'Ludhiana',
      quote: 'The service package calculator established complete pricing transparency for car owners. Ceramic coating bookings and doorstep pickup requests went up by 175%.',
      metric: '+175% Maintenance Bookings',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      rating: 5
    }
  ];

  return (
    <section id="testimonials-section" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8C4A27]/10 border border-[#8C4A27]/25 text-[#8C4A27] text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-[#8C4A27] fill-[#8C4A27]" />
            <span>Proven Real-World Results</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1C1917] font-['Outfit'] tracking-tight break-words">
            Trusted by Passionate Local Business Owners
          </h2>

          <p className="text-sm sm:text-base text-[#57534E]">
            Hear from business founders who transformed their local presence, eliminated third-party commissions, and scaled customer inquiries.
          </p>
        </div>

        {/* Testimonials 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-[#E0D5C7] hover:border-[#8C4A27] transition-all flex flex-col justify-between space-y-4 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#8C4A27]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#8C4A27]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {t.metric}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-3 border-t border-[#E5DDD0] flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#D5C6B3]"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-[#1C1917] truncate font-['Outfit']">{t.name}</h4>
                  <p className="text-[11px] text-[#8C4A27] font-semibold truncate">{t.business}</p>
                  <p className="text-[10px] text-[#78716C]">{t.category} • {t.city}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

