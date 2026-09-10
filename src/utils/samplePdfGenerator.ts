import { ProjectItem } from '../types';

export interface ShowcasePage {
  pageNumber: number;
  brand: string;
  tagline: string;
  category: string;
  badge: string;
  heroText: string;
  features: string[];
  ctaText: string;
  accentColor: string;
}

export interface ProjectPdfMeta {
  categoryKey: 'cafe' | 'portfolio' | 'gym' | 'clinic' | 'beauty' | 'tuition';
  title: string;
  sourcePdfFileName: string;
  publicFilePath: string;
  pageCount: number;
  highlightPages: ShowcasePage[];
  bestColorCombinations: { name: string; hex1: string; hex2: string }[];
  aestheticCombos: { id: string; title: string; tag: string; hex: string; bg: string }[];
}

// 24 Authentic Best Color Combinations from user's PDF
export const USER_BEST_COLOR_COMBINATIONS = [
  { name: 'Dusty Pink & Navy', hex1: '#DBACB1', hex2: '#182B49' },
  { name: 'Olive & Gold', hex1: '#6B7A3F', hex2: '#D4A017' },
  { name: 'Plum & Cream', hex1: '#5E2646', hex2: '#F7F3E9' },
  { name: 'Burnt Orange & Teal', hex1: '#C2592A', hex2: '#16606E' },
  { name: 'Mustard & Grey', hex1: '#E3A82F', hex2: '#6C757D' },
  { name: 'Black Cherry & Blush', hex1: '#58182C', hex2: '#EEC2C6' },
  { name: 'Forest Green & Sand', hex1: '#22452C', hex2: '#D6C6A6' },
  { name: 'Copper & White', hex1: '#B87333', hex2: '#FFFFFF' },
  { name: 'Rust & Off-White', hex1: '#A83E22', hex2: '#FAF7F2' },
  { name: 'Denim Blue & Taupe', hex1: '#30557D', hex2: '#B3A191' },
  { name: 'Chocolate & Peach', hex1: '#3D2314', hex2: '#FFBE98' },
  { name: 'Mint & Silver Grey', hex1: '#A3DEC1', hex2: '#BDC3C7' },
  { name: 'Eggplant & Light Grey', hex1: '#44213E', hex2: '#DCDCE1' },
  { name: 'Turquoise & Coral', hex1: '#20B2AA', hex2: '#EB6857' },
  { name: 'Burgundy & Gold', hex1: '#800020', hex2: '#DAA520' },
  { name: 'Stone Blue & Ivory', hex1: '#4B779A', hex2: '#FFFFF0' },
  { name: 'Lemon Yellow & Navy', hex1: '#FEDC56', hex2: '#0F2043' },
  { name: 'Moss Green & Cream', hex1: '#5A754E', hex2: '#F8F4E6' },
  { name: 'Rose Gold & Charcoal', hex1: '#B76E79', hex2: '#2C2F33' },
  { name: 'Lavender & Slate', hex1: '#B3A0CE', hex2: '#525E6B' },
  { name: 'Sandy Brown & Teal', hex1: '#C68E57', hex2: '#126672' },
  { name: 'Red & Beige', hex1: '#C62828', hex2: '#EEE6D9' },
  { name: 'Sky Blue & Bronze', hex1: '#73B9EA', hex2: '#8C6239' },
  { name: 'Deep Green & Blush', hex1: '#153826', hex2: '#F2C5CC' }
];

// Aesthetic Website Color Combos Creators Should Try from user's PDF
export const USER_AESTHETIC_COMBOS = [
  { id: '01', title: 'Soft Blue + White', tag: 'Modern, Fresh & Clean Tech', hex: '#3B82F6 & #FFFFFF', bg: '#EFF6FF' },
  { id: '02', title: 'Black + Silver', tag: 'High-End Luxury, Bold & Premium', hex: '#18181B & #E4E4E7', bg: '#F4F4F5' },
  { id: '03', title: 'Beige + Brown', tag: 'Artisanal, Organic, Warm & Cozy', hex: '#8C4A27 & #F5EBE1', bg: '#FAF7F2' },
  { id: '04', title: 'Sage + Cream', tag: 'Natural Wellness, Calm & Botanical', hex: '#546E59 & #F4F1EA', bg: '#F4F7F4' },
  { id: '05', title: 'Navy + White', tag: 'Clinical Authority, Corporate & Trust', hex: '#0F2240 & #F8FAFC', bg: '#F1F5F9' },
  { id: '06', title: 'Dusty Pink + Gray', tag: 'Aesthetic Salon, Soft Glam & Modern', hex: '#BE5078 & #71717A', bg: '#FDF2F8' }
];

