"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-sky-500 to-cyan-500",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Programming",
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "C", level: 75 },
      { name: "C++", level: 70 },
      { name: "Java", level: 60 },
    ],
  },
  {
    title: "Tools",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
    ],
  },
  {
    title: "Soft Skills",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Problem Solving", level: 85 },
      { name: "Communication", level: 80 },
      { name: "Team Work", level: 85 },
      { name: "Quick Learner", level: 90 },
    ],
  },
];

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 pattern-grid opacity-20 dark:opacity-10" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
            Capability
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="mt-6 w-16 h-1.5 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: categoryIndex * 0.2, 
                  ease: [0.21, 1, 0.44, 1] 
                }}
                className="group p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 category-gradient" style={{ backgroundImage: `linear-gradient(to right, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})` }} />
                
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} animate-pulse`} />
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                        ease: "easeOut"
                      }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2.5 rounded-full bg-secondary overflow-hidden p-[1px]">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0, opacity: 0 }}
                          whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            width: { duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.15), ease: [0.33, 1, 0.68, 1] },
                            opacity: { duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {["React", "Next.js", "TypeScript", "Tailwind", "Motion", "Node.js", "Three.js", "Git"].map(
            (tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5, rotate: 2 }}
                className="px-6 py-3 rounded-2xl bg-secondary/50 backdrop-blur-sm text-secondary-foreground font-bold text-sm border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer shadow-sm hover:shadow-xl"
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
