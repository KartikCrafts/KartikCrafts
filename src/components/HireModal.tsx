import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Building2, 
  Calendar, 
  ShieldCheck, 
  Zap, 
  Tag, 
  IndianRupee,
  MessageCircle
} from 'lucide-react';
import { IndustryCategory } from '../types';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: 'classic' | 'dynamic';
}

export const HireModal: React.FC<HireModalProps> = ({ 
  isOpen, 
  onClose, 
  initialPlan = 'classic' 
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'classic' | 'dynamic'>(initialPlan);
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState<IndustryCategory>('cafe');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [requirements, setRequirements] = useState('');
  const [couponCode, setCouponCode] = useState('LOCALGROWTH');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialPlan) {
      setSelectedPlan(initialPlan);
    }
  }, [initialPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const priceText = selectedPlan === 'classic' ? '₹15,000 (Classic)' : '₹40,000 (Dynamic + Admin Panel)';
    const text = encodeURIComponent(
      `👋 Hello! I am interested in building a website for my business.\n\n` +
      `🏢 *Business Name:* ${businessName || 'My Business'}\n` +
      `📂 *Category:* ${category}\n` +
      `💎 *Selected Package:* ${priceText}\n` +
      `📞 *Phone:* ${phone}\n` +
      `✉️ *Email:* ${email || 'N/A'}\n` +
      `🏷️ *Promo Code:* ${couponCode || 'None'}\n` +
      `📝 *Notes/Requirements:* ${requirements || 'Standard high-converting package'}\n\n` +
      `Please schedule my free 15-minute strategy consultation!`
    );

    // Give user a moment to see the confirmation and then open WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/917863076114?text=${text}`, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Special 40% Inaugural Discount Applied</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                Start Your Business Website Project
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Lock in this month's discounted pricing, free domain, 1 year cloud hosting, and a custom prototype in 48 hours.
              </p>
            </div>

            {/* Plan Switcher Pills */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Choose Website Plan:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPlan('classic')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    selectedPlan === 'classic'
                      ? 'bg-amber-500/10 border-amber-400 shadow-md ring-1 ring-amber-400'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm font-['Outfit']">Classic Plan</span>
                    <span className="text-xs bg-slate-800 text-slate-400 line-through px-1.5 py-0.5 rounded">₹25,000</span>
                  </div>
                  <div className="text-lg font-black text-amber-400 font-['Outfit'] mt-1">
                    ₹15,000 <span className="text-[11px] font-normal text-slate-400">one-time</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    High-speed showcase, WhatsApp lead CTA, Google SEO & SSL.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPlan('dynamic')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    selectedPlan === 'dynamic'
                      ? 'bg-orange-500/10 border-orange-400 shadow-md ring-1 ring-orange-400'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-white text-sm font-['Outfit']">Dynamic Plan</span>
                      <span className="text-[9px] bg-orange-500 text-slate-950 font-black px-1.5 py-0.5 rounded">
                        RECOMMENDED
                      </span>
                    </div>
                    <span className="text-xs bg-slate-800 text-slate-400 line-through px-1.5 py-0.5 rounded">₹50,000</span>
                  </div>
                  <div className="text-lg font-black text-orange-400 font-['Outfit'] mt-1">
                    ₹40,000 <span className="text-[11px] font-normal text-slate-400">one-time</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Includes Custom Admin Panel, Live Menu Editor & CRM Database.
                  </p>
                </button>
              </div>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Business Name *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Royal Dental Care"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Industry / Business Type *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as IndustryCategory)}
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="cafe">Cafe & Coffee Shop</option>
                  <option value="restaurant">Restaurant & Fine Dining</option>
                  <option value="clinic">Clinic & Healthcare</option>
                  <option value="bakery">Bakery & Cake Shop</option>
                  <option value="gym">Gym & Fitness Studio</option>
                  <option value="salon">Salon, Spa & Beauty</option>
                  <option value="school">Play School & Daycare</option>
                  <option value="garage">Car Garage & Auto Care</option>
                  <option value="tuition">Tuition & Coaching Classes</option>
                  <option value="tailor">Tailor & Boutique</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  WhatsApp Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    placeholder="founder@business.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Special Features or Requirements (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Need WhatsApp ordering, table booking, Google review widget, and custom menu catalog..."
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Guarantees & Trust row */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-300">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% Satisfaction or Full Refund
              </span>
              <span className="flex items-center gap-1 text-amber-400 font-semibold">
                <Zap className="w-3.5 h-3.5" />
                Delivery in 5-10 Days
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <Tag className="w-3.5 h-3.5 text-emerald-400" />
                Promo Code: <strong className="text-emerald-400">{couponCode}</strong>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="submit"
                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-300 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Submit & Chat on WhatsApp Now</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
              >
                Cancel
              </button>
            </div>

          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-white font-['Outfit']">
              Inquiry Sent Successfully!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Opening WhatsApp with your project details... You can also message directly anytime at <span className="text-amber-400 font-mono font-bold">+91 78630 76114</span>.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-700"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
