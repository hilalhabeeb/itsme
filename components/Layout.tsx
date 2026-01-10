
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen flex flex-col selection:bg-cyan-500/30 overflow-x-hidden">
      <nav className={`fixed top-0 w-full z-[80] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mx-auto max-w-5xl glass px-4 md:px-6 py-3 rounded-full flex justify-between items-center border border-white/10 shadow-2xl transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl' : ''}`}>
            {/* Logo */}
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-slate-950 font-black text-sm shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                HH
              </motion.div>
              <span className="text-white font-black tracking-tighter text-lg hidden xs:block">HABEEB</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-400 hover:text-white transition-colors relative group">
                  {link.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-500 rounded-full"
                    whileHover={{ width: '100%' }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </a>
              ))}
              <a href="#contact" className="bg-white text-slate-950 px-6 py-2 rounded-full text-xs font-black hover:scale-105 transition-transform active:scale-95 shadow-xl">
                Connect
              </a>
            </div>

            {/* Mobile Toggle Button */}
            <div className="md:hidden flex items-center gap-3">
              <a href="#contact" className="bg-white text-slate-950 px-4 py-2 rounded-full text-[10px] font-black hover:scale-105 transition-transform">
                CONTACT
              </a>
              <button 
                onClick={toggleMenu}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[70] md:hidden bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8"
          >
            <div className="space-y-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="block text-4xl font-black text-slate-400 hover:text-cyan-400 transition-colors tracking-tighter"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-20 flex gap-8"
            >
              <a href="https://github.com/hilalhabeeb" className="text-slate-400 hover:text-white transition-colors">
                <Github size={32} />
              </a>
              <a href="https://linkedin.com/in/hilalhabeeb" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={32} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="py-16 border-t border-slate-900 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-cyan-400 font-bold border border-white/5">
              HH
            </div>
            <div className="text-slate-400 text-xs font-mono uppercase tracking-widest">
              Digital Architect &copy; {new Date().getFullYear()}
            </div>
          </div>
          <div className="flex gap-8">
            <a href="https://github.com/hilalhabeeb" target="_blank" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm font-bold uppercase tracking-widest">GitHub</a>
            <a href="https://linkedin.com/in/hilalhabeeb" target="_blank" className="text-slate-500 hover:text-blue-400 transition-colors text-sm font-bold uppercase tracking-widest">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
