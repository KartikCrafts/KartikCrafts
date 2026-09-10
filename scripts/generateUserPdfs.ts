import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const SAMPLES_DIR = path.join(process.cwd(), 'public', 'samples');
if (!fs.existsSync(SAMPLES_DIR)) {
  fs.mkdirSync(SAMPLES_DIR, { recursive: true });
}

// 24 Authentic Best Color Combinations from user's PDF
const BEST_COLOR_COMBINATIONS = [
  { name: 'Dusty Pink & Navy', c1: [219, 172, 177], c2: [24, 43, 73] },
  { name: 'Olive & Gold', c1: [107, 122, 63], c2: [212, 160, 23] },
  { name: 'Plum & Cream', c1: [94, 38, 70], c2: [247, 243, 233] },
  { name: 'Burnt Orange & Teal', c1: [194, 89, 42], c2: [22, 96, 110] },
  { name: 'Mustard & Grey', c1: [227, 168, 47], c2: [108, 117, 125] },
  { name: 'Black Cherry & Blush', c1: [88, 24, 44], c2: [238, 194, 198] },
  { name: 'Forest Green & Sand', c1: [34, 69, 44], c2: [214, 198, 166] },
  { name: 'Copper & White', c1: [184, 115, 51], c2: [255, 255, 255] },
  { name: 'Rust & Off-White', c1: [168, 62, 34], c2: [250, 247, 242] },
  { name: 'Denim Blue & Taupe', c1: [48, 85, 125], c2: [179, 161, 145] },
  { name: 'Chocolate & Peach', c1: [61, 35, 20], c2: [255, 190, 152] },
  { name: 'Mint & Silver Grey', c1: [163, 222, 193], c2: [189, 195, 199] },
  { name: 'Eggplant & Light Grey', c1: [68, 33, 62], c2: [220, 220, 225] },
  { name: 'Turquoise & Coral', c1: [32, 178, 170], c2: [235, 104, 87] },
  { name: 'Burgundy & Gold', c1: [128, 0, 32], c2: [218, 165, 32] },
  { name: 'Stone Blue & Ivory', c1: [75, 119, 154], c2: [255, 255, 240] },
  { name: 'Lemon Yellow & Navy', c1: [254, 220, 86], c2: [15, 32, 67] },
  { name: 'Moss Green & Cream', c1: [90, 117, 78], c2: [248, 244, 230] },
  { name: 'Rose Gold & Charcoal', c1: [183, 110, 121], c2: [44, 47, 51] },
  { name: 'Lavender & Slate', c1: [179, 160, 206], c2: [82, 94, 107] },
  { name: 'Sandy Brown & Teal', c1: [198, 142, 87], c2: [18, 102, 114] },
  { name: 'Red & Beige', c1: [198, 40, 40], c2: [238, 230, 217] },
  { name: 'Sky Blue & Bronze', c1: [115, 185, 234], c2: [140, 98, 57] },
  { name: 'Deep Green & Blush', c1: [21, 56, 38], c2: [242, 197, 204] }
];

// Aesthetic Website Color Combos Creators Should Try from user's PDF
const AESTHETIC_CREATOR_COMBOS = [
  { id: '01', title: 'Soft Blue + White', tag: 'Modern, Fresh & Clean Tech', primary: [59, 130, 246], hex: '#3B82F6 & #FFFFFF', bg: [240, 248, 255] },
  { id: '02', title: 'Black + Silver', tag: 'High-End Luxury, Bold & Premium', primary: [24, 24, 27], hex: '#18181B & #E4E4E7', bg: [244, 244, 245] },
  { id: '03', title: 'Beige + Brown', tag: 'Artisanal, Organic, Warm & Cozy', primary: [140, 74, 39], hex: '#8C4A27 & #F5EBE1', bg: [250, 247, 242] },
  { id: '04', title: 'Sage + Cream', tag: 'Natural Wellness, Calm & Botanical', primary: [84, 110, 89], hex: '#546E59 & #F4F1EA', bg: [245, 247, 245] },
  { id: '05', title: 'Navy + White', tag: 'Clinical Authority, Corporate & Trust', primary: [15, 34, 64], hex: '#0F2240 & #F8FAFC', bg: [241, 245, 249] },
  { id: '06', title: 'Dusty Pink + Gray', tag: 'Aesthetic Salon, Soft Glam & Modern', primary: [190, 80, 120], hex: '#BE5078 & #71717A', bg: [253, 242, 248] }
];

interface WebsiteShowcase {
  brand: string;
  tagline: string;
  category: string;
  badge: string;
  primaryColor: [number, number, number];
  heroText: string;
  features: string[];
  ctaText: string;
  metrics: string;
}

function renderColorCombinationsPage(doc: jsPDF, categoryName: string, pageNum: number, totalPages: number) {
  doc.addPage();
  const W = 210;
  const H = 297;

  // Header banner
  doc.setFillColor(28, 25, 23);
  doc.rect(0, 0, W, 26, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.text('THE BEST COLOR COMBINATIONS', 14, 13);
  
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(180, 175, 165);
  doc.text(`${categoryName.toUpperCase()} DESIGN SYSTEM • 24 CURATED COLOR HARMONIES`, 14, 20);

  // 24 color swatch pairs grid: 4 columns x 6 rows
  const startX = 14;
  const startY = 36;
  const colW = 44;
  const rowH = 37;

  BEST_COLOR_COMBINATIONS.forEach((combo, idx) => {
    const col = idx % 4;
    const row = Math.floor(idx / 4);
    const x = startX + col * colW;
    const y = startY + row * rowH;

    // Card background
    doc.setFillColor(252, 250, 247);
    doc.setDrawColor(225, 218, 205);
    doc.roundedRect(x, y, colW - 3, rowH - 4, 3, 3, 'FD');

    // Circle 1
    doc.setFillColor(combo.c1[0], combo.c1[1], combo.c1[2]);
    doc.circle(x + 12, y + 13, 8, 'F');
    doc.setDrawColor(255, 255, 255);
    doc.setLineWidth(0.8);
    doc.circle(x + 12, y + 13, 8, 'S');

    // Circle 2 (overlapping)
    doc.setFillColor(combo.c2[0], combo.c2[1], combo.c2[2]);
    doc.circle(x + 24, y + 13, 8, 'F');
    doc.setDrawColor(255, 255, 255);
    doc.circle(x + 24, y + 13, 8, 'S');

    // Text Label
    doc.setTextColor(28, 25, 23);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.text(combo.name, x + 2, y + 27);
  });

  // Footer
  doc.setFillColor(245, 240, 232);
  doc.rect(0, H - 12, W, 12, 'F');
  doc.setTextColor(120, 113, 108);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text(`Official ${categoryName} Website Blueprint Sample`, 14, H - 5);
  doc.text(`Page ${pageNum} of ${totalPages}`, W - 32, H - 5);
}

function renderAestheticCombosPage(doc: jsPDF, categoryName: string, pageNum: number, totalPages: number) {
  doc.addPage();
  const W = 210;
  const H = 297;

  // Header banner
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, W, 28, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('AESTHETIC WEBSITE COLOR COMBOS CREATORS SHOULD TRY', 14, 13);
  
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(148, 163, 184);
  doc.text('TESTED PALETTES FOR HIGH CONVERSION, BRAND TRUST & READABILITY', 14, 21);

  // 6 large aesthetic mockup cards (2 columns x 3 rows)
  const startX = 14;
  const startY = 36;
  const cardW = 88;
  const cardH = 72;

  AESTHETIC_CREATOR_COMBOS.forEach((combo, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardW + 6);
    const y = startY + row * (cardH + 7);

    // Outer card
    doc.setFillColor(combo.bg[0], combo.bg[1], combo.bg[2]);
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.5);
    doc.roundedRect(x, y, cardW, cardH, 4, 4, 'FD');

    // Laptop/Browser top bar
    doc.setFillColor(combo.primary[0], combo.primary[1], combo.primary[2]);
    doc.roundedRect(x, y, cardW, 14, 4, 4, 'F');
    doc.rect(x, y + 10, cardW, 4, 'F'); // flatten bottom radius

    // Browser dots
    doc.setFillColor(255, 255, 255);
    doc.circle(x + 5, y + 7, 1.3, 'F');
    doc.circle(x + 9, y + 7, 1.3, 'F');
    doc.circle(x + 13, y + 7, 1.3, 'F');

    // Title on top bar
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text(`${combo.id}  ${combo.title}`, x + 20, y + 9);

    // Inner preview container (representing mockup hero)
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(x + 5, y + 18, cardW - 10, 32, 2, 2, 'FD');

    // Mockup content
    doc.setFillColor(combo.primary[0], combo.primary[1], combo.primary[2]);
    doc.rect(x + 9, y + 23, 35, 4, 'F');

    doc.setFillColor(220, 225, 230);
    doc.rect(x + 9, y + 30, 52, 2.5, 'F');
    doc.rect(x + 9, y + 35, 45, 2.5, 'F');

    // CTA button in mockup
    doc.setFillColor(combo.primary[0], combo.primary[1], combo.primary[2]);
    doc.roundedRect(x + 9, y + 41, 24, 6, 1.5, 1.5, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(5);
    doc.setFont('helvetica', 'bold');
    doc.text('EXPLORE NOW', x + 12, y + 45.2);

    // Bottom tags & Hex values
    doc.setTextColor(30, 41, 59);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    doc.text(combo.tag, x + 5, y + 56);

    doc.setTextColor(100, 116, 139);
    doc.setFontSize(6.5);
    doc.setFont('helvetica', 'normal');
    doc.text(`Palette Hex: ${combo.hex}`, x + 5, y + 62);
    doc.text(`Conversion Impact: +42% user trust & retention`, x + 5, y + 67);
  });

  // Footer
  doc.setFillColor(241, 245, 249);
  doc.rect(0, H - 12, W, 12, 'F');
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text(`Official ${categoryName} Website Blueprint Sample`, 14, H - 5);
  doc.text(`Page ${pageNum} of ${totalPages}`, W - 32, H - 5);
}

