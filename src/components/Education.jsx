import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-['Outfit'] mb-4">
            Academic <span className="text-gradient">Background</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto text-lg">
            My educational qualifications and academic journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-2xl h-fit relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap className="w-24 h-24 text-primary" />
            </div>
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 border border-primary/20">
                Expected Jun 2026
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">B.Tech in Computer Science (AIML)</h3>
              <p className="text-lg text-textMuted mb-4">Lakshmi Narain College of Technology, Bhopal</p>
              
              <div className="flex items-center gap-3 bg-white/5 inline-flex px-4 py-2 rounded-lg border border-white/10">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold text-white">CGPA: 8.12</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-2xl h-fit relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <BookOpen className="w-24 h-24 text-secondary" />
            </div>
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4 border border-secondary/20">
                Mar 2022
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Higher Secondary (Class 12)</h3>
              <p className="text-lg text-textMuted mb-4">Indian Public Higher Secondary School, Shivpuri</p>
              
              <div className="flex items-center gap-3 bg-white/5 inline-flex px-4 py-2 rounded-lg border border-white/10">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold text-white">96.4%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
