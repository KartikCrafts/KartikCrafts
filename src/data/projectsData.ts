import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'cafe-bean-roasters',
    title: 'The Daily Grind Artisan Cafe',
    tagline: 'Direct WhatsApp QR Menu + Table Reservation Engine',
    industry: 'cafe',
    industryLabel: 'Cafe & Coffee Shop',
    iconName: 'Coffee',
    description: 'High-speed mobile website with interactive digital QR menu, 1-click WhatsApp order take-away, seat reservations, and Instagram feed integration.',
    heroImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
    packageType: 'classic',
    originalPrice: 25000,
    discountedPrice: 15000,
    deliveryDays: 5,
    hasAdminPanel: false,
    businessImpact: {
      metric: '+210%',
      label: 'More Direct Takeaways & No Swiggy/Zomato Commissions'
    },
    keyFeatures: [
      'Interactive QR Code Digital Menu with category filters',
      'Direct WhatsApp Ordering (0% Commission for owner)',
      'Table & Cozy Corner Reservation form with SMS confirmation',
      'Google Map pin & instant Directions navigation button',
      'Daily Specials & Happy Hour banner popup'
    ],
    clientQuote: {
      text: 'Since launching this website, our weekend table bookings doubled and students order directly on WhatsApp saving us thousands in aggregator commissions.',
      author: 'Rohit Kulkarni',
      businessName: 'The Daily Grind Cafe',
      city: 'Pune',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    },
    demoData: {
      brandName: 'The Daily Grind Artisan Cafe',
      heroHeadline: 'Craft Coffee, Artisanal Bites & Calm Vibes',
      heroSubheadline: 'Hand-brewed single origin coffees, fresh croissants & warm aesthetics in the heart of the city.',
      badgeText: '☕ Open Today: 8:00 AM – 11:30 PM',
      address: 'Shop 14, Lotus Plaza, Koregaon Park, Pune',
      phone: '+91 98230 45678',
      whatsappNumber: '919823045678',
      timings: 'Mon-Sun: 8:00 AM - 11:30 PM',
      googleRating: 4.9,
      totalReviews: 384,
      accentColor: '#d97706',
      offers: [
        { title: 'Morning Coffee Combo', badge: 'Flat 20% OFF', desc: 'Any specialty espresso + fresh almond croissant before 11 AM.' },
        { title: 'Student & Co-work Pass', badge: 'Free High-speed Wi-Fi', desc: 'Unlimited pour-over coffee refills with dessert order.' }
      ],
      items: [
        { name: 'Spanish Hazelnut Latte', category: 'Coffee', price: '₹220', desc: 'Double shot espresso infused with condensed milk and roasted hazelnut crunch.', popular: true },
        { name: 'Cold Drip Nitro Brew', category: 'Coffee', price: '₹240', desc: '18-hour cold steeped Arabica served with orange zest foam.', popular: true },
        { name: 'Avocado & Feta Sourdough Toast', category: 'Food', price: '₹310', desc: 'Crushed Hass avocados, sun-dried tomatoes, micro-greens on sourdough.', popular: false },
        { name: 'Lotus Biscoff Cheesecake', category: 'Desserts', price: '₹260', desc: 'Velvety cream cheese cake layered over spiced speculoos crust.', popular: true },
        { name: 'Truffle Mushroom Panini', category: 'Food', price: '₹290', desc: 'Portobello mushrooms, melted fontina cheese, truffle emulsion.', popular: false },
        { name: 'Matcha Iced Cloud Frappe', category: 'Cold Drinks', price: '₹250', desc: 'Japanese Uji green tea matcha whipped with oat milk foam.', popular: false }
      ],
      reviews: [
        { name: 'Aarav Mehta', rating: 5, text: 'The online reservation system was so smooth. Coffee is world-class!', date: '2 days ago', verified: true },
        { name: 'Pooja Deshmukh', rating: 5, text: 'Direct WhatsApp takeaway order arrived hot in 10 mins. Loved the packaging!', date: '1 week ago', verified: true }
      ]
    },
    tags: ['QR Menu', 'WhatsApp Orders', 'Table Booking', 'Google Maps SEO']
  },
  {
    id: 'clinic-dr-mehta',
    title: 'CareWell Multispeciality Clinic & Dental',
    tagline: 'Online Patient Appointments + Doctor Schedules + Admin CRM',
    industry: 'clinic',
    industryLabel: 'Clinic, Doctors & Healthcare',
    iconName: 'Stethoscope',
    description: 'HIPAA-compliant, professional healthcare portal with online doctor slot booking, treatment cost transparency, patient testimonials, and Admin Doctor Dashboard.',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    packageType: 'dynamic',
    originalPrice: 50000,
    discountedPrice: 40000,
    deliveryDays: 10,
    hasAdminPanel: true,
    businessImpact: {
      metric: '3.4x',
      label: 'Increase in Pre-booked Consultations & Zero Waiting Room Chaos'
    },
    keyFeatures: [
      'Client Admin Panel: Manage doctor schedules, available slots & holiday dates',
      'Smart Instant Appointment Booking with automated WhatsApp reminders',
      'Interactive Treatment Cost Estimator & insurance claim support info',
      'Doctor profiles with degrees, specializations & verified patient reviews',
      'Emergency 1-Tap Call & Ambulance SOS button'
    ],
    clientQuote: {
      text: 'The admin panel allows my clinic receptionist to manage 6 doctors schedules easily. Patients love booking their appointments directly online without calling.',
      author: 'Dr. Anand Mehta (MD, FACC)',
      businessName: 'CareWell Clinic',
      city: 'Delhi NCR',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop'
    },
    demoData: {
      brandName: 'CareWell Multispeciality & Dental Clinic',
      heroHeadline: 'Compassionate Care, Advanced Medical Technology',
      heroSubheadline: 'Book consultations with top specialists in Cardiology, Dentistry, Pediatrics & Orthopedics without queueing.',
      badgeText: '🏥 NABH Accredited & 100% Sanitized Facility',
      address: 'Plot 42, Sector 18, Near Metro Station, Noida, Delhi NCR',
      phone: '+91 98112 34567',
      whatsappNumber: '919811234567',
      timings: 'Mon-Sat: 9:00 AM - 8:30 PM | Sun: 10 AM - 2 PM',
      googleRating: 4.9,
      totalReviews: 612,
      accentColor: '#0284c7',
      adminFeatures: [
        'Live Patient Appointment Management with Status (Confirmed, Completed, Rescheduled)',
        'Add/Edit Doctor Profiles, Timings & Consultation Fees',
        'Download Daily Patient Roster in Excel / PDF',
        'Automated WhatsApp appointment confirmations'
      ],
      offers: [
        { title: 'Complete Executive Health Check', badge: '50% Discount', desc: 'Includes 68 vital blood parameters, ECG, Dental X-Ray & Doctor Consult.' },
        { title: 'Free Dental Consultation & Polish', badge: 'Special Camp', desc: 'Complimentary checkup for children below 12 years and senior citizens.' }
      ],
      items: [
        { name: 'Dr. Anand Mehta', category: 'Cardiology', spec: 'MD (Cardiology), AIIMS (18+ Yrs Exp)', time: 'Mon-Fri (10 AM - 2 PM)', desc: 'Expert in preventive cardiology, hypertension and echo stress tests.', popular: true },
        { name: 'Dr. Shruti Sen', category: 'Dental & Orthodontics', spec: 'MDS Orthodontics (12+ Yrs Exp)', time: 'Mon-Sat (4 PM - 8 PM)', desc: 'Invisible aligners, root canal therapy, painless cosmetic smile makeovers.', popular: true },
        { name: 'Dr. Rajesh Verma', category: 'Pediatrics & Child Care', spec: 'MD Pediatrics, DCH (14+ Yrs Exp)', time: 'Daily (9 AM - 1 PM)', desc: 'Newborn care, growth monitoring and full childhood vaccination schedule.', popular: false },
        { name: 'Dr. Preeti Saxena', category: 'Dermatology & Cosmetology', spec: 'MD Dermatology (9+ Yrs Exp)', time: 'Tue, Thu, Sat (3 PM - 7 PM)', desc: 'Laser skin treatments, acne scar reduction and anti-aging therapies.', popular: true }
      ],
      reviews: [
        { name: 'Vikram Bansal', rating: 5, text: 'Dr. Mehta was extremely patient. The online slot booking saved me 2 hours of waiting.', date: '3 days ago', verified: true },
        { name: 'Sunita Rawat', rating: 5, text: 'Dental clinic is ultra-modern and painless treatment. Highly recommended!', date: '2 weeks ago', verified: true }
      ]
    },
    tags: ['Admin Panel', 'Doctor Booking', 'Patient CRM', 'Healthcare SEO']
  },
  {
    id: 'gym-ironpulse',
    title: 'IronPulse Fitness Club & CrossFit',
    tagline: 'Membership Signups + Class Timetable + Free 1-Day Trial Leads',
    industry: 'gym',
    industryLabel: 'Gym & Fitness Center',
    iconName: 'Dumbbell',
    description: 'High-energy, conversion-optimized fitness studio portal designed to generate daily membership inquiries, free trial passes, and trainer bookings.',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    packageType: 'dynamic',
    originalPrice: 50000,
    discountedPrice: 40000,
    deliveryDays: 8,
    hasAdminPanel: true,
    businessImpact: {
      metric: '+85 Members/Mo',
      label: 'High-Converting Free Trial Pass Leads Captured Directly'
    },
    keyFeatures: [
      'Client Admin Panel: Update trainer schedules, membership discounts & gym events',
      'Instant "Claim 1-Day Free VIP Workout Pass" lead popup with WhatsApp trigger',
      'Interactive Interactive BMI & Target Goal Calculator',
      'Weekly Batch Schedule for CrossFit, Zumba, HIIT & Yoga',
      'Before & After Member Transformation Gallery slider'
    ],
    clientQuote: {
      text: 'The Free Trial Pass lead capture form brings us 5 to 10 qualified walk-in leads every single day. The admin panel makes updating offers super easy.',
      author: 'Captain Sandeep Rana',
      businessName: 'IronPulse Gym',
      city: 'Bengaluru',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop'
    },
    demoData: {
      brandName: 'IronPulse 24/7 Fitness & CrossFit Club',
      heroHeadline: 'Transform Your Body, Unleash Your Potential',
      heroSubheadline: '12,000 sq.ft state-of-the-art equipment, certified strength coaches, luxury steam rooms & group workouts.',
      badgeText: '🔥 Claim Free 1-Day VIP Workout Pass Today',
      address: '3rd Floor, Indiranagar 100ft Road, Bengaluru',
      phone: '+91 97412 88990',
      whatsappNumber: '919741288990',
      timings: 'Open 24 Hours (Staffed: 6 AM - 10 PM)',
      googleRating: 4.9,
      totalReviews: 520,
      accentColor: '#ea580c',
      adminFeatures: [
        'New Trial Lead Management & Direct WhatsApp Calling List',
        'Trainer Profiles & Private Session Booking Tracker',
        'Update Monthly Membership Pricing & Special Festive Deals',
        'Post Member Transformation Stories & Photos'
      ],
      offers: [
        { title: 'Annual Transformation Pack', badge: 'Save ₹8,000', desc: '12 Months gym access + 1 Month free personal trainer + Nutrition plan.' },
        { title: 'Couple / Buddy Membership', badge: '20% OFF', desc: 'Join with a workout partner and get 2 extra months free.' }
      ],
      items: [
        { name: 'CrossFit & Functional Strength', category: 'Group Classes', time: '6:30 AM & 7:00 PM', desc: 'High intensity metabolic conditioning, Olympic lifting and kettlebell drills.', popular: true },
        { name: 'Zumba & Bollywood Cardio', category: 'Group Classes', time: '8:00 AM & 6:00 PM', desc: 'Calorie-torching dance workouts led by certified licensed instructors.', popular: true },
        { name: '1-on-1 Personal Training', category: 'Coaching', price: '₹4,500/mo', desc: 'Customized macro diet chart, biometric body composition analysis & form coaching.', popular: true },
        { name: 'Vinyasa Power Yoga', category: 'Group Classes', time: '7:00 AM (Mon/Wed/Fri)', desc: 'Mobility enhancement, core stability and breathwork recovery sessions.', popular: false }
      ],
      reviews: [
        { name: 'Karan Sharma', rating: 5, text: 'Lost 14 kg in 4 months with coach Sandeep. Cleanest gym in Indiranagar!', date: '5 days ago', verified: true },
        { name: 'Ananya Roy', rating: 5, text: 'Love the Zumba sessions and steam room facilities. Great community vibe!', date: '3 weeks ago', verified: true }
      ]
    },
    tags: ['Lead Capture', 'Admin Panel', 'Class Schedule', 'Member CRM']
  },
  {
    id: 'restaurant-saffron-royal',
    title: 'Saffron Leaf Multi-Cuisine Fine Dine & Bar',
    tagline: 'Smart Table Reservation + Digital Menu + Private Party Inquiry',
    industry: 'restaurant',
    industryLabel: 'Restaurant & Fine Dining',
    iconName: 'Utensils',
    description: 'Sumptuous, visual-first fine dining website with high-converting online table reservation engine, food gallery, wine list, and event banquet booking.',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    packageType: 'classic',
    originalPrice: 25000,
    discountedPrice: 15000,
    deliveryDays: 6,
    hasAdminPanel: false,
    businessImpact: {
      metric: '+140%',
      label: 'Weekend Table Bookings Filled 3 Days In Advance'
    },
    keyFeatures: [
      'Interactive Date, Time & Guest Count Table Reservation Form',
      'Mouth-watering Categorized Menu with Dietary Tags (Jain, Vegan, Chef Special)',
      'Banquet Hall & Private Party Booking Enquiry Form',
      'Google Maps 1-Tap Navigation & Valet Parking Guide',
      'Customer Video & Review Showcase'
    ],
    clientQuote: {
      text: 'Guests love booking tables online and reviewing our signature starters beforehand. Our banquet hall inquiries for corporate parties went up by 140%.',
      author: 'Chef Manav Singhania',
      businessName: 'Saffron Leaf Restaurant',
      city: 'Ahmedabad',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=200&auto=format&fit=crop'
    },
    demoData: {
      brandName: 'Saffron Leaf Fine Dine & Heritage Lounge',
      heroHeadline: 'Authentic Indian Spices, Contemporary Global Palates',
      heroSubheadline: 'Experience culinary grandeur with curated tandoori delights, artisanal mocktails and royal ambience.',
      badgeText: '⭐ Awarded Best Family Dining 2025',
      address: 'SG Highway, Opp. Rajpath Club, Ahmedabad',
      phone: '+91 99099 12345',
      whatsappNumber: '919909912345',
      timings: 'Lunch: 12 PM - 3:30 PM | Dinner: 7 PM - 11:30 PM',
      googleRating: 4.8,
      totalReviews: 840,
      accentColor: '#b45309',
      offers: [
        { title: 'Corporate Lunch Buffet', badge: 'Special ₹599++', desc: 'Unlimited soup, 4 starters, 3 main course gravies, live bread & dessert counter.' },
        { title: 'Complimentary Anniversary Dessert', badge: 'Dine-in Perk', desc: 'Pre-book your celebration table and get Chef special flaming sundae.' }
      ],
      items: [
        { name: 'Dum Pukht Awadhi Biryani', category: 'Signature Mains', price: '₹480', desc: 'Slow-cooked fragrant basmati rice with aromatic saffron, kewra and tender spices.', popular: true },
        { name: 'Smoked Dal Makhani Bukhara Style', category: 'Signature Mains', price: '₹390', desc: 'Black lentils simmered overnight on charcoal with churned white butter.', popular: true },
        { name: 'Paneer Angara Tikka', category: 'Tandoor Starters', price: '₹360', desc: 'Farm fresh cottage cheese marinated in roasted crushed spices and smoked cloves.', popular: true },
        { name: 'Rose Petal Kulfi Falooda', category: 'Desserts', price: '₹220', desc: 'Creamy artisanal malai kulfi topped with sabja seeds and organic rose syrup.', popular: false }
      ],
      reviews: [
        { name: 'Jignesh Patel', rating: 5, text: 'Booked table for 15 people for family anniversary. Service and food were flawless!', date: 'Yesterday', verified: true }
      ]
    },
    tags: ['Table Booking', 'Banquet Inquiries', 'Digital Menu', 'Food Photography']
  },
  {
    id: 'salon-glow-glam',
    title: 'Glow & Glam Luxury Salon & Wellness Spa',
    tagline: 'Service Catalog + Stylist Slot Booking + Bridal Packages',
    industry: 'salon',
    industryLabel: 'Salon, Beauty & Spa',
    iconName: 'Scissors',
    description: 'Aesthetic, elegant beauty lounge portal with interactive service rate card, bridal makeover packages, stylist portfolio, and online appointment booking.',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
    packageType: 'classic',
    originalPrice: 25000,
    discountedPrice: 15000,
    deliveryDays: 5,
    hasAdminPanel: false,
    businessImpact: {
      metric: '+90%',
      label: 'Direct Weekend Appointments Booked via WhatsApp'
    },
    keyFeatures: [
      'Interactive Beauty & Spa Service Catalog with transparent pricing',
      'Bridal & Groom Makeover consultation inquiry form',
      'Stylist Portfolio Gallery with high-res hair color & nail art photos',
      '1-Click WhatsApp Slot Booking with date/time selector',
      'VIP Loyalty Member discount badge & perks'
    ],
    clientQuote: {
      text: 'Clients screenshot our online service menu and book directly on WhatsApp. We stopped losing calls during busy salon hours completely.',
      author: 'Neeta Kapoor',
      businessName: 'Glow & Glam Salon',
      city: 'Chandigarh',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
    },
    demoData: {
      brandName: 'Glow & Glam Luxury Salon & Spa',
      heroHeadline: 'Reveal Your True Radiance & Unwind in Luxury',
      heroSubheadline: 'Premium hair styling, Korean glass facials, organic body spa therapies & celebrity bridal artistry.',
      badgeText: '✨ 20% OFF on First Service with Online Booking',
      address: 'SCO 28, Sector 35-C, Chandigarh',
      phone: '+91 98765 11223',
      whatsappNumber: '919876511223',
      timings: 'Tue-Sun: 10:00 AM - 8:30 PM (Monday Closed)',
      googleRating: 4.9,
      totalReviews: 430,
      accentColor: '#db2777',
      offers: [
        { title: 'Bridal Glow Package', badge: 'Pre-book & Save 25%', desc: 'Includes HD Bridal Makeup, pre-bridal hair spa, skin polish and trial.' },
        { title: 'Global Balayage + Keratin', badge: 'Flat ₹3,999', desc: 'Includes consultation, hair bond protector and take-home serum sample.' }
      ],
      items: [
        { name: 'Hydra-Oxygen Facial Therapy', category: 'Skin Care', price: '₹2,499', time: '60 mins', desc: 'Deep pore vacuum extraction, antioxidant serum infusion and cold LED therapy.', popular: true },
        { name: 'Customized French Balayage', category: 'Hair Art', price: '₹4,500+', time: '150 mins', desc: 'Hand-painted sun-kissed gradient using ammonia-free L\'Oreal Professional tones.', popular: true },
        { name: 'Aromatherapy Swedish Body Spa', category: 'Spa & Wellness', price: '₹2,800', time: '75 mins', desc: 'Full body tension relief massage with lavender & eucalyptus essential oils.', popular: true },
        { name: 'Gel Nail Extensions & Chrome Art', category: 'Nail Studio', price: '₹1,600', time: '45 mins', desc: 'Long-lasting scratch-resistant acrylic overlay with custom minimalist art.', popular: false }
      ],
      reviews: [
        { name: 'Simran Gill', rating: 5, text: 'Had my bridal makeover here! Makeup stayed fresh all night without any creases.', date: '4 days ago', verified: true }
      ]
    },
    tags: ['Salon Booking', 'Service Price List', 'Bridal Gallery', 'WhatsApp Leads']
  },
  {
    id: 'school-little-blooms',
    title: 'Little Blooms International Play School & Daycare',
    tagline: 'Admissions Lead Capture + Virtual Campus Tour + Curriculum Details',
    industry: 'school',
    industryLabel: 'Play School & Daycare',
    iconName: 'GraduationCap',
    description: 'Joyful, parent-friendly educational portal designed to drive playgroup & nursery admissions, schedule campus visits, and showcase safety standards.',
    heroImage: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1200&auto=format&fit=crop',
    packageType: 'dynamic',
    originalPrice: 50000,
    discountedPrice: 40000,
    deliveryDays: 9,
    hasAdminPanel: true,
    businessImpact: {
      metric: '100% Batch Filled',
      label: 'Achieved Full Nursery & KG Admissions 2 Months Before Session Start'
    },
    keyFeatures: [
      'Client Admin Panel: Manage admission inquiries, fee circulars & photo gallery',
      'Instant "Schedule Campus Visit / Trial Class" booking form',
      'Programs & Age-wise Curriculum breakdown (Toddler, Nursery, Jr/Sr KG, Daycare)',
      'Safety & Hygiene Guarantee section (CCTV live parent feed info, trained staff)',
      'Parent Testimonials & Annual Day Video showcase'
    ],
    clientQuote: {
      text: 'Parents were thoroughly impressed by the virtual tour and clear fee structure. We filled all 60 seats for the new academic year well ahead of time.',
      author: 'Mrs. Radhika Iyer',
      businessName: 'Little Blooms Play School',
      city: 'Mumbai',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
    },
    demoData: {
      brandName: 'Little Blooms Montessori & Daycare',
      heroHeadline: 'Where Curiosity Blooms & Happy Childhood Begins',
      heroSubheadline: 'Play-based experiential learning, loving certified educators, child-safe sensory zones & CCTV surveillance.',
      badgeText: '🎒 Admissions Open for Academic Year 2026-27',
      address: 'Bungalow 7, Palm Beach Road, Vashi, Navi Mumbai',
      phone: '+91 98200 99881',
      whatsappNumber: '919820099881',
      timings: 'Mon-Fri: 8:30 AM - 6:30 PM (Daycare till 7 PM)',
      googleRating: 5.0,
      totalReviews: 290,
      accentColor: '#16a34a',
      adminFeatures: [
        'Admissions Inquiry Pipeline (New, Visited, Enrolled, Follow-up)',
        'Upload Activity Photos & Monthly Event Calendar for Parents',
        'Fee Structure & Online Prospectus Download Tracker',
        'Staff & Teacher Directory Management'
      ],
      offers: [
        { title: 'Early Bird Admission Waiver', badge: 'Save ₹5,000', desc: '50% off on Registration Kit when enrolling before end of this month.' }
      ],
      items: [
        { name: 'Toddler Playgroup (1.5 – 2.5 Yrs)', category: 'Programs', time: '9:00 AM - 11:30 AM', desc: 'Sensory exploration, motor skill activities, musical rhymes and social interaction.', popular: true },
        { name: 'Nursery & Foundation (2.5 – 3.5 Yrs)', category: 'Programs', time: '9:00 AM - 12:30 PM', desc: 'Phonics readiness, early numeracy, creative crafts and storytelling circle.', popular: true },
        { name: 'Kindergarten Jr & Sr (3.5 – 5.5 Yrs)', category: 'Programs', time: '8:30 AM - 1:00 PM', desc: 'STEM building blocks, writing skills, environmental awareness and public speaking.', popular: true },
        { name: 'Safe Daycare & After-School (1 – 8 Yrs)', category: 'Daycare', time: '1:00 PM - 7:00 PM', desc: 'Nutritious warm snacks, supervised homework assistance, nap rooms and active indoor play.', popular: false }
      ],
      reviews: [
        { name: 'Meera Chawla', rating: 5, text: 'My 2-year old daughter loves going to school every morning! The teachers are so caring.', date: '1 week ago', verified: true }
      ]
    },
    tags: ['Admin Panel', 'Admission Leads', 'Curriculum Guide', 'Daycare CRM']
  },
  {
    id: 'bakery-sweet-crust',
    title: 'Sweet Crust Artisan Bakery & Cake Studio',
    tagline: 'Custom Birthday Cake Customizer + Daily Baked Goods + Delivery Booking',
    industry: 'bakery',
    industryLabel: 'Bakery & Cake Shop',
    iconName: 'Cake',
    description: 'Irresistible confectionery website with custom tiered cake ordering on WhatsApp, eggless/sugar-free filters, daily fresh bread inventory, and celebratory delivery forms.',
    heroImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop',
    packageType: 'classic',
    originalPrice: 25000,
    discountedPrice: 15000,
    deliveryDays: 5,
    hasAdminPanel: false,
    businessImpact: {
      metric: '320+ Cakes/Mo',
      label: 'Custom Theme Birthday & Wedding Cake Orders Received Direct via WhatsApp'
    },
    keyFeatures: [
      'Visual Custom Cake Inquiry with flavor, weight (1kg to 10kg) and photo upload',
      'Dietary Toggle: 100% Pure Vegetarian / Eggless & Gluten-Free options',
      'Instant WhatsApp Delivery slot selection with custom message on cake',
      'Daily freshly baked sourdough, croissants & dessert pastry menu',
      'Google Maps 1-Tap navigation & customer reviews'
    ],
    clientQuote: {
      text: 'Our custom cake order volume shot up! Customers pick designs from our gallery and click WhatsApp with their exact custom text and flavor prefilled.',
      author: 'Pooja Narang',
      businessName: 'Sweet Crust Bakery',
      city: 'Jaipur',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'
    },
    demoData: {
      brandName: 'Sweet Crust Artisan Bakery & Patisserie',
      heroHeadline: 'Freshly Baked Happiness, Pure Belgian Chocolate Indulgence',
      heroSubheadline: 'Handcrafted customized celebration cakes, European sourdough breads & melt-in-mouth French macarons.',
      badgeText: '🎂 100% Pure Eggless Options Available',
      address: 'Plot 12, C-Scheme, Ashok Nagar, Jaipur',
      phone: '+91 94140 33221',
      whatsappNumber: '919414033221',
      timings: 'Daily: 9:00 AM - 11:00 PM',
      googleRating: 4.9,
      totalReviews: 470,
      accentColor: '#e11d48',
      offers: [
        { title: 'Free Home Delivery', badge: 'On Orders ₹799+', desc: 'Same-day safe temperature-controlled delivery within 7 km.' },
        { title: 'Mid-Night Birthday Surprise', badge: '12:00 AM Slot', desc: 'Pre-book midnight cake drop with party poppers and candle kit.' }
      ],
      items: [
        { name: 'Belgian Dark Truffle Cake (1 Kg)', category: 'Cakes', price: '₹950', desc: '55% dark chocolate ganache layered with moist cocoa sponge.', popular: true },
        { name: 'Fresh Alphonso Mango Entremet', category: 'Seasonal', price: '₹1,100', desc: 'Real Ratnagiri mango puree mousse with vanilla joconde sponge.', popular: true },
        { name: 'Almond Butter French Croissant', category: 'Pastry', price: '₹160', desc: 'Flaky 48-layered butter pastry stuffed with roasted almond frangipane.', popular: true },
        { name: 'Artisan Cranberry Walnut Sourdough', category: 'Breads', price: '₹220', desc: 'Naturally fermented 36-hour sourdough loaf with tangy notes.', popular: false }
      ],
      reviews: [
        { name: 'Devanshi Singhal', rating: 5, text: 'The custom 2-tier wedding anniversary cake was stunning and delicious!', date: '3 days ago', verified: true }
      ]
    },
    tags: ['Cake Customizer', 'WhatsApp Order', 'Bakery Menu', 'Eggless Options']
  },
  {
    id: 'garage-speedtech',
    title: 'SpeedTech Multi-Brand Auto Workshop & Car Spa',
    tagline: 'Service Cost Estimator + Doorstep Pickup Booking + Emergency SOS',
    industry: 'garage',
    industryLabel: 'Garage & Auto Workshop',
    iconName: 'Wrench',
    description: 'High-trust automotive garage portal equipped with live transparent service package estimator, car detailing gallery, doorstep pickup scheduling, and 24/7 breakdown helpline.',
    heroImage: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=1200&auto=format&fit=crop',
    packageType: 'dynamic',
    originalPrice: 50000,
    discountedPrice: 40000,
    deliveryDays: 8,
    hasAdminPanel: true,
    businessImpact: {
      metric: '+175%',
      label: 'Growth in Periodic Car Maintenance & Ceramic Coating Bookings'
    },
    keyFeatures: [
      'Client Admin Panel: Manage service bookings, update package prices & mechanic jobs',
      'Interactive Car Make & Model Service Package Estimator',
      'Free Doorstep Car Pickup & Drop scheduler',
      'Emergency 24x7 Roadside Assistance SOS call button',
      'Live Service Transparency (Checklist of 40+ points inspection)'
    ],
    clientQuote: {
      text: 'Car owners usually fear hidden garage charges. This transparent website with pricing calculators established instant trust and brings us high-value ceramic coating clients.',
      author: 'Harpreet Singh',
      businessName: 'SpeedTech Auto Care',
      city: 'Ludhiana',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    },
    demoData: {
      brandName: 'SpeedTech Multi-Brand Car Service & Ceramic Studio',
      heroHeadline: 'Dealer-Level Car Care at 40% Lower Cost',
      heroSubheadline: 'Genuine OEM spare parts, advanced computerized diagnostics, 6-Month service warranty & free doorstep pickup.',
      badgeText: '🚗 Free 40-Point General Inspection with Every Service',
      address: 'G.T. Road, Near Dhandari Kalan, Ludhiana',
      phone: '+91 98888 77665',
      whatsappNumber: '919888877665',
      timings: 'Mon-Sat: 8:30 AM - 7:30 PM (Sunday by Appointment)',
      googleRating: 4.8,
      totalReviews: 360,
      accentColor: '#dc2626',
      adminFeatures: [
        'Car Service Job Card & Mechanic Assignment Tracker',
        'Update Service Package Rates & Spare Parts Catalog',
        'Customer Vehicle History & Inspection Report Sender',
        'Track Roadside Assistance SOS Requests'
      ],
      offers: [
        { title: 'Monsoon Car Health Camp', badge: 'Flat ₹1,999', desc: 'Complete AC check, wiper blade replacement, brake cleaning & battery test.' },
        { title: '9H Ceramic Coating Deal', badge: 'Save ₹6,000', desc: '3-Year warranty multi-layer ceramic paint protection with free annual top-up.' }
      ],
      items: [
        { name: 'Comprehensive Periodic Car Service', category: 'Maintenance', price: '₹3,499+', desc: 'Engine oil replacement (Synthetic), oil filter, air filter, spark plug cleaning, 40-pt checkup.', popular: true },
        { name: 'Deep Interior Foam Spa & Ozone Sanitize', category: 'Car Spa', price: '₹1,599', desc: 'Complete roof, upholstery, floor dry cleaning and AC duct bacteria elimination.', popular: true },
        { name: 'Computerized Wheel Alignment & Balance', category: 'Diagnostics', price: '₹699', desc: '3D laser camera alignment and high-speed precision wheel balancing.', popular: false },
        { name: 'Clutch & Brake Overhaul', category: 'Mechanical', price: '₹2,999+', desc: 'Brake pad replacement, disc skimming and master cylinder brake fluid flush.', popular: false }
      ],
      reviews: [
        { name: 'Rajinder Varma', rating: 5, text: 'Very professional. Picked up my Honda City from home, shared video updates of parts replaced, and dropped back clean.', date: '1 week ago', verified: true }
      ]
    },
    tags: ['Admin Panel', 'Service Estimator', 'Doorstep Pickup', 'Auto Workshop']
  },
  {
    id: 'tuition-pinnacle-academy',
    title: 'Pinnacle Science & Commerce Coaching Academy',
    tagline: 'Batch Timetables + Results Showcase + Demo Class Booking + Fee Portal',
    industry: 'tuition',
    industryLabel: 'Tuition & Coaching Classes',
    iconName: 'BookOpen',
    description: 'High-authority coaching institute portal highlighting student toppers, board exam crash courses, interactive batch timetable, and 2-Day Free Trial Class booking.',
    heroImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    packageType: 'dynamic',
    originalPrice: 50000,
    discountedPrice: 40000,
    deliveryDays: 9,
    hasAdminPanel: true,
    businessImpact: {
      metric: '260+ Enrollments',
      label: 'New Academic Batch Admissions Locked In via Free Demo Class Registrations'
    },
    keyFeatures: [
      'Client Admin Panel: Post test answer keys, student rank list, syllabus updates & announcements',
      'Instant "Book 2-Day Free Demo Class" registration form',
      'Interactive Course & Batch Timetable filter (Class 9 to 12 & JEE/NEET Foundation)',
      'Hall of Fame Wall: Topper marks, student testimonials & parent reviews',
      'Direct WhatsApp Counseling Helpline button'
    ],
    clientQuote: {
      text: 'Parents and students check our faculty qualifications and past board results online. Online demo class registrations helped us open 2 new batches this session.',
      author: 'Prof. Alok Pandey (Ex-FIITJEE Faculty)',
      businessName: 'Pinnacle Academy',
      city: 'Indore',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
    },
    demoData: {
      brandName: 'Pinnacle Science & Commerce Academy',
      heroHeadline: 'Learn From Top IIT & CA Mentors. Achieve 95%+ Results.',
      heroSubheadline: 'Small batch size of 25 students, weekly test series, doubt clearing sessions & personalized performance tracking.',
      badgeText: '📚 Admissions Open for Class 9, 10, 11 & 12',
      address: '204, Silver Arcade, Geeta Bhawan Square, Indore',
      phone: '+91 98260 55443',
      whatsappNumber: '919826055443',
      timings: 'Mon-Sat: 7:00 AM - 8:30 PM | Sunday Test Batches',
      googleRating: 4.9,
      totalReviews: 310,
      accentColor: '#4f46e5',
      adminFeatures: [
        'Manage Student Demo Registrations & Lead Follow-ups',
        'Publish Weekly Test Marks, Answer Keys & Study Materials PDF',
        'Announce New Crash Course Batches & Exam Timetables',
        'Update Faculty Team & Topper Hall of Fame'
      ],
      offers: [
        { title: 'Merit Scholarship Test (PMST)', badge: 'Up to 90% Fee Waiver', desc: 'Appear for our 45-minute aptitude test and win merit fee discounts.' }
      ],
      items: [
        { name: 'Class 10 Board Excellence Batch (Science + Math)', category: 'Class 10', timing: 'Evening 4:30 PM - 7:00 PM', fee: '₹22,000/yr', desc: 'Complete NCERT mastery, 10-year previous year questions & weekly mock test papers.', popular: true },
        { name: 'Class 11-12 PCM + JEE Main / Advanced', category: 'Class 11 & 12', timing: 'Morning 7:00 AM & Evening 5:00 PM', fee: '₹38,000/yr', desc: 'Concept mastery with Kota study modules, numerical problem solving & daily practice sheets.', popular: true },
        { name: 'Class 11-12 PCB + NEET Medical Target', category: 'Class 11 & 12', timing: 'Daily 3:00 PM - 6:30 PM', fee: '₹38,000/yr', desc: 'Intensive biology diagram drills, organic chemistry mechanisms & physics tricks.', popular: true },
        { name: 'Class 11-12 Commerce (Accounts, Eco & Math)', category: 'Commerce', timing: 'Evening 4:00 PM - 7:00 PM', fee: '₹26,000/yr', desc: 'Led by practicing Chartered Accountants with real business case studies.', popular: false }
      ],
      reviews: [
        { name: 'Tanya Agrawal (Scored 98.2%)', rating: 5, text: 'The mock test series and doubt clearing sessions with Pandey Sir made physics my strongest subject!', date: '2 weeks ago', verified: true }
      ]
    },
    tags: ['Admin Panel', 'Student Leads', 'Batch Schedule', 'Coaching Academy']
  },
  {
    id: 'tailor-zari-couture',
    title: 'Zari Couture Custom Tailors & Bridal Boutique',
    tagline: 'Custom Outfit Design Inquiry + Doorstep Measurement + Fabric Showcase',
    industry: 'tailor',
    industryLabel: 'Tailors & Designer Boutique',
    iconName: 'Sparkles',
    description: 'Bespoke tailoring and bridal boutique website allowing clients to book home measurement visits, view handcrafted lehenga & sherwani portfolios, and receive WhatsApp quotes.',
    heroImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop',
    packageType: 'classic',
    originalPrice: 25000,
    discountedPrice: 15000,
    deliveryDays: 6,
    hasAdminPanel: false,
    businessImpact: {
      metric: '₹4.8L/Mo',
      label: 'High-Ticket Custom Bridal Lehenga & Kurta Inquiries Generated'
    },
    keyFeatures: [
      'Interactive Bridal & Groom Outfit Customization Inquiry Form',
      'Doorstep Master Tailor Measurement Booking with date/time selector',
      'Fabric & Hand Embroidery (Zardozi, Chikankari, Mirror Work) Catalog',
      'Direct WhatsApp Photo Share for replica and customized stitching',
      '100% Perfect Fit Guarantee with free alteration policy'
    ],
    clientQuote: {
      text: 'Brides love browsing our embroidery samples and booking doorstep measurement slots directly on WhatsApp. We get high-paying NRI and local wedding orders easily.',
      author: 'Master Zubair & Sanya Khan',
      businessName: 'Zari Couture',
      city: 'Hyderabad',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    },
    demoData: {
      brandName: 'Zari Couture Bespoke Tailoring & Designer Studio',
      heroHeadline: 'Handcrafted Perfection, Tailored Exclusively for You',
      heroSubheadline: 'Custom bridal lehengas, bespoke bandhgalas, Indo-western gowns & doorstep master fitting service.',
      badgeText: '✂️ Doorstep Master Tailor Fitting Available',
      address: 'Road No. 10, Banjara Hills, Hyderabad',
      phone: '+91 98490 22334',
      whatsappNumber: '919849022334',
      timings: 'Mon-Sat: 10:30 AM - 8:30 PM (Sunday on Appointment)',
      googleRating: 4.9,
      totalReviews: 240,
      accentColor: '#9333ea',
      offers: [
        { title: 'Bridal Trousseau Combo', badge: 'Flat 15% OFF', desc: 'Book complete 5-outfit wedding stitching package and get free matching potli bag.' }
      ],
      items: [
        { name: 'Custom Hand-Embroidered Bridal Lehenga', category: 'Bridal', price: 'Stitching ₹8,500+', desc: 'Real Zardozi and cutdana hand embroidery on pure velvet, raw silk or organza.', popular: true },
        { name: 'Designer Blouse with Cutwork & Latkan', category: 'Women Couture', price: '₹1,800+', desc: 'Princess cut, padded, sweetheart neck or sheer back with custom artisanal tassels.', popular: true },
        { name: 'Royal Jodhpuri Bandhgala & Sherwani', category: 'Men Bespoke', price: 'Stitching ₹6,500+', desc: 'Interlined structured fit with brass buttons, pocket square and churidar trousers.', popular: true },
        { name: 'Indo-Western Draped Saree Gown', category: 'Party Wear', price: '₹4,200+', desc: 'Ready-to-wear pre-pleated satin georgette drape with embellished belt.', popular: false }
      ],
      reviews: [
        { name: 'Fatima Razvi', rating: 5, text: 'Master Zubair came for home measurements and delivered my wedding lehenga in 10 days. The fitting was absolute perfection!', date: '5 days ago', verified: true }
      ]
    },
    tags: ['Custom Tailoring', 'Doorstep Fitting', 'Bridal Portfolio', 'WhatsApp Quotes']
  },
  {
    id: 'portfolio-alex-creative',
    title: 'Alex Morgan Creative UI/UX & Web Studio Portfolio',
    tagline: 'Selected Works + Interactive Case Studies + 1-Click Client Inquiries',
    industry: 'portfolio',
    industryLabel: 'Portfolio & Digital Creative',
    iconName: 'Sparkles',
    description: 'Minimalist, high-converting personal and agency portfolio highlighting design case studies, client ROI testimonials, tech stack, and direct WhatsApp / Calendly booking.',
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    packageType: 'dynamic',
    originalPrice: 50000,
    discountedPrice: 40000,
    deliveryDays: 7,
    hasAdminPanel: true,
    businessImpact: {
      metric: '3.8x',
      label: 'More High-Ticket Inbound Freelance & Agency Leads'
    },
    keyFeatures: [
      'Interactive Case Study Showcase with live prototype links',
      'Client Admin Panel: Add new projects, client testimonials & rate cards',
      'Direct WhatsApp & Calendly 1-Tap Consultation Booking',
      'Curated Color System & Aesthetic Typography specs',
      'Fast 0.8s Global CDN Load Speed'
    ],
    clientQuote: {
      text: 'My inbound client inquiries tripled after launching this portfolio. High-ticket clients loved the interactive case studies and clear process.',
      author: 'Alex Morgan',
      businessName: 'Morgan Digital Studio',
      city: 'Bengaluru',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    },
    demoData: {
      brandName: 'Alex Morgan Creative Studio & Portfolio',
      heroHeadline: 'Designing Solutions, Not Just Visuals.',
      heroSubheadline: 'Crafting high-converting digital experiences, design systems & bespoke brand identities for ambitious businesses worldwide.',
      badgeText: '💼 Available for Selected Q3/Q4 Projects',
      address: 'Indiranagar, Bengaluru / Global Remote',
      phone: '+91 98333 44556',
      whatsappNumber: '919833344556',
      timings: 'Mon-Fri: 10:00 AM - 7:00 PM',
      googleRating: 5.0,
      totalReviews: 185,
      accentColor: '#18181b',
      adminFeatures: [
        'Add, Edit & Re-order Case Studies & Video Demos',
        'Update Hourly & Project Retainer Pricing Cards',
        'Inbound Client Lead CRM with Project Scope & Budget Filter',
        'Publish Testimonials & Client Company Logos'
      ],
      offers: [
        { title: 'Free 30-Min Design Audit', badge: 'High Value', desc: 'Complimentary UX review of your existing landing page with actionable conversion tips.' }
      ],
      items: [
        { name: 'Fintech Mobile Banking App UX', category: 'Case Studies', price: 'Client: FinFlow UK', desc: 'End-to-end UX wireframing, design system and high-fidelity prototype testing.', popular: true },
        { name: 'Artisan Coffee Roasters E-Commerce', category: 'Web Design', price: 'Client: BeanCraft', desc: 'Custom Shopify/Next.js store with 0% commission local pickup flow.', popular: true },
        { name: 'SaaS Analytics Dashboard System', category: 'UI Systems', price: 'Client: DataPulse', desc: 'Modular design tokens, dark mode and 40+ accessible data visualization cards.', popular: true },
        { name: 'Luxury Skincare Identity & Packaging', category: 'Branding', price: 'Client: Velour Care', desc: 'Custom wordmark, 3D bottle rendering and sustainable packaging guidelines.', popular: false }
      ],
      reviews: [
        { name: 'Marcus Sterling', rating: 5, text: 'Alex revamped our SaaS website in 10 days. Our demo request conversions jumped by 42% in month one!', date: '3 days ago', verified: true }
      ]
    },
    tags: ['Case Studies', 'UI/UX Portfolio', 'Client CRM', 'Fast Load Speed']
  }
];
