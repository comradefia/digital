import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: Page.Home },
    { label: 'About', value: Page.About },
    { label: 'Services', value: Page.Services },
    { label: 'Contact', value: Page.Contact },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    // Smooth scroll back to top of page on change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-zinc-100 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick(Page.Home)}
          className="flex items-center gap-2.5 text-black hover:opacity-85 transition-opacity cursor-pointer group"
        >
          <div className="w-10 h-10 bg-zinc-950 flex items-center justify-center rounded-lg group-hover:rotate-6 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <span className="font-display font-bold text-lg tracking-tight block">Vanguard</span>
            <span className="font-mono text-[9px] font-semibold text-zinc-500 tracking-widest uppercase block -mt-1">Digital Studio</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              id={`nav-item-${item.value}`}
              onClick={() => handleNavClick(item.value)}
              className={`font-display text-sm font-medium tracking-wide relative py-2 cursor-pointer transition-colors ${
                currentPage === item.value ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-950'
              }`}
            >
              {item.label}
              {currentPage === item.value && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-950 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            id="nav-cta-btn"
            onClick={() => handleNavClick(Page.Contact)}
            className="px-5 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white font-display text-xs font-semibold uppercase tracking-widest rounded-lg cursor-pointer transition-colors"
          >
            Start Project
          </button>
        </div>

        {/* Mobile Menu trigger */}
        <button
          id="mobile-menu-trigger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 md:hidden text-zinc-950 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu dropdown */}
      {isMobileMenuOpen && (
        <div
          id="mobile-dropdown"
          className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-zinc-200 shadow-xl flex flex-col p-6 gap-4 animate-fade-in"
        >
          {navItems.map((item) => (
            <button
              key={item.value}
              id={`mobile-nav-item-${item.value}`}
              onClick={() => handleNavClick(item.value)}
              className={`text-left font-display text-lg font-semibold py-2.5 px-4 rounded-lg cursor-pointer transition-colors ${
                currentPage === item.value
                  ? 'bg-zinc-950 text-white'
                  : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="h-[1px] bg-zinc-100 my-2" />
          <button
            id="mobile-nav-cta"
            onClick={() => handleNavClick(Page.Contact)}
            className="w-full py-3.5 bg-zinc-950 text-white font-display text-sm font-bold tracking-wider uppercase rounded-lg cursor-pointer transition-colors text-center"
          >
            Start Project
          </button>
        </div>
      )}
    </header>
  );
}