function renderWebsiteSlide(doc: jsPDF, site: WebsiteShowcase, categoryName: string, pageNum: number, totalPages: number) {
  if (pageNum > 1) {
    doc.addPage();
  }
  const W = 210;
  const H = 297;

  const [r, g, b] = site.primaryColor;

  // Header band
  doc.setFillColor(r, g, b);
  doc.rect(0, 0, W, 36, 'F');

  // Category pill
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(14, 8, 38, 5, 2, 2, 'F');
  doc.setTextColor(r, g, b);
  doc.setFontSize(6.5);
  doc.setFont('helvetica', 'bold');
  doc.text(site.category.toUpperCase(), 17, 11.5);

  // Badge on right
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'bold');
  doc.text(site.badge, W - 14 - doc.getTextWidth(site.badge), 12);

  // Main Brand Name
  doc.setFontSize(19);
  doc.setFont('helvetica', 'bold');
  doc.text(site.brand, 14, 24);

  // Tagline
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(240, 240, 245);
  doc.text(site.tagline, 14, 31);

  // Browser Mockup Window
  const mockX = 14;
  const mockY = 46;
  const mockW = 182;
  const mockH = 175;

  // Window frame
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(215, 220, 228);
  doc.setLineWidth(0.6);
  doc.roundedRect(mockX, mockY, mockW, mockH, 4, 4, 'FD');

  // Browser header bar
  doc.setFillColor(245, 247, 250);
  doc.roundedRect(mockX, mockY, mockW, 12, 4, 4, 'F');
  doc.rect(mockX, mockY + 8, mockW, 4, 'F'); // flatten bottom

  // Window dots
  doc.setFillColor(239, 68, 68);
  doc.circle(mockX + 6, mockY + 6, 1.8, 'F');
  doc.setFillColor(245, 158, 11);
  doc.circle(mockX + 12, mockY + 6, 1.8, 'F');
  doc.setFillColor(34, 197, 94);
  doc.circle(mockX + 18, mockY + 6, 1.8, 'F');

  // URL Bar
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(220, 225, 230);
  doc.roundedRect(mockX + 26, mockY + 2.5, 95, 7, 2, 2, 'FD');
  doc.setTextColor(120, 130, 145);
  doc.setFontSize(6);
  doc.setFont('helvetica', 'normal');
  const slug = site.brand.toLowerCase().replace(/[^a-z0-9]/g, '');
  doc.text(`https://www.${slug}.com`, mockX + 30, mockY + 6.8);

  // Hero Area inside mockup
  doc.setFillColor(248, 250, 252);
  doc.rect(mockX + 1, mockY + 12.5, mockW - 2, 68, 'F');

  // Hero decorative accent line
  doc.setFillColor(r, g, b);
  doc.rect(mockX + 14, mockY + 24, 32, 2, 'F');

  // Hero Headline
  doc.setTextColor(20, 25, 35);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  const splitHeadline = doc.splitTextToSize(site.heroText, 100);
  doc.text(splitHeadline, mockX + 14, mockY + 34);

  // Hero Subtext
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 110, 125);
  doc.text('Designed for 0% commission, rapid mobile speed & high-converting visitor inquiries.', mockX + 14, mockY + 52);

  // Call to action button in hero
  doc.setFillColor(r, g, b);
  doc.roundedRect(mockX + 14, mockY + 60, 36, 10, 2.5, 2.5, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'bold');
  doc.text(site.ctaText, mockX + 18, mockY + 66.5);

  // WhatsApp / Call secondary button
  doc.setDrawColor(r, g, b);
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(mockX + 54, mockY + 60, 38, 10, 2.5, 2.5, 'FD');
  doc.setTextColor(r, g, b);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'bold');
  doc.text('WhatsApp 1-Click', mockX + 58, mockY + 66.5);

  // Mockup visual side banner / graphic
  doc.setFillColor(r, g, b);
  doc.roundedRect(mockX + 120, mockY + 22, 52, 48, 3, 3, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text(site.metrics, mockX + 124, mockY + 38);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text('Direct Customer Growth', mockX + 124, mockY + 46);
  doc.text('Guaranteed Mobile First', mockX + 124, mockY + 54);

  // Features Section Header inside Mockup
  doc.setTextColor(30, 35, 45);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('KEY WEBSITE SECTIONS & CONVERSION ARCHITECTURE', mockX + 14, mockY + 92);

  // 4 Feature Cards inside Mockup
  const cardW = 38;
  const cardH = 62;
  site.features.forEach((feat, i) => {
    const cx = mockX + 12 + i * 40;
    const cy = mockY + 98;

    doc.setFillColor(250, 252, 255);
    doc.setDrawColor(220, 226, 235);
    doc.setLineWidth(0.4);
    doc.roundedRect(cx, cy, cardW, cardH, 2.5, 2.5, 'FD');

    // Number tag
    doc.setFillColor(r, g, b);
    doc.roundedRect(cx + 3, cy + 4, 10, 5, 1, 1, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(5.5);
    doc.setFont('helvetica', 'bold');
    doc.text(`0${i + 1}`, cx + 5, cy + 7.5);

    // Feature text
    doc.setTextColor(25, 30, 40);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    const splitTitle = doc.splitTextToSize(feat, cardW - 6);
    doc.text(splitTitle, cx + 4, cy + 16);

    // Mini bullet lines
    doc.setFillColor(225, 230, 238);
    doc.rect(cx + 4, cy + 34, cardW - 8, 2, 'F');
    doc.rect(cx + 4, cy + 39, cardW - 12, 2, 'F');
    doc.rect(cx + 4, cy + 44, cardW - 10, 2, 'F');

    // Status pill
    doc.setFillColor(235, 245, 238);
    doc.roundedRect(cx + 4, cy + 51, cardW - 8, 6, 1.5, 1.5, 'F');
    doc.setTextColor(22, 101, 52);
    doc.setFontSize(5.5);
    doc.setFont('helvetica', 'bold');
    doc.text('LIVE PREVIEW READY', cx + 6, cy + 55);
  });

  // Bottom Specification Summary Box
  const specY = 228;
  doc.setFillColor(248, 245, 240);
  doc.setDrawColor(220, 214, 204);
  doc.roundedRect(14, specY, mockW, 52, 3, 3, 'FD');

  doc.setTextColor(28, 25, 23);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.text(`TECHNICAL ARCHITECTURE & SPECIFICATIONS: ${site.brand.toUpperCase()}`, 18, specY + 8);

  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 75, 70);
  doc.text(`• Primary Palette: RGB(${r}, ${g}, ${b}) | 100% Mobile Responsive Layout | 0.8s Ultra-Fast Load Speed`, 18, specY + 16);
  doc.text('• Interactive WhatsApp API & Call Lead Capture Engine (Direct to owner, no middleman fees)', 18, specY + 23);
  doc.text('• Full Client Admin Access: Live price updates, stock toggle & instant customer review collection', 18, specY + 30);
  doc.text('• Verified Google Local SEO Schema, Apple Maps integration & High-Security Cloud CDN', 18, specY + 37);
  doc.text('• Deliverable: Production deployment in 5 working days with 1-Year Free Maintenance', 18, specY + 44);

  // Footer
  doc.setFillColor(240, 236, 228);
  doc.rect(0, H - 10, W, 10, 'F');
  doc.setTextColor(110, 105, 98);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  doc.text(`Official ${categoryName} Website Blueprint Sample • AI Studio Build`, 14, H - 3.5);
  doc.text(`Page ${pageNum} of ${totalPages}`, W - 30, H - 3.5);
}

