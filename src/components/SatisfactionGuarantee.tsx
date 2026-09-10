import React from 'react';
import { 
  ShieldCheck, 
  RotateCcw, 
  Zap, 
  Clock, 
  Headphones, 
  HeartHandshake,
  Lock
} from 'lucide-react';

export const SatisfactionGuarantee: React.FC = () => {
  const guaranteePoints = [
    {
      icon: RotateCcw,
      title: 'Unlimited Prototype Revisions',
      desc: 'We do not begin coding until you are 100% in love with your website visual design prototype.'
    },
    {
      icon: Clock,
      title: 'Guaranteed 5-10 Days Turnaround',
      desc: 'Your time is valuable. We launch on time with zero unnecessary delays.'
    },
    {
      icon: Zap,
      title: 'Blazing Fast Speed Guarantee',
      desc: 'Optimized for 95+ Google PageSpeed score and instant <1 second load on mobile 4G/5G.'
    },
    {
      icon: Lock,
      title: 'Zero Hidden Fees or Lock-in',
      desc: 'You own 100% of your source code, domain, and admin credentials forever.'
    },
    {
      icon: Headphones,
      title: '365 Days Dedicated Support',
      desc: 'Direct WhatsApp assistance whenever you have questions or need technical updates.'
    },
    {
      icon: HeartHandshake,
      title: '100% Money-Back Milestone Policy',
      desc: 'If you are not satisfied with the initial design concept, you get a full refund of your initial deposit.'
    }
  ];

  return (
    <section id="guarantee-section" className="py-16 md:py-24 bg-[#F5EFEB]/70 relative border-y border-[#E0D5C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8C4A27]/10 border border-[#8C4A27]/25 text-[#8C4A27] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8C4A27]" />
            <span>Zero-Risk Client Promise</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1C1917] font-['Outfit'] tracking-tight break-words">
            100% Customer Satisfaction Guarantee
          </h2>

          <p className="text-sm sm:text-base text-[#57534E]">
            Hiring a freelance web developer shouldn't feel like a gamble. My ironclad satisfaction policy ensures you get a website you are truly proud of.
          </p>
        </div>

        {/* 6 Guarantee Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {guaranteePoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E0D5C7] hover:border-[#8C4A27] transition-all space-y-3 group shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#8C4A27]/10 border border-[#8C4A27]/20 flex items-center justify-center text-[#8C4A27] group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#1C1917] font-['Outfit']">{item.title}</h4>
                <p className="text-xs text-[#57534E] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Seal Banner */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-white border border-[#8C4A27]/30 text-center space-y-2 shadow-sm">
          <div className="flex items-center justify-center gap-2 text-[#8C4A27] font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-[#8C4A27]" />
            <span>The Developer Satisfaction Promise</span>
          </div>
          <p className="text-xs text-[#57534E] max-w-xl mx-auto leading-relaxed">
            "I build long-term relationships with business owners. My goal isn't just delivering code, but ensuring your website brings in real paying inquiries from day one."
          </p>
        </div>

      </div>
    </section>
  );
};

