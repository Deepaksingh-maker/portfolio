"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "BSc Information Technology",
    institution: "GLS University",
    location: "Ahmedabad",
    period: "2024 – Present",
    description: "Currently pursuing Bachelor's degree in IT with focus on web technologies and programming",
    current: true,
  },
    {
      degree: "12th Commerce",
      institution: "Gyan Gita Vidhya Vihar",
      location: "Ahmedabad",
      period: "2024",
      score: "79.57%",
      description: "Successfully completed Higher Secondary Certificate (HSC) in the Commerce stream with a focus on Accountancy and Business Studies.",
      current: false,
    },
  {
    degree: "Class 10",
    institution: "Gyan Gita Vidhya Vihar",
    location: "Ahmedabad",
    period: "2022",
    score: "59.71%",
    description: "Completed secondary education",
    current: false,
  },
];

export function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
            Milestones
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <div className="mt-6 w-16 h-1.5 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-accent/50 to-transparent md:-translate-x-1/2 rounded-full" />

            <div className="space-y-24">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2, 
                    ease: [0.21, 1, 0.44, 1] 
                  }}
                  className={`relative flex flex-col md:flex-row gap-8 md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] flex items-center justify-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {edu.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
                    )}
                  </motion.div>

                  <div className="hidden md:block flex-1" />

                  <div className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                  }`}>
                    <motion.div
                      className="group p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/40 hover:shadow-2xl transition-all duration-700 relative overflow-hidden"
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                        <GraduationCap className="w-32 h-32" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex flex-wrap items-center gap-5 mb-6">
                          <motion.div 
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                            className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all shadow-inner"
                          >
                            <GraduationCap className="w-8 h-8 text-primary" />
                          </motion.div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                              {edu.degree}
                            </h3>
                            <p className="text-primary font-bold text-base tracking-wide mt-1">
                              {edu.institution}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-bold text-muted-foreground mb-8">
                          <div className="flex items-center gap-2 bg-secondary/80 px-4 py-2 rounded-xl border border-border/50 shadow-sm">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-secondary/80 px-4 py-2 rounded-xl border border-border/50 shadow-sm">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{edu.location}</span>
                          </div>
                          {edu.score && (
                            <div className="bg-primary/10 text-primary px-4 py-2 rounded-xl border border-primary/20 shadow-sm">
                              Result: {edu.score}
                            </div>
                          )}
                        </div>

                        <p className="text-muted-foreground leading-relaxed text-lg font-medium opacity-90">
                          {edu.description}
                        </p>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}