// -------------------------------------------------------------
// CATEGORY 1: CAFE & BAKERY PDF (from user's Cafe Attachment)
// -------------------------------------------------------------
function buildCafePdf() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const totalPages = 18;

  const cafeSites: WebsiteShowcase[] = [
    {
      brand: 'The Daily Grind Artisan Bakery',
      tagline: 'Freshly Baked, Just for You!',
      category: 'Artisan Bakery',
      badge: 'BREAD & PASTRIES',
      primaryColor: [180, 83, 9], // warm amber
      heroText: 'Handcrafted Sourdough, Flaky Croissants & Custom Celebration Cakes',
      features: ['Artisan Bread Menu', 'Tiered Cake Customizer', 'WhatsApp Order Bot', 'Daily Fresh Stock Tracker'],
      ctaText: 'ORDER BAKED GOODS',
      metrics: '320+ Orders/Wk'
    },
    {
      brand: 'BrewCraft Coffee & Eatery',
      tagline: 'Good Coffee Better Days',
      category: 'Specialty Coffee',
      badge: 'SINGLE ORIGIN',
      primaryColor: [120, 53, 15], // deep espresso
      heroText: 'Engineered Pour-Overs, Nitro Cold Brews & Cozy Community Table',
      features: ['Pour-Over Coffee Guide', 'Digital QR Table Menu', 'Table Seat Reservation', 'Beans Delivery Portal'],
      ctaText: 'EXPLORE BREWS',
      metrics: '+210% Direct Sales'
    },
    {
      brand: 'Cafe Lunaire',
      tagline: 'Made for Slow Moments',
      category: 'Boutique Cafe',
      badge: 'ARTISANAL VIBES',
      primaryColor: [78, 52, 46], // rich mocha
      heroText: 'Savor Every Drop of Hand-Pressed Coffee & French Delicacies',
      features: ['Curated Toast & Panini Bar', 'Matcha Cloud Frappe', 'Happy Hours Banner', 'Live Music Booking'],
      ctaText: 'BOOK A TABLE',
      metrics: '4.9 Star Rating'
    },
    {
      brand: 'Drinko Espresso & Roastery',
      tagline: 'Sweet Moments Start Here',
      category: 'Coffee Roasters',
      badge: 'INSTANT PICKUP',
      primaryColor: [194, 65, 12], // rust orange
      heroText: 'Order Specialty Coffee for Curbside Pickup in Under 5 Minutes',
      features: ['Quick 20s Checkout', 'Direct UPI QR Payments', 'Loyalty Coffee Stamp', 'Roasted Beans Bag Order'],
      ctaText: 'ORDER COFFEE NOW',
      metrics: '0% Aggregator Fee'
    },
    {
      brand: 'Brew Haven Coffee House',
      tagline: 'Every Cup Crafted to Perfection',
      category: 'Coffee & Bites',
      badge: 'LOCAL ROASTS',
      primaryColor: [146, 64, 14], // amber brown
      heroText: 'Freshly Ground Ethiopian & Arabica Blends with Oven-Baked Scones',
      features: ['Specialty Coffee Tasting', 'Co-working Wi-Fi Pass', 'Chef Special Desserts', 'Direct WhatsApp Menu'],
      ctaText: 'RESERVE SEAT',
      metrics: '98% Happy Guests'
    },
    {
      brand: 'Kyoto Minimalist Japanese Cafe',
      tagline: 'Art of Mindful Tea & Coffee',
      category: 'Japanese Cafe',
      badge: 'ZEN AMBIENCE',
      primaryColor: [46, 64, 53], // deep matcha green
      heroText: 'Ceremonial Grade Matcha, Japanese Dorayaki & Quiet Aesthetics',
      features: ['Ceremonial Matcha Tea', 'Handmade Mochi Sweets', 'Quiet Corner Seatings', 'Tea Set Gift Shop'],
      ctaText: 'DISCOVER MENU',
      metrics: '100% Organic'
    },
    {
      brand: 'BrewLab Coffee Engineering',
      tagline: 'Engineered for Better Coffee',
      category: 'Coffee Science',
      badge: 'PRECISION BREW',
      primaryColor: [30, 41, 59], // slate navy
      heroText: 'Scientific Extraction, Water Mineral Balance & Micro-Lot Beans',
      features: ['AeroPress & Chemex Bar', 'Barista Workshop Signups', 'Custom Roast Subscription', 'Tasting Rate Card'],
      ctaText: 'LEARN MORE',
      metrics: 'Award Winner 2025'
    },
    {
      brand: 'Sweet Moments Patisserie',
      tagline: 'Pistachio Bliss & Chocolate Dreams',
      category: 'Dessert Studio',
      badge: '100% VEG OPTIONS',
      primaryColor: [190, 24, 93], // berry pink
      heroText: 'Belgian Truffle Cakes, French Macarons & Artisanal Cold Frappes',
      features: ['Custom Birthday Cakes', 'Same-Day City Delivery', 'Midnight Drop Option', 'Eggless Range Toggle'],
      ctaText: 'VIEW CAKE GALLERY',
      metrics: '500+ Celebrations'
    },
    {
      brand: 'Brew & Bean Cozy Lounge',
      tagline: 'Experience the Art of Coffee',
      category: 'Cafe & Bistro',
      badge: 'WEEKEND SPECIALS',
      primaryColor: [154, 52, 18], // burnt terracotta
      heroText: 'Warm Wooden Interiors, Rich Aromas and Artisanal Sourdough Meals',
      features: ['Weekend Brunch Buffet', 'Kids & Pet Friendly Deck', 'Takeaway Fast Track', 'Google Map Directions'],
      ctaText: 'GET DIRECTIONS',
      metrics: '1,200+ Reviews'
    },
    {
      brand: 'Aurora Roastery & Cafe',
      tagline: 'Brewed Exclusively for You',
      category: 'Coffee House',
      badge: 'TOP RATED 2025',
      primaryColor: [161, 98, 7], // golden roast
      heroText: 'Sip, Savor and Connect with the Finest Roasted Beans in Town',
      features: ['Cold Drip Nitro Tower', 'Nutella Stuffed Croissants', 'Table Reservation App', 'Direct Owner WhatsApp'],
      ctaText: 'JOIN TODAY',
      metrics: '20,000+ Cups'
    }
  ];

  cafeSites.forEach((site, i) => {
    renderWebsiteSlide(doc, site, 'Cafe & Bakery', i + 1, totalPages);
  });

  // Pages 11-16: Additional cafe variations
  const moreCafe = [
    { brand: 'Brew Haven Eatery', tagline: 'Sip, Savor & Feel at Home', cat: 'Cafe & Kitchen', color: [133, 77, 14] as [number, number, number] },
    { brand: 'Good Moments Coffee', tagline: 'Good Coffee, Great Moments', cat: 'Bistro & Lounge', color: [168, 85, 24] as [number, number, number] },
    { brand: 'Crafted Coffee & Cozy Moments', tagline: 'Every Batch Freshly Roasted', cat: 'Artisan Coffee', color: [113, 63, 18] as [number, number, number] },
    { brand: 'Aurora Cafe Bar', tagline: 'Brewed for You & Loved by All', cat: 'Specialty Espresso', color: [180, 83, 9] as [number, number, number] },
    { brand: 'Brew & Bean Cafe Co.', tagline: 'Experience the True Art of Coffee', cat: 'Coffee Studio', color: [92, 45, 12] as [number, number, number] },
    { brand: 'Sweet Crust Cake Patisserie', tagline: 'Celebration Moments Start Here', cat: 'Artisan Bakery', color: [194, 65, 12] as [number, number, number] }
  ];

  moreCafe.forEach((extra, idx) => {
    const siteObj: WebsiteShowcase = {
      brand: extra.brand,
      tagline: extra.tagline,
      category: extra.cat,
      badge: 'PREVIEW READY',
      primaryColor: extra.color,
      heroText: `${extra.brand} - Designed for seamless direct customer orders & high table bookings.`,
      features: ['Digital Menu Filter', 'Direct WhatsApp Orders', 'Table Booking Form', 'Google Map Directions'],
      ctaText: 'CHECK MENU',
      metrics: 'Top Rated'
    };
    renderWebsiteSlide(doc, siteObj, 'Cafe & Bakery', 11 + idx, totalPages);
  });

  // Page 17: Color Combinations (24 circles)
  renderColorCombinationsPage(doc, 'Cafe & Bakery', 17, totalPages);

  // Page 18: Aesthetic Website Color Combos Creators Should Try
  renderAestheticCombosPage(doc, 'Cafe & Bakery', 18, totalPages);

  const pdfPath = path.join(SAMPLES_DIR, 'cafe-website-sample.pdf');
  fs.writeFileSync(pdfPath, Buffer.from(doc.output('arraybuffer')));
  console.log('Generated cafe-website-sample.pdf successfully!');
}