export function getProjectPdfMeta(project: ProjectItem): ProjectPdfMeta {
  const ind = project.industry;

  // 1. CAFE, BAKERY & RESTAURANT -> User's Cafe Attachment (18 Pages)
  if (ind === 'cafe' || ind === 'bakery' || ind === 'restaurant') {
    return {
      categoryKey: 'cafe',
      title: 'Cafe, Bakery & Eatery Website Design Showcase (18 Pages)',
      sourcePdfFileName: 'Cafe-Bakery-Website-Sample.pdf',
      publicFilePath: '/samples/cafe-website-sample.pdf',
      pageCount: 18,
      bestColorCombinations: USER_BEST_COLOR_COMBINATIONS,
      aestheticCombos: USER_AESTHETIC_COMBOS,
      highlightPages: [
        {
          pageNumber: 1,
          brand: 'The Daily Grind Artisan Bakery',
          tagline: 'Freshly Baked, Just for You!',
          category: 'Artisan Bakery',
          badge: 'BREAD & PASTRIES',
          heroText: 'Handcrafted Sourdough, Flaky Croissants & Custom Celebration Cakes',
          features: ['Artisan Bread Menu', 'Tiered Cake Customizer', 'WhatsApp Order Bot', 'Daily Fresh Stock Tracker'],
          ctaText: 'ORDER BAKED GOODS',
          accentColor: '#B45309'
        },
        {
          pageNumber: 2,
          brand: 'BrewCraft Coffee & Eatery',
          tagline: 'Good Coffee Better Days',
          category: 'Specialty Coffee',
          badge: 'SINGLE ORIGIN',
          heroText: 'Engineered Pour-Overs, Nitro Cold Brews & Cozy Community Table',
          features: ['Pour-Over Coffee Guide', 'Digital QR Table Menu', 'Table Seat Reservation', 'Beans Delivery Portal'],
          ctaText: 'EXPLORE BREWS',
          accentColor: '#78350F'
        },
        {
          pageNumber: 3,
          brand: 'Cafe Lunaire',
          tagline: 'Made for Slow Moments',
          category: 'Boutique Cafe',
          badge: 'ARTISANAL VIBES',
          heroText: 'Savor Every Drop of Hand-Pressed Coffee & French Delicacies',
          features: ['Curated Toast & Panini Bar', 'Matcha Cloud Frappe', 'Happy Hours Banner', 'Live Music Booking'],
          ctaText: 'BOOK A TABLE',
          accentColor: '#4E342E'
        },
        {
          pageNumber: 4,
          brand: 'Drinko Espresso & Roastery',
          tagline: 'Sweet Moments Start Here',
          category: 'Coffee Roasters',
          badge: 'INSTANT PICKUP',
          heroText: 'Order Specialty Coffee for Curbside Pickup in Under 5 Minutes',
          features: ['Quick 20s Checkout', 'Direct UPI QR Payments', 'Loyalty Coffee Stamp', 'Roasted Beans Bag Order'],
          ctaText: 'ORDER COFFEE NOW',
          accentColor: '#C2410C'
        },
        {
          pageNumber: 5,
          brand: 'Brew Haven Coffee House',
          tagline: 'Every Cup Crafted to Perfection',
          category: 'Coffee & Bites',
          badge: 'LOCAL ROASTS',
          heroText: 'Freshly Ground Ethiopian & Arabica Blends with Oven-Baked Scones',
          features: ['Specialty Coffee Tasting', 'Co-working Wi-Fi Pass', 'Chef Special Desserts', 'Direct WhatsApp Menu'],
          ctaText: 'RESERVE SEAT',
          accentColor: '#92400E'
        },
        {
          pageNumber: 6,
          brand: 'Kyoto Minimalist Japanese Cafe',
          tagline: 'Art of Mindful Tea & Coffee',
          category: 'Japanese Cafe',
          badge: 'ZEN AMBIENCE',
          heroText: 'Ceremonial Grade Matcha, Japanese Dorayaki & Quiet Aesthetics',
          features: ['Ceremonial Matcha Tea', 'Handmade Mochi Sweets', 'Quiet Corner Seatings', 'Tea Set Gift Shop'],
          ctaText: 'DISCOVER MENU',
          accentColor: '#2E4035'
        }
      ]
    };
  }

  // 2. PORTFOLIO & DIGITAL CREATIVE -> User's Portfolio Attachment (22 Pages)
  if (ind === 'portfolio') {
    return {
      categoryKey: 'portfolio',
      title: 'Portfolio, Designer & Creative Agency Showcase (22 Pages)',
      sourcePdfFileName: 'Portfolio-Creative-Agency-Sample.pdf',
      publicFilePath: '/samples/portfolio-sample.pdf',
      pageCount: 22,
      bestColorCombinations: USER_BEST_COLOR_COMBINATIONS,
      aestheticCombos: USER_AESTHETIC_COMBOS,
      highlightPages: [
        {
          pageNumber: 1,
          brand: 'Alex Morgan Digital Creative & UI/UX',
          tagline: 'Designing Solutions, Not Just Visuals',
          category: 'UI/UX & Product Designer',
          badge: 'AVAILABLE FOR FREELANCE',
          heroText: 'Crafting High-Converting Digital Experiences, Design Systems & Next-Gen Interfaces',
          features: ['Selected Case Studies', 'Interactive Figma Prototypes', 'Design System Library', 'Direct 1-Click Consultation'],
          ctaText: 'VIEW FEATURED WORK',
          accentColor: '#18181B'
        },
        {
          pageNumber: 2,
          brand: 'Sania Graphics & Brand Identity',
          tagline: 'Designing Brands that People Remember',
          category: 'Brand Designer',
          badge: 'AWARD WINNING',
          heroText: 'Memorable Logos, Packaging Design, Vector Illustrations & Complete Brand Kits',
          features: ['Logo Portfolio Gallery', 'Packaging Showcase', 'Client Testimonial Videos', 'Get Custom Design Quote'],
          ctaText: 'START A PROJECT',
          accentColor: '#E11D48'
        },
        {
          pageNumber: 3,
          brand: 'Inbio Professional Full-Stack Developer',
          tagline: 'Jone Lee Senior Software Engineer',
          category: 'Full-Stack Coder',
          badge: 'CLEAN CODE & SPEED',
          heroText: 'Building Fast, Scalable Web Apps with React, Node.js, TypeScript & Cloud APIs',
          features: ['Live GitHub Repositories', 'Interactive Web Demos', 'Tech Stack Badges', 'Book a 15-Min Intro Call'],
          ctaText: 'HIRE DEVELOPER',
          accentColor: '#2563EB'
        },
        {
          pageNumber: 4,
          brand: 'Maria Novikova Clinical Psychologist',
          tagline: 'Compassionate Therapy for Inner Peace & Clarity',
          category: 'Therapy & Psychology',
          badge: 'CONFIDENTIAL & SAFE',
          heroText: 'Individual Therapy, Stress Relief, Cognitive Behavioral Tools & Online Consultations',
          features: ['Private Session Booking', 'Specialization Breakdown', 'Client FAQ & Ethics', 'Secure WhatsApp Booking'],
          ctaText: 'BOOK THERAPY SESSION',
          accentColor: '#546E59'
        },
        {
          pageNumber: 5,
          brand: 'Creatix Digital Agency',
          tagline: 'Empowering Brands Through Creative Solutions',
          category: 'Digital Agency',
          badge: 'FULL SERVICE',
          heroText: 'Web Development, Performance SEO, Paid Ads Strategy & High-Impact Copywriting',
          features: ['ROI Case Studies (+340%)', 'Service Package Estimator', 'Client Roster Logos', 'Book Strategy Audit'],
          ctaText: 'SCHEDULE STRATEGY CALL',
          accentColor: '#9333EA'
        },
        {
          pageNumber: 6,
          brand: 'Markivo Influencer Marketing Solutions',
          tagline: 'Smart Ideas For Modern Brands',
          category: 'Marketing Agency',
          badge: 'VIRAL REACH',
          heroText: 'Connecting DTC Brands with Top Influencers for Authentic High-Converting Campaigns',
          features: ['Influencer Database Access', 'Campaign Analytics Dashboard', 'Case Studies & Metrics', 'Get Pitch Deck PDF'],
          ctaText: 'LAUNCH CAMPAIGN',
          accentColor: '#EA580C'
        }
      ]
    };
  }

  // 3. GYM & FITNESS -> User's Gym Attachment (17 Pages)
  if (ind === 'gym') {
    return {
      categoryKey: 'gym',
      title: 'Gym, Fitness Club & Athletic Studio Showcase (17 Pages)',
      sourcePdfFileName: 'Gym-Fitness-CrossFit-Sample.pdf',
      publicFilePath: '/samples/gym-fitness-sample.pdf',
      pageCount: 17,
      bestColorCombinations: USER_BEST_COLOR_COMBINATIONS,
      aestheticCombos: USER_AESTHETIC_COMBOS,
      highlightPages: [
        {
          pageNumber: 1,
          brand: 'BearFit Performance Gym',
          tagline: 'Achieve More Than Just Fitness',
          category: 'Strength & Conditioning',
          badge: 'HEAVYWEIGHT CLUB',
          heroText: 'Olympic Lifting Platforms, Certified Strength Mentors & No-Excuses Community',
          features: ['Free 1-Day Trial Pass Form', 'Membership Cost Calculator', 'Batch Timetable Filter', 'Transformation Gallery'],
          ctaText: 'CLAIM FREE VIP PASS',
          accentColor: '#DC2626'
        },
        {
          pageNumber: 2,
          brand: 'IronPulse 24/7 Fitness & CrossFit',
          tagline: 'Transform Your Body, Unleash Your Potential',
          category: 'CrossFit & Functional',
          badge: 'OPEN 24 HOURS',
          heroText: '12,000 Sq.Ft Training Zone, Luxury Steam Rooms & High-Energy HIIT Group Batches',
          features: ['CrossFit & Zumba Schedules', 'Personal Trainer Profiles', 'Body BMI & Goal Calculator', 'Direct WhatsApp Leads'],
          ctaText: 'BOOK TRIAL WORKOUT',
          accentColor: '#EA580C'
        },
        {
          pageNumber: 3,
          brand: 'Athletix Sports Wear & Training Club',
          tagline: 'Train Hard. Stay Relentless.',
          category: 'Athletic Performance',
          badge: 'ELITE ATHLETES',
          heroText: 'Science-Backed Biomechanics, Calisthenics Rigs & Sprint Conditioning Tracks',
          features: ['Strength Testing Protocol', 'Nutrition & Diet Planner', 'Online Coach Booking', 'Member Community App'],
          ctaText: 'EXPLORE PROGRAMS',
          accentColor: '#0F172A'
        },
        {
          pageNumber: 4,
          brand: 'IronCore Strength & Muscle Hub',
          tagline: 'Get Fit. Stay Strong.',
          category: 'Bodybuilding & Powerlifting',
          badge: 'HAMMER STRENGTH',
          heroText: 'State-of-the-Art Free Weights, Dumbbells up to 60kg & Competition Prep Mentorship',
          features: ['Personal Coaching Rates', 'Diet Macro Chart', 'Gym Locker & Steam Info', 'Instant Trial Booking'],
          ctaText: 'START TRAINING TODAY',
          accentColor: '#B91C1C'
        },
        {
          pageNumber: 5,
          brand: 'Knockout Boxing & MMA Gym',
          tagline: 'Discipline. Focus. Dominate.',
          category: 'Boxing & Martial Arts',
          badge: 'FIGHT READY',
          heroText: 'Heavy Bag Stations, Full Size Boxing Ring, Kickboxing & Self-Defense Classes',
          features: ['Beginner Boxing Batches', 'Sparring Safety Standards', 'Trainer Championship Badges', '1-Click WhatsApp Join'],
          ctaText: 'GET GLOVES & TRAIN',
          accentColor: '#D97706'
        },
        {
          pageNumber: 6,
          brand: 'Peak Fitness & Wellness Studio',
          tagline: 'Become the Best Version of Yourself',
          category: 'Fitness & Aerobics',
          badge: 'GROUP CARDIO',
          heroText: 'Zumba, Spinning Cycle Studio, Power Yoga & Friendly Community Atmosphere',
          features: ['Weekly Group Class Calendar', 'Couple Membership Discounts', 'Personal Locker Facility', 'Google Reviews 4.9'],
          ctaText: 'VIEW CLASS SCHEDULE',
          accentColor: '#2563EB'
        }
      ]
    };
  }

  // 4. CLINIC, DENTAL & HEALTHCARE -> User's Clinic Attachment (18 Pages)
  if (ind === 'clinic') {
    return {
      categoryKey: 'clinic',
      title: 'Clinic, Dental & Multispeciality Healthcare Showcase (18 Pages)',
      sourcePdfFileName: 'Clinic-Dental-Hospital-Healthcare-Sample.pdf',
      publicFilePath: '/samples/clinic-healthcare-sample.pdf',
      pageCount: 18,
      bestColorCombinations: USER_BEST_COLOR_COMBINATIONS,
      aestheticCombos: USER_AESTHETIC_COMBOS,
      highlightPages: [
        {
          pageNumber: 1,
          brand: 'CareWell Multispeciality & Dental Clinic',
          tagline: 'Modern Dentistry with Gentle Care',
          category: 'Dental & Multispeciality',
          badge: 'NABH ACCREDITED',
          heroText: 'Advanced Painless Root Canals, Cosmetic Smile Makeovers & General Checkups',
          features: ['Doctor Slot Schedule', 'Treatment Price Estimator', 'WhatsApp Reminders', 'Client Admin Doctor CRM'],
          ctaText: 'BOOK CONSULTATION',
          accentColor: '#0284C7'
        },
        {
          pageNumber: 2,
          brand: 'Nova Super Specialist Hospital',
          tagline: 'Premium Treatments for a Healthy Lifestyle',
          category: 'Super Specialist Hospital',
          badge: '24/7 EMERGENCY',
          heroText: 'Comprehensive Cardiology, Neurology, Orthopedics & Advanced Diagnostics',
          features: ['Emergency SOS Call', 'Radiology & MRI Lab', 'Online Doctor Roster', 'Insurance TPA Guide'],
          ctaText: 'BOOK HOSPITAL VISIT',
          accentColor: '#0E7490'
        },
        {
          pageNumber: 3,
          brand: 'HealthCare Medical Center',
          tagline: 'Your Health Is Our Priority',
          category: 'Internal Medicine & Surgery',
          badge: 'VERIFIED DOCTORS',
          heroText: 'Experienced Physicians, Digital Prescriptions & Family Health Checkups',
          features: ['Instant Slot Booking', 'Preventive Health Packs', 'Pediatric Vaccination', 'Download Lab Reports'],
          ctaText: 'SCHEDULE VISIT',
          accentColor: '#10B981'
        },
        {
          pageNumber: 4,
          brand: 'PureSmile Modern Dental Clinic',
          tagline: 'Smiles That Last a Lifetime',
          category: 'Dental Aesthetics',
          badge: 'INVISIBLE ALIGNERS',
          heroText: 'Laser Teeth Whitening, Ceramic Implants & Gentle Pediatric Dentistry',
          features: ['Smile Makeover Gallery', 'Digital OPG X-Ray', 'Transparent Pricing', 'Emergency Toothache SOS'],
          ctaText: 'GET SMILE CONSULT',
          accentColor: '#06B6D4'
        },
        {
          pageNumber: 5,
          brand: 'BloomHer Women & Maternity Care',
          tagline: 'Compassionate Care for Every Chapter of Life',
          category: 'Women Health & Gynecology',
          badge: 'SPECIALIZED MATERNITY',
          heroText: 'Dedicated Gynecologists, Antenatal Classes & Modern Delivery Suites',
          features: ['Trimester Care Plans', 'Ultrasound Booking', 'Female Specialists', 'Confidential Chat'],
          ctaText: 'BOOK GYNECOLOGIST',
          accentColor: '#DB2777'
        },
        {
          pageNumber: 6,
          brand: 'LifeSecure Dermatology & Laser Clinic',
          tagline: 'Healthy Skin. Confident You.',
          category: 'Dermatology & Cosmetology',
          badge: 'US-FDA APPROVED',
          heroText: 'Acne Scar Removal, Laser Hair Reduction & Anti-Aging Skin Rejuvenation',
          features: ['Skin Analysis Scan', 'Laser Therapy Cost Card', 'Doctor Consultation', 'Verified Patient Reviews'],
          ctaText: 'BOOK DERMA APPOINTMENT',
          accentColor: '#0D9488'
        }
      ]
    };
  }

  // 5. BEAUTY PARLOUR, SALON & SPA -> User's Spa Attachment (20 Pages)
  if (ind === 'salon') {
    return {
      categoryKey: 'beauty',
      title: 'Beauty Parlour, Luxury Salon & Wellness Spa Showcase (20 Pages)',
      sourcePdfFileName: 'Beauty-Parlour-Spa-Salon-Sample.pdf',
      publicFilePath: '/samples/beauty-parlour-salon-sample.pdf',
      pageCount: 20,
      bestColorCombinations: USER_BEST_COLOR_COMBINATIONS,
      aestheticCombos: USER_AESTHETIC_COMBOS,
      highlightPages: [
        {
          pageNumber: 1,
          brand: 'Serenity Luxury Spa & Wellness',
          tagline: 'Pure Relaxation. Total Renewal.',
          category: 'Luxury Day Spa',
          badge: 'ORGANIC OILS',
          heroText: 'Swedish Aromatherapy Massages, Herbal Body Scrubs & Deep Tension Release',
          features: ['Interactive Spa Menu', 'Stylist & Therapist Booking', 'Couple Spa Suites', 'Direct WhatsApp Slot Selection'],
          ctaText: 'RESERVE SPA RITUAL',
          accentColor: '#BE185D'
        },
        {
          pageNumber: 2,
          brand: 'Glow & Glam Luxury Salon & Academy',
          tagline: 'Reveal Your True Radiance & Unwind in Luxury',
          category: 'Salon & Makeover Studio',
          badge: 'BRIDAL SPECIALISTS',
          heroText: 'Korean Glass Skin Facials, French Balayage Hair Color & Celebrity Bridal Artistry',
          features: ['Bridal Package Rate Card', 'Balayage Hair Portfolio', 'Nail Art Studio Menu', 'Instant 20% Off Lead Capture'],
          ctaText: 'BOOK SALON VISIT',
          accentColor: '#DB2777'
        },
        {
          pageNumber: 3,
          brand: 'Lumiere Skin Clinic & Med Spa',
          tagline: 'Advanced Care for Radiant Skin',
          category: 'Aesthetic Med Spa',
          badge: 'DERMA CERTIFIED',
          heroText: 'Hydra-Oxygen Facials, Collagen Boosters & Non-Invasive Anti-Aging',
          features: ['Skin Type Quiz', 'Treatment Before/After', 'Online Slot Booking', 'Doctor Consultation'],
          ctaText: 'EXPLORE TREATMENTS',
          accentColor: '#A21CAF'
        },
        {
          pageNumber: 4,
          brand: 'Zenova Spa & Wellness Sanctuary',
          tagline: 'Wellness Massage. Time for Yourself.',
          category: 'Wellness Retreat',
          badge: 'HOLISTIC THERAPY',
          heroText: 'Warm Stone Therapies, Sound Bowl Healing & Ayurvedic Shirodhara',
          features: ['Ayurvedic Consultation', 'Herbal Steam Sauna', 'Weekend Detox Pass', 'Gift Voucher Shop'],
          ctaText: 'BOOK HEALING SESSION',
          accentColor: '#0D9488'
        },
        {
          pageNumber: 5,
          brand: 'Velvetique Beauty & Hair Lounge',
          tagline: 'Radiant Skin. Real Confidence.',
          category: 'Hair & Beauty Studio',
          badge: 'TOP STYLISTS',
          heroText: 'Keratin Smoothing, Microblading, Hydra Facials & Glam Party Makeup',
          features: ['Price Transparency List', 'Stylist Instagram Reel Feed', 'Direct WhatsApp Booking', 'Student Discount'],
          ctaText: 'CLAIM FIRST VISIT PERK',
          accentColor: '#E11D48'
        },
        {
          pageNumber: 6,
          brand: 'Aura Luxe Salon & Makeover Academy',
          tagline: 'Enhance Your Beauty, Embrace Your Confidence',
          category: 'Bridal Studio & Academy',
          badge: 'CELEBRITY MAKEUP',
          heroText: 'High-Definition Airbrush Bridal Makeup & Professional Academy Courses',
          features: ['Bridal Trial Booking', 'Academy Syllabus PDF', 'Trousseau Styling', 'Master Class Registration'],
          ctaText: 'BOOK BRIDAL CONSULT',
          accentColor: '#B45309'
        }
      ]
    };
  }

  // 6. TUITION CLASS & SCHOOL -> User's School Attachment (19 Pages)
  // "tuition class for school mein donon sem PDF upload kar Jo Maine tujhe bheji hai vah"
  return {
    categoryKey: 'tuition',
    title: 'Tuition Class, School & University Education Showcase (19 Pages)',
    sourcePdfFileName: 'Tuition-School-Education-Sample.pdf',
    publicFilePath: '/samples/tuition-school-sample.pdf',
    pageCount: 19,
    bestColorCombinations: USER_BEST_COLOR_COMBINATIONS,
    aestheticCombos: USER_AESTHETIC_COMBOS,
    highlightPages: [
      {
        pageNumber: 1,
        brand: 'Pinnacle Science & Commerce Academy',
        tagline: 'Learn From Top IIT & CA Mentors. 95%+ Board Results.',
        category: 'Tuition & Coaching Classes',
        badge: 'BATCH SIZE: 25 STUDENTS',
        heroText: 'Small Batches, Weekly Test Series, Doubt Clearing Sessions & Hall of Fame Toppers',
        features: ['Book 2-Day Free Trial Class', 'Course & Batch Timetable Filter', 'Test Marks & Answer Key Portal', 'Direct WhatsApp Counseling'],
        ctaText: 'BOOK FREE DEMO CLASS',
        accentColor: '#4F46E5'
      },
      {
        pageNumber: 2,
        brand: 'Little Blooms International Play School',
        tagline: 'Where Curiosity Blooms & Happy Childhood Begins',
        category: 'Play School & Daycare',
        badge: 'ADMISSIONS OPEN 2026',
        heroText: 'Montessori Experiential Learning, Loving Certified Educators & Live CCTV Parent Feed',
        features: ['Schedule Campus Visit Tour', 'Programs by Age (Toddler, Nursery, KG)', 'Safety & Hygiene Guarantee', 'Download Prospectus Form'],
        ctaText: 'SCHEDULE CAMPUS TOUR',
        accentColor: '#16A34A'
      },
      {
        pageNumber: 3,
        brand: 'Eduker Global University',
        tagline: 'Together We Will Explore New Horizons',
        category: 'Higher Education',
        badge: 'TOP RANKED 2025',
        heroText: 'World-Class Research Facilities, Industry Recognized Degrees & 100% Placement Record',
        features: ['Online Application Portal', 'Faculty Directory & Research', 'Campus Life & Virtual Tour', 'Scholarship Calculator'],
        ctaText: 'APPLY FOR ADMISSION',
        accentColor: '#1E40AF'
      },
      {
        pageNumber: 4,
        brand: 'Educrat Online Learning & EdTech',
        tagline: 'Learn New Skills Online With Top Educators',
        category: 'Online EdTech & Skill Courses',
        badge: 'SELF PACED COURSES',
        heroText: 'Master Coding, AI, UI/UX, Data Science & Finance with Real Portfolio Projects',
        features: ['Live Interactive Classes', 'Certificate of Completion', 'Doubt Solving Forum', 'Free Starter Modules'],
        ctaText: 'EXPLORE ALL COURSES',
        accentColor: '#D97706'
      },
      {
        pageNumber: 5,
        brand: 'Oxford Grace International School',
        tagline: 'Inspiring Minds. Shaping Tomorrow Leaders.',
        category: 'K-12 International School',
        badge: 'CBSE & CAMBRIDGE',
        heroText: 'Holistic Academic Rigor, Olympic Size Sports Complex & Robotics STEM Labs',
        features: ['Online Admission Form', 'Annual Academic Calendar', 'Parent Portal App Info', 'Bus Route & Tracking'],
        ctaText: 'ENROLL YOUR CHILD',
        accentColor: '#0F172A'
      },
      {
        pageNumber: 6,
        brand: 'Etech Skills Institute',
        tagline: 'Develop Your Skills in a Modern & Unique Way',
        category: 'Professional Academy',
        badge: 'CAREER ACCELERATOR',
        heroText: 'Hands-on Software Development, Digital Marketing & Cloud Computing Bootcamps',
        features: ['Job Guarantee Support', 'Interview Mock Sessions', 'Flexible Weekend Batches', 'Talk to Career Counselor'],
        ctaText: 'DOWNLOAD BROCHURE',
        accentColor: '#9333EA'
      }
    ]
  };
}

/**
 * Triggers the browser download of the authentic user-specified PDF.
 */
export function generateProjectSamplePdf(project: ProjectItem): string {
  const meta = getProjectPdfMeta(project);

  try {
    const link = document.createElement('a');
    link.href = meta.publicFilePath;
    link.download = meta.sourcePdfFileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 200);
  } catch (e) {
    console.error('Download link error:', e);
    window.open(meta.publicFilePath, '_blank');
  }

  return meta.sourcePdfFileName;
}
