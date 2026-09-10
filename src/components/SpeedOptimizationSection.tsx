import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  Gauge, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Clock,
  Sparkles,
  Flame,
  ShieldCheck
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export const SpeedOptimizationSection: React.FC<{ onOpenHireModal: () => void }> = ({ onOpenHireModal }) => {
  const [simulatedPing, setSimulatedPing] = useState(38);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedPing(Math.floor(32 + Math.random() * 12));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#FAF7F2] via-white to-[#FAF7F2] border-b border-[#E0D5C7] relative overflow-hidden"
    >
      {/* Parallax Floating Ambient Elements */}
      <motion.div 
        style={{ y: parallaxY1 }}
        className="absolute top-10 left-5 w-48 sm:w-72 h-48 sm:h-72 bg-[#8C4A27]/5 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      <motion.div 
        style={{ y: parallaxY2 }}
        className="absolute bottom-10 right-5 w-64 sm:w-96 h-64 sm:h-96 bg-[#D49B5B]/8 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#8C4A27_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 relative z-10">
        
        {/* Header with Dark Psychology Hook: Speed = Revenue */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 px-2"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] sm:text-xs font-extrabold tracking-wide uppercase shadow-xs">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 fill-emerald-600 animate-pulse" />
            <span>Zero Traffic Bottleneck • Turbo-Speed Engine</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] font-['Outfit'] tracking-tight leading-tight sm:leading-[1.15]">
            A 1-Second Lag Burns{' '}
            <span className="text-[#8C4A27] underline decoration-[#8C4A27]/30 decoration-2 sm:decoration-4 underline-offset-4">
              40% Of Your Customers
            </span>{' '}
            Before They Even Call You.
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#57534E] leading-relaxed">
            Standard agency websites suffer from heavy bloated code that crashes during festival rushes. Kartik Crafts builds ultra-lightweight, 60fps edge-accelerated websites that load in <strong>0.38 seconds</strong> even on slow 4G mobile networks.
          </p>
        </motion.div>

        {/* Live Performance Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">
          
          {/* Left: Speed Diagnostic Card (Kartik Crafts Edge Turbo) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-[#1C1917] text-white border-2 border-[#8C4A27] shadow-2xl relative flex flex-col justify-between overflow-hidden"
          >
            {/* Top Glow */}
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#8C4A27]/25 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 sm:space-y-6 relative z-10">
              {/* Header inside Card */}
              <div className="flex items-center justify-between flex-wrap gap-2.5 pb-2 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                    <Gauge className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-white font-['Outfit'] flex items-center gap-1.5">
                      <span>Kartik Crafts Turbo Build</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    </h3>
                    <p className="text-[11px] sm:text-xs text-emerald-400 font-mono">Edge CDN • 0.38s TTFB Speed</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-xs font-mono font-bold shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>PING: {simulatedPing}ms</span>
                </div>
              </div>

              {/* Score Meters - 100% Mobile Responsive Grid with Clean Spacing */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-center min-w-0">
                  <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-emerald-400 font-mono tracking-tight">
                    100/100
                  </span>
                  <p className="text-[9px] xs:text-[10px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1 font-medium truncate">
                    Core Web Vitals
                  </p>
                </div>

                <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-center min-w-0">
                  <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-emerald-400 font-mono tracking-tight">
                    0.38s
                  </span>
                  <p className="text-[9px] xs:text-[10px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1 font-medium truncate">
                    First Paint
                  </p>
                </div>

                <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-center min-w-0">
                  <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-emerald-400 font-mono tracking-tight">
                    0%
                  </span>
                  <p className="text-[9px] xs:text-[10px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1 font-medium truncate">
                    Crash Rate
                  </p>
                </div>
              </div>

              {/* Bullet Features */}
              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero-Bottleneck Architecture:</strong> Handles 50,000+ simultaneous Diwali or festival rush visitors without lagging.</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Instant 60fps Smooth Gestures:</strong> Smooth butter touch interactions on iPhone & Android with zero jank.</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>1-Click Instant WhatsApp Pass-Through:</strong> Direct WhatsApp lead routing with zero intermediate delays.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 mt-5 sm:mt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium">Included at no extra charge in both plans</span>
              <button
                onClick={onOpenHireModal}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#8C4A27] hover:bg-[#A3562E] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
              >
                <span>Claim Turbo Speed Site</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Right: The Painful Reality of Cheap Slow Competitor Templates */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 bg-white border border-[#E0D5C7] shadow-sm flex flex-col justify-between space-y-5 sm:space-y-6"
          >
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#E5DDD0]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-[#1C1917] font-['Outfit']">Cheap Standard Agency Templates</h3>
                  <p className="text-[11px] sm:text-xs text-rose-600 font-mono">WordPress Bloat • 4.8s Loading Delay</p>
                </div>
              </div>

              {/* Score Badges - Mobile Responsive Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-rose-50 border border-rose-200 text-center flex flex-col justify-center min-w-0">
                  <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-rose-700 font-mono tracking-tight">
                    34/100
                  </span>
                  <p className="text-[9px] xs:text-[10px] sm:text-xs text-rose-800 mt-0.5 sm:mt-1 font-semibold truncate">
                    Google Speed
                  </p>
                </div>

                <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-rose-50 border border-rose-200 text-center flex flex-col justify-center min-w-0">
                  <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-rose-700 font-mono tracking-tight">
                    4.8s
                  </span>
                  <p className="text-[9px] xs:text-[10px] sm:text-xs text-rose-800 mt-0.5 sm:mt-1 font-semibold truncate">
                    Dropoff Wait
                  </p>
                </div>

                <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-rose-50 border border-rose-200 text-center flex flex-col justify-center min-w-0">
                  <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-rose-700 font-mono tracking-tight">
                    53%
                  </span>
                  <p className="text-[9px] xs:text-[10px] sm:text-xs text-rose-800 mt-0.5 sm:mt-1 font-semibold truncate">
                    Lost Calls
                  </p>
                </div>
              </div>

              {/* Badges of Lost Profits */}
              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#57534E]">
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Traffic Jam Crash:</strong> Site goes down during your best festive promo campaigns when 100 people open it.</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Laggy Scrolling:</strong> Unresponsive buttons cause customers to get annoyed and tap on your competitor's listing instead.</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Google SEO Penalty:</strong> Google pushes slow websites to page 3, starving you of organic phone calls.</span>
                </div>
              </div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Don't let a slow website burn your hard-earned local reputation.</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
