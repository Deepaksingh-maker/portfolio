"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Layout, Sparkles, Brain } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Layout,
    title: "UI/UX Focus",
    description: "Creating intuitive interfaces with attention to user experience",
  },
  {
    icon: Sparkles,
    title: "Modern Tech",
    description: "Embracing latest frameworks like React, Tailwind, and Next.js",
  },
  {
    icon: Brain,
    title: "AI Enthusiast",
    description: "Exploring AI integration in modern web applications",
  },
];

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
            Discovery
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            The <span className="text-gradient">Story</span> Behind The Code
          </h2>
          <div className="mt-6 w-16 h-1.5 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-bold border-b-2 border-primary/30">Deepak Singh</span>, 
                an IT scholar currently pursuing my BSc at GLS University. I don't just write code; I craft digital experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey is fueled by a relentless curiosity for how technology can bridge the gap between human needs and digital solutions. I specialize in <span className="text-foreground font-semibold">Frontend Engineering</span> where art meets logic.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's building complex data dashboards or refining subtle micro-interactions, I strive for excellence in every pixel.
              </p>
            </div>

            <div className="flex items-center gap-6 p-6 rounded-2xl bg-secondary/30 border border-border/50 backdrop-blur-sm">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 border-4 border-background shadow-xl"
                  />
                ))}
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">3+ Projects</p>
                <p className="text-sm text-muted-foreground">Successfully Delivered</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
                animate={inView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.33, 1, 0.68, 1] }}
                className="group p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