// -------------------------------------------------------------
// CATEGORY 2: CLINIC & HEALTHCARE PDF (from user's Clinic Attachment)
// -------------------------------------------------------------
function buildClinicPdf() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const totalPages = 18;

  const clinicSites: WebsiteShowcase[] = [
    {
      brand: 'CareWell Multispeciality & Dental Clinic',
      tagline: 'Modern Dentistry with Gentle Care',
      category: 'Dental & Multispeciality',
      badge: 'NABH ACCREDITED',
      primaryColor: [2, 132, 199], // sky blue
      heroText: 'Advanced Painless Root Canals, Cosmetic Smile Makeovers & General Checkups',
      features: ['Doctor Slot Schedule', 'Treatment Price Estimator', 'WhatsApp Reminders', 'Client Admin Doctor CRM'],
      ctaText: 'BOOK CONSULTATION',
      metrics: '12+ Specialists'
    },
    {
      brand: 'Nova Super Specialist Hospital',
      tagline: 'Premium Treatments for a Healthy Lifestyle',
      category: 'Super Specialist Hospital',
      badge: '24/7 EMERGENCY',
      primaryColor: [14, 116, 144], // deep teal
      heroText: 'Comprehensive Cardiology, Neurology, Orthopedics & Advanced Diagnostics',
      features: ['Emergency SOS Call', 'Radiology & MRI Lab', 'Online Doctor Roster', 'Insurance TPA Guide'],
      ctaText: 'BOOK HOSPITAL VISIT',
      metrics: '100% Sanitized'
    },
    {
      brand: 'HealthCare Medical Center',
      tagline: 'Your Health Is Our Priority',
      category: 'Internal Medicine & Surgery',
      badge: 'VERIFIED DOCTORS',
      primaryColor: [16, 185, 129], // medical emerald
      heroText: 'Experienced Physicians, Digital Prescriptions & Family Health Checkups',
      features: ['Instant Slot Booking', 'Preventive Health Packs', 'Pediatric Vaccination', 'Download Lab Reports'],
      ctaText: 'SCHEDULE VISIT',
      metrics: '15,000+ Patients'
    },
    {
      brand: 'PureSmile Modern Dental Clinic',
      tagline: 'Smiles That Last a Lifetime',
      category: 'Dental Aesthetics',
      badge: 'INVISIBLE ALIGNERS',
      primaryColor: [6, 182, 212], // cyan
      heroText: 'Laser Teeth Whitening, Ceramic Implants & Gentle Pediatric Dentistry',
      features: ['Smile Makeover Gallery', 'Digital OPG X-Ray', 'Transparent Pricing', 'Emergency Toothache SOS'],
      ctaText: 'GET SMILE CONSULT',
      metrics: '4.9 Star Dental'
    },
    {
      brand: 'BloomHer Women & Maternity Care',
      tagline: 'Compassionate Care for Every Chapter of Life',
      category: 'Women Health & Gynecology',
      badge: 'SPECIALIZED MATERNITY',
      primaryColor: [219, 39, 119], // soft berry rose
      heroText: 'Dedicated Gynecologists, Antenatal Classes & Modern Delivery Suites',
      features: ['Trimester Care Plans', 'Ultrasound Booking', 'Female Specialists', 'Confidential Chat'],
      ctaText: 'BOOK GYNECOLOGIST',
      metrics: '3,000+ Deliveries'
    },
    {
      brand: 'LifeSecure Dermatology & Laser Clinic',
      tagline: 'Healthy Skin. Confident You.',
      category: 'Dermatology & Cosmetology',
      badge: 'US-FDA APPROVED',
      primaryColor: [13, 148, 136], // teal green
      heroText: 'Acne Scar Removal, Laser Hair Reduction & Anti-Aging Skin Rejuvenation',
      features: ['Skin Analysis Scan', 'Laser Therapy Cost Card', 'Doctor Consultation', 'Verified Patient Reviews'],
      ctaText: 'BOOK DERMA APPOINTMENT',
      metrics: '99% Satisfaction'
    },
    {
      brand: 'MediCare Multispeciality Clinic',
      tagline: 'Your Health, Our Top Priority',
      category: 'Family Clinic',
      badge: 'ZERO WAITING QUEUE',
      primaryColor: [37, 99, 235], // royal medical blue
      heroText: 'Skip Waiting Room Hassles with Pre-Booked Doctor Time Slots Online',
      features: ['Family Health Pass', 'Doorstep Blood Collection', 'Cardiology & ECG', 'WhatsApp Video Consult'],
      ctaText: 'CHECK AVAILABLE SLOTS',
      metrics: '0 Min Wait Time'
    },
    {
      brand: 'VitalCare Diagnostic & Health Center',
      tagline: 'Caring for You, Every Step of the Way',
      category: 'Diagnostics & Pathology',
      badge: 'NABL CERTIFIED LAB',
      primaryColor: [59, 130, 246], // bright blue
      heroText: 'Same-Day Digital Test Reports, 68+ Vital Biomarkers & Doctor Review',
      features: ['Full Body Checkup 50% Off', 'Home Sample Collection', 'Online Report Portal', 'Doctor Interpretation'],
      ctaText: 'BOOK BLOOD TEST',
      metrics: '60+ Test Packages'
    },
    {
      brand: 'Denta Care Specialist Hub',
      tagline: 'Every Smile Matters to Us',
      category: 'Orthodontics & Implants',
      badge: 'PAINLESS TREATMENT',
      primaryColor: [20, 184, 166], // teal
      heroText: 'Cutting-Edge Dental Chairs, Sterilized Instruments & 10-Year Warranty Implants',
      features: ['Implant Cost Estimator', 'Kids Friendly Dentist', 'Root Canal in 1 Sitting', 'Sunday Open Clinic'],
      ctaText: 'CALL CLINIC NOW',
      metrics: '5,000+ Implants'
    },
    {
      brand: 'Top-Notch Advanced Dental Care',
      tagline: 'Your Best Dental Experience Awaits',
      category: 'Cosmetic Dentistry',
      badge: 'EXCELLENCE GUARANTEE',
      primaryColor: [3, 105, 161], // deep ocean
      heroText: 'Hollywood Smile Veneers, Clear Aligners & Complete Oral Rehabilitation',
      features: ['Before / After Smiles', 'EMI Payment Support', 'Saturday Special Camp', 'WhatsApp 1-Tap Booking'],
      ctaText: 'BOOK DENTAL APPOINTMENT',
      metrics: '100% Five Star'
    }
  ];

  clinicSites.forEach((site, i) => {
    renderWebsiteSlide(doc, site, 'Clinic & Healthcare', i + 1, totalPages);
  });

  // Pages 11-16: Additional clinic variations
  const moreClinics = [
    { brand: 'Careplus Medical Hospital', tagline: 'Advanced Surgeries & Intensive Care', cat: 'Multispeciality Hospital', color: [14, 116, 144] as [number, number, number] },
    { brand: 'CareWe Doctors Network', tagline: 'Find Your Verified Specialist Instantly', cat: 'Doctor Directory', color: [30, 64, 175] as [number, number, number] },
    { brand: 'BrightSmile Family Dental', tagline: 'Exceptional Care for Every Smile', cat: 'Family Dental Clinic', color: [13, 148, 136] as [number, number, number] },
    { brand: 'MediCare Healthcare Hospital', tagline: 'Quality Healthcare for All Generations', cat: 'Community Hospital', color: [2, 132, 199] as [number, number, number] },
    { brand: 'Apex Orthopedic & Joint Center', tagline: 'Restore Mobility & Live Pain-Free', cat: 'Orthopedic Hospital', color: [21, 128, 61] as [number, number, number] },
    { brand: 'Pulse Heart & Cardiology Center', tagline: 'Heart Care by Renowned Cardiologists', cat: 'Cardiology Center', color: [185, 28, 28] as [number, number, number] }
  ];

  moreClinics.forEach((extra, idx) => {
    const siteObj: WebsiteShowcase = {
      brand: extra.brand,
      tagline: extra.tagline,
      category: extra.cat,
      badge: '24/7 HELPLINE',
      primaryColor: extra.color,
      heroText: `${extra.brand} - Modern patient appointment scheduling portal with zero waiting queue.`,
      features: ['Instant Slot Booking', 'Doctor Credentials Roster', 'WhatsApp Confirmation', 'Transparent Treatment Fees'],
      ctaText: 'CONSULT SPECIALIST',
      metrics: 'Verified Care'
    };
    renderWebsiteSlide(doc, siteObj, 'Clinic & Healthcare', 11 + idx, totalPages);
  });

  // Page 17: Color Combinations (24 circles)
  renderColorCombinationsPage(doc, 'Clinic & Healthcare', 17, totalPages);

  // Page 18: Aesthetic Website Color Combos Creators Should Try
  renderAestheticCombosPage(doc, 'Clinic & Healthcare', 18, totalPages);

  const pdfPath = path.join(SAMPLES_DIR, 'clinic-healthcare-sample.pdf');
  fs.writeFileSync(pdfPath, Buffer.from(doc.output('arraybuffer')));
  console.log('Generated clinic-healthcare-sample.pdf successfully!');
}

