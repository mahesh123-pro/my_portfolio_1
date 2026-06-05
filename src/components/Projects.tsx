import { useState } from 'react';
import { ExternalLink, ChevronDown, FolderOpen } from 'lucide-react';
import { portfolioData, type Project } from '../data';

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const { projects, additionalWork } = portfolioData;

  return (
    <section id="projects" className="py-24 bg-neutral-50/50 border-y border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-secondary font-mono">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">Flagship Projects</h2>
          <p className="text-sm text-neutral-500 max-w-md mt-1">
            A curated selection of cloud-native systems, enterprise web apps, and full-stack solutions.
          </p>
        </div>

        {/* Flagship Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: Project) => (
            <div 
              key={project.id}
              className="group bg-white border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="aspect-video w-full overflow-hidden bg-neutral-100 border-b border-neutral-150 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Failback for project image if missing
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1 text-left">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-neutral-50 border border-neutral-250 text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-base font-bold text-neutral-900 leading-snug group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed flex-1">
                  {project.desc}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-neutral-100">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-xs font-bold text-secondary hover:text-neutral-900 transition-colors flex items-center gap-1"
                    >
                      Visit Platform
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {!project.liveUrl && (
                    <span className="text-xs font-semibold text-neutral-400">
                      Cloud Architecture Diagram Only
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Work (Collapsible) */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <div className="flex flex-col gap-2 mb-8 text-left">
            <h3 className="text-lg font-bold text-neutral-900 tracking-tight flex items-center gap-2">
              <FolderOpen className="w-4 h-4 text-secondary" />
              Secondary Work &amp; Labs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Show first 3 by default, and rest if expanded */}
            {additionalWork.slice(0, showMore ? additionalWork.length : 3).map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-neutral-200 p-5 shadow-sm hover:border-neutral-300 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-neutral-950">{item.title}</h4>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1 mt-4">
                  {item.tags.map((t, i) => (
                    <span key={i} className="text-[9px] font-bold px-1.5 py-0.5 bg-neutral-50 border border-neutral-150 text-neutral-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* See More Work Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-white border border-neutral-200 hover:border-neutral-900 text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-neutral-900 transition-all"
            >
              {showMore ? 'Collapse List' : 'See More Work'}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
