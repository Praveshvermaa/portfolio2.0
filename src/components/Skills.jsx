import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ["Java", "Python", "JavaScript", "SQL", "TypeScript", "PHP", "HTML5", "CSS3"]
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-secondary" />,
    skills: ["React", "Next.js", "Context API", "Redux", "jQuery", "Tailwind CSS", "Bootstrap", "ShadCN"]
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6 text-accent" />,
    skills: ["Express.js", "Node.js", "FastAPI", "REST APIs", "PostgreSQL", "MySQL", "Supabase", "MongoDB"]
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-green-400" />,
    skills: ["Git", "GitHub", "AWS Cloud", "Vercel", "Postman", "Cloudinary", "Cursor IDE"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-['Outfit'] mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills and the tools I use to build digital solutions.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass p-8 rounded-2xl h-fit hover:bg-white/10 transition-colors border-t border-white/5"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6 font-['Outfit']">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 bg-white/5 text-textMuted text-sm rounded-full border border-white/10 hover:border-primary/50 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
