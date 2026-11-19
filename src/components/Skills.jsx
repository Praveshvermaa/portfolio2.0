import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Layout, Database, Wrench } from "lucide-react";


const skillCategories = [
  {
    title: "Generative AI & RAG",
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
    skills: [
      "Generative AI",
      "LangChain",
      "RAG",
      "Hybrid Search",
      "Vector Databases",
      "Qdrant",
      "Embeddings",
      "Prompt Engineering"
    ]
  },
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6 text-secondary" />,
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "PHP",
      "HTML5",
      "CSS3"
    ]
  },
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6 text-accent" />,
    skills: [
      "React",
      "Next.js",
      "Redux",
      "Context API",
      "Tailwind CSS",
      "Bootstrap",
      "Shadcn UI",
      "jQuery"
    ]
  },
  {
    title: "Backend & Databases",
    icon: <Database className="w-6 h-6 text-green-400" />,
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Supabase"
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-orange-400" />,
    skills: [
      "Git",
      "GitHub",
      "AWS",
      "Vercel",
      "Postman",
      "Cloudinary",
      "Cursor"
    ]
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
