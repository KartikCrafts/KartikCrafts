import React, { useState } from 'react';
import { ProjectItem, ProjectDemoItem } from '../types';
import { generateProjectSamplePdf, getProjectPdfMeta } from '../utils/samplePdfGenerator';
import { 
  X, 
  Smartphone, 
  Tablet, 
  Monitor, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  MessageSquare, 
  CheckCircle2, 
  Plus, 
  Minus, 
  Calendar, 
  ShieldCheck, 
  Settings, 
  TrendingUp, 
  ShoppingBag, 
  Sliders, 
  Zap,
  FileDown,
  FileText,
  Layers,
  Palette
} from 'lucide-react';

interface LiveDemoModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onHireForThisProject: (project: ProjectItem) => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  project,
  onClose,
  onHireForThisProject
}) => {
  if (!project) return null;

  const [deviceMode, setDeviceMode] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [activeTab, setActiveTab] = useState<'home' | 'items' | 'book' | 'admin' | 'sample'>('home');
  const [orderCart, setOrderCart] = useState<Record<string, number>>({});
  const [bookingStatus, setBookingStatus] = useState<string | null>(null);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  // Form states inside demo
  const [demoName, setDemoName] = useState('');
  const [demoPhone, setDemoPhone] = useState('');
  const [demoDate, setDemoDate] = useState('');
  const [demoTime, setDemoTime] = useState('11:00 AM');
  const [demoService, setDemoService] = useState(project.demoData.items[0]?.name || '');

  // Admin Panel Simulation interactive state
  const [simulatedItems, setSimulatedItems] = useState<ProjectDemoItem[]>(project.demoData.items);
  const [adminPriceEditIndex, setAdminPriceEditIndex] = useState<number | null>(null);
  const [tempPrice, setTempPrice] = useState('');
  const [adminNotif, setAdminNotif] = useState<string | null>(null);

  const demo = project.demoData;
  const isDynamic = project.packageType === 'dynamic';

  const handleAddToCart = (itemName: string) => {
    setOrderCart(prev => ({
      ...prev,
      [itemName]: (prev[itemName] || 0) + 1
    }));
  };

  const handleRemoveFromCart = (itemName: string) => {
    setOrderCart(prev => {
      const current = prev[itemName] || 0;
      if (current <= 1) {
        const copy = { ...prev };
        delete copy[itemName];
        return copy;
      }
      return { ...prev, [itemName]: current - 1 };
    });
  };

  const cartTotalItems: number = Object.values(orderCart).reduce<number>((a, b) => a + (Number(b) || 0), 0);

  const handleDemoBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoName || !demoPhone) {
      alert('Please enter a demo name and phone number');
      return;
    }
    setBookingStatus('confirmed');
  };

  const handleSaveAdminPrice = (index: number) => {
    if (!tempPrice) return;
    const updated = [...simulatedItems];
    updated[index] = { ...updated[index], price: tempPrice };
    setSimulatedItems(updated);
    setAdminPriceEditIndex(null);
    setAdminNotif(`Updated ${updated[index].name} price to ${tempPrice}!`);
    setTimeout(() => setAdminNotif(null), 3000);
  };

  const handleDownloadPdf = () => {
    try {
      setIsDownloadingPdf(true);
      const fileName = generateProjectSamplePdf(project);
      setDownloadNotice(`Downloaded sample: ${fileName}`);
      setTimeout(() => setDownloadNotice(null), 4000);
    } catch (err) {
      console.error('PDF generation error:', err);
      setDownloadNotice('Failed to generate PDF. Please try again.');
      setTimeout(() => setDownloadNotice(null), 4000);
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  const getContainerWidth = () => {
    switch (deviceMode) {
      case 'mobile':
        return 'max-w-[390px]';
      case 'tablet':
        return 'max-w-[768px]';
      default:
        return 'max-w-5xl';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Container */}
      <div className="flex flex-col w-full h-[95vh] max-w-7xl bg-[#FAF7F2] border border-[#E0D5C7] rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Simulator Control Bar */}
        <div className="bg-white px-4 py-3 border-b border-[#E0D5C7] flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Project title & Package */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#8C4A27]/10 border border-[#8C4A27]/20 flex items-center justify-center text-[#8C4A27] font-bold text-sm">
              ✨
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#1C1917] font-['Outfit']">{project.title}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF7F2] text-[#8C4A27] border border-[#E0D5C7]">
                  {project.packageType === 'dynamic' ? 'Dynamic + Admin (₹40k)' : 'Classic (₹15k)'}
                </span>
              </div>
              <p className="text-[11px] text-[#78716C]">Interactive Live Prototype Simulator</p>
            </div>
          </div>

          {/* Center: Device Switcher */}
          <div className="flex items-center gap-1 bg-[#FAF7F2] p-1 rounded-xl border border-[#E0D5C7]">
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                deviceMode === 'mobile' ? 'bg-[#1C1917] text-white shadow-xs' : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden sm:inline">Mobile</span>
            </button>

            <button
              onClick={() => setDeviceMode('tablet')}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                deviceMode === 'tablet' ? 'bg-[#1C1917] text-white shadow-xs' : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
              title="Tablet View"
            >
              <Tablet className="w-4 h-4" />
              <span className="hidden sm:inline">Tablet</span>
            </button>

            <button
              onClick={() => setDeviceMode('desktop')}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                deviceMode === 'desktop' ? 'bg-[#1C1917] text-white shadow-xs' : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
              title="Desktop View"
            >
              <Monitor className="w-4 h-4" />
              <span className="hidden sm:inline">Desktop</span>
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button
              id={`live-demo-download-sample-btn-${project.id}`}
              onClick={handleDownloadPdf}
              disabled={isDownloadingPdf}
              className="px-3 sm:px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold shadow-xs flex items-center gap-1.5 transition-all active:scale-95 disabled:opacity-60"
              title={`Download ${project.title} Sample PDF`}
            >
              <FileDown className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="hidden sm:inline">{isDownloadingPdf ? 'Generating PDF...' : 'Download Sample'}</span>
              <span className="sm:hidden font-bold">PDF Sample</span>
            </button>

            <button
              onClick={() => onHireForThisProject(project)}
              className="px-4 py-2 rounded-xl bg-[#1C1917] hover:bg-[#8C4A27] text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition-all active:scale-95"
            >
              <span>Get This Website</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#FAF7F2] hover:bg-[#E5DDD0] text-[#57534E] hover:text-[#1C1917] border border-[#E0D5C7] transition-colors"
              aria-label="Close demo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Optional Download Notification Bar */}
        {downloadNotice && (
          <div className="bg-emerald-700 text-white px-4 py-2 text-xs font-bold flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-200" />
              <span>{downloadNotice}</span>
            </div>
            <span className="text-[11px] text-emerald-200 font-normal">PDF saved to your downloads</span>
          </div>
        )}

        {/* Live Simulator Viewport Area */}
        <div className="flex-1 overflow-y-auto bg-[#EFE9E0] p-2 sm:p-6 flex justify-center items-start">
          
          <div className={`w-full ${getContainerWidth()} bg-white border border-[#D5C6B3] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col`}>
            
            {/* Simulated Browser Address Bar */}
            <div className="bg-[#FAF7F2] px-4 py-2 border-b border-[#E0D5C7] flex items-center justify-between text-xs text-[#78716C]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-1 rounded-full border border-[#E0D5C7] text-[11px] text-emerald-700">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>https://www.{project.id.replace(/-/g, '')}.com</span>
              </div>
              <div className="text-[10px] text-[#A8A29E]">Live SSL 256-bit</div>
            </div>

            {/* Simulated Client Website Header */}
            <div className="bg-white border-b border-[#E0D5C7] p-3 sm:p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#1C1917] font-['Outfit']">
                    {demo.brandName}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[#57534E]">
                    <span className="flex items-center gap-1 text-[#8C4A27] font-semibold">
                      <Star className="w-3 h-3 fill-[#8C4A27]" />
                      {demo.googleRating} ({demo.totalReviews} Google Reviews)
                    </span>
                    <span>•</span>
                    <span className="text-emerald-700 font-medium">{demo.badgeText}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${demo.whatsappNumber}?text=Hi%20${encodeURIComponent(demo.brandName)}%2C%20I%20saw%20your%20website%20and%20want%20to%20inquire.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1 shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Simulated Navigation Tabs */}
              <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-[#E0D5C7] overflow-x-auto text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('home')}
                  className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                    activeTab === 'home' ? 'bg-[#1C1917] text-white font-bold' : 'text-[#57534E] hover:bg-[#FAF7F2]'
                  }`}
                >
                  Overview & Specials
                </button>
                <button
                  onClick={() => setActiveTab('items')}
                  className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1 ${
                    activeTab === 'items' ? 'bg-[#1C1917] text-white font-bold' : 'text-[#57534E] hover:bg-[#FAF7F2]'
                  }`}
                >
                  <span>Catalog & Rates</span>
                  {cartTotalItems > 0 && (
                    <span className="bg-rose-500 text-white text-[10px] px-1.5 py-0.2 rounded-full">
                      {cartTotalItems}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('book')}
                  className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                    activeTab === 'book' ? 'bg-[#1C1917] text-white font-bold' : 'text-[#57534E] hover:bg-[#FAF7F2]'
                  }`}
                >
                  ⚡ Direct Booking Form
                </button>

                {isDynamic && (
                  <button
                    onClick={() => setActiveTab('admin')}
                    className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 border ${
                      activeTab === 'admin' 
                        ? 'bg-[#8C4A27] text-white font-bold border-[#8C4A27]' 
                        : 'bg-[#8C4A27]/10 text-[#8C4A27] border-[#8C4A27]/30 hover:bg-[#8C4A27]/20'
                    }`}
                  >
                    <Settings className="w-3.5 h-3.5" />
                    <span>Client Admin Panel (Try Editing!)</span>
                  </button>
                )}

                <button
                  id={`live-demo-nav-sample-tab-${project.id}`}
                  onClick={() => setActiveTab('sample')}
                  className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 border ${
                    activeTab === 'sample'
                      ? 'bg-emerald-700 text-white font-bold border-emerald-700 shadow-xs'
                      : 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                  }`}
                >
                  <FileDown className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Download Sample (PDF)</span>
                </button>
              </div>
            </div>

            {/* Simulated Website Content Body */}
            <div className="p-4 sm:p-6 space-y-6">
              
              {/* TAB 1: HOME & OVERVIEW */}
              {activeTab === 'home' && (
                <div className="space-y-6 animate-fadeIn">
                  
                  {/* Hero Banner */}
                  <div className="relative rounded-2xl overflow-hidden p-6 sm:p-8 bg-[#FAF7F2] border border-[#E0D5C7] text-left">
                    <div className="max-w-lg space-y-3">
                      <span className="inline-block text-xs font-bold text-[#8C4A27] uppercase tracking-wider bg-[#8C4A27]/10 px-2.5 py-1 rounded border border-[#8C4A27]/20">
                        {project.industryLabel}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#1C1917] font-['Outfit'] leading-tight">
                        {demo.heroHeadline}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                        {demo.heroSubheadline}
                      </p>
                      
                      <div className="pt-2 flex flex-wrap gap-2.5">
                        <button
                          onClick={() => setActiveTab('book')}
                          className="px-4 py-2 rounded-xl bg-[#1C1917] hover:bg-[#8C4A27] text-white font-bold text-xs shadow-sm transition-all"
                        >
                          Book Now Online
                        </button>
                        <button
                          onClick={() => setActiveTab('items')}
                          className="px-4 py-2 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#1C1917] font-semibold text-xs border border-[#D5C6B3]"
                        >
                          View Menu / Services
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Prominent Download Sample PDF Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-800 to-emerald-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-emerald-800/40 shadow-md">
                    <div className="space-y-1.5">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
                        <FileDown className="w-3.5 h-3.5" />
                        <span>Project Blueprint & Design Sample • PDF Format</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white font-['Outfit']">
                        Download {project.title} Complete Sample (PDF)
                      </h4>
                      <p className="text-xs text-stone-300 max-w-xl">
                        Full 4-page verified architectural blueprint: Executive Scope, Hex Color Palettes & Fonts, Interactive Catalog Data, and Client Admin CRM specs.
                      </p>
                    </div>

                    <button
                      id={`home-download-sample-btn-${project.id}`}
                      onClick={handleDownloadPdf}
                      disabled={isDownloadingPdf}
                      className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 whitespace-nowrap shrink-0 disabled:opacity-60"
                    >
                      <FileDown className="w-4 h-4" />
                      <span>{isDownloadingPdf ? 'Generating PDF...' : 'Download Sample (PDF)'}</span>
                    </button>
                  </div>

                  {/* Offers & Highlights */}
                  {demo.offers && demo.offers.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {demo.offers.map((off, i) => (
                        <div key={i} className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E0D5C7] flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <h5 className="font-bold text-sm text-[#1C1917]">{off.title}</h5>
                              <span className="text-[10px] font-extrabold bg-rose-500 text-white px-2 py-0.5 rounded">
                                {off.badge}
                              </span>
                            </div>
                            <p className="text-xs text-[#57534E]">{off.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Address & Timings */}
                  <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E0D5C7] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#57534E]">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#8C4A27] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1C1917] block font-semibold">Location & Map:</strong>
                        <span>{demo.address}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#8C4A27] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1C1917] block font-semibold">Operating Hours:</strong>
                        <span>{demo.timings}</span>
                      </div>
                    </div>
                  </div>

                  {/* Reviews */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#57534E]">
                      Verified Customer Feedback
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {demo.reviews.map((rev, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E0D5C7] text-xs shadow-xs">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-bold text-[#1C1917]">{rev.name}</span>
                            <div className="flex text-[#8C4A27]">
                              {[...Array(rev.rating)].map((_, r) => (
                                <Star key={r} className="w-3 h-3 fill-[#8C4A27]" />
                              ))}
                            </div>
                          </div>
                          <p className="text-[#57534E] italic">"{rev.text}"</p>
                          <span className="text-[10px] text-[#A8A29E] mt-1 block">{rev.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 2: MENU / SERVICES / PRICING */}
              {activeTab === 'items' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-[#1C1917] font-['Outfit']">
                        Catalog & Services Rate Card
                      </h4>
                      <p className="text-xs text-[#57534E]">Click to add items or send direct WhatsApp order</p>
                    </div>

                    {cartTotalItems > 0 && (
                      <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-300 px-3 py-1.5 rounded-xl text-xs text-emerald-800 font-bold">
                        <ShoppingBag className="w-4 h-4" />
                        <span>{cartTotalItems} items selected</span>
                      </div>
                    )}
                  </div>

                  {/* Items List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {simulatedItems.map((item, idx) => {
                      const count = orderCart[item.name] || 0;
                      return (
                        <div 
                          key={idx} 
                          className="p-3.5 rounded-xl bg-white border border-[#E0D5C7] hover:border-[#8C4A27] flex flex-col justify-between shadow-xs transition-colors"
                        >
                          <div>
                            <div className="flex items-baseline justify-between gap-2">
                              <h5 className="font-bold text-sm text-[#1C1917]">{item.name}</h5>
                              <span className="text-xs font-extrabold text-[#8C4A27] font-['Outfit']">
                                {item.price || item.fee || item.time || 'Available'}
                              </span>
                            </div>
                            <span className="text-[10px] font-semibold text-[#78716C] uppercase tracking-wider block mt-0.5">
                              {item.category} {item.spec && `• ${item.spec}`}
                            </span>
                            <p className="text-xs text-[#57534E] mt-1">{item.desc}</p>
                          </div>

                          <div className="mt-3 pt-2 border-t border-[#E0D5C7] flex items-center justify-between">
                            <span className="text-[11px] text-[#78716C]">
                              {item.popular ? '🔥 Popular choice' : 'Top rated'}
                            </span>

                            <div className="flex items-center gap-2">
                              {count > 0 ? (
                                <div className="flex items-center gap-2 bg-[#FAF7F2] px-2 py-0.5 rounded-lg border border-[#D5C6B3]">
                                  <button onClick={() => handleRemoveFromCart(item.name)} className="text-[#1C1917] hover:text-[#8C4A27] p-0.5">
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="text-xs font-bold text-[#1C1917] px-1">{count}</span>
                                  <button onClick={() => handleAddToCart(item.name)} className="text-[#1C1917] hover:text-[#8C4A27] p-0.5">
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => handleAddToCart(item.name)}
                                  className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] hover:bg-[#8C4A27] hover:text-white text-[#8C4A27] text-xs font-bold border border-[#8C4A27]/30 transition-all flex items-center gap-1"
                                >
                                  <Plus className="w-3 h-3" />
                                  <span>Select</span>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Cart Checkout Banner */}
                  {cartTotalItems > 0 && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div>
                        <h5 className="font-bold text-[#1C1917] text-sm">Send Order directly to Business WhatsApp</h5>
                        <p className="text-xs text-[#57534E]">
                          {Object.entries(orderCart).map(([name, qty]) => `${name} (x${qty})`).join(', ')}
                        </p>
                      </div>
                      <a
                        href={`https://wa.me/${demo.whatsappNumber}?text=Hi%20${encodeURIComponent(demo.brandName)}%2C%20I%20want%20to%20order%3A%20${encodeURIComponent(Object.entries(orderCart).map(([k, v]) => `${k} x${v}`).join(', '))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 whitespace-nowrap shadow-xs"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send WhatsApp Order</span>
                      </a>
                    </div>
                  )}

                </div>
              )}

              {/* TAB 3: BOOKING FORM */}
              {activeTab === 'book' && (
                <div className="max-w-xl mx-auto space-y-4 animate-fadeIn">
                  <div className="text-center space-y-1">
                    <h4 className="text-lg font-bold text-[#1C1917] font-['Outfit']">
                      Direct Online Booking & Appointment
                    </h4>
                    <p className="text-xs text-[#57534E]">
                      Zero waiting time • Instant WhatsApp & SMS confirmation
                    </p>
                  </div>

                  {bookingStatus === 'confirmed' ? (
                    <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                      <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                      <h4 className="text-lg font-bold text-[#1C1917]">Simulated Booking Confirmed!</h4>
                      <p className="text-xs text-[#57534E]">
                        In the real website, this automatically triggers a WhatsApp alert to the client ({demo.phone}) and logs the booking directly inside the Client Admin Panel.
                      </p>
                      <button
                        onClick={() => setBookingStatus(null)}
                        className="px-4 py-2 rounded-xl bg-[#1C1917] text-white text-xs font-bold hover:bg-[#8C4A27]"
                      >
                        Test Another Booking
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleDemoBookingSubmit} className="space-y-3 bg-[#FAF7F2] p-5 rounded-2xl border border-[#E0D5C7]">
                      <div>
                        <label className="text-xs font-semibold text-[#57534E] block mb-1">Your Full Name:</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={demoName}
                          onChange={(e) => setDemoName(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-[#D5C6B3] rounded-xl text-xs text-[#1C1917] focus:outline-none focus:border-[#8C4A27]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-[#57534E] block mb-1">WhatsApp Mobile No:</label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 9876543210"
                            value={demoPhone}
                            onChange={(e) => setDemoPhone(e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-[#D5C6B3] rounded-xl text-xs text-[#1C1917] focus:outline-none focus:border-[#8C4A27]"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-[#57534E] block mb-1">Preferred Date:</label>
                          <input
                            type="date"
                            value={demoDate}
                            onChange={(e) => setDemoDate(e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-[#D5C6B3] rounded-xl text-xs text-[#1C1917] focus:outline-none focus:border-[#8C4A27]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-semibold text-[#57534E] block mb-1">Select Service / Reason:</label>
                          <select
                            value={demoService}
                            onChange={(e) => setDemoService(e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-[#D5C6B3] rounded-xl text-xs text-[#1C1917] focus:outline-none focus:border-[#8C4A27]"
                          >
                            {simulatedItems.map((it, i) => (
                              <option key={i} value={it.name}>{it.name}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-[#57534E] block mb-1">Preferred Slot:</label>
                          <select
                            value={demoTime}
                            onChange={(e) => setDemoTime(e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-[#D5C6B3] rounded-xl text-xs text-[#1C1917] focus:outline-none focus:border-[#8C4A27]"
                          >
                            <option value="10:00 AM">10:00 AM - Morning</option>
                            <option value="12:30 PM">12:30 PM - Afternoon</option>
                            <option value="04:00 PM">04:00 PM - Evening</option>
                            <option value="07:00 PM">07:00 PM - Night</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-xl bg-[#1C1917] hover:bg-[#8C4A27] text-white font-bold text-xs shadow-sm transition-all active:scale-95"
                      >
                        Submit Test Reservation / Booking
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* TAB 4: CLIENT ADMIN PANEL SIMULATOR (Only in Dynamic Plan) */}
              {activeTab === 'admin' && isDynamic && (
                <div className="space-y-4 animate-fadeIn bg-white p-4 sm:p-6 rounded-2xl border border-[#8C4A27]/30 shadow-sm">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-[#E0D5C7]">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#8C4A27]/10 flex items-center justify-center text-[#8C4A27]">
                        <Settings className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1C1917]">Client Admin Dashboard (Simulator)</h4>
                        <p className="text-[11px] text-[#8C4A27]">
                          Included in ₹40,000 Dynamic Package • No tech skills required!
                        </p>
                      </div>
                    </div>

                    <div className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      ● Live Connected
                    </div>
                  </div>

                  {adminNotif && (
                    <div className="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold rounded-xl text-center">
                      {adminNotif}
                    </div>
                  )}

                  {/* Interactive Admin Feature: Change Menu/Service Price */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">
                        1. Instant Item Price & Menu Editor
                      </span>
                      <span className="text-[11px] text-[#78716C]">Try changing any price below:</span>
                    </div>

                    <div className="space-y-2">
                      {simulatedItems.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#E0D5C7] flex items-center justify-between gap-3 text-xs">
                          <div className="flex-1 min-w-0">
                            <span className="font-bold text-[#1C1917] block truncate">{item.name}</span>
                            <span className="text-[10px] text-[#78716C]">{item.category}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            {adminPriceEditIndex === idx ? (
                              <div className="flex items-center gap-1.5">
                                <input
                                  type="text"
                                  placeholder="e.g. ₹299"
                                  value={tempPrice}
                                  onChange={(e) => setTempPrice(e.target.value)}
                                  className="w-20 px-2 py-1 bg-white border border-[#8C4A27] rounded text-xs text-[#1C1917]"
                                />
                                <button
                                  onClick={() => handleSaveAdminPrice(idx)}
                                  className="px-2 py-1 bg-[#1C1917] hover:bg-[#8C4A27] text-white font-bold rounded text-[11px]"
                                >
                                  Save
                                </button>
                                <button
                                  onClick={() => setAdminPriceEditIndex(null)}
                                  className="px-1.5 py-1 bg-white border border-[#D5C6B3] text-[#57534E] rounded text-[11px]"
                                >
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <span className="font-extrabold text-[#8C4A27]">{item.price || item.fee || 'Active'}</span>
                                <button
                                  onClick={() => {
                                    setAdminPriceEditIndex(idx);
                                    setTempPrice(item.price || '₹300');
                                  }}
                                  className="px-2 py-1 rounded bg-white hover:bg-[#8C4A27] hover:text-white text-[#1C1917] font-semibold text-[11px] border border-[#D5C6B3] transition-colors"
                                >
                                  Edit Price
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Simulated Recent Bookings Table */}
                  <div className="space-y-2 pt-2 border-t border-[#E0D5C7]">
                    <span className="text-xs font-bold text-[#1C1917] uppercase tracking-wider block">
                      2. Today's Customer Inquiries & Bookings Pipeline
                    </span>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs text-[#57534E]">
                        <thead className="bg-[#FAF7F2] text-[#78716C] uppercase text-[10px]">
                          <tr>
                            <th className="p-2">Customer</th>
                            <th className="p-2">Service</th>
                            <th className="p-2">Time</th>
                            <th className="p-2">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E0D5C7]">
                          <tr>
                            <td className="p-2 font-semibold text-[#1C1917]">Aarav K. (+91 98230...)</td>
                            <td className="p-2">{simulatedItems[0]?.name}</td>
                            <td className="p-2 text-[#8C4A27] font-medium">11:30 AM Today</td>
                            <td className="p-2">
                              <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded font-bold">
                                Confirmed
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 font-semibold text-[#1C1917]">Sneha R. (+91 98112...)</td>
                            <td className="p-2">{simulatedItems[1]?.name}</td>
                            <td className="p-2 text-[#8C4A27] font-medium">4:00 PM Tomorrow</td>
                            <td className="p-2">
                              <span className="bg-amber-100 text-amber-900 text-[10px] px-2 py-0.5 rounded font-bold">
                                Pending Call
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Admin Download Sample Blueprint action */}
                  <div className="pt-3 border-t border-[#E0D5C7] flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl">
                    <div>
                      <span className="text-xs font-bold text-[#1C1917] block">Want this Admin Panel documentation in PDF?</span>
                      <span className="text-[11px] text-[#78716C]">Download the complete technical blueprint including admin workflows & data schema.</span>
                    </div>
                    <button
                      id={`admin-download-sample-btn-${project.id}`}
                      onClick={handleDownloadPdf}
                      disabled={isDownloadingPdf}
                      className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 disabled:opacity-60"
                    >
                      <FileDown className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{isDownloadingPdf ? 'Generating...' : 'Download Sample (PDF)'}</span>
                    </button>
                  </div>

                </div>
              )}

              {/* TAB 5: AUTHENTIC SAMPLE PDF PREVIEW & DIRECT DOWNLOAD */}
              {activeTab === 'sample' && (() => {
                const pdfMeta = getProjectPdfMeta(project);
                return (
                  <div className="space-y-6">
                    
                    {/* Hero Banner for PDF Sample */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white border border-emerald-800/50 shadow-xl relative overflow-hidden">
                      <div className="relative z-10 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
                          <FileDown className="w-4 h-4 text-emerald-400" />
                          <span>ATTACHED USER PDF • {pdfMeta.pageCount} FULL PAGES • A4 VECTOR QUALITY</span>
                        </div>
                        
                        <div className="space-y-1">
                          <h3 className="text-xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                            {pdfMeta.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-stone-300 max-w-3xl leading-relaxed">
                            Complete showcase including real website hero mockups, industry conversion features, 24 verified color combinations, and 6 creator aesthetic pairings.
                          </p>
                        </div>

                        {/* Download CTA Bar */}
                        <div className="pt-2 flex flex-wrap items-center gap-3">
                          <a
                            id={`sample-tab-download-direct-btn-${project.id}`}
                            href={pdfMeta.publicFilePath}
                            download={pdfMeta.sourcePdfFileName}
                            onClick={() => {
                              setDownloadNotice(`Downloading authentic file: ${pdfMeta.sourcePdfFileName}`);
                              setTimeout(() => setDownloadNotice(null), 4000);
                            }}
                            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-extrabold text-sm shadow-lg flex items-center gap-2.5 transition-all active:scale-95"
                          >
                            <FileDown className="w-4 h-4 text-stone-950 stroke-[2.5]" />
                            <span>Download Official PDF ({pdfMeta.pageCount} Pages)</span>
                          </a>

                          <a
                            id={`sample-tab-open-newtab-btn-${project.id}`}
                            href={pdfMeta.publicFilePath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 flex items-center gap-2 transition-all"
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                            <span>Preview in New Tab</span>
                          </a>

                          <span className="text-xs text-stone-400 pl-1">
                            File: {pdfMeta.sourcePdfFileName} • Vector Graphics
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Section 1: Attached PDF Page Mockups Showcase */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-[#1C1917] font-['Outfit'] uppercase tracking-wider flex items-center gap-2">
                            <Layers className="w-4 h-4 text-[#8C4A27]" />
                            <span>Attached PDF Showcase Designs ({pdfMeta.highlightPages.length} of {pdfMeta.pageCount} Pages)</span>
                          </h4>
                          <span className="text-xs text-[#78716C]">
                            Real website interfaces included inside this industry PDF
                          </span>
                        </div>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-stone-200 text-stone-700 font-bold">
                          {pdfMeta.pageCount} Pages Total
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {pdfMeta.highlightPages.map((page) => (
                          <div 
                            key={page.pageNumber}
                            className="p-4 rounded-xl bg-white border border-[#E0D5C7] shadow-xs hover:border-[#8C4A27]/40 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-800">
                                  Page {page.pageNumber}
                                </span>
                                <span 
                                  className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                                  style={{ backgroundColor: page.accentColor }}
                                >
                                  {page.badge}
                                </span>
                              </div>

                              <div>
                                <h5 className="font-extrabold text-sm text-[#1C1917]">
                                  {page.brand}
                                </h5>
                                <p className="text-xs font-semibold text-[#8C4A27]">
                                  {page.tagline}
                                </p>
                              </div>

                              <p className="text-xs text-[#57534E] italic bg-[#FAF7F2] p-2 rounded-lg border border-[#E0D5C7]/60">
                                "{page.heroText}"
                              </p>

                              <div className="pt-1">
                                <span className="text-[10px] font-bold text-[#78716C] uppercase tracking-wider block mb-1">
                                  Included Features:
                                </span>
                                <ul className="text-xs text-[#57534E] space-y-0.5 list-disc list-inside">
                                  {page.features.map((feat, idx) => (
                                    <li key={idx} className="truncate">{feat}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-[#F0EAE1] flex items-center justify-between">
                              <span className="text-[11px] font-semibold text-[#78716C]">
                                Action: {page.ctaText}
                              </span>
                              <span 
                                className="w-3.5 h-3.5 rounded-full border border-black/10"
                                style={{ backgroundColor: page.accentColor }}
                                title={`Accent: ${page.accentColor}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section 2: 24 Best Color Combinations (from user PDF) */}
                    <div className="p-5 rounded-2xl bg-white border border-[#E0D5C7] shadow-xs space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-bold text-[#1C1917] font-['Outfit'] uppercase tracking-wider flex items-center gap-2">
                            <Palette className="w-4 h-4 text-emerald-600" />
                            <span>The Best Color Combinations (24 Curated Swatches)</span>
                          </h4>
                          <span className="text-xs text-[#78716C]">
                            Tested 2-tone harmonic palettes extracted directly from your attached PDF
                          </span>
                        </div>
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                          Included in PDF Appendix
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                        {pdfMeta.bestColorCombinations.map((combo, idx) => (
                          <div 
                            key={idx}
                            className="p-2.5 rounded-xl border border-stone-200 hover:border-stone-400 bg-stone-50/50 transition-all flex items-center gap-2"
                          >
                            <div className="flex -space-x-1.5 shrink-0">
                              <span 
                                className="w-5 h-5 rounded-full border border-white shadow-xs" 
                                style={{ backgroundColor: combo.hex1 }}
                              />
                              <span 
                                className="w-5 h-5 rounded-full border border-white shadow-xs" 
                                style={{ backgroundColor: combo.hex2 }}
                              />
                            </div>
                            <div className="min-w-0">
                              <span className="text-[11px] font-bold text-stone-800 block truncate">
                                {combo.name}
                              </span>
                              <span className="text-[9px] text-stone-500 font-mono block">
                                {combo.hex1}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section 3: Aesthetic Website Color Combos Creators Should Try */}
                    <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E0D5C7] space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-[#1C1917] font-['Outfit'] uppercase tracking-wider flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-600" />
                          <span>Aesthetic Website Color Combos Creators Should Try</span>
                        </h4>
                        <span className="text-xs text-[#78716C] font-semibold">6 Master Schemes</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {pdfMeta.aestheticCombos.map((item) => (
                          <div 
                            key={item.id}
                            className="p-3.5 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between space-y-2"
                            style={{ backgroundColor: item.bg }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-black tracking-widest text-stone-500 uppercase">
                                COMBO {item.id}
                              </span>
                              <span className="text-[10px] font-mono text-stone-700 font-bold">
                                {item.hex}
                              </span>
                            </div>
                            <div>
                              <h5 className="font-bold text-sm text-stone-900">{item.title}</h5>
                              <p className="text-xs text-stone-600">{item.tag}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Download Bar */}
                    <div className="p-4 rounded-xl bg-white border border-[#E0D5C7] flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
                          📄
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#1C1917] block">
                            {pdfMeta.sourcePdfFileName}
                          </span>
                          <span className="text-[11px] text-[#78716C]">
                            Official {pdfMeta.pageCount}-page design system attachment • Instant 1-click download
                          </span>
                        </div>
                      </div>

                      <a
                        id={`sample-tab-bottom-download-btn-${project.id}`}
                        href={pdfMeta.publicFilePath}
                        download={pdfMeta.sourcePdfFileName}
                        onClick={() => {
                          setDownloadNotice(`Downloading: ${pdfMeta.sourcePdfFileName}`);
                          setTimeout(() => setDownloadNotice(null), 4000);
                        }}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all active:scale-95"
                      >
                        <FileDown className="w-4 h-4" />
                        <span>Download PDF ({pdfMeta.pageCount} Pages)</span>
                      </a>
                    </div>

                  </div>
                );
              })()}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
