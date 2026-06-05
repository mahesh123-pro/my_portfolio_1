import { Briefcase, GraduationCap, Award, Compass, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data';

export default function BentoAbout() {
  const { personal, certifications } = portfolioData;

  return (
    <section id="about" className="py-24 bg-neutral-50/50 border-y border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-secondary font-mono">Overview</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">Who I Am &amp; Expertise</h2>
          <p className="text-sm text-neutral-500 max-w-md mt-1">
            A structured layout mapping my credentials, focus areas, and industry certifications.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Main Bio (Spans 8 columns) */}
          <div className="md:col-span-8 bg-white border border-neutral-200 p-6 md:p-8 flex flex-col justify-between min-h-[260px] relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-3">
              <span className="w-fit px-2 py-0.5 bg-secondary/10 border border-secondary/25 text-[10px] font-bold uppercase tracking-wider text-secondary">
                Engineering Mindset
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mt-2">Hi, I&apos;m Mahesh</h3>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-xl">
                {personal.bio}
              </p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-neutral-100">
              <a 
                href={personal.socials.medium}
                target="_blank" 
                rel="noreferrer"
                className="text-xs font-bold text-secondary hover:text-neutral-900 transition-colors flex items-center gap-1 w-fit"
              >
                Read my engineering insights on Medium
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Current Role (Spans 4 columns) */}
          <div className="md:col-span-4 bg-white border border-neutral-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-secondary/10 text-secondary flex items-center justify-center border border-secondary/20">
              <Briefcase className="w-4 h-4" />
            </div>
            <div className="mt-8">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono">Current Role</span>
              <h4 className="text-sm font-bold text-neutral-950 mt-1">{personal.latestRole.split(',')[0]}</h4>
              <p className="text-xs text-neutral-500 mt-1">{personal.latestRole.split(',')[1] || "Engineering and scaling cloud services"}</p>
              <span className="inline-block text-[10px] font-bold text-secondary mt-3 font-mono">Dec 2025 - Present</span>
            </div>
          </div>

          {/* Card 3: Cloud & DevOps Stack (Spans 4 columns) */}
          <div className="md:col-span-4 bg-white border border-neutral-200 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-secondary/10 text-secondary flex items-center justify-center border border-secondary/20">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-950">Cloud &amp; Systems Stack</h4>
              <p className="text-xs text-neutral-500 mt-1">Containers, hosting, networks, and automation tools.</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {['AWS EC2', 'S3', 'RDS', 'IAM', 'VPC', 'Linux', 'Docker'].map((tag, idx) => (
                  <span key={idx} className="text-[11px] font-medium px-2 py-0.5 bg-neutral-50 text-neutral-600 border border-neutral-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: Full Stack Capabilities (Spans 4 columns) */}
          <div className="md:col-span-4 bg-white border border-neutral-200 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-secondary/10 text-secondary flex items-center justify-center border border-secondary/20">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-950">Frontend &amp; Backend Dev</h4>
              <p className="text-xs text-neutral-500 mt-1">Application layers, APIs, frameworks, and databases.</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {['React.js', 'Next.js', 'Node.js', 'Python', 'MongoDB', 'Tailwind', 'REST APIs'].map((tag, idx) => (
                  <span key={idx} className="text-[11px] font-medium px-2 py-0.5 bg-neutral-50 text-neutral-600 border border-neutral-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 5: Education (Spans 4 columns) */}
          <div className="md:col-span-4 bg-white border border-neutral-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-secondary/10 text-secondary flex items-center justify-center border border-secondary/20">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="mt-8">
              <h4 className="text-sm font-bold text-neutral-950 mb-3">Education</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-neutral-600">
                {personal.education.map((edu, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-neutral-100 pb-1.5 last:border-0 last:pb-0">
                    <div>
                      <span className="font-bold text-neutral-850">{edu.degree}</span>
                      <span className="text-neutral-400 block">{edu.institution}</span>
                    </div>
                    <span className="text-secondary font-semibold font-mono text-[10px]">{edu.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Credentials / Highlights Grid */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <div className="flex flex-col gap-2 mb-8 text-left">
            <h3 className="text-lg font-bold text-neutral-900 tracking-tight">Key Milestones &amp; Credentials</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-9 h-9 bg-neutral-900 text-white flex items-center justify-center text-xs font-bold font-mono mb-4">
                  {item.icon === 'AWS' ? <Award className="w-4 h-4 text-secondary" /> : item.icon}
                </div>
                <h4 className="text-sm font-bold text-neutral-950">{item.title}</h4>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
