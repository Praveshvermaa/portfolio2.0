import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-['Outfit'] mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto text-lg">
            My professional journey in building scalable web applications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block"></div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative ml-0 md:ml-16 pl-4 md:pl-0 border-l md:border-l-0 border-primary/30"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[21px] md:-left-10 top-6 w-10 h-10 rounded-full bg-surface border border-primary flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.5)] z-10 hidden md:flex">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>

            <div className="glass p-8 rounded-2xl hover:bg-white-[0.07] transition-all relative group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Full Stack Developer Intern</h3>
                  <div className="text-xl text-primary font-medium">Milko Business App</div>
                </div>
                <div className="flex flex-col md:items-end gap-2 text-textMuted text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Jan 2025 – Mar 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>On-Site</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {[
                  "Built a production-ready MERN stack web application for a dairy management startup, enabling core business workflows from scratch.",
                  "Developed a React-based responsive UI with reusable components, improving UI consistency and reducing development time.",
                  "Designed and integrated RESTful Node.js/Express APIs with MongoDB for seamless data management and CRUD operations.",
                  "Implemented backend business logic for data processing, authentication, and application state management."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
