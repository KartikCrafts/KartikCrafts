import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'classic',
    name: 'Classic Business Website',
    tagline: 'High-Converting Digital Presence to Drive Local Calls & WhatsApp Inquiries',
    originalPrice: 25000,
    discountedPrice: 15000,
    popular: false,
    badge: '⚡ Special Limited Offer (Save ₹10,000)',
    deliveryTime: '5 – 7 Working Days',
    targetAudience: 'Best for Cafes, Bakeries, Salons, Garages & Local Businesses looking for rapid online presence.',
    features: [
      { title: 'Custom 5-Page High Conversion Design', included: true },
      { title: '100% Mobile, Tablet & Desktop Responsive', included: true },
      { title: 'Direct WhatsApp Click-to-Chat / Order Button', included: true, highlight: true },
      { title: 'Google Maps Business Pin & Directions Link', included: true },
      { title: 'Digital Menu / Service Price Rate Card Display', included: true },
      { title: 'Contact & Lead Capture Form with Email Alert', included: true },
      { title: 'Free SSL Security Certificate & Fast CDN', included: true },
      { title: '1 Year Free Hosting Setup & Domain Guidance', included: true },
      { title: 'Basic On-Page Local SEO (Google Search Setup)', included: true },
      { title: 'Client Admin Panel Access', included: false },
      { title: 'Dynamic Database & User Booking Management', included: false },
      { title: 'Payment Gateway Integration', included: false }
    ],
    ctaText: 'Claim ₹15,000 Offer'
  },
  {
    id: 'dynamic',
    name: 'Dynamic Web + Admin Panel',
    tagline: 'Complete Business Machine with Full Client Admin Control & Booking Engine',
    originalPrice: 50000,
    discountedPrice: 40000,
    popular: true,
    badge: '⭐ MOST POPULAR FOR BUSINESS GROWTH (Save ₹10,000)',
    deliveryTime: '8 – 12 Working Days',
    targetAudience: 'Best for Clinics, Gyms, Restaurants, Tuition Centers & Boutiques wanting self-control.',
    features: [
      { title: 'Everything in Classic Plan included', included: true },
      { title: 'Full Client Admin Panel Access (No Coding Required!)', included: true, highlight: true },
      { title: 'Online Appointment / Table / Slot Booking Engine', included: true, highlight: true },
      { title: 'Easily Update Prices, Menus, Photos & Timings from Admin', included: true, highlight: true },
      { title: 'Automated WhatsApp & Email Lead Notifications', included: true },
      { title: 'Customer Review & Rating Management Dashboard', included: true },
      { title: 'UPI QR Code / Online Payment Gateway Integration', included: true },
      { title: 'Advanced Local SEO Dominator (Rank on Google 1st Page)', included: true },
      { title: 'Ultra-Fast Cloud Database & Daily Backups', included: true },
      { title: '1-on-1 Video Training on How to Use Admin Panel', included: true, highlight: true },
      { title: 'Priority WhatsApp VIP Support for 1 Full Year', included: true, highlight: true }
    ],
    adminPanelHighlights: [
      'Self-Service Menu/Service Price Editor (Change prices anytime)',
      'Live Booking & Appointment Calendar with Status (Confirm/Cancel)',
      'Lead CRM (Export customer phone numbers & emails to Excel)',
      'Upload new photos, banner offers & discount coupons in seconds'
    ],
    ctaText: 'Get Dynamic Plan at ₹40,000'
  }
];

export const clientFaqs = [
  {
    question: 'How easy is the Admin Panel to use for me and my staff?',
    answer: 'Extremely simple! You can open the admin panel on your mobile phone or laptop. Changing a menu item price, updating opening hours, or viewing today\'s customer bookings is as easy as sending a WhatsApp message. Plus, I provide a complete 1-on-1 video tutorial.'
  },
  {
    question: 'Will my website show up on Google Maps and Local Search?',
    answer: 'Yes, 100%! Every website comes with standard Local SEO and Google Business profile optimization so local customers searching for "cafe near me", "clinic in [your city]", or "best gym nearby" can find your phone number and directions immediately.'
  },
  {
    question: 'How does the direct WhatsApp integration work?',
    answer: 'When a customer clicks "Order on WhatsApp", "Book Table", or "Book Appointment", it automatically opens their WhatsApp with a pre-filled, organized message containing their name, selected service/dish, and requested date/time directly to your phone number.'
  },
  {
    question: 'What is the 100% Customer Satisfaction Guarantee?',
    answer: 'I do not stop until you are 100% satisfied with the design and functionality. You get unlimited revisions during the design prototype phase before we go live. No surprise costs, no hidden renewal traps.'
  },
  {
    question: 'How does payment work for the project?',
    answer: 'We work on milestone stages: 30% to initiate the project and lock your discount price, 40% after prototype approval, and the remaining 30% only after full testing, admin panel handover, and your final launch sign-off.'
  }
];