// -------------------------------------------------------------
// CATEGORY 3: BEAUTY PARLOUR & SPA PDF (from user's Spa Attachment)
// -------------------------------------------------------------
function buildBeautyParlourPdf() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const totalPages = 20;

  const beautySites: WebsiteShowcase[] = [
    {
      brand: 'Serenity Luxury Spa & Wellness',
      tagline: 'Pure Relaxation. Total Renewal.',
      category: 'Luxury Day Spa',
      badge: 'ORGANIC OILS',
      primaryColor: [190, 24, 93], // deep rose pink
      heroText: 'Swedish Aromatherapy Massages, Herbal Body Scrubs & Deep Tension Release',
      features: ['Interactive Spa Menu', 'Stylist & Therapist Booking', 'Couple Spa Suites', 'Direct WhatsApp Slot Selection'],
      ctaText: 'RESERVE SPA RITUAL',
      metrics: '4.9 Star Rated'
    },
    {
      brand: 'Glow & Glam Luxury Salon & Academy',
      tagline: 'Reveal Your True Radiance & Unwind in Luxury',
      category: 'Salon & Makeover Studio',
      badge: 'BRIDAL SPECIALISTS',
      primaryColor: [219, 39, 119], // vivid magenta
      heroText: 'Korean Glass Skin Facials, French Balayage Hair Color & Celebrity Bridal Artistry',
      features: ['Bridal Package Rate Card', 'Balayage Hair Portfolio', 'Nail Art Studio Menu', 'Instant 20% Off Lead Capture'],
      ctaText: 'BOOK SALON VISIT',
      metrics: '2,400+ Makeovers'
    },
    {
      brand: 'Lumiere Skin Clinic & Med Spa',
      tagline: 'Advanced Care for Radiant Skin',
      category: 'Aesthetic Med Spa',
      badge: 'DERMA CERTIFIED',
      primaryColor: [162, 28, 175], // purple
      heroText: 'Hydra-Oxygen Facials, Collagen Boosters & Non-Invasive Anti-Aging',
      features: ['Skin Type Quiz', 'Treatment Before/After', 'Online Slot Booking', 'Doctor Consultation'],
      ctaText: 'EXPLORE TREATMENTS',
      metrics: '100% Safe Care'
    },
    {
      brand: 'Zenova Spa & Wellness Sanctuary',
      tagline: 'Wellness Massage. Time for Yourself.',
      category: 'Wellness Retreat',
      badge: 'HOLISTIC THERAPY',
      primaryColor: [13, 148, 136], // calm teal
      heroText: 'Warm Stone Therapies, Sound Bowl Healing & Ayurvedic Shirodhara',
      features: ['Ayurvedic Consultation', 'Herbal Steam Sauna', 'Weekend Detox Pass', 'Gift Voucher Shop'],
      ctaText: 'BOOK HEALING SESSION',
      metrics: 'Pure Relaxation'
    },
    {
      brand: 'Velvetique Beauty & Hair Lounge',
      tagline: 'Radiant Skin. Real Confidence.',
      category: 'Hair & Beauty Studio',
      badge: 'TOP STYLISTS',
      primaryColor: [225, 29, 72], // ruby rose
      heroText: 'Keratin Smoothing, Microblading, Hydra Facials & Glam Party Makeup',
      features: ['Price Transparency List', 'Stylist Instagram Reel Feed', 'Direct WhatsApp Booking', 'Student Discount'],
      ctaText: 'CLAIM FIRST VISIT PERK',
      metrics: '98% Re-book'
    },
    {
      brand: 'Aura Luxe Salon & Makeover Academy',
      tagline: 'Enhance Your Beauty, Embrace Your Confidence',
      category: 'Bridal Studio & Academy',
      badge: 'CELEBRITY MAKEUP',
      primaryColor: [180, 83, 9], // royal amber
      heroText: 'High-Definition Airbrush Bridal Makeup & Professional Academy Courses',
      features: ['Bridal Trial Booking', 'Academy Syllabus PDF', 'Trousseau Styling', 'Master Class Registration'],
      ctaText: 'BOOK BRIDAL CONSULT',
      metrics: '500+ Brides'
    },
    {
      brand: 'Nova Med Spa & Laser Aesthetics',
      tagline: 'Refine Your Beauty. Reveal Your Best.',
      category: 'Laser Clinic',
      badge: 'US-FDA APPROVED',
      primaryColor: [147, 51, 234], // vibrant violet
      heroText: 'Painless Laser Hair Removal, Skin Tightening & Lip Pigmentation Correction',
      features: ['Transparent Package Rates', 'Zero Downtime Guarantee', 'Consultation Form', 'WhatsApp Inquiry'],
      ctaText: 'FREE SKIN CONSULT',
      metrics: '10+ Yrs Exp'
    },
    {
      brand: 'PureLuxe Skincare & Botanical Spa',
      tagline: 'Beauty Inspired By Nature',
      category: 'Organic Spa',
      badge: 'CRUELTY FREE',
      primaryColor: [84, 110, 89], // sage green
      heroText: 'Hand-Harvested Botanical Face Elixirs, Fruit Peels & Deep Foot Reflexology',
      features: ['Organic Product Catalog', 'Reflexology Session Form', 'Monthly Subscription Pass', 'Salon Directions'],
      ctaText: 'VIEW ORGANIC MENU',
      metrics: '100% Natural'
    },
    {
      brand: 'MagicSpa Beauty Retreat',
      tagline: 'Luxury Wellness & Total Body Renewal',
      category: 'Luxury Day Spa',
      badge: 'PREMIUM MASSAGE',
      primaryColor: [159, 18, 57], // wine berry
      heroText: 'Indulge in Deep Tissue Massage, Candle Therapy & Turkish Hammam Baths',
      features: ['VIP Couple Suites', 'Corporate Spa Packages', 'Instant Booking Slot', 'Loyalty Rewards'],
      ctaText: 'EXPERIENCE LUXURY',
      metrics: '5 Star Rated'
    },
    {
      brand: 'Lauren Aesthetics & Cosmetology',
      tagline: 'Natural Aesthetics. Confident You.',
      category: 'Cosmetic Studio',
      badge: 'CUSTOM TREATMENTS',
      primaryColor: [185, 28, 28], // deep crimson
      heroText: 'Bespoke Facials Tailored Specifically to Your Unique Skin Barrier & Goals',
      features: ['Skin Barrier Assessment', 'Medical Grade Peels', 'Online Booking System', 'Client Feedback Wall'],
      ctaText: 'BOOK YOUR GLOW',
      metrics: 'Zero Hidden Cost'
    }
  ];

  beautySites.forEach((site, i) => {
    renderWebsiteSlide(doc, site, 'Beauty Parlour & Spa', i + 1, totalPages);
  });

  // Pages 11-18: Additional beauty variations from user's PDF
  const moreBeauty = [
    { brand: 'Serenite Wellness & Spa', tagline: 'Relax, Rejuvenate & Restore Balance', cat: 'Holistic Spa', color: [190, 24, 93] as [number, number, number] },
    { brand: 'Beauty Shop Cosmetics Hub', tagline: 'Your Ultimate Beauty & Skincare Destination', cat: 'Cosmetics Store', color: [225, 29, 72] as [number, number, number] },
    { brand: 'Lumine Med Spa Aesthetic Center', tagline: 'Elevate Your Beauty with Medical Precision', cat: 'Med Spa Studio', color: [147, 51, 234] as [number, number, number] },
    { brand: 'Purelife Wellness & Body Massage', tagline: 'Unwind Mind & Body in Total Peace', cat: 'Body Therapy', color: [13, 148, 136] as [number, number, number] },
    { brand: 'Beauty & Care Studio', tagline: 'Beauty that Seamlessly Reflects Your Style', cat: 'Hair & Nail Bar', color: [219, 39, 119] as [number, number, number] },
    { brand: 'PureSense Spa & Wellness', tagline: 'The True Art of Natural Beauty & Serenity', cat: 'Luxury Wellness', color: [84, 110, 89] as [number, number, number] },
    { brand: 'Nail Studio & Lash Bar', tagline: 'Gel Extensions, Nail Art & Lash Lifts', cat: 'Nail Lounge', color: [236, 72, 153] as [number, number, number] },
    { brand: 'AyurSattva Herbal Spa', tagline: 'Traditional Ayurvedic Abhyanga & Shirodhara', cat: 'Ayurvedic Wellness', color: [161, 98, 7] as [number, number, number] }
  ];

  moreBeauty.forEach((extra, idx) => {
    const siteObj: WebsiteShowcase = {
      brand: extra.brand,
      tagline: extra.tagline,
      category: extra.cat,
      badge: 'PRE-BOOK & SAVE 20%',
      primaryColor: extra.color,
      heroText: `${extra.brand} - Aesthetic salon website with live WhatsApp bookings and complete service price card.`,
      features: ['Transparent Rate Card', 'Instant WhatsApp Booking', 'Stylist Portfolio Gallery', 'VIP Member Perks'],
      ctaText: 'BOOK APPOINTMENT',
      metrics: 'Best in City'
    };
    renderWebsiteSlide(doc, siteObj, 'Beauty Parlour & Spa', 11 + idx, totalPages);
  });

  // Page 19: Color Combinations (24 circles)
  renderColorCombinationsPage(doc, 'Beauty Parlour & Spa', 19, totalPages);

  // Page 20: Aesthetic Website Color Combos Creators Should Try
  renderAestheticCombosPage(doc, 'Beauty Parlour & Spa', 20, totalPages);

  const pdfPath = path.join(SAMPLES_DIR, 'beauty-parlour-salon-sample.pdf');
  fs.writeFileSync(pdfPath, Buffer.from(doc.output('arraybuffer')));
  console.log('Generated beauty-parlour-salon-sample.pdf successfully!');
}

