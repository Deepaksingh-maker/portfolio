"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Rocket } from "lucide-react";

export function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <div className="mt-6 w-16 h-1.5 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative p-10 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/40 transition-all duration-700 hover:shadow-2xl">
              <div className="flex flex-col md:flex-row gap-8 md:items-center">
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-inner"
                  whileHover={{ rotate: -5 }}
                >
                  <Briefcase className="w-10 h-10 text-primary" />
                </motion.div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        Skillfilled Mentor
                      </h3>
                      <p className="text-primary font-bold tracking-wide">Frontend Developer Intern</p>
                    </div>
                    <span className="px-5 py-2 rounded-xl bg-secondary font-bold text-primary border border-primary/20 shadow-sm">
                      1 Month
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Spearheaded the development of responsive UI modules, collaborating with senior developers 
                     to integrate modern React patterns and Tailwind optimizations for seamless user flows.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-12 rounded-[2.5rem] bg-secondary/20 border-2 border-dashed border-border/50 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex flex-col items-center max-w-lg mx-auto">
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <Rocket className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Open to New Horizons
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Currently exploring roles where I can leverage my React expertise and 
                passion for UI design to build impactful digital products.
              </p>
              
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-primary text-white font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Build Something Together
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
