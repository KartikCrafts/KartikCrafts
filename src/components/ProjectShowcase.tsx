import React, { useState, useMemo, useRef } from 'react';
import { ProjectItem, IndustryCategory, FeatureFilter, PackageType } from '../types';
import { BusinessCategoryBar } from './BusinessCategoryBar';
import { ProjectCard } from './ProjectCard';
import { Sparkles, RotateCcw, AlertCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ProjectShowcaseProps {
  projects: ProjectItem[];
  selectedCategory: IndustryCategory;
  onSelectCategory: (category: IndustryCategory) => void;
  onOpenLiveDemo: (project: ProjectItem) => void;
  onGetWebsite: (project: ProjectItem) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  selectedCategory,
  onSelectCategory,
  onOpenLiveDemo,
  onGetWebsite
}) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureFilter>('all');
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxBg = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  // Filter projects based on multi-criteria
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      if (selectedCategory !== 'all' && project.industry !== selectedCategory) {
        return false;
      }

      // Package filter
      if (selectedPackage !== 'all' && project.packageType !== selectedPackage) {
        return false;
      }

      // Feature filter
      if (selectedFeature !== 'all') {
        const featMap: Record<FeatureFilter, (p: ProjectItem) => boolean> = {
          all: () => true,
          whatsapp_booking: (p) => p.keyFeatures.some(f => f.toLowerCase().includes('whatsapp')),
          table_booking: (p) => p.industry === 'restaurant' || p.industry === 'cafe' || p.keyFeatures.some(f => f.toLowerCase().includes('table') || f.toLowerCase().includes('reservation')),
          online_menu: (p) => p.keyFeatures.some(f => f.toLowerCase().includes('menu') || f.toLowerCase().includes('rate card') || f.toLowerCase().includes('catalog')),
          doctor_appointment: (p) => p.industry === 'clinic' || p.keyFeatures.some(f => f.toLowerCase().includes('appointment') || f.toLowerCase().includes('doctor')),
          admin_panel: (p) => p.hasAdminPanel,
          course_admission: (p) => p.industry === 'school' || p.industry === 'tuition',
          service_estimator: (p) => p.industry === 'garage' || p.keyFeatures.some(f => f.toLowerCase().includes('estimator') || f.toLowerCase().includes('customizer')),
          photo_gallery: () => true
        };

        if (!featMap[selectedFeature](project)) {
          return false;
        }
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = project.title.toLowerCase().includes(q);
        const matchDesc = project.description.toLowerCase().includes(q);
        const matchTagline = project.tagline.toLowerCase().includes(q);
        const matchIndustry = project.industryLabel.toLowerCase().includes(q);
        const matchCity = project.clientQuote?.city.toLowerCase().includes(q) || false;
        const matchTag = project.tags.some(t => t.toLowerCase().includes(q));

        if (!matchTitle && !matchDesc && !matchTagline && !matchIndustry && !matchCity && !matchTag) {
          return false;
        }
      }

      return true;
    });
  }, [projects, selectedCategory, selectedFeature, selectedPackage, searchQuery]);

  const handleResetFilters = () => {
    onSelectCategory('all');
    setSelectedFeature('all');
    setSelectedPackage('all');
    setSearchQuery('');
  };

  return (
    <section 
      ref={containerRef}
      id="projects-section" 
      className="py-12 sm:py-16 md:py-24 relative overflow-hidden"
    >
      {/* Parallax background glow */}
      <motion.div 
        style={{ y: parallaxBg }}
        className="absolute top-1/3 left-10 w-72 h-72 bg-[#8C4A27]/5 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-3 px-1"
        >
          <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-[#8C4A27]/10 border border-[#8C4A27]/25 text-[#8C4A27] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#8C4A27]" />
            <span>Interactive Portfolio & Live Demos</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] font-['Outfit'] tracking-tight leading-tight sm:leading-[1.15] break-words">
            Select Your Business Industry & Experience the Live Website
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#57534E]">
            Every demo is tailored to solve specific business problems—whether that is eliminating food aggregator commissions, filling doctor appointment schedules, or booking salon makeover slots.
          </p>
        </motion.div>

        {/* Filters Bar */}
        <BusinessCategoryBar
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
          selectedFeature={selectedFeature}
          onSelectFeature={setSelectedFeature}
          selectedPackage={selectedPackage}
          onSelectPackage={setSelectedPackage}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalResults={filteredProjects.length}
        />

        {/* Projects Grid or Empty State */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 pt-2 sm:pt-4">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenLiveDemo={onOpenLiveDemo}
                onGetWebsite={onGetWebsite}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 px-4 bg-white rounded-2xl sm:rounded-3xl border border-[#E0D5C7] space-y-4 shadow-xs">
            <AlertCircle className="w-12 h-12 text-[#8C4A27] mx-auto" />
            <h3 className="text-lg sm:text-xl font-bold text-[#1C1917]">No exact matching demo found</h3>
            <p className="text-xs sm:text-sm text-[#57534E] max-w-md mx-auto">
              Don't worry! I build custom tailored websites for ANY business type. Let's discuss your exact requirements.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F5EFEB] text-[#1C1917] text-xs font-bold border border-[#D5C6B3] transition-colors"
            >
              <RotateCcw className="w-4 h-4 text-[#8C4A27]" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
