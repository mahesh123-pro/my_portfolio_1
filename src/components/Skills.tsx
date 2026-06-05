import { useState } from 'react';
import { Cloud, Terminal, Monitor, Server, Database, Check } from 'lucide-react';
import { portfolioData } from '../data';

const iconMap: Record<string, any> = {
  Cloud: Cloud,
  Terminal: Terminal,
  Monitor: Monitor,
  Server: Server,
  Database: Database
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(portfolioData.skills[0].id);

  const activeData = portfolioData.skills.find(cat => cat.id === activeCategory) || portfolioData.skills[0];
  const ActiveIcon = iconMap[activeData.iconName] || Cloud;

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 text-left md:text-center md:items-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-secondary font-mono">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">The Skills Ecosystem</h2>
          <p className="text-sm text-neutral-500 max-w-md mt-1">
            Explore my core competencies categorised by system domain and technical proficiency.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          
          {/* Category Tabs (Spans 4 columns on lg) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono mb-2 block text-left">
              Select Domain
            </span>
            <div className="flex flex-row overflow-x-auto lg:flex-col gap-2 pb-3 lg:pb-0 border-b border-neutral-100 lg:border-0 scrollbar-none">
              {portfolioData.skills.map((cat) => {
                const Icon = iconMap[cat.iconName] || Cloud;
                const isActive = cat.id === activeCategory;
                
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-3 px-4 py-3.5 border transition-all duration-300 text-left whitespace-nowrap lg:whitespace-normal w-full ${
                      isActive 
                        ? 'bg-neutral-900 border-neutral-900 text-white shadow-sm' 
                        : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-200 text-neutral-600 hover:text-neutral-950'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-secondary' : 'text-neutral-400'}`} />
                    <span className="text-[13px] font-semibold tracking-wide">{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Skills Panel (Spans 8 columns on lg) */}
          <div className="lg:col-span-8 bg-neutral-50 border border-neutral-200 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 pb-6 border-b border-neutral-200">
              <div className="p-2.5 bg-neutral-900 text-white">
                <ActiveIcon className="w-5 h-5 text-secondary" />
              </div>
              <div className="text-left">
                <span className="text-[9px] font-bold text-secondary uppercase tracking-widest font-mono">Domain Overview</span>
                <h3 className="text-xl font-bold text-neutral-950 leading-tight">{activeData.name}</h3>
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-6">
              {activeData.skillsList.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white border border-neutral-200 hover:border-neutral-350 transition-colors"
                >
                  <div className="w-5 h-5 bg-neutral-50 text-secondary flex items-center justify-center border border-neutral-250 mt-0.5 rounded-full flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="font-bold text-neutral-900 text-sm">{skill.name}</h4>
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-600">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
