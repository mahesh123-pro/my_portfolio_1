import { motion } from 'framer-motion';
import { portfolioData } from '../data';

export default function Timeline() {
  const { timeline } = portfolioData;

  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 text-left md:text-center md:items-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-secondary font-mono">Roadmap</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">Growth Roadmap</h2>
          <p className="text-sm text-neutral-500 max-w-md mt-1">
            Chronological log of my engineering evolution, system breakthroughs, and professional milestones.
          </p>
        </div>

        {/* Central Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical progress line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[1.5px] bg-neutral-200 -translate-x-[0.75px]">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-secondary origin-top" />
          </div>

          <div className="flex flex-col gap-12">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start w-full ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Circular icon node on line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[15px] w-8 h-8 bg-white border-2 border-neutral-800 flex items-center justify-center text-xs font-bold shadow-sm z-10">
                    {item.icon}
                  </div>

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                      isEven ? 'md:pr-8' : 'md:pl-8'
                    }`}
                  >
                    <div className="bg-neutral-50 border border-neutral-200 p-5 md:p-6 shadow-sm hover:border-neutral-300 transition-colors text-left relative group">
                      
                      {/* Year badge */}
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-widest font-mono">
                        {item.year}
                      </span>

                      <h3 className="text-base font-bold text-neutral-900 mt-1 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t border-neutral-100">
                        {item.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white border border-neutral-200 text-neutral-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
