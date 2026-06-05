import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-neutral-100 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-2 group"
          id="logo-link"
        >
          <div className="w-9 h-9 bg-neutral-900 text-white font-extrabold flex items-center justify-center text-sm transition-transform duration-300 group-hover:scale-105">
            {portfolioData.personal.logoText}
          </div>
          <div className="flex flex-col select-none">
            <span className="text-sm font-extrabold tracking-tight text-neutral-900 leading-none">
              {portfolioData.personal.name}.
            </span>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none mt-1">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-[13px] font-medium tracking-wide text-neutral-600">
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
                href="#skills" 
                onClick={(e) => handleNavClick(e, 'skills')}
                className="hover:text-secondary transition-colors"
              >
                Skills
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
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="hover:text-secondary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="text-[13px] font-semibold text-neutral-900 bg-neutral-50 hover:bg-neutral-100 px-4 py-2 border border-neutral-200 transition-all duration-300"
          >
            Start a Project
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-700 hover:text-neutral-900 transition-colors"
          aria-label="Toggle menu"
          id="menu-toggle-btn"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-neutral-100 py-6 px-6 flex flex-col gap-6 md:hidden shadow-lg animate-fade-in">
          <ul className="flex flex-col gap-4 text-sm font-medium text-neutral-700">
            <li>
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                className="hover:text-secondary block py-1 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className="hover:text-secondary block py-1 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, 'projects')}
                className="hover:text-secondary block py-1 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={(e) => handleNavClick(e, 'skills')}
                className="hover:text-secondary block py-1 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#timeline" 
                onClick={(e) => handleNavClick(e, 'timeline')}
                className="hover:text-secondary block py-1 transition-colors"
              >
                Roadmap
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="hover:text-secondary block py-1 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="h-[1px] bg-neutral-100 w-full" />
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="text-center text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 py-2.5 shadow-sm transition-all"
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
}