// -------------------------------------------------------------
// CATEGORY 4: GYM & FITNESS PDF (from user's Gym Attachment)
// -------------------------------------------------------------
function buildGymPdf() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const totalPages = 17;

  const gymSites: WebsiteShowcase[] = [
    {
      brand: 'BearFit Performance Gym',
      tagline: 'Achieve More Than Just Fitness',
      category: 'Strength & Conditioning',
      badge: 'HEAVYWEIGHT CLUB',
      primaryColor: [220, 38, 38], // intense red
      heroText: 'Olympic Lifting Platforms, Certified Strength Mentors & No-Excuses Community',
      features: ['Free 1-Day Trial Pass Form', 'Membership Cost Calculator', 'Batch Timetable Filter', 'Transformation Gallery'],
      ctaText: 'CLAIM FREE VIP PASS',
      metrics: '+85 Members/Mo'
    },
    {
      brand: 'IronPulse 24/7 Fitness & CrossFit',
      tagline: 'Transform Your Body, Unleash Your Potential',
      category: 'CrossFit & Functional',
      badge: 'OPEN 24 HOURS',
      primaryColor: [234, 88, 12], // burnt orange
      heroText: '12,000 Sq.Ft Training Zone, Luxury Steam Rooms & High-Energy HIIT Group Batches',
      features: ['CrossFit & Zumba Schedules', 'Personal Trainer Profiles', 'Body BMI & Goal Calculator', 'Direct WhatsApp Leads'],
      ctaText: 'BOOK TRIAL WORKOUT',
      metrics: '520+ Active Members'
    },
    {
      brand: 'Athletix Sports Wear & Training Club',
      tagline: 'Train Hard. Stay Relentless.',
      category: 'Athletic Performance',
      badge: 'ELITE ATHLETES',
      primaryColor: [15, 23, 42], // deep dark slate
      heroText: 'Science-Backed Biomechanics, Calisthenics Rigs & Sprint Conditioning Tracks',
      features: ['Strength Testing Protocol', 'Nutrition & Diet Planner', 'Online Coach Booking', 'Member Community App'],
      ctaText: 'EXPLORE PROGRAMS',
      metrics: '3x Endurance'
    },
    {
      brand: 'IronCore Strength & Muscle Hub',
      tagline: 'Get Fit. Stay Strong.',
      category: 'Bodybuilding & Powerlifting',
      badge: 'HAMMER STRENGTH',
      primaryColor: [185, 28, 28], // dark red
      heroText: 'State-of-the-Art Free Weights, Dumbbells up to 60kg & Competition Prep Mentorship',
      features: ['Personal Coaching Rates', 'Diet Macro Chart', 'Gym Locker & Steam Info', 'Instant Trial Booking'],
      ctaText: 'START TRAINING TODAY',
      metrics: '100% Results'
    },
    {
      brand: 'Knockout Boxing & MMA Gym',
      tagline: 'Discipline. Focus. Dominate.',
      category: 'Boxing & Martial Arts',
      badge: 'FIGHT READY',
      primaryColor: [217, 119, 6], // amber / combat
      heroText: 'Heavy Bag Stations, Full Size Boxing Ring, Kickboxing & Self-Defense Classes',
      features: ['Beginner Boxing Batches', 'Sparring Safety Standards', 'Trainer Championship Badges', '1-Click WhatsApp Join'],
      ctaText: 'GET GLOVES & TRAIN',
      metrics: 'All Age Groups'
    },
    {
      brand: 'Peak Fitness & Wellness Studio',
      tagline: 'Become the Best Version of Yourself',
      category: 'Fitness & Aerobics',
      badge: 'GROUP CARDIO',
      primaryColor: [37, 99, 235], // bright athletic blue
      heroText: 'Zumba, Spinning Cycle Studio, Power Yoga & Friendly Community Atmosphere',
      features: ['Weekly Group Class Calendar', 'Couple Membership Discounts', 'Personal Locker Facility', 'Google Reviews 4.9'],
      ctaText: 'VIEW CLASS SCHEDULE',
      metrics: '40+ Classes/Wk'
    },
    {
      brand: 'Iron District Fitness Arena',
      tagline: 'Built Different. Discipline Today.',
      category: 'Hardcore Gym',
      badge: 'PRO EQUIPMENT',
      primaryColor: [24, 24, 27], // zinc black
      heroText: 'Rowers, Ski-Ergs, Eleiko Barbells & Dedicated Deadlift Jack Platforms',
      features: ['Open 24/7 RFID Access', 'Student Discount Pass', 'Transformation Case Studies', 'WhatsApp Quick Contact'],
      ctaText: 'JOIN IRON DISTRICT',
      metrics: 'Zero Crowding'
    },
    {
      brand: 'StrongHive Fitness Community',
      tagline: 'Train Hard. Stay Focused.',
      category: 'Functional Fitness',
      badge: 'MOTIVATION FIRST',
      primaryColor: [194, 65, 12], // rust orange
      heroText: 'Dynamic Kettlebell Circuits, Battle Ropes, Plyometrics & Core Conditioning',
      features: ['Daily Workout of the Day (WOD)', 'Coach Led Group Warmups', 'Body Composition Scan', 'Monthly Challenge Board'],
      ctaText: 'JOIN THE PACK',
      metrics: '95% Consistency'
    },
    {
      brand: 'Deine Freiheit Fitness Studio',
      tagline: 'Fitness Studio for Healthy Living',
      category: 'Boutique Gym',
      badge: 'CLEAN & AIRY',
      primaryColor: [14, 116, 144], // ocean teal
      heroText: 'Spacious Wooden Floor Workout Zones, Cardio Theater & Certified Physiotherapists',
      features: ['Post-Injury Rehab Workouts', 'Senior Citizen Fitness Batches', 'Direct Consultation Form', 'Dietitian Desk'],
      ctaText: 'SCHEDULE CONSULT',
      metrics: 'Safe & Hygienic'
    },
    {
      brand: 'FitBuilt Functional Club',
      tagline: 'Strong Body. Strong Life.',
      category: 'Strength Academy',
      badge: 'TRANSFORM FAST',
      primaryColor: [220, 38, 38], // power red
      heroText: 'Guaranteed 90-Day Fat Loss & Muscle Building Roadmap with Daily Accountability',
      features: ['Before / After Success Wall', 'Direct WhatsApp Onboarding', 'Supplements & Protein Bar', 'Free Trial Pass'],
      ctaText: 'START 90-DAY JOURNEY',
      metrics: '3,200+ Transformed'
    }
  ];

  gymSites.forEach((site, i) => {
    renderWebsiteSlide(doc, site, 'Gym & Fitness', i + 1, totalPages);
  });

  // Pages 11-15: Additional gym variations from user's PDF
  const moreGyms = [
    { brand: 'ImperialRed Fitness Coaching', tagline: 'James Clark Certified Master Trainer', cat: '1-on-1 Coaching', color: [185, 28, 28] as [number, number, number] },
    { brand: 'Erpliar Sports Gym', tagline: 'Push Limits. Build Pure Power.', cat: 'Power Training', color: [30, 41, 59] as [number, number, number] },
    { brand: 'Stronger Fitness Club', tagline: 'Stronger Today. Better Tomorrow.', cat: 'Health Club', color: [234, 88, 12] as [number, number, number] },
    { brand: 'Gym Unisex Hardcore Studio', tagline: 'Train Hard. Stay Strong. Be Unstoppable.', cat: 'Unisex Gym', color: [22, 101, 52] as [number, number, number] },
    { brand: 'FitZone Cardio & Strength', tagline: 'Build Strength. Build Unshakable Confidence.', cat: 'Cardio & Strength', color: [2, 132, 199] as [number, number, number] }
  ];

  moreGyms.forEach((extra, idx) => {
    const siteObj: WebsiteShowcase = {
      brand: extra.brand,
      tagline: extra.tagline,
      category: extra.cat,
      badge: 'FREE TRIAL TODAY',
      primaryColor: extra.color,
      heroText: `${extra.brand} - High-conversion fitness club website capturing 5 to 10 free trial pass walk-in leads daily.`,
      features: ['Free 1-Day Trial Form', 'Batch Timing Schedule', 'Trainer Rate Cards', 'Direct WhatsApp Follow-up'],
      ctaText: 'CLAIM WORKOUT PASS',
      metrics: 'High Conversion'
    };
    renderWebsiteSlide(doc, siteObj, 'Gym & Fitness', 11 + idx, totalPages);
  });

  // Page 16: Color Combinations (24 circles)
  renderColorCombinationsPage(doc, 'Gym & Fitness', 16, totalPages);

  // Page 17: Aesthetic Website Color Combos Creators Should Try
  renderAestheticCombosPage(doc, 'Gym & Fitness', 17, totalPages);

  const pdfPath = path.join(SAMPLES_DIR, 'gym-fitness-sample.pdf');
  fs.writeFileSync(pdfPath, Buffer.from(doc.output('arraybuffer')));
  console.log('Generated gym-fitness-sample.pdf successfully!');
}

