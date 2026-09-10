import React, { useState, useRef } from 'react';
import { pricingPlans, clientFaqs } from '../data/pricingData';
import { 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Flame, 
  ChevronDown, 
  ChevronUp, 
  Settings, 
  Lock
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';

interface PricingSectionProps {
  onOpenHireModal: (plan: 'classic' | 'dynamic') => void;
  onScrollToSection: (sectionId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ 
  onOpenHireModal
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxBg = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section 
      ref={containerRef}
      id="pricing-section" 
      className="py-12 sm:py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background warm parallax glow */}
      <motion.div 
        style={{ y: parallaxBg }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[800px] h-[300px] sm:h-[500px] bg-gradient-to-b from-[#8C4A27]/8 via-[#D49B5B]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-3 px-1"
        >
          <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-rose-600" />
            <span>Special Promotional Pricing</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] font-['Outfit'] tracking-tight leading-tight sm:leading-[1.15] break-words">
            Transparent Investment. Zero Hidden Costs.
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#57534E]">
            High-converting modern web design with massive limited-time savings. No recurring developer dependencies—you own 100% of your website and admin code.
          </p>
        </motion.div>

        {/* Pricing Cards Grid (Classic ₹15k & Dynamic ₹40k) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
          
          {pricingPlans.map((plan, idx) => {
            const isDynamic = plan.id === 'dynamic';

            return (
              <motion.div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -4 }}
                className={`relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-300 ${
                  isDynamic
                    ? 'bg-white border-2 border-[#8C4A27] shadow-xl shadow-[#8C4A27]/10'
                    : 'bg-white border border-[#E0D5C7] shadow-md'
                }`}
              >
                
                {/* Popular / Best Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className={`px-3.5 sm:px-4 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs flex items-center gap-1.5 whitespace-nowrap ${
                      isDynamic 
                        ? 'bg-[#8C4A27] text-white' 
                        : 'bg-[#1C1917] text-white'
                    }`}>
                      {isDynamic ? <Sparkles className="w-3.5 h-3.5 text-[#D49B5B]" /> : <Zap className="w-3.5 h-3.5 text-amber-300" />}
                      <span>{plan.badge}</span>
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="space-y-4 pt-2">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] font-['Outfit']">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#8C4A27] font-semibold mt-1">
                      {plan.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-[#57534E] leading-relaxed bg-[#FAF7F2] p-3 rounded-xl border border-[#E5DDD0]">
                    {plan.targetAudience}
                  </p>

                  {/* Price Tag with Strikethrough & Savings */}
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAF7F2] border border-[#E0D5C7] flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] sm:text-xs text-[#78716C] block font-medium">One-Time Project Investment</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-black text-[#1C1917] font-['Outfit']">
                          ₹{plan.discountedPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-rose-600 line-through">
                          ₹{plan.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-rose-50 text-rose-700 px-2 sm:px-2.5 py-1 rounded-lg border border-rose-200 inline-block">
                        Save ₹{(plan.originalPrice - plan.discountedPrice).toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-emerald-800 font-semibold block mt-1">
                        ⏱️ Delivery in {plan.deliveryTime}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Admin Panel Highlight Box */}
                  {isDynamic && (
                    <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F5EFEB] border border-[#D5C6B3] space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#5E2F16]">
                        <Settings className="w-4 h-4 text-[#8C4A27]" />
                        <span>Included: Client Admin Panel Access</span>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-[#44403C]">
                        <li className="flex items-center gap-1.5">
                          <span className="text-[#8C4A27] font-bold">✓</span> Change menu & service prices
                        </li>
                        <li className="flex items-center gap-1.5">
                          <span className="text-[#8C4A27] font-bold">✓</span> View daily customer bookings
                        </li>
                        <li className="flex items-center gap-1.5">
                          <span className="text-[#8C4A27] font-bold">✓</span> Upload photos & offers in 5 sec
                        </li>
                        <li className="flex items-center gap-1.5">
                          <span className="text-[#8C4A27] font-bold">✓</span> Works seamlessly on mobile phone
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* Checklist Features */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
                      What is included:
                    </p>
                    <ul className="space-y-2">
                      {plan.features.map((feat, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-2 text-xs">
                          {feat.included ? (
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${feat.highlight ? 'text-[#8C4A27]' : 'text-emerald-700'}`} />
                          ) : (
                            <XCircle className="w-4 h-4 text-[#A8A29E] shrink-0 mt-0.5" />
                          )}
                          <span className={`${feat.included ? (feat.highlight ? 'text-[#1C1917] font-bold' : 'text-[#44403C]') : 'text-[#A8A29E] line-through'}`}>
                            {feat.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card CTA */}
                <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-[#E5DDD0] space-y-3">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    id={`pricing-select-btn-${plan.id}`}
                    onClick={() => onOpenHireModal(plan.id as 'classic' | 'dynamic')}
                    className={`w-full py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 ${
                      isDynamic
                        ? 'bg-[#1C1917] hover:bg-[#8C4A27] text-white shadow-md'
                        : 'bg-[#FAF7F2] hover:bg-[#1C1917] hover:text-white text-[#1C1917] border border-[#D5C6B3]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-[#78716C] flex-wrap">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                      100% Satisfaction Guarantee
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-[#8C4A27]" />
                      30% Milestone Starter
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Feature Comparison Matrix Quick Drawer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white p-4 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E0D5C7] shadow-xs"
        >
          <h4 className="text-base sm:text-lg font-bold text-[#1C1917] font-['Outfit'] mb-3 sm:mb-4 text-center">
            Side-by-Side Plan Comparison
          </h4>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#44403C] min-w-[500px]">
              <thead className="bg-[#FAF7F2] text-[#57534E] uppercase text-[10px] border-b border-[#E0D5C7]">
                <tr>
                  <th className="p-3">Core Deliverable</th>
                  <th className="p-3 text-center text-[#8C4A27] font-bold">Classic (₹15,000)</th>
                  <th className="p-3 text-center text-[#1C1917] font-bold">Dynamic + Admin (₹40,000)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DDD0]">
                <tr>
                  <td className="p-3 font-semibold text-[#1C1917]">Custom Responsive Pages</td>
                  <td className="p-3 text-center">5 Pages (Fast Static)</td>
                  <td className="p-3 text-center text-[#8C4A27] font-semibold">Unlimited Dynamic Pages</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#1C1917]">Client Admin Panel (Self-Update)</td>
                  <td className="p-3 text-center text-[#A8A29E]">❌ (Developer changes)</td>
                  <td className="p-3 text-center text-emerald-800 font-bold">✅ Yes (Full Mobile Admin)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#1C1917]">Booking / Slot Calendar Engine</td>
                  <td className="p-3 text-center">Direct WhatsApp Form</td>
                  <td className="p-3 text-center text-emerald-800 font-bold">✅ Real-time Slot Engine + CRM</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#1C1917]">Local Google Maps SEO Dominator</td>
                  <td className="p-3 text-center">Basic Meta Setup</td>
                  <td className="p-3 text-center text-emerald-800 font-bold">✅ Advanced Schema & Keywords</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-[#1C1917]">Support & Video Tutorial</td>
                  <td className="p-3 text-center">3 Months Email/Chat</td>
                  <td className="p-3 text-center text-[#8C4A27] font-bold">1 Year Priority WhatsApp VIP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Client FAQs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-3 sm:space-y-4 pt-2 sm:pt-4"
        >
          <div className="text-center space-y-1 mb-4 sm:mb-6">
            <h4 className="text-lg sm:text-2xl font-bold text-[#1C1917] font-['Outfit']">
              Frequently Asked Questions by Business Owners
            </h4>
            <p className="text-xs text-[#78716C]">Everything you need to know before hiring me</p>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {clientFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl sm:rounded-2xl bg-white border border-[#E0D5C7] overflow-hidden transition-colors shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-3.5 sm:p-5 text-left flex items-center justify-between gap-3 text-xs sm:text-base font-bold text-[#1C1917] hover:text-[#8C4A27] transition-colors"
                  >
                    <span className="break-words">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#8C4A27] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#78716C] shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-3.5 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#57534E] leading-relaxed border-t border-[#E5DDD0] pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
