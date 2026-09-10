import React, { useState } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { IndustryCategory } from '../types';

interface RoiCalculatorProps {
  onOpenHireModal: (plan?: 'classic' | 'dynamic') => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenHireModal }) => {
  const [businessType, setBusinessType] = useState<IndustryCategory>('cafe');
  const [avgTicketValue, setAvgTicketValue] = useState<number>(450);
  const [newCustomersPerWeek, setNewCustomersPerWeek] = useState<number>(15);

  // Business presets
  const presets: Record<IndustryCategory, { name: string; defaultTicket: number; defaultWeekly: number }> = {
    all: { name: 'Local Business', defaultTicket: 1000, defaultWeekly: 10 },
    cafe: { name: 'Cafe & Coffee Shop', defaultTicket: 450, defaultWeekly: 20 },
    restaurant: { name: 'Fine Dine & Restaurant', defaultTicket: 1200, defaultWeekly: 15 },
    clinic: { name: 'Clinic & Dental Practice', defaultTicket: 800, defaultWeekly: 12 },
    bakery: { name: 'Bakery & Cake Shop', defaultTicket: 650, defaultWeekly: 18 },
    gym: { name: 'Gym & Fitness Studio', defaultTicket: 2500, defaultWeekly: 6 },
    salon: { name: 'Salon, Spa & Beauty', defaultTicket: 1500, defaultWeekly: 10 },
    school: { name: 'Play School & Daycare', defaultTicket: 4000, defaultWeekly: 3 },
    garage: { name: 'Car Garage & Auto Care', defaultTicket: 3500, defaultWeekly: 5 },
    tuition: { name: 'Tuition & Coaching', defaultTicket: 3000, defaultWeekly: 4 },
    tailor: { name: 'Tailor & Designer Boutique', defaultTicket: 3200, defaultWeekly: 5 },
    portfolio: { name: 'Portfolio & Creative Agency', defaultTicket: 15000, defaultWeekly: 2 }
  };

  const handleBusinessTypeChange = (cat: IndustryCategory) => {
    setBusinessType(cat);
    setAvgTicketValue(presets[cat].defaultTicket);
    setNewCustomersPerWeek(presets[cat].defaultWeekly);
  };

  // Calculation
  const monthlyNewCustomers = newCustomersPerWeek * 4;
  const estimatedMonthlyExtraRevenue = monthlyNewCustomers * avgTicketValue;
  const estimatedYearlyExtraRevenue = estimatedMonthlyExtraRevenue * 12;
  
  // Payback days for Classic (15k) and Dynamic (40k)
  const daysToRecoverClassic = Math.max(3, Math.round((15000 / (estimatedMonthlyExtraRevenue / 30))));
  const daysToRecoverDynamic = Math.max(7, Math.round((40000 / (estimatedMonthlyExtraRevenue / 30))));

  return (
    <section id="roi-section" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8C4A27]/10 border border-[#8C4A27]/25 text-[#8C4A27] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#8C4A27]" />
            <span>Interactive Profit Estimator</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1C1917] font-['Outfit'] tracking-tight break-words">
            Calculate How Fast Your Website Pays for Itself
          </h2>

          <p className="text-sm sm:text-base text-[#57534E]">
            A website is an active digital salesman, not an expense. See your expected new customer inquiries and revenue return.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="max-w-4xl mx-auto bg-white border border-[#E0D5C7] rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Form (Left) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Step 1: Select Business */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#57534E] block mb-2">
                1. Select Your Business Category:
              </label>
              <select
                id="roi-business-select"
                value={businessType}
                onChange={(e) => handleBusinessTypeChange(e.target.value as IndustryCategory)}
                className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D5C6B3] rounded-xl text-sm font-semibold text-[#1C1917] focus:outline-none focus:border-[#8C4A27]"
              >
                {Object.entries(presets).map(([k, val]) => (
                  <option key={k} value={k}>{val.name}</option>
                ))}
              </select>
            </div>

            {/* Step 2: Average Customer Bill */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold uppercase tracking-wider text-[#57534E]">
                  2. Average Customer Bill / Fee:
                </label>
                <span className="font-extrabold text-[#8C4A27] text-base font-['Outfit']">
                  ₹{avgTicketValue.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="200"
                max="15000"
                step="50"
                value={avgTicketValue}
                onChange={(e) => setAvgTicketValue(Number(e.target.value))}
                className="w-full accent-[#8C4A27] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#78716C] font-mono">
                <span>₹200</span>
                <span>₹7,500</span>
                <span>₹15,000</span>
              </div>
            </div>

            {/* Step 3: Expected New Customers/Week */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold uppercase tracking-wider text-[#57534E]">
                  3. New Customers / Leads Per Week:
                </label>
                <span className="font-extrabold text-emerald-700 text-sm font-['Outfit']">
                  {newCustomersPerWeek} clients / week
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="60"
                step="1"
                value={newCustomersPerWeek}
                onChange={(e) => setNewCustomersPerWeek(Number(e.target.value))}
                className="w-full accent-[#8C4A27] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#78716C] font-mono">
                <span>2/week</span>
                <span>30/week</span>
                <span>60/week</span>
              </div>
            </div>

            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E5DDD0] text-[11px] text-[#57534E] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Calculated based on average local SEO & direct WhatsApp conversion rates.</span>
            </div>

          </div>

          {/* Results Output (Right) */}
          <div className="lg:col-span-6 bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#D5C6B3] space-y-6 shadow-sm">
            
            <div>
              <span className="text-xs uppercase tracking-wider text-[#57534E] font-bold block">
                Estimated Extra Monthly Revenue:
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-black text-[#1C1917] font-['Outfit']">
                  +₹{estimatedMonthlyExtraRevenue.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[#78716C]">/ month</span>
              </div>
              <p className="text-xs text-[#57534E] mt-1">
                From ~{monthlyNewCustomers} new direct customers per month.
              </p>
            </div>

            {/* Estimated Annual & Payback Timeline */}
            <div className="space-y-3 pt-4 border-t border-[#E5DDD0] text-xs">
              
              <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E0D5C7] shadow-xs">
                <span className="text-[#57534E] font-medium">Estimated 1-Year Revenue Boost:</span>
                <span className="font-extrabold text-[#1C1917] text-sm font-['Outfit']">
                  ₹{estimatedYearlyExtraRevenue.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#8C4A27]/30 shadow-xs">
                <div>
                  <span className="text-[#1C1917] font-bold block">Classic Plan (₹15,000):</span>
                  <span className="text-[11px] text-[#78716C]">Pays for itself in:</span>
                </div>
                <span className="font-black text-[#8C4A27] text-base font-['Outfit']">
                  ~{daysToRecoverClassic} Days!
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#8C4A27]/30 shadow-xs">
                <div>
                  <span className="text-[#1C1917] font-bold block">Dynamic Plan (₹40,000):</span>
                  <span className="text-[11px] text-[#78716C]">Full Admin + Bookings pays in:</span>
                </div>
                <span className="font-black text-[#8C4A27] text-base font-['Outfit']">
                  ~{daysToRecoverDynamic} Days!
                </span>
              </div>

            </div>

            <button
              onClick={() => onOpenHireModal()}
              className="w-full py-3.5 px-5 rounded-xl bg-[#1C1917] hover:bg-[#8C4A27] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Lock My Special Discount Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

