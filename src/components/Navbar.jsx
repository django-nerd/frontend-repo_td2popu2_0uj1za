import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Star } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-400 via-purple-400 to-sky-400 blur-md opacity-60 rounded-full" />
              <Rocket className="relative text-slate-900" />
            </div>
            <span className="tracking-tight">AstraAnime</span>
            <Star className="text-yellow-500" size={16} />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-tr from-fuchsia-500 to-sky-500 text-white px-4 py-2 text-sm shadow hover:shadow-md transition-shadow"
            >
              Let’s Talk
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex w-max items-center rounded-full bg-gradient-to-tr from-fuchsia-500 to-sky-500 text-white px-4 py-2 text-sm shadow" onClick={() => setOpen(false)}>
              Let’s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
