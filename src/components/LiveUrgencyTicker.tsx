import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, Flame, Users, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NOTIFICATIONS = [
  {
    id: 1,
    title: 'Dr. Anand (Dentist)',
    desc: 'Booked Dynamic Web + Admin Panel',
    time: '12m ago',
    icon: Sparkles,
    badge: 'Verified Client'
  },
  {
    id: 2,
    title: 'Only 2 Slots Left',
    desc: 'Promotional ₹15,000 / ₹40,000 rates closing soon',
    time: 'Live',
    icon: Flame,
    badge: 'High Urgency'
  },
  {
    id: 3,
    title: 'The Daily Roast Cafe',
    desc: 'Generated 42 direct WhatsApp orders in first 7 days',
    time: '1h ago',
    icon: Users,
    badge: 'ROI Proof'
  },
  {
    id: 4,
    title: '100% Risk-Free Escrow',
    desc: 'Approve live working prototype before full payment',
    time: 'Policy',
    icon: ShieldCheck,
    badge: 'Zero Risk'
  }
];

export const LiveUrgencyTicker: React.FC<{ onOpenHireModal: () => void }> = ({ onOpenHireModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % NOTIFICATIONS.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [dismissed]);

  if (dismissed) return null;

  const current = NOTIFICATIONS[currentIndex];
  const Icon = current.icon;

  return (
    <div className="fixed bottom-20 sm:bottom-5 left-3 sm:left-5 z-40 max-w-[calc(100vw-24px)] sm:max-w-sm pointer-events-auto">
      <AnimatePresence mode="wait">
        <motion.div 
          key={current.id}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="bg-[#1C1917]/95 backdrop-blur-md text-white p-3 sm:p-3.5 rounded-2xl border border-[#8C4A27]/50 shadow-2xl flex items-start gap-2.5 sm:gap-3 relative overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-[#8C4A27]/20 rounded-full blur-xl pointer-events-none" />

          <div className="w-8 h-8 rounded-xl bg-[#8C4A27]/20 border border-[#8C4A27]/40 flex items-center justify-center shrink-0 text-[#D49B5B]">
            <Icon className="w-4 h-4" />
          </div>

          <div className="flex-1 min-w-0 pr-4">
            <div className="flex items-center gap-1.5 leading-none">
              <h6 className="font-extrabold text-xs text-white truncate font-['Outfit']">{current.title}</h6>
              <span className="text-[9px] bg-emerald-950 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded font-mono font-bold">
                {current.badge}
              </span>
            </div>
            <p className="text-[11px] text-slate-300 mt-1 leading-snug line-clamp-2">
              {current.desc}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[9px] text-slate-400 font-mono">{current.time}</span>
              <span className="text-slate-600">•</span>
              <a
                href="https://wa.me/917863076114"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
              >
                <MessageSquare className="w-2.5 h-2.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <button
            onClick={() => setDismissed(true)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
