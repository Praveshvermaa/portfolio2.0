import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Star } from 'lucide-react';

const Achievements = () => {
  return (
    <section className="py-20 relative bg-surface/50">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-['Outfit'] mb-4">
            Achievements & <span className="text-gradient">Problem Solving</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto text-lg">
            Highlights of my competitive programming and academic milestones.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-primary/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Global Rank 1028 in TCS CodeVita</h3>
              <p className="text-textMuted leading-relaxed">
                Secured this rank in one of the world's largest coding competitions competing against 100,000+ participants globally.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-secondary/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">550+ DSA Problems Solved</h3>
              <p className="text-textMuted leading-relaxed">
                Consistently solving algorithmic challenges across platforms like <a href="https://leetcode.com/u/pravesh_verma" target="_blank" rel="noreferrer" className="text-secondary hover:underline">LeetCode</a>, CodeChef, and GeeksforGeeks, demonstrating strong Data Structures and Algorithms fundamentals.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-accent/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">MP Board State Ranker</h3>
              <p className="text-textMuted leading-relaxed">
                Achieved 96.4% in Class XII (2022), standing as a state Ranker under 10 in the Madhya Pradesh Board examinations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
