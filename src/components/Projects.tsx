"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "Analytics Dashboard",
    description:
      "A responsive analytics dashboard built using modern frontend tools, showcasing statistics, charts, and clean UI components with real-time data visualization.",
    tech: ["React", "Tailwind CSS", "Chart Components"],
    live: "https://deepaksingh-maker.github.io/analytics-dashboard/",
    github: "https://github.com/Deepaksingh-maker/analytics-dashboard",
    featured: true,
    icon: BarChart3,
  },
  {
    title: "Airbnb Homepage Clone",
    description:
      "Responsive React clone of Airbnb homepage focusing on pixel-perfect layout, accessibility features, and responsive behavior across all devices.",
    tech: ["React", "Tailwind CSS"],
    live: "https://deepaksingh-maker.github.io/Miniairbnb-homepage-clone/",
    github: "https://github.com/Deepaksingh-maker/Miniairbnb-homepage-clone",
    featured: false,
  },
  {
    title: "Akanksa AI",
    description:
      "AI demo site showcasing basic AI-driven interactions, conversational UI patterns, and modern demo pages.",
    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://deepaksingh-maker.github.io/Akanksa-AI/",
    github: "https://github.com/Deepaksingh-maker/Akanksa-AI",
    featured: false,
  },
];

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="mt-6 w-20 h-1.5 bg-gradient-primary mx-auto rounded-full" />
          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A curated selection of my recent work, focusing on high-performance 
            interfaces and exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.33, 1, 0.68, 1] }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-card border border-border/50 transition-all duration-700 hover:border-primary/30 hover:shadow-[0_20px_50px_-10px_rgba(var(--primary-rgb),0.1)]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <motion.div 
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-2xl glow relative group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ rotate: 5 }}
                    >
                      {project.icon && <project.icon className="w-12 h-12 text-white" />}
                      <div className="absolute inset-0 rounded-3xl bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                    
                    <div className="flex-1 text-center lg:text-left">
                      <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-6">
                        <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase border border-primary/20">
                          Featured
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground text-lg sm:text-xl mb-8 leading-relaxed max-w-3xl">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 rounded-xl bg-secondary/50 text-secondary-foreground text-sm font-semibold border border-border/50 backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-bold shadow-xl shadow-primary/20 transition-all duration-500 hover:shadow-primary/40"
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                            Live Experience
                          </motion.a>
                        )}
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-border hover:border-primary/50 font-bold transition-all duration-500 backdrop-blur-sm"
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-5 h-5" />
                            Source Code
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.98, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-lg mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-secondary/50 text-secondary-foreground text-xs font-bold border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-6">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-bold transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
