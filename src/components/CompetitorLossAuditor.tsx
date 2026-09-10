import React, { useState, useRef } from 'react';
import { 
  AlertTriangle, 
  TrendingDown, 
  ArrowRight, 
  Calculator, 
  ShieldAlert
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export const CompetitorLossAuditor: React.FC<{ onOpenHireModal: () => void }> = ({ onOpenHireModal }) => {
  const [dailyFootfall, setDailyFootfall] = useState(25);
  const [avgTicketPrice, setAvgTicketPrice] = useState(600);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxGlow = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  // Psychology math: Loss aversion calculation
  const monthlyMissedSearches = dailyFootfall * 18;
  const estimatedLostClients = Math.round(monthlyMissedSearches * 0.12);
  const monthlyLostRevenue = estimatedLostClients * avgTicketPrice;
  const yearlyLostToCompetitors = monthlyLostRevenue * 12;

  return (
    <section 
      ref={containerRef}
      className="py-12 sm:py-16 md:py-24 bg-[#1C1917] text-white border-y border-[#3E342F] relative overflow-hidden"
    >
      {/* Red Alert Parallax Ambient Glow */}
      <motion.div 
        style={{ y: parallaxGlow }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-rose-950/25 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 relative z-10">
        
        {/* Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 px-1"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-900/30 border border-rose-500/40 text-rose-300 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            <span>The Brutal Cost of Inaction (Loss Auditor)</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight leading-tight sm:leading-[1.15]">
            How Much Money Are Your Local Competitors <span className="text-rose-400 underline decoration-rose-500/40">Stealing From You</span> Every Single Month?
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-300">
            Every day you delay building a fast, Google-optimized website, 30+ customers in your area search on Google, can't find your menu or phone number, and walk straight into your competitor's shop.
          </p>
        </motion.div>

        {/* Interactive Loss Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
          
          {/* Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6 backdrop-blur-sm"
          >
            <h3 className="font-extrabold text-base sm:text-lg text-white font-['Outfit'] flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#8C4A27]" />
              <span>Simulate Your Business Category Loss</span>
            </h3>

            {/* Slider 1 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-slate-300 font-medium">Estimated Daily Inquiries / Searches:</span>
                <span className="font-bold text-[#D49B5B] font-mono">{dailyFootfall} people / day</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={dailyFootfall}
                onChange={(e) => setDailyFootfall(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#8C4A27]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>5/day (Boutique)</span>
                <span>50/day (Cafe/Clinic)</span>
                <span>100+/day (High Traffic)</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-slate-300 font-medium">Average Bill Amount per Customer:</span>
                <span className="font-bold text-[#D49B5B] font-mono">₹{avgTicketPrice.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="200"
                max="5000"
                step="100"
                value={avgTicketPrice}
                onChange={(e) => setAvgTicketPrice(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#8C4A27]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>₹200 (Bakery)</span>
                <span>₹1,500 (Salon/Gym)</span>
                <span>₹5,000 (Clinic/Services)</span>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-rose-950/40 border border-rose-500/30 text-xs text-rose-200 flex items-start gap-2.5">
              <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <span>
                <strong>The 100% Milestone Guarantee:</strong> A single Kartik Crafts website (₹15,000 or ₹40,000) pays for itself in less than 2-3 weeks of captured business.
              </span>
            </div>
          </motion.div>

          {/* Loss Diagnostic Screen */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-gradient-to-br from-rose-950/50 via-[#1C1917] to-[#1C1917] border-2 border-rose-600/50 shadow-2xl space-y-4 sm:space-y-6 relative"
          >
            <div className="flex items-center justify-between border-b border-rose-500/30 pb-3.5">
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-rose-400">Monthly Leakage Report</span>
                <h4 className="text-lg sm:text-xl font-extrabold text-white font-['Outfit']">Competitor Revenue Capture</h4>
              </div>
              <span className="px-2.5 py-1 bg-rose-600 text-white font-mono text-[10px] sm:text-xs font-extrabold rounded-full animate-pulse">
                CRITICAL LOSS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[11px] text-slate-300 font-medium">Lost Customers / Month:</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-rose-400 font-mono flex items-center gap-1">
                  <TrendingDown className="w-5 h-5" />
                  <span>~{estimatedLostClients}</span>
                </div>
                <p className="text-[10px] text-slate-400">Went to competitors who have websites</p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[11px] text-slate-300 font-medium">Monthly Cash Lost:</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-rose-400 font-mono">
                  ₹{monthlyLostRevenue.toLocaleString('en-IN')}
                </div>
                <p className="text-[10px] text-slate-400">Direct lost gross margin</p>
              </div>
            </div>

            {/* Total Annual Lost Banner */}
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-rose-900/40 border border-rose-500/50 text-center space-y-1.5">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-rose-300">
                Total Estimated Annual Bleed
              </span>
              <div className="text-2xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                ₹{yearlyLostToCompetitors.toLocaleString('en-IN')} / year
              </div>
              <p className="text-[11px] sm:text-xs text-rose-200">
                You are losing more in 30 days than the entire one-time cost of building a high-converting website.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenHireModal}
              className="w-full py-3.5 sm:py-4 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-emerald-950/50 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Stop The Bleed • Claim My Website Today</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
