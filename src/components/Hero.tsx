import React, { useRef } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Coffee, 
  Stethoscope, 
  Dumbbell, 
  Scissors, 
  GraduationCap, 
  Cake, 
  Wrench, 
  BookOpen, 
  Flame, 
  Star, 
  MessageSquare
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { IndustryCategory } from '../types';

interface HeroProps {
  onSelectCategory: (category: IndustryCategory) => void;
  onOpenHireModal: (plan?: 'classic' | 'dynamic') => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onSelectCategory, 
  onOpenHireModal, 
  onScrollToSection 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const parallaxBg = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const parallaxText = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const parallaxCards = useTransform(scrollYProgress, [0, 1], [0, 25]);

  const quickCategories = [
    { id: 'cafe' as IndustryCategory, label: 'Cafes', icon: Coffee },
    { id: 'restaurant' as IndustryCategory, label: 'Restaurants', icon: Flame },
    { id: 'clinic' as IndustryCategory, label: 'Clinics & Doctors', icon: Stethoscope },
    { id: 'bakery' as IndustryCategory, label: 'Bakeries', icon: Cake },
    { id: 'gym' as IndustryCategory, label: 'Gym & Fitness', icon: Dumbbell },
    { id: 'salon' as IndustryCategory, label: 'Salons & Spa', icon: Scissors },
    { id: 'school' as IndustryCategory, label: 'Play Schools', icon: GraduationCap },
    { id: 'garage' as IndustryCategory, label: 'Car Garages', icon: Wrench },
    { id: 'tuition' as IndustryCategory, label: 'Tuition & Coaching', icon: BookOpen },
    { id: 'tailor' as IndustryCategory, label: 'Tailors & Boutiques', icon: Sparkles },
  ];

