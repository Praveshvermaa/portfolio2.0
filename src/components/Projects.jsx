import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "SkillLink — Full-Stack Skill Marketplace",
    tech: ["Next.js", "TypeScript", "Supabase", "Leaflet"],
    github: "https://github.com/Praveshvermaa/SkillLink",
    live: "https://skill-link-five-ruby.vercel.app",
    points: [
      "Built a full-stack marketplace with Next.js 16 and Supabase, enabling real-time geolocation-based service discovery via interactive Leaflet maps for 1000+ potential listings.",
      "Implemented secure authentication (email verification, password reset, RBAC), eliminating unauthorized access.",
      "Developed a real-time chat system using Supabase Realtime subscriptions with message persistence and read receipts, achieving sub-100ms message delivery.",
      "Optimized map performance via debounced API requests and bounding-box queries, reducing server load by ~80% during high-frequency interactions."
    ]
  },
  {
    title: "VibeVerse — AI-Powered Social Post App",
    tech: ["React", "Express", "MongoDB", "JWT", "NLP", "Cloudinary"],
    github: "https://github.com/Praveshvermaa/Your-Post-Client",
    live: "https://your-post-client.vercel.app",
    points: [
      "Engineered a secure MERN platform with protected REST APIs supporting full CRUD for posts and image uploads, reducing content workflow friction by ~60% vs manual processes.",
      "Integrated NLP sentiment pipeline processing 100% of posts automatically, eliminating manual tagging and delivering AI-generated visuals per post.",
      "Built analytics dashboards visualizing sentiment trends and engagement metrics, improving content decision speed by 3× with Cloudinary-optimized media delivery cutting load times by ~40%."
    ]
  },
  {
    title: "NotesHub — Academic Notes Sharing Platform",
    tech: ["React", "Express.js", "MongoDB", "ShadCN", "Cloudinary"],
    github: "https://github.com/Praveshvermaa/NotesHub-Client",
    live: "https://notes-hub-client-weld.vercel.app",
    points: [
      "Developed a full-stack notes platform with JWT auth, email verification, and rating-based filtering, enabling sub-second search across 100+ academic documents.",
      "Built Multer + Cloudinary upload pipelines handling files up to 50MB, reducing upload failure rate to <1% with reliable metadata tracking.",
      "Created uploader dashboards tracking ratings, downloads, and engagement — with top notes achieving 4.8/5 avg rating and 200+ downloads in early access."
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
