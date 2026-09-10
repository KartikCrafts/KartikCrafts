import React from 'react';
import { 
  IndustryCategory, 
  FeatureFilter, 
  PackageType 
} from '../types';
import { 
  Search, 
  SlidersHorizontal, 
  Coffee, 
  Flame, 
  Stethoscope, 
  Dumbbell, 
  Scissors, 
  GraduationCap, 
  Cake, 
  Wrench, 
  BookOpen, 
  Sparkles,
  Layers
} from 'lucide-react';

interface BusinessCategoryBarProps {
  selectedCategory: IndustryCategory;
  onSelectCategory: (category: IndustryCategory) => void;
  selectedFeature: FeatureFilter;
  onSelectFeature: (feature: FeatureFilter) => void;
  selectedPackage: PackageType;
  onSelectPackage: (pkg: PackageType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalResults: number;
}

export const BusinessCategoryBar: React.FC<BusinessCategoryBarProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedFeature,
  onSelectFeature,
  selectedPackage,
  onSelectPackage,
  searchQuery,
  onSearchChange,
  totalResults
}) => {
  const categories: { id: IndustryCategory; label: string; icon: any }[] = [
    { id: 'all', label: 'All Businesses', icon: Layers },
    { id: 'cafe', label: 'Cafe & Coffee', icon: Coffee },
    { id: 'restaurant', label: 'Restaurant & Dining', icon: Flame },
    { id: 'clinic', label: 'Clinic & Doctors', icon: Stethoscope },
    { id: 'bakery', label: 'Bakery & Cakes', icon: Cake },
    { id: 'gym', label: 'Gym & Fitness', icon: Dumbbell },
    { id: 'salon', label: 'Salon & Spa', icon: Scissors },
    { id: 'school', label: 'Play Schools', icon: GraduationCap },
    { id: 'garage', label: 'Auto Garages', icon: Wrench },
    { id: 'tuition', label: 'Tuition Classes', icon: BookOpen },
    { id: 'tailor', label: 'Tailors & Boutiques', icon: Sparkles },
  ];

  const features: { id: FeatureFilter; label: string }[] = [
    { id: 'all', label: 'All Features' },
    { id: 'whatsapp_booking', label: '⚡ Direct WhatsApp Lead' },
    { id: 'table_booking', label: '🍽️ Table Booking' },
    { id: 'online_menu', label: '📜 Digital QR Menu' },
    { id: 'doctor_appointment', label: '🏥 Doctor Slot Booking' },
    { id: 'admin_panel', label: '⚙️ Client Admin Panel' },
    { id: 'course_admission', label: '🎒 Admissions & Batches' },
    { id: 'service_estimator', label: '🚗 Price Estimator' },
  ];

  return (
    <div className="space-y-4 sm:space-y-5 bg-white p-4 sm:p-6 rounded-3xl border border-[#E0D5C7] shadow-md shadow-[#2B1810]/4">
      
      {/* Top Row: Search & Package Toggle */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
        
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#78716C]" />
          <input
            id="portfolio-search-input"
            type="text"
            placeholder="Search by business, feature, or city..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-12 py-2.5 bg-[#FAF7F2] border border-[#D5C6B3] rounded-xl text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#8C4A27] focus:ring-1 focus:ring-[#8C4A27] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#57534E] hover:text-[#1C1917] bg-[#E5DDD0] px-1.5 py-0.5 rounded font-medium"
            >
              Clear
            </button>
          )}
        </div>

        {/* Package Filter Pills (Classic ₹15k vs Dynamic ₹40k) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#FAF7F2] rounded-xl border border-[#E0D5C7] w-full md:w-auto overflow-x-auto">
          <span className="text-xs text-[#78716C] px-2.5 font-medium hidden sm:inline">Package:</span>
          
          <button
            id="pkg-filter-all"
            onClick={() => onSelectPackage('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              selectedPackage === 'all'
                ? 'bg-white text-[#1C1917] border border-[#D5C6B3] shadow-sm'
                : 'text-[#57534E] hover:text-[#1C1917]'
            }`}
          >
            All Packages
          </button>

          <button
            id="pkg-filter-classic"
            onClick={() => onSelectPackage('classic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              selectedPackage === 'classic'
                ? 'bg-[#8C4A27] text-white shadow-sm'
                : 'text-[#8C4A27] hover:bg-white'
            }`}
          >
            <span>Classic (₹15k)</span>
          </button>

          <button
            id="pkg-filter-dynamic"
            onClick={() => onSelectPackage('dynamic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              selectedPackage === 'dynamic'
                ? 'bg-[#1C1917] text-white shadow-sm'
                : 'text-[#1C1917] hover:bg-white'
            }`}
          >
            <span>Dynamic + Admin (₹40k)</span>
          </button>
        </div>

      </div>

      {/* Primary Category Tabs */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#57534E] flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C4A27]" />
            Filter by Client Business Industry
          </span>
          <span className="text-xs text-[#78716C] font-medium">
            Showing <strong className="text-[#8C4A27] font-bold">{totalResults}</strong> tailored showcase demos
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-[#1C1917] text-white font-bold border-[#1C1917] shadow-sm scale-[1.02]'
                    : 'bg-[#FAF7F2] text-[#44403C] border-[#E0D5C7] hover:bg-[#F5EFEB] hover:text-[#1C1917]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#78716C]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feature Requirement Filters */}
      <div className="pt-2 border-t border-[#E5DDD0]">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1">
          <span className="text-[11px] font-semibold text-[#78716C] whitespace-nowrap pr-1">
            Requirement:
          </span>
          {features.map((feat) => {
            const isSelected = selectedFeature === feat.id;
            return (
              <button
                key={feat.id}
                id={`feat-filter-${feat.id}`}
                onClick={() => onSelectFeature(feat.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-[#8C4A27] text-white border-[#8C4A27] font-semibold shadow-xs'
                    : 'bg-white text-[#57534E] border-[#E0D5C7] hover:bg-[#FAF7F2] hover:text-[#1C1917]'
                }`}
              >
                {feat.label}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};

