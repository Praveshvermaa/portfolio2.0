import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-['Outfit'] tracking-tight">
          <span className="text-gradient">Pravesh</span> Verma
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-medium text-textMuted hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <a href="https://github.com/Praveshvermaa" target="_blank" rel="noreferrer" className="text-textMuted hover:text-white transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/pravesh-verma-835609273/" target="_blank" rel="noreferrer" className="text-textMuted hover:text-[#0a66c2] transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:praveshdhakad62@gmail.com" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm font-medium transition-all text-white flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Hire Me</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-textMuted hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 md:hidden flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-lg font-medium text-textMuted hover:text-white transition-colors block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
              <a href="https://github.com/Praveshvermaa" target="_blank" rel="noreferrer" className="text-textMuted hover:text-white">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/pravesh-verma-835609273/" target="_blank" rel="noreferrer" className="text-textMuted hover:text-[#0a66c2]">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="mailto:praveshdhakad62@gmail.com" className="text-textMuted hover:text-primary">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