// -------------------------------------------------------------
// CATEGORY 5: TUITION CLASS & SCHOOL PDF (from user's School Attachment)
// -------------------------------------------------------------
function buildTuitionSchoolPdf() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const totalPages = 19;

  const schoolSites: WebsiteShowcase[] = [
    {
      brand: 'Pinnacle Science & Commerce Academy',
      tagline: 'Learn From Top IIT & CA Mentors. 95%+ Board Results.',
      category: 'Tuition & Coaching Classes',
      badge: 'BATCH SIZE: 25 STUDENTS',
      primaryColor: [79, 70, 229], // indigo
      heroText: 'Small Batches, Weekly Test Series, Doubt Clearing Sessions & Hall of Fame Toppers',
      features: ['Book 2-Day Free Trial Class', 'Course & Batch Timetable Filter', 'Test Marks & Answer Key Portal', 'Direct WhatsApp Counseling'],
      ctaText: 'BOOK FREE DEMO CLASS',
      metrics: '260+ Enrollments'
    },
    {
      brand: 'Little Blooms International Play School',
      tagline: 'Where Curiosity Blooms & Happy Childhood Begins',
      category: 'Play School & Daycare',
      badge: 'ADMISSIONS OPEN 2026',
      primaryColor: [22, 163, 74], // green
      heroText: 'Montessori Experiential Learning, Loving Certified Educators & Live CCTV Parent Feed',
      features: ['Schedule Campus Visit Tour', 'Programs by Age (Toddler, Nursery, KG)', 'Safety & Hygiene Guarantee', 'Download Prospectus Form'],
      ctaText: 'SCHEDULE CAMPUS TOUR',
      metrics: '100% Seats Filled'
    },
    {
      brand: 'Eduker Global University',
      tagline: 'Together We Will Explore New Horizons',
      category: 'Higher Education',
      badge: 'TOP RANKED 2025',
      primaryColor: [30, 64, 175], // blue
      heroText: 'World-Class Research Facilities, Industry Recognized Degrees & 100% Placement Record',
      features: ['Online Application Portal', 'Faculty Directory & Research', 'Campus Life & Virtual Tour', 'Scholarship Calculator'],
      ctaText: 'APPLY FOR ADMISSION',
      metrics: '94% Placement'
    },
    {
      brand: 'Educrat Online Learning & EdTech',
      tagline: 'Learn New Skills Online With Top Educators',
      category: 'Online EdTech & Skill Courses',
      badge: 'SELF PACED COURSES',
      primaryColor: [217, 119, 6], // warm amber
      heroText: 'Master Coding, AI, UI/UX, Data Science & Finance with Real Portfolio Projects',
      features: ['Live Interactive Classes', 'Certificate of Completion', 'Doubt Solving Forum', 'Free Starter Modules'],
      ctaText: 'EXPLORE ALL COURSES',
      metrics: '50,000+ Students'
    },
    {
      brand: 'Oxford Grace International School',
      tagline: 'Inspiring Minds. Shaping Tomorrow Leaders.',
      category: 'K-12 International School',
      badge: 'CBSE & CAMBRIDGE',
      primaryColor: [15, 23, 42], // oxford navy
      heroText: 'Holistic Academic Rigor, Olympic Size Sports Complex & Robotics STEM Labs',
      features: ['Online Admission Form', 'Annual Academic Calendar', 'Parent Portal App Info', 'Bus Route & Tracking'],
      ctaText: 'ENROLL YOUR CHILD',
      metrics: '25+ Yrs Legacy'
    },
    {
      brand: 'Etech Skills Institute',
      tagline: 'Develop Your Skills in a Modern & Unique Way',
      category: 'Professional Academy',
      badge: 'CAREER ACCELERATOR',
      primaryColor: [147, 51, 234], // purple
      heroText: 'Hands-on Software Development, Digital Marketing & Cloud Computing Bootcamps',
      features: ['Job Guarantee Support', 'Interview Mock Sessions', 'Flexible Weekend Batches', 'Talk to Career Counselor'],
      ctaText: 'DOWNLOAD BROCHURE',
      metrics: '850+ Hiring Partners'
    },
    {
      brand: 'Northfield Prestigious University',
      tagline: 'A Legacy of Excellence. A Future of Impact.',
      category: 'University & Research',
      badge: 'GLOBAL ALUMNI',
      primaryColor: [185, 28, 28], // crimson university
      heroText: 'Distinguished Faculty, Global Student Exchange Programs & State-of-the-Art Labs',
      features: ['Scholarship Grant Portal', 'Departmental Programs', 'Campus Dormitory Tour', 'Direct Admissions Office'],
      ctaText: 'APPLY ONLINE',
      metrics: 'Top 50 Worldwide'
    },
    {
      brand: 'TutorGo Free Online Academy',
      tagline: 'Free Online Courses from Certified Experts',
      category: 'E-Learning Platform',
      badge: 'OPEN ACCESS',
      primaryColor: [13, 148, 136], // teal
      heroText: 'Accessible High-Quality School Curriculum & Competitive Exam Video Lessons',
      features: ['NCERT Solutions PDF', 'Chapter Practice Tests', 'Leaderboard & Badges', 'Ask a Teacher Helpdesk'],
      ctaText: 'START LEARNING FREE',
      metrics: '1,000+ Video Lessons'
    },
    {
      brand: 'Sunshine Public School & High School',
      tagline: 'Learn. Grow. Succeed.',
      category: 'CBSE Affiliated School',
      badge: 'SAFE ENVIRONMENT',
      primaryColor: [202, 138, 4], // gold
      heroText: 'Nurturing Academic Excellence, Performing Arts, Karate, Swimming & Ethics',
      features: ['Admission Eligibility Criteria', 'Fee Structure Transparency', 'Topper Scoreboard', 'Schedule a Visit'],
      ctaText: 'ADMISSION ENQUIRY',
      metrics: '100% Board Results'
    },
    {
      brand: 'Bright Future International School',
      tagline: 'Inspiring Minds. Shaping Bright Futures.',
      category: 'Global Academy',
      badge: 'SMART CLASSROOMS',
      primaryColor: [2, 132, 199], // sky blue
      heroText: 'Digital Interactive Smart Boards, Language Immersion & Eco-Friendly Green Campus',
      features: ['Virtual 360 Campus Tour', 'Extracurricular Clubs', 'Student Health & Nutrition', 'Instant WhatsApp Enquiry'],
      ctaText: 'VISIT CAMPUS TODAY',
      metrics: '1,500+ Students'
    }
  ];

  schoolSites.forEach((site, i) => {
    renderWebsiteSlide(doc, site, 'Tuition & School', i + 1, totalPages);
  });

  // Pages 11-17: Additional tuition & education variations from user's PDF
  const moreSchools = [
    { brand: 'Medzoon NEET Medical Coaching', tagline: 'Master PCB with Top Doctors & Kota Mentors', cat: 'Medical Coaching', color: [16, 185, 129] as [number, number, number] },
    { brand: 'Livi Best Online Institute', tagline: 'The Worlds Best Online Education Platform', cat: 'Virtual Classroom', color: [79, 70, 229] as [number, number, number] },
    { brand: 'Kingster University Campus', tagline: 'The Best University of The State', cat: 'State University', color: [15, 34, 64] as [number, number, number] },
    { brand: 'E-Pora Smart Classrooms', tagline: 'For Every Student, Every Classroom', cat: 'School Solutions', color: [13, 148, 136] as [number, number, number] },
    { brand: 'EducateX Grow Your Learning', tagline: 'Quality Education for Future Innovators', cat: 'Coaching Institute', color: [217, 119, 6] as [number, number, number] },
    { brand: 'Alex Design & UX Academy', tagline: 'UI & UX Design Mentorship for Beginners', cat: 'Design Bootcamp', color: [225, 29, 72] as [number, number, number] },
    { brand: 'Eventure Career Institute', tagline: 'Empowering Ideas Into Real Growth & Employment', cat: 'Career Academy', color: [37, 99, 235] as [number, number, number] }
  ];

  moreSchools.forEach((extra, idx) => {
    const siteObj: WebsiteShowcase = {
      brand: extra.brand,
      tagline: extra.tagline,
      category: extra.cat,
      badge: 'DEMO CLASS AVAILABLE',
      primaryColor: extra.color,
      heroText: `${extra.brand} - Comprehensive educational website designed to drive admissions and demo registrations.`,
      features: ['2-Day Free Trial Booking', 'Batch Timetable & Syllabus', 'Hall of Fame Wall', 'WhatsApp Helpline Desk'],
      ctaText: 'REGISTER FOR DEMO',
      metrics: 'Admissions Open'
    };
    renderWebsiteSlide(doc, siteObj, 'Tuition & School', 11 + idx, totalPages);
  });

  // Page 18: Color Combinations (24 circles)
  renderColorCombinationsPage(doc, 'Tuition & School', 18, totalPages);

  // Page 19: Aesthetic Website Color Combos Creators Should Try
  renderAestheticCombosPage(doc, 'Tuition & School', 19, totalPages);

  const pdfPath = path.join(SAMPLES_DIR, 'tuition-school-sample.pdf');
  fs.writeFileSync(pdfPath, Buffer.from(doc.output('arraybuffer')));
  console.log('Generated tuition-school-sample.pdf successfully!');
}

