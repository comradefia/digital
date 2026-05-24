import { useState, FormEvent } from 'react';
import { Sparkles, Mail, Send, CheckCircle } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };

  const navTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-main" className="bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-800">
          
          {/* Brand block (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg">
                <Sparkles className="w-5 h-5 text-zinc-950" />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight block text-white">Vanguard</span>
                <span className="font-mono text-[9px] font-semibold text-zinc-400 tracking-widest uppercase block -mt-1">Digital Studio</span>
              </div>
            </div>
            
            <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-sm">
              We design and construct premium physical and virtual interfaces. Simple layout aesthetics crafted for exceptional organizations globally.
            </p>
            
            <div className="flex flex-col gap-1.5 mt-2">
              <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest">Global Headquarters</span>
              <span className="text-xs text-zinc-300">85 Swede Avenue, Penthouse Level, Stockholm</span>
            </div>
          </div>

          {/* Quick Sitemap Links (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="font-display text-xs uppercase font-extrabold tracking-widest text-zinc-300">Sitemap</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <button 
                  onClick={() => navTo(Page.Home)}
                  className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Home Mainframe
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navTo(Page.About)}
                  className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Our Philosophy & Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navTo(Page.Services)}
                  className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Digital Craft Catalog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navTo(Page.Contact)}
                  className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Initiate Project Brief
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Input Form section (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <h4 className="font-display text-xs uppercase font-extrabold tracking-widest text-zinc-300">Studio Dispatch</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Subscribe to the Sentinel Journal—our monthly editorial regarding web standards, layout ergonomics, and visual code.
            </p>
            
            {isSubscribed ? (
              <div className="bg-zinc-900 border border-emerald-500/30 text-emerald-400 rounded-lg p-3.5 flex items-center gap-3 transition-all">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-semibold">Subscription finalized. Welcome aboard.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-white focus:outline-none rounded-lg text-xs transition-colors placeholder:text-zinc-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-white hover:bg-zinc-200 text-zinc-950 font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-zinc-500">
            © {new Date().getFullYear()} Vanguard. Constructed in compliance with semantic HTML & CSS layout standards.
          </p>
          
          <div className="flex gap-6 font-mono text-[10px] text-zinc-400">
            <span className="tracking-wide">UTC 10:31:23</span>
            <span className="text-zinc-600">|</span>
            <a href="#main-navbar" className="hover:underline">STAY GROUNDED</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
