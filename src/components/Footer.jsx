import React from 'react';
import { Mail, Phone, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 pt-16 pb-8 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="text-3xl font-bold font-['Outfit'] tracking-tight mb-4 inline-block">
              <span className="text-gradient">Pravesh</span> Verma
            </a>
            <p className="text-textMuted max-w-sm leading-relaxed mb-6">
              A passionate Full Stack Developer building scalable, user-centric digital experiences. Always open to new opportunities and collaborations.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Praveshvermaa" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:bg-white/10 hover:text-white transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/pravesh-verma-835609273/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:bg-[#0a66c2] hover:text-white transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="mailto:praveshdhakad62@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:bg-primary hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-['Outfit']">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-textMuted hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-['Outfit']">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:praveshdhakad62@gmail.com" className="flex items-center gap-3 text-textMuted hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                  <span>praveshdhakad62@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+916264492208" className="flex items-center gap-3 text-textMuted hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 group-hover:text-primary transition-colors" />
                  <span>+91 6264492208</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-textMuted text-sm text-center md:text-left">
            © {new Date().getFullYear()} Pravesh Verma. All rights reserved.
          </p>
          <p className="text-textMuted text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
