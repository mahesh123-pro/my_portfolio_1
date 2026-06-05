import { motion } from 'framer-motion';
import { ArrowRight, FileText, BookOpen } from 'lucide-react';
import { portfolioData } from '../data';

// Inline SVGs for Brand Icons since Lucide does not export them in this version
const Github = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);


export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copy */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3"
          >
            <div className="inline-flex items-center gap-2 self-start bg-neutral-50 border border-neutral-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-600">
              <span className="w-2 h-2 bg-secondary animate-pulse rounded-full" />
              {portfolioData.personal.availability}
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.1] mt-2">
              Architecting secure <br />
              <span className="text-secondary">cloud infrastructures</span> <br />
              &amp; digital experiences.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-neutral-500 leading-relaxed max-w-xl"
          >
            {portfolioData.personal.bio}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="group flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-[13px] uppercase tracking-wider px-6 py-3.5 shadow-sm transition-all duration-300"
            >
              Explore Work
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <a
              href={portfolioData.personal.resumeUrl}
              download
              className="flex items-center gap-2 border border-neutral-200 hover:border-neutral-900 text-neutral-700 hover:text-neutral-900 bg-white font-semibold text-[13px] uppercase tracking-wider px-6 py-3.5 transition-all duration-300"
            >
              <FileText className="w-4 h-4 text-secondary" />
              Resume
            </a>
          </motion.div>

          {/* Socials & Summary */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 mt-6 pt-6 border-t border-neutral-100"
          >
            <div className="flex items-center gap-6">
              <a 
                href={portfolioData.personal.socials.github} 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a 
                href={portfolioData.personal.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a 
                href={portfolioData.personal.socials.medium} 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
              >
                <BookOpen className="w-4 h-4" />
                Medium
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-3.5 bg-neutral-50 border border-neutral-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">Latest Role</span>
                <p className="text-xs font-semibold text-neutral-800 mt-1 leading-snug">{portfolioData.personal.latestRole}</p>
              </div>
              <div className="p-3.5 bg-neutral-50 border border-neutral-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">Focus Area</span>
                <p className="text-xs font-semibold text-neutral-800 mt-1 leading-snug">{portfolioData.personal.currentFocus}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Beautiful Cloud SVG Node Visualization */}
        <div className="lg:col-span-5 w-full h-[360px] sm:h-[420px] relative flex items-center justify-center select-none">
          <div className="absolute inset-0 bg-neutral-50/50 border border-neutral-100 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono font-semibold text-neutral-400 uppercase tracking-widest">AWS VPC NETWORK VISUALIZATION</span>
              <span className="text-[10px] font-mono font-semibold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-0.5">ACTIVE</span>
            </div>
            
            {/* SVG Network Visual */}
            <svg viewBox="0 0 400 300" className="w-full h-full max-h-[260px] text-neutral-300">
              {/* Outer boundary representing VPC subnet */}
              <rect x="10" y="10" width="380" height="280" rx="4" fill="none" stroke="#e5e5e5" strokeWidth="1.5" strokeDasharray="5,5" />
              
              {/* Network Connections (Path Lines) */}
              {/* Client -> ALB */}
              <motion.path 
                d="M 40 150 L 120 150" 
                stroke="#d4d4d4" 
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
              />
              
              {/* ALB -> App servers */}
              <path d="M 120 150 L 220 80" stroke="#d4d4d4" strokeWidth="1.5" />
              <path d="M 120 150 L 220 220" stroke="#d4d4d4" strokeWidth="1.5" />
              
              {/* App servers -> DB */}
              <path d="M 220 80 L 320 150" stroke="#d4d4d4" strokeWidth="1.5" />
              <path d="M 220 220 L 320 150" stroke="#d4d4d4" strokeWidth="1.5" />
              
              {/* Node: Gateway Client */}
              <circle cx="40" cy="150" r="16" fill="#171717" />
              <text x="40" y="154" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">Client</text>
              
              {/* Node: ALB */}
              <circle cx="120" cy="150" r="18" fill="#ffffff" stroke="#ff6b00" strokeWidth="2" />
              <text x="120" y="153" fill="#171717" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ALB</text>
              
              {/* Node: EC2 Web Server A */}
              <circle cx="220" cy="80" r="20" fill="#ffffff" stroke="#e5e5e5" strokeWidth="1.5" />
              <text x="220" y="83" fill="#171717" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">EC2-A</text>
              
              {/* Node: EC2 Web Server B */}
              <circle cx="220" cy="220" r="20" fill="#ffffff" stroke="#e5e5e5" strokeWidth="1.5" />
              <text x="220" y="223" fill="#171717" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">EC2-B</text>
              
              {/* Node: RDS Database */}
              <circle cx="320" cy="150" r="22" fill="#ffffff" stroke="#ff6b00" strokeWidth="2" />
              <text x="320" y="153" fill="#171717" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">RDS</text>
              
              {/* Little moving particles on the paths */}
              <motion.circle 
                cx="120" cy="150" r="3" fill="#ff6b00"
                animate={{ cx: [120, 220], cy: [150, 80] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle 
                cx="120" cy="150" r="3" fill="#ff6b00"
                animate={{ cx: [120, 220], cy: [150, 220] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle 
                cx="220" cy="80" r="3" fill="#171717"
                animate={{ cx: [220, 320], cy: [80, 150] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
              />
              <motion.circle 
                cx="220" cy="220" r="3" fill="#171717"
                animate={{ cx: [220, 320], cy: [220, 150] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
              />
            </svg>
            
            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
              <span>LATENCY: 42ms</span>
              <span>Subnets: Multi-AZ (1a, 1b)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