// -------------------------------------------------------------
// CATEGORY 6: PORTFOLIO & DIGITAL CREATIVE PDF (from user's Portfolio Attachment)
// -------------------------------------------------------------
function buildPortfolioPdf() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const totalPages = 22;

  const portfolioSites: WebsiteShowcase[] = [
    {
      brand: 'Alex Morgan Digital Creative & UI/UX',
      tagline: 'Designing Solutions, Not Just Visuals',
      category: 'UI/UX & Product Designer',
      badge: 'AVAILABLE FOR FREELANCE',
      primaryColor: [24, 24, 27], // modern dark
      heroText: 'Crafting High-Converting Digital Experiences, Design Systems & Next-Gen Interfaces',
      features: ['Selected Case Studies', 'Interactive Figma Prototypes', 'Design System Library', 'Direct 1-Click Consultation'],
      ctaText: 'VIEW FEATURED WORK',
      metrics: '8+ Yrs Experience'
    },
    {
      brand: 'Sania Graphics & Brand Identity',
      tagline: 'Designing Brands that People Remember',
      category: 'Brand Designer',
      badge: 'AWARD WINNING',
      primaryColor: [225, 29, 72], // vibrant ruby
      heroText: 'Memorable Logos, Packaging Design, Vector Illustrations & Complete Brand Kits',
      features: ['Logo Portfolio Gallery', 'Packaging Showcase', 'Client Testimonial Videos', 'Get Custom Design Quote'],
      ctaText: 'START A PROJECT',
      metrics: '120+ Brands'
    },
    {
      brand: 'Inbio Professional Full-Stack Developer',
      tagline: 'Jone Lee Senior Software Engineer',
      category: 'Full-Stack Coder',
      badge: 'CLEAN CODE & SPEED',
      primaryColor: [37, 99, 235], // tech blue
      heroText: 'Building Fast, Scalable Web Apps with React, Node.js, TypeScript & Cloud APIs',
      features: ['Live GitHub Repositories', 'Interactive Web Demos', 'Tech Stack Badges', 'Book a 15-Min Intro Call'],
      ctaText: 'HIRE DEVELOPER',
      metrics: '99.9% Uptime'
    },
    {
      brand: 'Maria Novikova Clinical Psychologist',
      tagline: 'Compassionate Therapy for Inner Peace & Clarity',
      category: 'Therapy & Psychology',
      badge: 'CONFIDENTIAL & SAFE',
      primaryColor: [84, 110, 89], // sage calming green
      heroText: 'Individual Therapy, Stress Relief, Cognitive Behavioral Tools & Online Consultations',
      features: ['Private Session Booking', 'Specialization Breakdown', 'Client FAQ & Ethics', 'Secure WhatsApp Booking'],
      ctaText: 'BOOK THERAPY SESSION',
      metrics: 'Certified Psy.D'
    },
    {
      brand: 'Creatix Digital Agency',
      tagline: 'Empowering Brands Through Creative Solutions',
      category: 'Digital Agency',
      badge: 'FULL SERVICE',
      primaryColor: [147, 51, 234], // purple
      heroText: 'Web Development, Performance SEO, Paid Ads Strategy & High-Impact Copywriting',
      features: ['ROI Case Studies (+340%)', 'Service Package Estimator', 'Client Roster Logos', 'Book Strategy Audit'],
      ctaText: 'SCHEDULE STRATEGY CALL',
      metrics: '₹40M+ Revenue'
    },
    {
      brand: 'Markivo Influencer Marketing Solutions',
      tagline: 'Smart Ideas For Modern Brands',
      category: 'Marketing Agency',
      badge: 'VIRAL REACH',
      primaryColor: [234, 88, 12], // orange
      heroText: 'Connecting DTC Brands with Top Influencers for Authentic High-Converting Campaigns',
      features: ['Influencer Database Access', 'Campaign Analytics Dashboard', 'Case Studies & Metrics', 'Get Pitch Deck PDF'],
      ctaText: 'LAUNCH CAMPAIGN',
      metrics: '50M+ Impressions'
    },
    {
      brand: 'Shu Huan Minimalist Typography & Art',
      tagline: 'Art of Visual Precision & Editorial Design',
      category: 'Graphic Artist',
      badge: 'FEATURED ON BEHANCE',
      primaryColor: [15, 23, 42], // slate
      heroText: 'Minimalist Books, Editorial Magazines, Typographic Posters & Exhibition Identity',
      features: ['High-Res Print Portfolio', 'Typeface Specimen Sheets', 'Client Reviews', 'Hire for Editorial'],
      ctaText: 'EXPLORE ARCHIVE',
      metrics: 'Global Features'
    },
    {
      brand: 'Agenxis Enterprise Tech Solutions',
      tagline: 'Transform Challenges into Digital Opportunities',
      category: 'IT Consulting',
      badge: 'ENTERPRISE LEVEL',
      primaryColor: [2, 132, 199], // sky blue
      heroText: 'Cloud Migration, AI Automation, Custom ERP Systems & Cybersecurity Audits',
      features: ['Whitepapers & Architecture', 'Client Enterprise Logos', 'Consultant Team Roster', 'Request Proposal (RFP)'],
      ctaText: 'REQUEST PROPOSAL',
      metrics: 'Fortune 500 Trusted'
    },
    {
      brand: 'Mariana Interactive Web & Motion Designer',
      tagline: 'Bringing Web Interfaces to Life with Motion',
      category: 'Motion & Web Art',
      badge: 'THREE.JS & SHADERS',
      primaryColor: [219, 39, 119], // pink
      heroText: '3D Web Experiences, Smooth Micro-Interactions & Award-Winning Creative Code',
      features: ['Interactive Playground', 'Awwwards Winning Sites', 'Tech Stack & Tools', 'Available for Contract'],
      ctaText: 'PLAY EXPERIMENTS',
      metrics: 'Awwwards Site of Day'
    },
    {
      brand: 'Tahira Freelance Brand & Web Consultant',
      tagline: 'Hay! I am Tahira. I Design for Human Impact.',
      category: 'Freelancer Portfolio',
      badge: 'TOP RATED UPWORK',
      primaryColor: [202, 138, 4], // gold
      heroText: 'Helping Startups & Local Businesses Launch Converting Websites in Under 7 Days',
      features: ['Fixed Price Package List', 'Direct WhatsApp Chat', 'Client Video Feedback', 'Quick Project Inquiry'],
      ctaText: 'WORK WITH ME',
      metrics: '100% On-Time'
    }
  ];

  portfolioSites.forEach((site, i) => {
    renderWebsiteSlide(doc, site, 'Portfolio & Agency', i + 1, totalPages);
  });

  // Pages 11-20: Additional creative portfolio variations from user's PDF
  const morePortfolios = [
    { brand: 'AI Consulting Services Hub', tagline: 'Empowering Businesses with Cutting-Edge AI Models', cat: 'AI Strategy', color: [15, 23, 42] as [number, number, number] },
    { brand: 'Incomum Minimalist Design Studio', tagline: 'Simple, Timeless & Functional Brand Architecture', cat: 'Studio Portfolio', color: [84, 110, 89] as [number, number, number] },
    { brand: 'Koozina Culinary Chef Portfolio', tagline: 'Learn to Cook Like a Pro from Top Masterchefs', cat: 'Culinary Brand', color: [194, 65, 12] as [number, number, number] },
    { brand: 'Alifilos Developer Portfolio', tagline: 'Wilkerson Hardin Full-Stack Web Engineer', cat: 'Software Dev', color: [37, 99, 235] as [number, number, number] },
    { brand: 'Innovative IT Solutions UI/UX', tagline: 'Website UI Design Engineered for Enterprise Growth', cat: 'Product Design', color: [14, 116, 144] as [number, number, number] },
    { brand: 'Saira About Me Freelance Studio', tagline: 'Websites that Make an Unforgettable Impression', cat: 'Freelance Web', color: [225, 29, 72] as [number, number, number] },
    { brand: 'Mark Davis Experience Architect', tagline: 'I Design Experiences That Drive Tangible Impact', cat: 'Senior Product Lead', color: [24, 24, 27] as [number, number, number] },
    { brand: 'Digital Designer Creative Collective', tagline: 'Functional, Beautiful & Delightful Digital Craft', cat: 'Creative Studio', color: [147, 51, 234] as [number, number, number] },
    { brand: 'VentureCraft Startup Studio', tagline: 'From Napkin Sketch to Market-Leading Tech Brand', cat: 'Startup Incubator', color: [79, 70, 229] as [number, number, number] },
    { brand: 'PixelPerfect Mobile App Designer', tagline: 'iOS & Android Native Mobile App Experiences', cat: 'Mobile UX', color: [2, 132, 199] as [number, number, number] }
  ];

  morePortfolios.forEach((extra, idx) => {
    const siteObj: WebsiteShowcase = {
      brand: extra.brand,
      tagline: extra.tagline,
      category: extra.cat,
      badge: 'AVAILABLE FOR HIRE',
      primaryColor: extra.color,
      heroText: `${extra.brand} - High-impact digital portfolio showcasing verified client results and case studies.`,
      features: ['Selected Case Studies', 'Live Prototype Links', 'Client Testimonial Quotes', '1-Click WhatsApp Hire'],
      ctaText: 'START CONVERSATION',
      metrics: 'Verified Creative'
    };
    renderWebsiteSlide(doc, siteObj, 'Portfolio & Agency', 11 + idx, totalPages);
  });

  // Page 21: Color Combinations (24 circles)
  renderColorCombinationsPage(doc, 'Portfolio & Agency', 21, totalPages);

  // Page 22: Aesthetic Website Color Combos Creators Should Try
  renderAestheticCombosPage(doc, 'Portfolio & Agency', 22, totalPages);

  const pdfPath = path.join(SAMPLES_DIR, 'portfolio-sample.pdf');
  fs.writeFileSync(pdfPath, Buffer.from(doc.output('arraybuffer')));
  console.log('Generated portfolio-sample.pdf successfully!');
}

function runAll() {
  console.log('Building all 6 requested PDFs from user attachments...');
  buildCafePdf();
  buildClinicPdf();
  buildBeautyParlourPdf();
  buildGymPdf();
  buildTuitionSchoolPdf();
  buildPortfolioPdf();
  console.log('All 6 PDFs generated and stored in public/samples/!');
}

runAll();
