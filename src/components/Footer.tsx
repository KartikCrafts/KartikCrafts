import React from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ArrowUp,
  MapPin,
  Clock,
  ExternalLink,
  Globe
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenHireModal: (plan?: 'classic' | 'dynamic') => void;
  onSelectCategory: (cat: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHireModal, onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] border-t border-[#2E2824] text-[#A8A29E] text-xs relative">
      
      {/* Top Pre-Footer Call to Action Bar */}
      <div className="border-b border-[#2E2824] bg-gradient-to-r from-[#291A12]/60 via-[#1C1917] to-[#291A12]/60 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">
              Ready to grow your local customer base?
            </h3>
            <p className="text-xs sm:text-sm text-[#D5C6B3]">
              Get your custom website prototype in 48 hours. Zero risk, 100% satisfaction guarantee.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenHireModal('classic')}
              className="px-5 py-3 rounded-xl bg-[#2E2824] hover:bg-[#3D352F] text-white font-bold text-xs border border-[#443C36] transition-all"
            >
              Classic Plan (₹15,000)
            </button>
            <button
              onClick={() => onOpenHireModal('dynamic')}
              className="px-6 py-3 rounded-xl bg-[#8C4A27] hover:bg-[#A3562E] text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              Dynamic + Admin Panel (₹40,000)
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Brand & Dev Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <BrandLogo size="md" showText={false} />
            <div>
              <h4 className="text-base font-extrabold text-white font-['Outfit'] leading-none">
                Kartik Crafts
              </h4>
              <span className="text-[10px] text-[#D49B5B] font-semibold tracking-wider uppercase">
                Freelance Web Developer • India
              </span>
            </div>
          </div>

          <p className="text-[#A8A29E] text-xs leading-relaxed max-w-sm">
            Specialized in handcrafted, high-converting digital storefronts and bespoke web applications for local business owners across India. No slow bloated templates — only blazing fast, custom-engineered code.
          </p>

          {/* Main Portfolio Link Badge */}
          <div className="pt-1">
            <a
              id="footer-main-portfolio-link"
              href="https://kartik-pandya003.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#291A12] border border-[#8C4A27]/40 text-[#FAF7F2] hover:text-white hover:border-[#8C4A27] hover:bg-[#8C4A27]/20 transition-all font-semibold text-xs group"
            >
              <Globe className="w-4 h-4 text-[#D49B5B] group-hover:scale-110 transition-transform" />
              <span>Main Website: <strong className="text-white underline decoration-[#D49B5B]">kartik-pandya003.vercel.app</strong></span>
              <ExternalLink className="w-3.5 h-3.5 text-[#D49B5B]" />
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#D5C6B3] flex-wrap pt-1">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#D49B5B]" />
              Pan-India Service
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              5-10 Days Delivery
            </span>
          </div>
        </div>

        {/* Industry Demos */}
        <div className="space-y-3">
          <h5 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit']">
            Sample Live Demos
          </h5>
          <ul className="space-y-1.5 text-xs text-[#A8A29E]">
            <li>
              <button 
                onClick={() => { onSelectCategory('cafe'); scrollToTop(); }}
                className="hover:text-[#D49B5B] transition-colors"
              >
                Cafe & Coffee Shop
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onSelectCategory('restaurant'); scrollToTop(); }}
                className="hover:text-[#D49B5B] transition-colors"
              >
                Fine Dine Restaurant
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onSelectCategory('clinic'); scrollToTop(); }}
                className="hover:text-[#D49B5B] transition-colors"
              >
                Clinic & Doctors
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onSelectCategory('bakery'); scrollToTop(); }}
                className="hover:text-[#D49B5B] transition-colors"
              >
                Bakery & Cake Studio
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onSelectCategory('gym'); scrollToTop(); }}
                className="hover:text-[#D49B5B] transition-colors"
              >
                Gym & Fitness Club
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onSelectCategory('salon'); scrollToTop(); }}
                className="hover:text-[#D49B5B] transition-colors"
              >
                Salon & Luxury Spa
              </button>
            </li>
          </ul>
        </div>

        {/* More Categories */}
        <div className="space-y-3">
          <h5 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit']">
            More Industries
          </h5>
          <ul className="space-y-1.5 text-xs text-[#A8A29E]">
            <li>
              <button 
                onClick={() => { onSelectCategory('school'); scrollToTop(); }}
                className="hover:text-[#D49B5B] transition-colors"
              >
                Play School & Daycare
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onSelectCategory('garage'); scrollToTop(); }}
                className="hover:text-[#D49B5B] transition-colors"
              >
                Car Garage & Auto Care
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onSelectCategory('tuition'); scrollToTop(); }}
                className="hover:text-[#D49B5B] transition-colors"
              >
                Tuition & Coaching
              </button>
            </li>
            <li>
              <button 
                onClick={() => { onSelectCategory('tailor'); scrollToTop(); }}
                className="hover:text-[#D49B5B] transition-colors"
              >
                Tailor & Boutique
              </button>
            </li>
            <li>
              <a href="#pricing-section" className="hover:text-[#D49B5B] transition-colors">
                Pricing Comparison
              </a>
            </li>
            <li>
              <a href="#admin-panel-section" className="hover:text-[#D49B5B] transition-colors">
                Admin Panel Showcase
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & WhatsApp */}
        <div className="space-y-3">
          <h5 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit']">
            Direct Contact
          </h5>
          <div className="space-y-2.5">
            <a
              href="https://wa.me/917863076114?text=Hi%20Kartik,%20I%20am%20interested%20in%20a%20website%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +91 78630 76114</span>
            </a>

            <div className="flex items-center gap-2 text-xs text-[#D5C6B3]">
              <Phone className="w-4 h-4 text-[#D49B5B]" />
              <span>+91 78630 76114</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#D5C6B3]">
              <Mail className="w-4 h-4 text-[#D49B5B]" />
              <span className="truncate">kartikpandya023@gmail.com</span>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2E2824] py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#78716C]">
        <div className="text-center sm:text-left">
          © {new Date().getFullYear()} Kartik Crafts • Kartik Pandya. All rights reserved. Handcrafted with precision.
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a 
            href="https://kartik-pandya003.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white underline decoration-[#8C4A27] font-medium"
          >
            kartik-pandya003.vercel.app
          </a>
          <span>•</span>
          <span>Domain & SSL Setup Included</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#2E2824] hover:bg-[#3D352F] text-[#D5C6B3] transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

    </footer>
  );
};

