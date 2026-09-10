import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { InquiryFormData } from '../types';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: 'classic' | 'dynamic';
  initialBusinessType?: string;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'dynamic',
  initialBusinessType = 'Cafe & Coffee Shop'
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    businessName: '',
    businessType: initialBusinessType,
    city: '',
    selectedPlan: initialPlan,
    requirements: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPlan) {
      setFormData(prev => ({ ...prev, selectedPlan: initialPlan }));
    }
  }, [initialPlan]);

  useEffect(() => {
    if (initialBusinessType) {
      setFormData(prev => ({ ...prev, businessType: initialBusinessType }));
    }
  }, [initialBusinessType]);

  if (!isOpen) return null;

  const businessTypesList = [
    'Cafe & Coffee Shop',
    'Restaurant & Fine Dining',
    'Clinic & Doctors / Dental',
    'Artisan Bakery & Cake Shop',
    'Gym & Fitness Studio',
    'Salon, Beauty & Spa',
    'Play School & Daycare',
    'Car Garage & Auto Workshop',
    'Tuition & Coaching Classes',
    'Tailors & Designer Boutique',
    'Retail Shop / E-Commerce',
    'Other Local Business'
  ];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.businessName) {
      alert('Please fill in your Name, Business Name and Phone number.');
      return;
    }

    const planText = formData.selectedPlan === 'dynamic' 
      ? 'Dynamic Plan + Client Admin Panel (Offer: ₹40,000)' 
      : 'Classic Website Plan (Offer: ₹15,000)';

    const message = `Hello! I would like to hire you for my business website.%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Business Name:* ${encodeURIComponent(formData.businessName)}%0A` +
      `*Business Type:* ${encodeURIComponent(formData.businessType)}%0A` +
      `*City:* ${encodeURIComponent(formData.city || 'India')}%0A` +
      `*Selected Package:* ${encodeURIComponent(planText)}%0A` +
      `*Specific Notes:* ${encodeURIComponent(formData.requirements || 'Standard business growth setup')}%0A%0A` +
      `Please let me know the next steps for the 15-min discovery call and prototype!`;

    window.open(`https://wa.me/917863076114?text=${message}`, '_blank');
    setSubmitted(true);
  };

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.businessName) {
      alert('Please fill in your Name, Business Name and Phone number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="relative w-full max-w-2xl bg-white border border-[#E0D5C7] rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 max-h-[95vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#FAF7F2] hover:bg-[#E5DDD0] text-[#57534E] hover:text-[#1C1917] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-extrabold text-[#1C1917] font-['Outfit']">
              Thank You, {formData.name}!
            </h3>

            <p className="text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
              Your inquiry for <strong className="text-[#8C4A27]">{formData.businessName}</strong> has been received with the special discount locked in.
            </p>

            <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E0D5C7] max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#78716C]">Selected Plan:</span>
                <span className="font-bold text-[#1C1917] uppercase">
                  {formData.selectedPlan === 'dynamic' ? 'Dynamic + Admin (₹40,000)' : 'Classic (₹15,000)'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78716C]">Phone / WhatsApp:</span>
                <span className="font-bold text-emerald-700">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#78716C]">Direct Developer:</span>
                <span className="font-bold text-[#8C4A27]">+91 78630 76114</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/917863076114"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp (+91 78630 76114)</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#FAF7F2] hover:bg-[#E5DDD0] text-[#1C1917] text-xs font-semibold"
              >
                Close Window
              </button>
            </div>

          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8C4A27]/10 border border-[#8C4A27]/25 text-[#8C4A27] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#8C4A27]" />
                <span>Lock Promotional Pricing & Start</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] font-['Outfit']">
                Let's Build a Website That Grows Your Business
              </h3>

              <p className="text-xs sm:text-sm text-[#57534E] mt-1">
                Fill the quick details below to claim your ₹10,000 discount and get an interactive prototype within 48 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              
              {/* Package Selection Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Classic Option */}
                <label
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                    formData.selectedPlan === 'classic'
                      ? 'bg-[#FAF7F2] border-[#8C4A27] text-[#1C1917] shadow-sm ring-1 ring-[#8C4A27]'
                      : 'bg-white border-[#E0D5C7] text-[#57534E] hover:border-[#8C4A27]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="plan"
                        value="classic"
                        checked={formData.selectedPlan === 'classic'}
                        onChange={() => setFormData({ ...formData, selectedPlan: 'classic' })}
                        className="accent-[#8C4A27]"
                      />
                      <span className="font-bold text-xs text-[#1C1917]">Classic Website</span>
                    </div>
                    <span className="text-[10px] text-rose-500 line-through">₹25,000</span>
                  </div>

                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="text-lg font-black text-[#8C4A27] font-['Outfit']">₹15,000</span>
                    <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Save ₹10k</span>
                  </div>
                  <p className="text-[11px] text-[#78716C] mt-1">5 Pages • WhatsApp Leads • Fast 5-Day Launch</p>
                </label>

                {/* Dynamic Option */}
                <label
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between relative overflow-hidden ${
                    formData.selectedPlan === 'dynamic'
                      ? 'bg-[#FAF7F2] border-[#8C4A27] text-[#1C1917] shadow-sm ring-1 ring-[#8C4A27]'
                      : 'bg-white border-[#E0D5C7] text-[#57534E] hover:border-[#8C4A27]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="plan"
                        value="dynamic"
                        checked={formData.selectedPlan === 'dynamic'}
                        onChange={() => setFormData({ ...formData, selectedPlan: 'dynamic' })}
                        className="accent-[#8C4A27]"
                      />
                      <span className="font-bold text-xs text-[#1C1917]">Dynamic + Admin</span>
                    </div>
                    <span className="text-[10px] text-rose-500 line-through">₹50,000</span>
                  </div>

                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="text-lg font-black text-[#1C1917] font-['Outfit']">₹40,000</span>
                    <span className="text-[10px] text-[#8C4A27] font-bold bg-[#8C4A27]/10 px-1.5 py-0.5 rounded border border-[#8C4A27]/20">
                      ✨ Full Admin Access
                    </span>
                  </div>
                  <p className="text-[11px] text-[#78716C] mt-1">Client Admin Panel • Booking Engine • CRM</p>
                </label>

              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-[#57534E] block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kartik Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5C6B3] rounded-xl text-xs text-[#1C1917] focus:outline-none focus:border-[#8C4A27] placeholder:text-[#A8A29E]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#57534E] block mb-1">WhatsApp Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5C6B3] rounded-xl text-xs text-[#1C1917] focus:outline-none focus:border-[#8C4A27] placeholder:text-[#A8A29E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-[#57534E] block mb-1">Business / Brand Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Urban Grind Cafe / Care Clinic"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5C6B3] rounded-xl text-xs text-[#1C1917] focus:outline-none focus:border-[#8C4A27] placeholder:text-[#A8A29E]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#57534E] block mb-1">Business Industry / Type</label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5C6B3] rounded-xl text-xs text-[#1C1917] focus:outline-none focus:border-[#8C4A27]"
                  >
                    {businessTypesList.map((type, i) => (
                      <option key={i} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-[#57534E] block mb-1">City / Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai, Delhi, Ahmedabad, Pune..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5C6B3] rounded-xl text-xs text-[#1C1917] focus:outline-none focus:border-[#8C4A27] placeholder:text-[#A8A29E]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#57534E] block mb-1">Key Requirements / Notes</label>
                  <input
                    type="text"
                    placeholder="e.g. Need table booking, QR menu, Google map"
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5C6B3] rounded-xl text-xs text-[#1C1917] focus:outline-none focus:border-[#8C4A27] placeholder:text-[#A8A29E]"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#1C1917] hover:bg-[#8C4A27] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Project Details on WhatsApp (Instant Response)</span>
                </button>

                <button
                  type="button"
                  onClick={handleStandardSubmit}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#E5DDD0] text-[#57534E] font-semibold text-xs transition-colors"
                >
                  Or Submit via Form (I will call you back in 2 hours)
                </button>
              </div>

              {/* Satisfaction Guarantee Seal */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-[#57534E] pt-2 border-t border-[#E0D5C7]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Satisfaction Guarantee • Milestone Payments • Full Source Code Handover</span>
              </div>

            </form>

          </div>
        )}

      </div>

    </div>
  );
};

