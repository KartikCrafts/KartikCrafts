import React, { useState } from 'react';
import { IndustryCategory, ProjectItem } from './types';
import { projectsData } from './data/projectsData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { SpeedOptimizationSection } from './components/SpeedOptimizationSection';
import { AdminPanelSpotlight } from './components/AdminPanelSpotlight';
import { CompetitorLossAuditor } from './components/CompetitorLossAuditor';
import { PricingSection } from './components/PricingSection';
import { RoiCalculator } from './components/RoiCalculator';
import { SatisfactionGuarantee } from './components/SatisfactionGuarantee';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { LiveDemoModal } from './components/LiveDemoModal';
import { HireMeModal } from './components/HireMeModal';
import { ExitIntentModal } from './components/ExitIntentModal';
import { LiveUrgencyTicker } from './components/LiveUrgencyTicker';
import { MessageSquare, PhoneCall, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<IndustryCategory>('all');
  const [activeLiveDemoProject, setActiveLiveDemoProject] = useState<ProjectItem | null>(null);
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [hireModalPlan, setHireModalPlan] = useState<'classic' | 'dynamic'>('dynamic');
  const [hireModalBusinessType, setHireModalBusinessType] = useState('Cafe & Coffee Shop');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenHireModal = (plan: 'classic' | 'dynamic' = 'dynamic', businessType?: string) => {
    setHireModalPlan(plan);
    if (businessType) {
      setHireModalBusinessType(businessType);
    }
    setHireModalOpen(true);
  };

  const handleGetWebsiteFromProject = (project: ProjectItem) => {
    setHireModalPlan(project.packageType);
    setHireModalBusinessType(project.industryLabel);
    setHireModalOpen(true);
  };

  const handleHireFromDemoModal = (project: ProjectItem) => {
    setActiveLiveDemoProject(null);
    handleGetWebsiteFromProject(project);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] font-['DM_Sans',sans-serif] selection:bg-[#8C4A27] selection:text-white relative">
      
      {/* Floating Ambient Background Lights */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-[#8C4A27]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#8C4A27]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Main Navigation Header */}
      <Header
        onOpenHireModal={handleOpenHireModal}
        onScrollToSection={scrollToSection}
      />

      <main>
        {/* 1. Hero Section with Price Offer Badges & Quick Business Chips */}
        <Hero
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onOpenHireModal={handleOpenHireModal}
          onScrollToSection={scrollToSection}
        />

        {/* 2. Zero-Bottleneck Traffic Jam Remover & Turbo 0.38s Speed Engine */}
        <SpeedOptimizationSection
          onOpenHireModal={() => handleOpenHireModal()}
        />

        {/* 3. Interactive Business Showcase with Multi-Dimensional Filters & Live Demos */}
        <ProjectShowcase
          projects={projectsData}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenLiveDemo={(project) => setActiveLiveDemoProject(project)}
          onGetWebsite={handleGetWebsiteFromProject}
        />

        {/* 4. Client Admin Super-Dashboard (Orders, Price Editor, Google Reviews, CRM, 0% Commission) */}
        <AdminPanelSpotlight
          onOpenHireModal={(plan) => handleOpenHireModal(plan)}
        />

        {/* 5. Competitor Inaction Loss Auditor (Dark Psychology / Loss Aversion) */}
        <CompetitorLossAuditor
          onOpenHireModal={() => handleOpenHireModal()}
        />

        {/* 6. Special Pricing Section with Strikethrough Discounts (₹15k & ₹40k) & FAQs */}
        <PricingSection
          onOpenHireModal={handleOpenHireModal}
          onScrollToSection={scrollToSection}
        />

        {/* 7. Interactive ROI & Business Revenue Calculator */}
        <RoiCalculator
          onOpenHireModal={handleOpenHireModal}
        />

        {/* 8. 100% Customer Satisfaction Guarantee & Risk-Free Promise */}
        <SatisfactionGuarantee />

        {/* 9. 5-Step Streamlined Delivery Process */}
        <ProcessSection
          onOpenHireModal={() => handleOpenHireModal()}
        />

        {/* 10. Verified Local Business Owner Reviews & Social Proof */}
        <TestimonialsSection />
      </main>

      {/* Footer with Business Links & Trust Seals */}
      <Footer
        onSelectCategory={setSelectedCategory}
        onOpenHireModal={handleOpenHireModal}
        onScrollToSection={scrollToSection}
      />

      {/* Interactive In-Browser Live Website Simulator Modal */}
      <LiveDemoModal
        project={activeLiveDemoProject}
        onClose={() => setActiveLiveDemoProject(null)}
        onHireForThisProject={handleHireFromDemoModal}
      />

      {/* High-Converting Hire Me / Instant Quote Modal */}
      <HireMeModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        initialPlan={hireModalPlan}
        initialBusinessType={hireModalBusinessType}
      />

      {/* Exit-Intent Persuasion Modal (Locks ₹5,000 Coupon + Free Blueprint on exit attempt) */}
      <ExitIntentModal
        onOpenHireModal={handleOpenHireModal}
      />

      {/* Live Social Proof & Urgency Notification Ticker */}
      <LiveUrgencyTicker
        onOpenHireModal={() => handleOpenHireModal()}
      />

      {/* Floating Fast WhatsApp Call-to-Action Bar (Mobile / Desktop) */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <a
          id="floating-whatsapp-trigger"
          href="https://wa.me/917863076114?text=Hi%20Kartik%2C%20I%20want%20to%20hire%20you%20to%20build%20a%20website%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 sm:px-4 sm:py-3 rounded-full sm:rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-emerald-900/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 group"
          title="Chat on WhatsApp (+91 78630 76114)"
        >
          <MessageSquare className="w-5 h-5 text-white fill-white" />
          <span className="hidden sm:inline">WhatsApp (+91 78630 76114)</span>
        </a>
      </div>

    </div>
  );
}

