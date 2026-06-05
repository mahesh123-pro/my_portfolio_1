import { portfolioData } from '../data';

export default function Footer() {
  const { personal } = portfolioData;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 py-12 text-left">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
        
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-extrabold text-neutral-900 tracking-tight">
              {personal.name}<span className="text-secondary">.</span>
            </h2>
            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
              I build secure, highly available cloud infrastructures and scalable, responsive full-stack applications.
            </p>
          </div>

          <ul className="flex flex-wrap gap-6 text-xs font-semibold text-neutral-500">
            <li>
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                className="hover:text-secondary transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className="hover:text-secondary transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, 'projects')}
                className="hover:text-secondary transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#timeline" 
                onClick={(e) => handleNavClick(e, 'timeline')}
                className="hover:text-secondary transition-colors"
              >
                Roadmap
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-neutral-200 w-full" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
          <p>Copyright &copy; {new Date().getFullYear()} {personal.name}. All Rights Reserved.</p>
          
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[11px] font-semibold text-neutral-600 uppercase tracking-wide">
              Open to Opportunities
            </span>
          </div>
          
          <p className="text-[10px]">Designed and developed with passion.</p>
        </div>

      </div>
    </footer>
  );
}
