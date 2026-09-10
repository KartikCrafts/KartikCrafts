export type IndustryCategory = 
  | 'all'
  | 'cafe'
  | 'restaurant'
  | 'clinic'
  | 'bakery'
  | 'gym'
  | 'salon'
  | 'school'
  | 'garage'
  | 'tuition'
  | 'tailor'
  | 'portfolio';

export type FeatureFilter = 
  | 'all'
  | 'whatsapp_booking'
  | 'table_booking'
  | 'online_menu'
  | 'doctor_appointment'
  | 'admin_panel'
  | 'course_admission'
  | 'service_estimator'
  | 'photo_gallery';

export type PackageType = 'all' | 'classic' | 'dynamic';

export interface ProjectDemoItem {
  name: string;
  category: string;
  price?: string;
  time?: string;
  timing?: string;
  desc: string;
  popular?: boolean;
  image?: string;
  spec?: string;
  batch?: string;
  fee?: string;
}

export interface ProjectReview {
  name: string;
  rating: number;
  text: string;
  date: string;
  verified?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  industry: IndustryCategory;
  industryLabel: string;
  iconName: string;
  description: string;
  heroImage: string;
  packageType: 'classic' | 'dynamic';
  originalPrice: number;
  discountedPrice: number;
  deliveryDays: number;
  hasAdminPanel: boolean;
  businessImpact: {
    metric: string;
    label: string;
  };
  keyFeatures: string[];
  clientQuote?: {
    text: string;
    author: string;
    businessName: string;
    city: string;
    rating: number;
    avatar: string;
  };
  demoData: {
    brandName: string;
    heroHeadline: string;
    heroSubheadline: string;
    badgeText: string;
    address: string;
    phone: string;
    whatsappNumber: string;
    timings: string;
    googleRating: number;
    totalReviews: number;
    accentColor: string;
    items: ProjectDemoItem[];
    offers?: { title: string; badge: string; desc: string }[];
    reviews: ProjectReview[];
    adminFeatures?: string[];
  };
  tags: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  originalPrice: number;
  discountedPrice: number;
  popular?: boolean;
  badge?: string;
  deliveryTime: string;
  targetAudience: string;
  features: {
    title: string;
    included: boolean;
    highlight?: boolean;
  }[];
  adminPanelHighlights?: string[];
  ctaText: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  businessName: string;
  businessType: string;
  city: string;
  selectedPlan: 'classic' | 'dynamic' | 'custom';
  requirements: string;
}
