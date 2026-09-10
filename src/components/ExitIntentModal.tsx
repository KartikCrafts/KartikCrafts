import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Flame, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Gift
} from 'lucide-react';

interface ExitIntentModalProps {
  onOpenHireModal: (plan?: 'classic' | 'dynamic') => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ onOpenHireModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(899); // 14:59

  useEffect(() => {
    // 1. Mouseleave listener for desktop exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !sessionStorage.getItem('kc_exit_intent_shown')) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('kc_exit_intent_shown', 'true');
      }
    };

    // 2. Fallback timer for mobile/tablet (40 seconds)
    const timer = setTimeout(() => {
      if (!hasShown && !sessionStorage.getItem('kc_exit_intent_shown')) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('kc_exit_intent_shown', 'true');
      }
    }, 45000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  // Countdown clock
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#1C1917] text-white rounded-3xl border-2 border-[#8C4A27] shadow-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
        
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#8C4A27]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            <span>Exclusive VIP Exit Perk</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-rose-950 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Expires in {formatTime(timeLeft)}</span>
          </span>
        </div>

        {/* Main Pitch */}
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] leading-tight">
            Wait! Lock In A <span className="text-[#D49B5B]">₹5,000 Voucher</span> + Free Figma Prototype.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Don't leave your business growth on the table. Message Kartik on WhatsApp right now to lock in this special voucher before this session closes.
          </p>
        </div>

        {/* Coupon Box */}
        <div className="p-4 rounded-2xl bg-white/5 border border-dashed border-[#8C4A27] flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Your Secret Code:</span>
            <div className="text-lg font-mono font-extrabold text-amber-400 tracking-wider">
              KARTIK-CRAFTS-5000
            </div>
          </div>
          <span className="text-xs bg-[#8C4A27] text-white px-2.5 py-1 rounded-lg font-bold">
            ₹5,000 OFF
          </span>
        </div>

        {/* What You Get Free */}
        <div className="space-y-2 text-xs text-slate-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>15-Minute Discovery Call</strong> with Kartik personally (+91 78630 76114).</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>Free Mobile Wireframe</strong> of your business homepage within 24 hours.</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>Zero Financial Risk:</strong> Pay only after reviewing the working prototype.</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-2.5 pt-2">
          <a
            href="https://wa.me/917863076114?text=Hi%20Kartik,%20I%20got%20the%20special%20coupon%20KARTIK-CRAFTS-5000%20and%20want%20to%20discuss%20a%20website%20for%20my%20business!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-xl shadow-emerald-950/50 transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>Claim Voucher on WhatsApp (+91 78630 76114)</span>
          </a>

          <button
            onClick={() => {
              setIsOpen(false);
              onOpenHireModal('dynamic');
            }}
            className="w-full py-2.5 text-center text-xs text-slate-400 hover:text-white font-semibold transition-colors"
          >
            Or browse packages and customize proposal &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};
