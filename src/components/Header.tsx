import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  PhoneCall, 
  MessageSquare, 
  CheckCircle2, 
  Menu, 
  X,
  Flame,
  ArrowUpRight
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenHireModal: (plan?: 'classic' | 'dynamic') => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenHireModal, onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DDD0] shadow-sm shadow-[#2B1810]/5 py-3' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Status */}
          <div className="flex items-center gap-3">
            <button 
              id="logo-brand-btn"
              onClick={() => handleNavClick('hero-section')}
              className="text-left group"
            >
              <BrandLogo size="md" />
            </button>

            {/* Availability Pill */}
            <div className="hidden xl:flex items-center gap-2 pl-4 ml-3 border-l border-[#E5DDD0] text-xs text-[#57534E]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Available for March Projects <strong className="text-emerald-700 font-semibold">(2 Slots Left)</strong></span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/90 p-1.5 rounded-full border border-[#E5DDD0] shadow-sm backdrop-blur-sm text-sm">
            <button
              id="nav-projects-btn"
              onClick={() => handleNavClick('projects-section')}
              className="px-3.5 py-1.5 rounded-full text-[#57534E] hover:text-[#1C1917] hover:bg-[#F5EFEB] transition-colors font-medium text-xs lg:text-sm"
            >
              Client Demos
            </button>
            <button
              id="nav-pricing-btn"
              onClick={() => handleNavClick('pricing-section')}
              className="px-3.5 py-1.5 rounded-full text-[#8C4A27] hover:text-[#5E2F16] hover:bg-[#F5EFEB] transition-colors font-bold text-xs lg:text-sm flex items-center gap-1"
            >
              <Flame className="w-3.5 h-3.5 text-[#8C4A27]" />
              <span>Pricing (From ₹15k)</span>
            </button>
            <button
              id="nav-admin-btn"
              onClick={() => handleNavClick('admin-panel-section')}
              className="px-3.5 py-1.5 rounded-full text-[#57534E] hover:text-[#1C1917] hover:bg-[#F5EFEB] transition-colors font-medium text-xs lg:text-sm"
            >
              Admin Panel
            </button>
            <button
              id="nav-guarantee-btn"
              onClick={() => handleNavClick('guarantee-section')}
              className="px-3.5 py-1.5 rounded-full text-[#57534E] hover:text-[#1C1917] hover:bg-[#F5EFEB] transition-colors font-medium text-xs lg:text-sm"
            >
              100% Guarantee
            </button>
            <button
              id="nav-roi-btn"
              onClick={() => handleNavClick('roi-section')}
              className="px-3.5 py-1.5 rounded-full text-[#57534E] hover:text-[#1C1917] hover:bg-[#F5EFEB] transition-colors font-medium text-xs lg:text-sm"
            >
              ROI Calculator
            </button>
          </nav>

          {/* Quick CTA Actions (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-2.5">
            <a
              id="header-whatsapp-btn"
              href="https://wa.me/917863076114?text=Hi%20Kartik%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20build%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all shadow-xs shrink-0 whitespace-nowrap active:scale-95"
              title="Chat with Kartik on WhatsApp (+91 78630 76114)"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="font-mono tracking-tight">+91 78630 76114</span>
            </a>

            <button
              id="header-grow-btn"
              onClick={() => onOpenHireModal()}
              className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-3.5 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-[#1C1917] hover:bg-[#8C4A27] rounded-xl shadow-md transition-all active:scale-95 shrink-0 whitespace-nowrap overflow-hidden border border-transparent hover:border-[#D49B5B]/30 group"
              title="Grow your business today"
            >
              <span className="tracking-tight">
                Grow your business today
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D49B5B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </button>
          </div>

          {/* Mobile Direct WhatsApp action for screens < 640px (Hire Me button deleted from Nav) */}
          <div className="flex sm:hidden items-center gap-1.5">
            <a
              href="https://wa.me/917863076114?text=Hi%20Kartik%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20build%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all shadow-xs shrink-0"
              title="WhatsApp: +91 78630 76114"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="font-mono text-[11px] font-bold tracking-tight">+91 78630 76114</span>
            </a>
          </div>

          {/* Mobile/Tablet Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-white text-[#1C1917] hover:bg-[#F5EFEB] border border-[#E5DDD0] shadow-sm ml-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-[#E5DDD0] shadow-xl space-y-3 animate-fadeIn">
            <div className="flex items-center gap-2 pb-3 border-b border-[#E5DDD0] text-xs text-[#57534E]">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>Available for March (2 Slots Left)</span>
            </div>

            <div className="grid grid-cols-1 gap-1 text-sm font-medium">
              <button
                onClick={() => handleNavClick('projects-section')}
                className="w-full text-left px-3 py-2 rounded-lg text-[#1C1917] hover:bg-[#FAF7F2]"
              >
                💼 Client Demos & Projects
              </button>
              <button
                onClick={() => handleNavClick('pricing-section')}
                className="w-full text-left px-3 py-2 rounded-lg text-[#8C4A27] font-bold hover:bg-[#FAF7F2] flex items-center justify-between"
              >
                <span>💰 Special Offers (₹15k & ₹40k)</span>
                <span className="text-[10px] bg-[#8C4A27]/10 text-[#8C4A27] px-2 py-0.5 rounded font-bold">Limited</span>
              </button>
              <button
                onClick={() => handleNavClick('admin-panel-section')}
                className="w-full text-left px-3 py-2 rounded-lg text-[#1C1917] hover:bg-[#FAF7F2]"
              >
                ⚙️ Client Admin Panel Access
              </button>
              <button
                onClick={() => handleNavClick('guarantee-section')}
                className="w-full text-left px-3 py-2 rounded-lg text-[#1C1917] hover:bg-[#FAF7F2]"
              >
                🛡️ 100% Satisfaction Guarantee
              </button>
              <button
                onClick={() => handleNavClick('roi-section')}
                className="w-full text-left px-3 py-2 rounded-lg text-[#1C1917] hover:bg-[#FAF7F2]"
              >
                📊 Business ROI Calculator
              </button>
              <button
                onClick={() => handleNavClick('process-section')}
                className="w-full text-left px-3 py-2 rounded-lg text-[#1C1917] hover:bg-[#FAF7F2]"
              >
                🚀 5-Step Work Process
              </button>
            </div>

            <div className="pt-2.5 border-t border-[#E5DDD0] space-y-2">
              <a
                href="https://wa.me/917863076114?text=Hi%20Kartik%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20build%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold transition-all"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp: <strong className="font-mono font-bold">+91 78630 76114</strong></span>
                </div>
                <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">1-Tap Chat</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHireModal();
                }}
                className="w-full py-3 px-3.5 rounded-xl bg-[#1C1917] hover:bg-[#8C4A27] text-white text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center gap-2 shadow-md leading-snug active:scale-98"
              >
                <span className="tracking-tight">Grow your business today</span>
                <ArrowUpRight className="w-4 h-4 text-[#D49B5B] shrink-0" />
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

