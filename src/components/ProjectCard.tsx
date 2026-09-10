import React from 'react';
import { ProjectItem } from '../types';
import { 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Eye, 
  ArrowRight, 
  Star, 
  Zap, 
  Smartphone,
  FileDown 
} from 'lucide-react';
import { motion } from 'motion/react';
import { generateProjectSamplePdf } from '../utils/samplePdfGenerator';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenLiveDemo: (project: ProjectItem) => void;
  onGetWebsite: (project: ProjectItem) => void;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenLiveDemo,
  onGetWebsite,
  index = 0
}) => {
  const isDynamic = project.packageType === 'dynamic';

  return (
    <motion.div 
      id={`project-card-${project.id}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col bg-white border border-[#E0D5C7] hover:border-[#8C4A27] rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#2B1810]/8"
    >
      
      {/* Visual Header Image with Overlay Badges */}
      <div className="relative h-48 xs:h-52 sm:h-60 w-full overflow-hidden bg-[#1C1917]">
        <img
          src={project.heroImage}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between gap-1.5 sm:gap-2 flex-wrap">
          {/* Industry Category Pill */}
          <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E0D5C7] text-[11px] sm:text-xs font-bold text-[#1C1917] shadow-xs">
            {project.industryLabel}
          </span>

          {/* Package & Price Tag */}
          <div className="flex items-center gap-1.5">
            {isDynamic ? (
              <span className="px-2.5 py-1 rounded-full bg-[#1C1917] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#D49B5B]" />
                Dynamic (₹40k)
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full bg-[#8C4A27] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-xs">
                Classic (₹15k)
              </span>
            )}
          </div>
        </div>

        {/* Live Demo Quick Trigger Overlay Button */}
        <button
          id={`card-quick-demo-btn-${project.id}`}
          onClick={() => onOpenLiveDemo(project)}
          className="absolute bottom-2.5 sm:bottom-3 right-2.5 sm:right-3 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/95 hover:bg-[#8C4A27] text-[#1C1917] hover:text-white border border-[#D5C6B3] text-[11px] sm:text-xs font-bold transition-all shadow-md flex items-center gap-1.5 active:scale-95 group/btn"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Test Live Demo</span>
        </button>

        {/* Business Impact Metric Pill */}
        <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg bg-emerald-900/90 text-emerald-100 border border-emerald-700/60 text-[10px] sm:text-xs font-bold backdrop-blur-md">
          <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-300" />
          <span className="truncate max-w-[130px] sm:max-w-none">{project.businessImpact.metric} Result</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
        
        {/* Title & Tagline */}
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3 className="text-base sm:text-xl font-bold text-[#1C1917] font-['Outfit'] group-hover:text-[#8C4A27] transition-colors break-words">
              {project.title}
            </h3>
          </div>
          <p className="text-xs text-[#8C4A27] font-semibold mb-2 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 shrink-0" />
            <span>{project.tagline}</span>
          </p>
          <p className="text-xs text-[#57534E] leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Business Impact Explanation */}
        <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E5DDD0] text-xs text-[#44403C]">
          <span className="text-emerald-800 font-bold">Client Outcome: </span>
          {project.businessImpact.label}
        </div>

        {/* Key Features Included */}
        <div className="space-y-1.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#78716C]">
            Key Features Built-In:
          </p>
          <ul className="space-y-1">
            {project.keyFeatures.slice(0, 3).map((feat, featureIdx) => (
              <li key={featureIdx} className="flex items-start gap-1.5 text-xs text-[#44403C]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
            {project.keyFeatures.length > 3 && (
              <li className="text-[11px] text-[#8C4A27] font-medium pl-5">
                + {project.keyFeatures.length - 3} more conversion features
              </li>
            )}
          </ul>
        </div>

        {/* Admin Panel Badge if dynamic */}
        {isDynamic && (
          <div className="p-2.5 rounded-xl bg-[#F5EFEB] border border-[#D5C6B3] flex items-center justify-between text-xs text-[#5E2F16]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8C4A27]"></span>
              <span className="font-semibold text-[11px] sm:text-xs">Includes Client Admin Panel</span>
            </div>
            <span className="text-[10px] bg-[#8C4A27]/10 px-2 py-0.5 rounded font-bold text-[#8C4A27]">
              Self-Manage
            </span>
          </div>
        )}

        {/* Client Quote Preview if present */}
        {project.clientQuote && (
          <div className="pt-2 border-t border-[#E5DDD0]">
            <div className="flex items-center gap-2">
              <img
                src={project.clientQuote.avatar}
                alt={project.clientQuote.author}
                referrerPolicy="no-referrer"
                className="w-7 h-7 rounded-full object-cover border border-[#D5C6B3] shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-[#1C1917] truncate">{project.clientQuote.author}</span>
                  <span className="text-[10px] text-[#78716C] truncate">• {project.clientQuote.city}</span>
                </div>
                <div className="flex items-center gap-0.5 text-[#8C4A27]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-[#8C4A27]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Price & Primary Call to Action */}
        <div className="pt-3 border-t border-[#E5DDD0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-rose-600 line-through font-semibold">
                ₹{project.originalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] font-bold bg-rose-50 text-rose-700 px-1.5 py-0.2 rounded border border-rose-200">
                Offer
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#1C1917] font-['Outfit']">
                ₹{project.discountedPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] text-[#78716C]">all-inclusive</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              id={`card-demo-btn-${project.id}`}
              onClick={() => onOpenLiveDemo(project)}
              className="flex-1 sm:flex-none px-2.5 sm:px-3 py-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F5EFEB] text-[#1C1917] text-xs font-bold border border-[#D5C6B3] transition-colors flex items-center justify-center gap-1"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#8C4A27]" />
              <span>Demo</span>
            </button>

            <button
              id={`card-sample-btn-${project.id}`}
              onClick={(e) => {
                e.stopPropagation();
                generateProjectSamplePdf(project);
              }}
              className="flex-1 sm:flex-none px-2.5 sm:px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300 transition-colors flex items-center justify-center gap-1"
              title={`Download ${project.title} Sample PDF`}
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-600" />
              <span>PDF Sample</span>
            </button>

            <motion.button
              whileTap={{ scale: 0.96 }}
              id={`card-get-btn-${project.id}`}
              onClick={() => onGetWebsite(project)}
              className="flex-1 sm:flex-none px-3 sm:px-3.5 py-2 rounded-xl bg-[#1C1917] hover:bg-[#8C4A27] text-white text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-1"
            >
              <span>Get Website</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>

      </div>

    </motion.div>
  );
};
