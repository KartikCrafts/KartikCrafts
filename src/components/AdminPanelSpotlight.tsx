import React, { useState, useRef } from 'react';
import { 
  BellRing, 
  Smartphone, 
  Settings, 
  MessageCircle, 
  DollarSign, 
  Check, 
  ArrowRight, 
  Clock, 
  Star, 
  Share2,
  Users,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  FileDown,
  Layers
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';

interface AdminPanelSpotlightProps {
  onOpenHireModal: (plan: 'dynamic') => void;
}

export interface DashboardCategoryItem {
  id: 'cafe' | 'portfolio' | 'gym' | 'clinic' | 'beauty' | 'tuition';
  name: string;
  badge: string;
  icon: string;
  adminTitle: string;
  pdfFile: string;
  pdfName: string;
  pageCount: string;
  orderNumber: string;
  orderBadge: string;
  orderItemDesc: string;
  orderAmount: string;
  customerName: string;
  customerPhone: string;
  bookingTitle: string;
  bookingTime: string;
  bookingDesc: string;
  bookingCustomer: string;
  items: { id: number; name: string; category: string; price: number; stock: boolean }[];
  verifiedReview: { name: string; stars: number; text: string; time: string };
  regularCustomer: { name: string; visits: string; spent: string };
}

export const DASHBOARD_CATEGORIES: DashboardCategoryItem[] = [
  {
    id: 'cafe',
    name: 'Cafe & Bakery',
    badge: 'F&B Business',
    icon: '☕',
    adminTitle: 'Cafe & Bakery Live Dashboard',
    pdfFile: '/samples/cafe-website-sample.pdf',
    pdfName: 'Cafe-Bakery-Website-Sample.pdf',
    pageCount: '18 Pages',
    orderNumber: 'Order #KC-8842',
    orderBadge: 'New Table Order',
    orderItemDesc: '2x Pour-Over Cold Brew + 1x Belgian Truffle Tart',
    orderAmount: '₹580',
    customerName: 'Vikram Joshi',
    customerPhone: '+91 98201 44552',
    bookingTitle: 'VIP Lounge Table Reservation',
    bookingTime: 'Tonight 8:30 PM',
    bookingDesc: 'Party of 6 • Terrace Seating & Ambient Music',
    bookingCustomer: 'Dr. Sen (+91 98112...)',
    items: [
      { id: 1, name: 'Artisan Cold Brew Coffee', category: 'Beverages', price: 240, stock: true },
      { id: 2, name: 'Belgian Truffle Tart', category: 'Bakery', price: 180, stock: true },
      { id: 3, name: 'Sourdough Avocado Toast', category: 'Kitchen', price: 320, stock: true },
    ],
    verifiedReview: {
      name: 'Rohan Deshmukh',
      stars: 5,
      text: 'Best artisan roast in town! Loved the table QR ordering system.',
      time: '12 mins ago'
    },
    regularCustomer: {
      name: 'Neha Roy',
      visits: '14 Visits',
      spent: 'Spent ₹5,400'
    }
  },
  {
    id: 'portfolio',
    name: 'Portfolio Dashboard',
    badge: 'Creative & Agency',
    icon: '💼',
    adminTitle: 'Creative Studio & Freelancer CRM',
    pdfFile: '/samples/portfolio-sample.pdf',
    pdfName: 'Portfolio-Creative-Agency-Sample.pdf',
    pageCount: '22 Pages',
    orderNumber: 'Contract #AM-209',
    orderBadge: 'Inbound Project Lead',
    orderItemDesc: 'SaaS Mobile App UX Design Sprint + Design System',
    orderAmount: '₹85,000',
    customerName: 'Marcus Sterling (FinTech UK)',
    customerPhone: '+44 7911 123456',
    bookingTitle: 'Introductory Strategy Call',
    bookingTime: 'Tomorrow 4:00 PM IST',
    bookingDesc: 'Scope: Full Brand Identity & 3D Interactive Web Flow',
    bookingCustomer: 'Elena Vance (DTC Brands)',
    items: [
      { id: 1, name: 'Full Brand Identity System', category: 'Branding', price: 45000, stock: true },
      { id: 2, name: 'SaaS UX Prototype Sprint', category: 'UI/UX', price: 60000, stock: true },
      { id: 3, name: '1-Hour Advisory Consultation', category: 'Consult', price: 4500, stock: true },
    ],
    verifiedReview: {
      name: 'Marcus Sterling',
      stars: 5,
      text: 'Alex transformed our website conversion by +42% in 2 weeks!',
      time: '1 hour ago'
    },
    regularCustomer: {
      name: 'Sarah Connor',
      visits: '3 Retainers',
      spent: 'Spent ₹1,40,000'
    }
  },
  {
    id: 'gym',
    name: 'Gym Dashboard',
    badge: 'Fitness & CrossFit',
    icon: '🏋️',
    adminTitle: 'IronPulse Gym & CrossFit Manager',
    pdfFile: '/samples/gym-fitness-sample.pdf',
    pdfName: 'Gym-Fitness-CrossFit-Sample.pdf',
    pageCount: '17 Pages',
    orderNumber: 'Member #IP-441',
    orderBadge: 'Annual VIP Pass',
    orderItemDesc: '12 Months CrossFit Unlimited + Steam & Locker Access',
    orderAmount: '₹14,999',
    customerName: 'Rahul Kapoor',
    customerPhone: '+91 98765 12340',
    bookingTitle: 'Free 1-Day Trial Workout',
    bookingTime: 'Today 6:00 PM',
    bookingDesc: 'Goal: Heavyweight Strength Training & Fat Loss',
    bookingCustomer: 'Aman Verma (+91 99201...)',
    items: [
      { id: 1, name: 'Annual VIP Fitness Pass', category: 'Membership', price: 14999, stock: true },
      { id: 2, name: 'Personal Training (12 Sessions)', category: 'Coaching', price: 6500, stock: true },
      { id: 3, name: 'Hydro Pre-Workout Tub (300g)', category: 'Nutrition', price: 2200, stock: true },
    ],
    verifiedReview: {
      name: 'Karan Mehra',
      stars: 5,
      text: 'World-class equipment and personal trainers. Highly motivating environment!',
      time: '3 hours ago'
    },
    regularCustomer: {
      name: 'Amitabh Sen',
      visits: '48 Workouts',
      spent: 'Spent ₹22,500'
    }
  },
  {
    id: 'clinic',
    name: 'Clinic Dashboard',
    badge: 'Dental & Healthcare',
    icon: '🏥',
    adminTitle: 'CareWell Clinic & Patient OPD Portal',
    pdfFile: '/samples/clinic-healthcare-sample.pdf',
    pdfName: 'Clinic-Dental-Hospital-Healthcare-Sample.pdf',
    pageCount: '18 Pages',
    orderNumber: 'Patient #CW-1102',
    orderBadge: 'Confirmed Appointment',
    orderItemDesc: 'Laser Teeth Whitening + Ceramic Dental Checkup',
    orderAmount: '₹4,500',
    customerName: 'Ananya Sharma',
    customerPhone: '+91 98112 33445',
    bookingTitle: 'OPD Doctor Consultation Slot',
    bookingTime: 'Today 5:15 PM',
    bookingDesc: 'Doctor: Dr. Abhishek Verma (Senior Dermatologist)',
    bookingCustomer: 'Rajesh G. (+91 98200...)',
    items: [
      { id: 1, name: 'Dental Root Canal Therapy', category: 'Dental', price: 3500, stock: true },
      { id: 2, name: 'Physician General OPD Slot', category: 'Consult', price: 600, stock: true },
      { id: 3, name: 'Full Diagnostic Health Panel', category: 'Lab Test', price: 1899, stock: true },
    ],
    verifiedReview: {
      name: 'Priya Iyer',
      stars: 5,
      text: 'Painless treatment and very clean clinic. The online token saved 1 hour!',
      time: 'Yesterday'
    },
    regularCustomer: {
      name: 'Sunil Nair',
      visits: '4 Consults',
      spent: 'Spent ₹9,200'
    }
  },
  {
    id: 'beauty',
    name: 'Beauty Parlour Dashboard',
    badge: 'Salon & Luxury Spa',
    icon: '💅',
    adminTitle: 'Glow & Glam Luxury Salon Studio',
    pdfFile: '/samples/beauty-parlour-salon-sample.pdf',
    pdfName: 'Beauty-Parlour-Spa-Salon-Sample.pdf',
    pageCount: '20 Pages',
    orderNumber: 'Booking #GG-304',
    orderBadge: 'Bridal Makeover Package',
    orderItemDesc: 'HD Airbrush Bridal Makeup + French Balayage Hair Spa',
    orderAmount: '₹16,500',
    customerName: 'Priya Sundaram',
    customerPhone: '+91 99401 22334',
    bookingTitle: 'Korean Glass Skin Ritual',
    bookingTime: 'Saturday 11:30 AM',
    bookingDesc: 'Aesthetician: Master Stylist Simran Kaur',
    bookingCustomer: 'Zoya Khan (+91 98101...)',
    items: [
      { id: 1, name: 'Korean Glass Skin Facial', category: 'Skincare', price: 2200, stock: true },
      { id: 2, name: 'HD Airbrush Bridal Makeover', category: 'Bridal', price: 14500, stock: true },
      { id: 3, name: 'Keratin Hair Spa & Treatment', category: 'Hair', price: 3800, stock: true },
    ],
    verifiedReview: {
      name: 'Meera Varma',
      stars: 5,
      text: 'Simran made me look like a queen on my engagement day. 10/10 service!',
      time: 'Yesterday'
    },
    regularCustomer: {
      name: 'Pooja Deshmukh',
      visits: '8 Visits',
      spent: 'Spent ₹14,800'
    }
  },
  {
    id: 'tuition',
    name: 'Tuition & School Dashboard',
    badge: 'Tuition & School (Same PDF)',
    icon: '📚',
    adminTitle: 'Pinnacle Tuition & School Portal',
    pdfFile: '/samples/tuition-school-sample.pdf',
    pdfName: 'Tuition-School-Education-Sample.pdf',
    pageCount: '19 Pages',
    orderNumber: 'Enrolment #PA-590',
    orderBadge: 'Confirmed Admission',
    orderItemDesc: 'Class 10 Science & Maths Annual Board Batch 2026',
    orderAmount: '₹18,000',
    customerName: 'Rajesh Shah (Parent)',
    customerPhone: '+91 98200 99881',
    bookingTitle: 'Free 2-Day Trial Demo Class',
    bookingTime: 'Monday 5:00 PM',
    bookingDesc: 'Student: Aarav Shah (Class 10 CBSE Board Target 95%)',
    bookingCustomer: 'Aarav Shah (+91 98200...)',
    items: [
      { id: 1, name: 'Class 10 Science & Maths Annual', category: 'Board Batch', price: 18000, stock: true },
      { id: 2, name: 'IIT-JEE 2-Year Intensive Batch', category: 'Competitive', price: 45000, stock: true },
      { id: 3, name: 'Little Blooms Nursery Admission', category: 'School', price: 32000, stock: true },
    ],
    verifiedReview: {
      name: 'Sunita Mehra (Parent)',
      stars: 5,
      text: 'My son scored 96% in 10th boards thanks to Pinnacle Academy faculty!',
      time: '2 days ago'
    },
    regularCustomer: {
      name: 'Vipin Bansal',
      visits: '2 Children Enrolled',
      spent: 'Spent ₹52,000'
    }
  }
];

export const AdminPanelSpotlight: React.FC<AdminPanelSpotlightProps> = ({ onOpenHireModal }) => {
  const [selectedDashboardId, setSelectedDashboardId] = useState<'cafe' | 'portfolio' | 'gym' | 'clinic' | 'beauty' | 'tuition'>('cafe');
  const [activeScreen, setActiveScreen] = useState<'orders' | 'menu' | 'reviews' | 'crm' | 'revenue'>('orders');
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxBg = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const currentDashboard = DASHBOARD_CATEGORIES.find(d => d.id === selectedDashboardId) || DASHBOARD_CATEGORIES[0];
  const [itemsState, setItemsState] = useState(currentDashboard.items);

  // Sync items when dashboard category changes
  const handleSelectDashboard = (id: 'cafe' | 'portfolio' | 'gym' | 'clinic' | 'beauty' | 'tuition') => {
    setSelectedDashboardId(id);
    const target = DASHBOARD_CATEGORIES.find(d => d.id === id);
    if (target) {
      setItemsState(target.items);
    }
  };

  const toggleStock = (id: number) => {
    setItemsState(prev => prev.map(item => item.id === id ? { ...item, stock: !item.stock } : item));
  };

  const handleDownloadNotice = (fileName: string) => {
    setDownloadNotice(`Downloading: ${fileName}`);
    setTimeout(() => setDownloadNotice(null), 4000);
  };

  return (
    <section 
      ref={containerRef}
      id="admin-panel-section" 
      className="py-12 sm:py-16 md:py-24 bg-[#F5EFEB] border-y border-[#E0D5C7] relative overflow-hidden"
    >
      {/* Parallax Ambient Shapes */}
      <motion.div 
        style={{ y: parallaxBg }}
        className="absolute top-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#8C4A27]/5 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-3 px-1"
        >
          <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-[#8C4A27]/10 border border-[#8C4A27]/25 text-[#8C4A27] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Settings className="w-3.5 h-3.5 text-[#8C4A27]" />
            <span>Complete Business Command Center (Dynamic Plan • ₹40,000)</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] font-['Outfit'] tracking-tight leading-tight sm:leading-[1.15] break-words">
            Run 100% Of Your Business Operations From A Single Phone Screen
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#57534E]">
            Never call a developer to update your menu prices, lose customer phone numbers, or pay 30% aggregator commission ever again. Your custom Admin Panel automates orders, bookings, UPI payments, and 5-star Google reviews.
          </p>

          {/* User Specific PDF Direct Download Bar */}
          <div className="pt-3 space-y-2">
            <span className="text-xs font-bold text-[#1C1917] block uppercase tracking-wider">
              Download Attached PDF For Any Business Dashboard:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {DASHBOARD_CATEGORIES.map(dash => (
                <a
                  key={dash.id}
                  id={`header-download-${dash.id}-pdf-btn`}
                  href={dash.pdfFile}
                  download={dash.pdfName}
                  onClick={() => handleDownloadNotice(dash.pdfName)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 active:scale-95 ${
                    selectedDashboardId === dash.id 
                      ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                      : 'bg-white text-stone-800 border-stone-300 hover:bg-emerald-50 hover:text-emerald-800'
                  }`}
                  title={`Download ${dash.name} PDF (${dash.pageCount})`}
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>{dash.icon} {dash.name} ({dash.pageCount})</span>
                </a>
              ))}
            </div>
          </div>

          {downloadNotice && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-semibold animate-fadeIn">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{downloadNotice}</span>
            </div>
          )}
        </motion.div>

        {/* Dashboard Switcher Bar: Cafe, Portfolio, Gym, Clinic, Beauty Parlour, Tuition/School */}
        <div className="bg-white p-2 sm:p-3 rounded-2xl border border-[#E0D5C7] shadow-xs">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-2 mb-2 border-b border-[#F0EAE1]">
            <span className="text-xs font-bold text-[#1C1917] uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#8C4A27]" />
              <span>Select Active Industry Dashboard (Each attached to its specific PDF):</span>
            </span>
            <span className="text-[11px] text-emerald-800 bg-emerald-50 font-bold px-2 py-0.5 rounded border border-emerald-200">
              Attached PDF: {currentDashboard.pdfName} ({currentDashboard.pageCount})
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {DASHBOARD_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                id={`switch-dashboard-${cat.id}-btn`}
                onClick={() => handleSelectDashboard(cat.id)}
                className={`p-2.5 rounded-xl border text-left transition-all flex items-center gap-2 ${
                  selectedDashboardId === cat.id
                    ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-md scale-[1.02]'
                    : 'bg-[#FAF7F2] text-[#1C1917] border-[#E0D5C7] hover:bg-white'
                }`}
              >
                <span className="text-xl shrink-0">{cat.icon}</span>
                <div className="min-w-0">
                  <span className="text-xs font-bold block truncate">{cat.name}</span>
                  <span className={`text-[10px] block truncate ${selectedDashboardId === cat.id ? 'text-stone-300' : 'text-stone-500'}`}>
                    {cat.pageCount} PDF
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Features list with Staggered Entrance */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              onClick={() => setActiveScreen('orders')}
              className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                activeScreen === 'orders' ? 'bg-white border-[#8C4A27] shadow-md scale-[1.01]' : 'bg-white/60 border-[#E0D5C7] hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#1C1917] font-bold text-sm sm:text-base font-['Outfit']">
                  <BellRing className="w-4 h-4 text-[#8C4A27]" />
                  <span>Real-Time Inquiries & Sound Alerts</span>
                </div>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Live Push</span>
              </div>
              <p className="text-xs text-[#57534E] mt-1">
                Your phone sounds instantly when a customer books or buys. 1-tap pre-written WhatsApp confirmation sent immediately.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              onClick={() => setActiveScreen('menu')}
              className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                activeScreen === 'menu' ? 'bg-white border-[#8C4A27] shadow-md scale-[1.01]' : 'bg-white/60 border-[#E0D5C7] hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#1C1917] font-bold text-sm sm:text-base font-['Outfit']">
                  <Settings className="w-4 h-4 text-[#8C4A27]" />
                  <span>3-Second Price & Stock Editing</span>
                </div>
                <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">No-Code</span>
              </div>
              <p className="text-xs text-[#57534E] mt-1">
                Change pricing or mark any service as "Sold Out" in 3 seconds directly from your phone. Syncs live across the whole website instantly.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              onClick={() => setActiveScreen('reviews')}
              className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                activeScreen === 'reviews' ? 'bg-white border-[#8C4A27] shadow-md scale-[1.01]' : 'bg-white/60 border-[#E0D5C7] hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#1C1917] font-bold text-sm sm:text-base font-['Outfit']">
                  <Star className="w-4 h-4 text-amber-600" />
                  <span>Google 5-Star Review Multiplier</span>
                </div>
                <span className="text-[10px] bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded">SEO Growth</span>
              </div>
              <p className="text-xs text-[#57534E] mt-1">
                Automatically text customers a direct 5-star Google review link after completed delivery or service. Skyrockets your Google Maps rank.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              onClick={() => setActiveScreen('crm')}
              className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                activeScreen === 'crm' ? 'bg-white border-[#8C4A27] shadow-md scale-[1.01]' : 'bg-white/60 border-[#E0D5C7] hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#1C1917] font-bold text-sm sm:text-base font-['Outfit']">
                  <Users className="w-4 h-4 text-[#8C4A27]" />
                  <span>Customer Phone CRM & Excel Export</span>
                </div>
                <span className="text-[10px] bg-sky-100 text-sky-800 font-bold px-2 py-0.5 rounded">Database</span>
              </div>
              <p className="text-xs text-[#57534E] mt-1">
                Own your customer data. Export all verified phone numbers anytime for festival broadcast campaigns.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              onClick={() => setActiveScreen('revenue')}
              className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                activeScreen === 'revenue' ? 'bg-white border-[#8C4A27] shadow-md scale-[1.01]' : 'bg-white/60 border-[#E0D5C7] hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#1C1917] font-bold text-sm sm:text-base font-['Outfit']">
                  <DollarSign className="w-4 h-4 text-emerald-700" />
                  <span>0% Commission UPI & Direct Bank Ledger</span>
                </div>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">0% Fees</span>
              </div>
              <p className="text-xs text-[#57534E] mt-1">
                Receive 100% of the customer's payment straight into your personal UPI/Bank QR code without middleman deductions.
              </p>
            </motion.div>

            {/* Dynamic Plan Upgrade Callout */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-2"
            >
              <button
                onClick={() => onOpenHireModal('dynamic')}
                className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-[#1C1917] hover:bg-[#8C4A27] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Get Complete Dynamic Plan (₹40,000)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>

          {/* Right Interactive Smartphone/Tablet Mockup Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-white border-2 border-[#D5C6B3] rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-2xl space-y-4 lg:sticky lg:top-24"
          >
            
            {/* Mockup Toolbar */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E5DDD0] text-xs flex-wrap gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-[#78716C] font-mono text-[10px] sm:text-[11px] ml-1 sm:ml-2 truncate max-w-[130px] sm:max-w-none">
                  admin.{currentDashboard.id}-business.com/dashboard
                </span>
              </div>

              {/* Download Sample PDF Option Attached to this Specific Dashboard */}
              <a
                id={`mockup-download-current-dashboard-pdf-btn`}
                href={currentDashboard.pdfFile}
                download={currentDashboard.pdfName}
                onClick={() => handleDownloadNotice(currentDashboard.pdfName)}
                className="px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs flex items-center gap-1.5 transition-all active:scale-95"
                title={`Download ${currentDashboard.name} Sample PDF (${currentDashboard.pageCount})`}
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Sample (PDF)</span>
              </a>
            </div>

            {/* Sub-toolbar: Screen Selector */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-base">{currentDashboard.icon}</span>
                <span className="text-xs font-extrabold text-[#1C1917]">{currentDashboard.adminTitle}</span>
              </div>

              {/* View Screen Switcher with Touch-Friendly Scroll */}
              <div className="flex items-center gap-1 bg-[#FAF7F2] p-1 rounded-xl border border-[#E0D5C7] overflow-x-auto max-w-full">
                <button
                  onClick={() => setActiveScreen('orders')}
                  className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all ${
                    activeScreen === 'orders' ? 'bg-[#1C1917] text-white shadow-xs' : 'text-[#78716C] hover:text-[#1C1917]'
                  }`}
                >
                  🔔 Orders
                </button>
                <button
                  onClick={() => setActiveScreen('menu')}
                  className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all ${
                    activeScreen === 'menu' ? 'bg-[#1C1917] text-white shadow-xs' : 'text-[#78716C] hover:text-[#1C1917]'
                  }`}
                >
                  ⚡ Price & Stock
                </button>
                <button
                  onClick={() => setActiveScreen('reviews')}
                  className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all ${
                    activeScreen === 'reviews' ? 'bg-[#1C1917] text-white shadow-xs' : 'text-[#78716C] hover:text-[#1C1917]'
                  }`}
                >
                  ⭐ Reviews
                </button>
                <button
                  onClick={() => setActiveScreen('crm')}
                  className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all ${
                    activeScreen === 'crm' ? 'bg-[#1C1917] text-white shadow-xs' : 'text-[#78716C] hover:text-[#1C1917]'
                  }`}
                >
                  👥 CRM
                </button>
                <button
                  onClick={() => setActiveScreen('revenue')}
                  className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all ${
                    activeScreen === 'revenue' ? 'bg-[#1C1917] text-white shadow-xs' : 'text-[#78716C] hover:text-[#1C1917]'
                  }`}
                >
                  💰 0% Ledger
                </button>
              </div>
            </div>

            {/* Simulated Live Screen Display with AnimatePresence */}
            <AnimatePresence mode="wait">
              {/* Screen 1: Live Orders & WhatsApp Integration */}
              {activeScreen === 'orders' && (
                <motion.div 
                  key={`screen-orders-${currentDashboard.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 bg-[#FAF7F2] p-3 sm:p-4 rounded-2xl border border-[#E0D5C7]"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">
                        {currentDashboard.name} Live Inflow
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">Sound Alert Enabled 🔊</span>
                  </div>

                  <div className="space-y-2.5">
                    {/* Active Order Card */}
                    <div className="p-3 sm:p-3.5 bg-white rounded-xl border border-[#E5DDD0] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-[#1C1917]">{currentDashboard.orderNumber}</span>
                          <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                            {currentDashboard.orderBadge}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#57534E]">
                          {currentDashboard.orderItemDesc} ({currentDashboard.orderAmount})
                        </p>
                        <span className="text-[10px] text-[#78716C]">
                          Customer: {currentDashboard.customerName} ({currentDashboard.customerPhone})
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 self-start sm:self-auto">
                        <a 
                          href={`https://wa.me/917863076114?text=Hi%20${encodeURIComponent(currentDashboard.customerName)},%20your%20${encodeURIComponent(currentDashboard.orderNumber)}%20is%20confirmed!`}
                          target="_blank" 
                          rel="noreferrer"
                          className="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-[11px] flex items-center gap-1"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>1-Tap WhatsApp Reply</span>
                        </a>
                      </div>
                    </div>

                    {/* Booking Card */}
                    <div className="p-3 sm:p-3.5 bg-white rounded-xl border border-[#E5DDD0] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-[#1C1917]">{currentDashboard.bookingTitle}</span>
                          <span className="px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 text-[10px] font-bold">
                            {currentDashboard.bookingTime}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#57534E]">{currentDashboard.bookingDesc}</p>
                        <span className="text-[10px] text-[#78716C]">Customer: {currentDashboard.bookingCustomer}</span>
                      </div>
                      <span className="text-[11px] bg-[#FAF7F2] text-emerald-700 font-bold px-2 py-1 rounded border border-[#E0D5C7] self-start sm:self-auto">
                        ✓ Auto Confirmed
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Screen 2: Dynamic Price & Out-Of-Stock Switch */}
              {activeScreen === 'menu' && (
                <motion.div 
                  key={`screen-menu-${currentDashboard.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 bg-[#FAF7F2] p-3 sm:p-4 rounded-2xl border border-[#E0D5C7]"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">
                      {currentDashboard.name} Item & Price Manager
                    </span>
                    <span className="text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">
                      ✓ Instant Live Sync
                    </span>
                  </div>

                  <div className="space-y-2">
                    {itemsState.map(item => (
                      <div key={item.id} className="p-3 bg-white rounded-xl border border-[#E5DDD0] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs shadow-xs">
                        <div>
                          <div className="flex items-center gap-2">
                            <h5 className="font-bold text-[#1C1917]">{item.name}</h5>
                            {!item.stock && (
                              <span className="text-[9px] bg-rose-100 text-rose-800 font-bold px-1.5 py-0.5 rounded">
                                Sold Out
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-[#78716C]">{item.category}</span>
                        </div>
                        <div className="flex items-center gap-2 self-start sm:self-auto">
                          <span className="font-mono text-[#8C4A27] font-bold bg-[#FAF7F2] px-2.5 py-1 rounded border border-[#E0D5C7]">
                            ₹{item.price.toLocaleString('en-IN')}
                          </span>
                          <button
                            onClick={() => toggleStock(item.id)}
                            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-colors ${
                              item.stock 
                                ? 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100' 
                                : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                            }`}
                          >
                            {item.stock ? 'Mark Out of Stock' : 'Mark In Stock'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Screen 3: Google 5-Star Reviews Booster */}
              {activeScreen === 'reviews' && (
                <motion.div 
                  key={`screen-reviews-${currentDashboard.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 bg-[#FAF7F2] p-3 sm:p-4 rounded-2xl border border-[#E0D5C7]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">Automated Google Maps Reviews</span>
                    <span className="text-[10px] text-purple-800 bg-purple-100 font-bold px-2 py-0.5 rounded">
                      4.9 ⭐ (120+ Reviews)
                    </span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#E5DDD0] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-amber-500">
                        {Array.from({ length: currentDashboard.verifiedReview.stars }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#78716C]">{currentDashboard.verifiedReview.time}</span>
                    </div>
                    <p className="text-xs text-[#1C1917] italic">
                      "{currentDashboard.verifiedReview.text}"
                    </p>
                    <span className="text-[10px] text-[#78716C] block">
                      — {currentDashboard.verifiedReview.name} (Verified Customer)
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Screen 4: Customer Phone CRM */}
              {activeScreen === 'crm' && (
                <motion.div 
                  key={`screen-crm-${currentDashboard.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 bg-[#FAF7F2] p-3 sm:p-4 rounded-2xl border border-[#E0D5C7]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">
                      {currentDashboard.name} Customer Phone CRM
                    </span>
                    <span className="text-[10px] bg-sky-100 text-sky-800 font-bold px-2 py-0.5 rounded">
                      Export to Excel (.xlsx)
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2.5 bg-white rounded-xl border border-[#E5DDD0] flex items-center justify-between text-xs">
                      <div>
                        <h5 className="font-bold text-[#1C1917]">{currentDashboard.customerName}</h5>
                        <span className="text-[10px] text-[#78716C]">{currentDashboard.customerPhone}</span>
                      </div>
                      <span className="text-[10px] bg-amber-50 text-amber-800 font-bold px-2 py-0.5 rounded border border-amber-200">
                        VIP Active
                      </span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#E5DDD0] flex items-center justify-between text-xs">
                      <div>
                        <h5 className="font-bold text-[#1C1917]">{currentDashboard.regularCustomer.name}</h5>
                        <span className="text-[10px] text-[#78716C]">
                          {currentDashboard.regularCustomer.visits} • {currentDashboard.regularCustomer.spent}
                        </span>
                      </div>
                      <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-200">
                        Loyalty Member
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Screen 5: Revenue & 0% Commission Ledger */}
              {activeScreen === 'revenue' && (
                <motion.div 
                  key={`screen-revenue-${currentDashboard.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 bg-[#FAF7F2] p-3 sm:p-4 rounded-2xl border border-[#E0D5C7]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">Direct Bank Revenue (This Month)</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                      0% Gateway Cut
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-white rounded-xl border border-[#E5DDD0] text-center">
                      <span className="text-xl font-extrabold text-[#1C1917] font-mono">₹1,84,500</span>
                      <p className="text-[10px] text-emerald-700 font-bold mt-0.5">UPI & Direct Bank</p>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E5DDD0] text-center">
                      <span className="text-xl font-extrabold text-emerald-700 font-mono">₹55,350</span>
                      <p className="text-[10px] text-[#78716C] font-semibold mt-0.5">Saved in Commissions</p>
                    </div>
                  </div>

                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 font-medium">
                    ✓ Money directly transferred to your HDFC / ICICI / SBI account in real time via your personal QR Code.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Dashboard Attachment Bar */}
            <div className="pt-3 border-t border-[#E5DDD0] flex flex-wrap items-center justify-between gap-3 bg-[#FAF7F2] p-3 rounded-xl">
              <div>
                <span className="text-xs font-bold text-[#1C1917] block">
                  {currentDashboard.name} Attached Sample Document
                </span>
                <span className="text-[11px] text-[#78716C]">
                  File: {currentDashboard.pdfName} ({currentDashboard.pageCount})
                </span>
              </div>
              <a
                id={`mockup-bottom-download-${currentDashboard.id}-pdf-btn`}
                href={currentDashboard.pdfFile}
                download={currentDashboard.pdfName}
                onClick={() => handleDownloadNotice(currentDashboard.pdfName)}
                className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all active:scale-95"
              >
                <FileDown className="w-3.5 h-3.5 text-white" />
                <span>Download {currentDashboard.name} PDF</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
