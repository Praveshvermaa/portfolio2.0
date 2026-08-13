import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
// ALL projects are linked to their github repositories and live demos respectively

const projects = [
  {
    title: "SkillLink — Full-Stack Skill Marketplace",
    tech: ["Next.js", "TypeScript", "Supabase", "Leaflet"],
    github: "https://github.com/Praveshvermaa/SkillLink",
    live: "https://skill-link-five-ruby.vercel.app",
    points: [
      "Engineered a full-stack location-based service marketplace, connecting users with local providers such as plumbing, electrical services, and tutoring",
      "Implemented real-time chat via Supabase Realtime and RBAC auth, supporting 2+ user roles with near-zero message latency",
      "Integrated Leaflet Maps with dynamic filtering across 100+ listings at <200ms response time",
      "Architected full booking workflow with status tracking, earnings calendar, and ratings system — boosting estimated repeat engagement by 30%",
      "Built responsive UI (Tailwind + ShadCN) and admin panel managing 100+ users & services in real time"
    ]
  },
  {
    title: "Portfolio Chatbot — AI-Powered Portfolio Assistant",
    tech: ["Python", "FastAPI", "FAISS", "NVIDIA Embeddings", "LLM", "Docker"],
    github: "https://github.com/Praveshvermaa/portfolio_backend",
    live: "https://pravesh-portfolio1.vercel.app/",
    points: [
      "Built an AI-powered portfolio chatbot that lets users ask natural-language questions about my experience, skills, projects, and background",
      "Developed a FastAPI backend with a streaming chat endpoint for real-time conversational responses",
      "Implemented a retrieval-augmented generation (RAG) pipeline using section-wise chunking to preserve context and improve answer relevance",
      "Stored embeddings in FAISS for fast similarity search, reducing retrieval time and improving scalability",
      "Integrated LLM-based response generation to provide accurate, human-like answers based on portfolio content",
      "Deployed the backend with Docker and cloud hosting for easy access and future expansion"
    ]
  },
  {
    title: "VibeVerse — AI-Powered Social Post App",
    tech: ["React", "Express", "MongoDB", "JWT", "NLP", "Cloudinary"],
    github: "https://github.com/Praveshvermaa/Your-Post-Client",
    live: "https://your-post-client.vercel.app",
    points: [
      "Built full-stack social platform in React, Express & MongoDB handling 500+ cloud media assets via Multer & Cloudinary",
      "Developed NLP sentiment analysis pipeline classifying 100+ comments/post with ~90% accuracy using real-time scoring",
      "Integrated AI image generation (Puter.js) reducing user content creation time by ~60%",
      "Delivered sentiment analytics dashboard surfacing trends across 100+ daily interactions with JWT-secured auth and profile engagement tracking "
    ]
  },
  {
    title: "NotesHub — Academic Notes Sharing Platform",
    tech: ["React", "Express.js", "MongoDB", "ShadCN", "Cloudinary"],
    github: "https://github.com/Praveshvermaa/NotesHub-Client",
    live: "https://notes-hub-client-weld.vercel.app",
    points: [
      "Built academic document platform in React, Express & MongoDB serving 200+ students and teachers across semesters and branches",
      "Optimized indexed search across 100+ documents, cutting discovery time by ~50% (4s → 2s)",
      "Handled secure file uploads in 10+ formats via Multer & Cloudinary with JWT-based auth",
      "Maintained 4.8/5 average content rating via peer review system and contributor dashboard, reducing content management time by ~40%",]
  },
  {
    "title": "AI Job Search & Recommendation Platform",
    "tech": ["Python", "FastAPI", "React", "Vite", "PostgreSQL", "Qdrant", "Google Gemini API", "Docker"],
    "github": "https://github.com/Praveshvermaa/AI-Job-Search-Application-Backend",
    "live": "",
    "points": [
      "Built an AI-powered job search and recommendation platform that helps users upload resumes and discover relevant job opportunities using semantic search",
      "Developed a FastAPI backend with secure authentication, resume processing, and personalized job recommendation APIs",
      "Integrated Google Gemini AI for resume parsing, skill extraction, and contextual job matching",
      "Implemented vector-based similarity search using Qdrant to improve recommendation relevance beyond basic keyword matching",
      "Created a modern React frontend with Vite and Tailwind CSS for an interactive user experience",
      "Designed the system with a modular architecture supporting future scaling, external API integrations, and AI-driven enhancements"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-['Outfit'] mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto text-lg">
            Showcasing some of my best work in building complex web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Folder className="w-6 h-6" />
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-textMuted hover:text-white transition-colors">
                      <FaGithub className="w-6 h-6" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-textMuted hover:text-secondary transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 font-['Outfit'] group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex-grow">
                <ul className="space-y-3">
                  {project.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-sm text-gray-300 flex items-start gap-2 leading-relaxed">
                      <div className="w-1 h-1 rounded-full bg-textMuted mt-2 flex-shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