  return (
    <section 
      ref={containerRef}
      id="hero-section" 
      className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle Warm Parallax Background Glows */}
      <motion.div 
        style={{ y: parallaxBg }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[250px] sm:h-[380px] bg-gradient-to-tr from-[#8C4A27]/10 via-[#D49B5B]/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
      />
      <motion.div 
        style={{ y: parallaxBg }}
        className="absolute top-10 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#5E2F16]/5 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Special Price Offer Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-5 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white border border-[#E0D5C7] text-[11px] sm:text-xs font-semibold text-[#57534E] shadow-xs max-w-full">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shrink-0 animate-pulse"></span>
            <span className="truncate">Dedicated Full-Stack Freelance Developer for Local Businesses</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8C4A27]/10 border border-[#8C4A27]/25 text-[#8C4A27] text-[11px] sm:text-xs font-bold shadow-xs">
            <Flame className="w-3.5 h-3.5 text-[#8C4A27]" />
            <span>March Limited Offer Active</span>
          </div>
        </motion.div>

        {/* Main Headline with Text Entry Animation */}
        <motion.div 
          style={{ y: parallaxText }}
          className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1C1917] font-['Outfit'] leading-[1.2] sm:leading-[1.15] break-words"
          >
            Websites That Turn Walk-Ins & Local Searches Into{' '}
            <span className="text-[#8C4A27] underline decoration-[#8C4A27]/40 decoration-2 underline-offset-4">
              Paying Customers
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xs sm:text-base md:text-lg text-[#57534E] font-normal leading-relaxed max-w-3xl mx-auto px-1 sm:px-2"
          >
            Stop losing customers to competitors. Get a high-speed, mobile-ready website custom built for your business with{' '}
            <strong className="text-[#1C1917] font-semibold">direct WhatsApp leads</strong>,{' '}
            <strong className="text-[#1C1917] font-semibold">Google SEO ranking</strong>, and an{' '}
            <strong className="text-[#8C4A27] font-semibold">Easy Admin Panel</strong> to update prices and photos anytime.
          </motion.p>
        </motion.div>

        {/* Special Pricing Deal Strip (₹15k & ₹40k discounts) with Box Entrance */}
        <motion.div 
          style={{ y: parallaxCards }}
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-6 sm:mt-8 max-w-3xl mx-auto p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-[#E0D5C7] shadow-lg shadow-[#2B1810]/5"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            
            {/* Classic Deal */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="flex items-center gap-3 w-full sm:w-1/2 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#FAF7F2] border border-[#E5DDD0] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#8C4A27]/10 border border-[#8C4A27]/20 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-[#8C4A27]" />
              </div>
              <div className="text-left min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">Classic Web</span>
                  <span className="text-[11px] text-rose-600 line-through font-semibold">₹25,000</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl sm:text-2xl font-black text-[#8C4A27] font-['Outfit']">₹15,000</span>
                  <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-1.5 py-0.5 rounded">Save 40%</span>
                </div>
                <p className="text-[11px] text-[#78716C] truncate">Fast 5-Day Delivery • WhatsApp Leads</p>
              </div>
            </motion.div>

            <div className="hidden sm:block text-[#A8A29E] font-bold text-xs uppercase tracking-wider">OR</div>

            {/* Dynamic Deal + Admin */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="flex items-center gap-3 w-full sm:w-1/2 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#F5EFEB] border border-[#D5C6B3] relative overflow-hidden transition-all"
            >
              <div className="absolute top-0 right-0 bg-[#8C4A27] text-white font-black text-[9px] px-2 py-0.5 rounded-bl uppercase">
                Best Choice
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#1C1917] flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="text-left min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">Dynamic + Admin</span>
                  <span className="text-[11px] text-rose-600 line-through font-semibold">₹50,000</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl sm:text-2xl font-black text-[#1C1917] font-['Outfit']">₹40,000</span>
                  <span className="text-[10px] text-[#8C4A27] font-bold bg-[#8C4A27]/10 px-1.5 py-0.5 rounded">Save ₹10k</span>
                </div>
                <p className="text-[11px] text-[#57534E] font-medium truncate">✨ Full Client Admin Panel Access</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Action Buttons with Stagger */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            id="hero-hire-me-cta"
            onClick={() => onOpenHireModal()}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#1C1917] hover:bg-[#8C4A27] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#1C1917]/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Hire Me for Your Business</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            id="hero-browse-demos-btn"
            onClick={() => onScrollToSection('projects-section')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#1C1917] font-semibold text-sm border border-[#D5C6B3] shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Live Business Demos</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            id="hero-quick-whatsapp"
            href="https://wa.me/917863076114?text=Hi%20Kartik%2C%20I%20want%20to%20discuss%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-sm border border-emerald-300 transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp (+91 78630 76114)</span>
          </motion.a>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#E5DDD0] flex flex-wrap items-center justify-center gap-3 sm:gap-8 text-[11px] sm:text-xs text-[#57534E]"
        >
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span><strong className="text-[#1C1917]">100% Satisfaction</strong> Guaranteed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-[#8C4A27] fill-[#8C4A27] shrink-0" />
            <span><strong className="text-[#1C1917]">5.0 Star Rating</strong> from Local Clients</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#8C4A27] shrink-0" />
            <span><strong className="text-[#1C1917]">Zero Commissions</strong> (Direct Leads)</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Zap className="w-4 h-4 text-amber-600 shrink-0" />
            <span><strong className="text-[#1C1917]">Fast 5-7 Days</strong> Delivery</span>
          </div>
        </motion.div>

        {/* Interactive "Select Your Business" Chips */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-[#78716C] font-bold mb-3 sm:mb-3.5">
            👇 Select Your Business Type to See Instant Live Demos & Features:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-5xl mx-auto">
            {quickCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.id}
                  id={`hero-chip-${cat.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + idx * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    onScrollToSection('projects-section');
                  }}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white hover:bg-[#8C4A27] text-[#44403C] hover:text-white text-[11px] sm:text-xs font-medium border border-[#E0D5C7] hover:border-[#8C4A27] shadow-xs transition-all group"
                >
                  <Icon className="w-3.5 h-3.5 text-[#78716C] group-hover:text-white transition-colors" />
                  <span>{cat.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
