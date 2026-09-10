import React from 'react';
import { 
  PhoneCall, 
  Palette, 
  Code2, 
  Rocket, 
  Video, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

interface ProcessSectionProps {
  onOpenHireModal: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenHireModal }) => {
  const steps = [
    {
      step: '01',
      title: 'Free 15-Min Strategy Call',
      desc: 'We discuss your business model, customer pain points, preferred design aesthetic, and high-impact conversion features.',
      icon: PhoneCall,
      highlight: 'Zero obligation'
    },
    {
      step: '02',
      title: 'Interactive Design Prototype',
      desc: 'Within 48 hours, I present a clickable visual layout mockup tailored to your brand colors and catalog.',
      icon: Palette,
      highlight: 'Unlimited revisions'
    },
    {
      step: '03',
      title: 'Fast Development & Admin Setup',
      desc: 'Full-stack engineering with mobile responsiveness, WhatsApp integration, and your custom client Admin Panel.',
      icon: Code2,
      highlight: 'Clean TypeScript'
    },
    {
      step: '04',
      title: 'Local SEO & Live Launch',
      desc: 'We link your custom domain, setup Google My Business map schemas, test speeds, and go live officially!',
      icon: Rocket,
      highlight: '95+ Google Score'
    },
    {
      step: '05',
      title: 'Video Training & VIP Support',
      desc: 'A personalized 1-on-1 walkthrough showing how to manage your Admin Panel, plus 1 year priority WhatsApp support.',
      icon: Video,
      highlight: '365 Days Support'
    }
  ];

  return (
    <section id="process-section" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8C4A27]/10 border border-[#8C4A27]/25 text-[#8C4A27] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#8C4A27]" />
            <span>Smooth & Transparent Delivery</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1C1917] font-['Outfit'] tracking-tight break-words">
            How We Build Your Business Website in 5 Simple Steps
          </h2>

          <p className="text-sm sm:text-base text-[#57534E]">
            From our initial WhatsApp chat to your official Google launch, every step is streamlined, fast, and stress-free.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-5 rounded-2xl bg-white border border-[#E0D5C7] hover:border-[#8C4A27] transition-all flex flex-col justify-between space-y-3 group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#D5C6B3] group-hover:text-[#8C4A27] font-mono transition-colors">
                    {item.step}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] group-hover:bg-[#8C4A27] text-[#57534E] group-hover:text-white flex items-center justify-center transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-[#1C1917] font-['Outfit']">{item.title}</h4>
                  <p className="text-xs text-[#57534E] leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-2 border-t border-[#E5DDD0]">
                  <span className="text-[10px] font-bold text-[#8C4A27] bg-[#8C4A27]/10 px-2 py-0.5 rounded border border-[#8C4A27]/20">
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action */}
        <div className="text-center">
          <button
            onClick={onOpenHireModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#1C1917] hover:bg-[#8C4A27] text-white font-bold text-sm shadow-md hover:scale-[1.02] transition-all active:scale-95"
          >
            <span>Start Step 1: Book Free 15-Min Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

