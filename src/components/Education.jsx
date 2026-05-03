import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Library } from 'lucide-react';

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

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          {/* Card 1: B.Tech */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-2xl h-full flex flex-col relative overflow-hidden group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
              <GraduationCap className="w-24 h-24 text-primary" />
            </div>
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="self-start px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-5 border border-primary/20 backdrop-blur-sm">
                2022 - 2026
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">B.Tech in Computer Science (AIML)</h3>
              <p className="text-lg text-textMuted mb-6 flex-1">Lakshmi Narain College of Technology, Bhopal</p>

              <div className="flex items-center gap-3 bg-white/5 inline-flex px-4 py-2 rounded-lg border border-white/10 self-start group-hover:bg-white/10 transition-colors duration-300">
                <Award className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                <span className="font-semibold text-white tracking-wide">CGPA: 8.29</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Class 12 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-2xl h-full flex flex-col relative overflow-hidden group hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
              <BookOpen className="w-24 h-24 text-secondary" />
            </div>
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="self-start px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-5 border border-secondary/20 backdrop-blur-sm">
                2021 - 2022
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Higher Secondary Education (Class 12)</h3>
              <p className="text-lg text-textMuted mb-6 flex-1">Indian Public Higher Secondary School, Shivpuri</p>

              <div className="flex items-center gap-3 bg-white/5 inline-flex px-4 py-2 rounded-lg border border-white/10 self-start group-hover:bg-white/10 transition-colors duration-300">
                <Award className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                <span className="font-semibold text-white tracking-wide">96.4%</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Class 10 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass p-8 rounded-2xl h-full flex flex-col relative overflow-hidden group hover:border-accent/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
              <Library className="w-24 h-24 text-accent" />
            </div>
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="self-start px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-5 border border-accent/20 backdrop-blur-sm">
                2019 - 2020
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Secondary Education (Class 10)</h3>
              <p className="text-lg text-textMuted mb-6 flex-1">Indian Public Higher Secondary School, Shivpuri</p>

              <div className="flex items-center gap-3 bg-white/5 inline-flex px-4 py-2 rounded-lg border border-white/10 self-start group-hover:bg-white/10 transition-colors duration-300">
                <Award className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                <span className="font-semibold text-white tracking-wide">97.5%</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
