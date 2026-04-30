import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-12 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-textMuted mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Open to new opportunities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-['Outfit'] tracking-tight leading-tight mb-6"
          >
            Building digital <br className="hidden md:block" />
            <span className="text-gradient">experiences</span> that matter.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-textMuted mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I'm <span className="text-white font-medium">Pravesh Verma</span>, a Full Stack Developer & AI/ML enthusiast crafting production-ready web applications with modern technologies like React, Next.js, and Node.js.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 group">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 group">
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20 relative mx-auto max-w-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl blur-xl opacity-20"></div>
            <div className="glass rounded-xl p-4 md:p-6 text-left border border-white/10 shadow-2xl relative">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 flex items-center text-xs text-textMuted font-mono">
                  <Terminal className="w-3 h-3 mr-2" />
                  pravesh@dev: ~
                </div>
              </div>
              <div className="font-mono text-sm md:text-base text-gray-300">
                <p><span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                <p className="ml-4"><span className="text-green-400">name</span>: <span className="text-yellow-300">'Pravesh Verma'</span>,</p>
                <p className="ml-4"><span className="text-green-400">role</span>: <span className="text-yellow-300">'Full Stack Developer'</span>,</p>
                <p className="ml-4"><span className="text-green-400">location</span>: <span className="text-yellow-300">'Bhopal, India'</span>,</p>
                <p className="ml-4"><span className="text-green-400">skills</span>: [<span className="text-yellow-300">'MERN'</span>, <span className="text-yellow-300">'Next.js'</span>, <span className="text-yellow-300">'TypeScript'</span>, <span className="text-yellow-300">'Python'</span>]</p>
                <p>{'};'}</p>
                <p className="mt-2 text-textMuted">// Let's build something amazing together!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
