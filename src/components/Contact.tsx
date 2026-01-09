"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, Sparkles } from "lucide-react";

export function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "bagheldeepak5400@gmail.com",
      href: "mailto:bagheldeepak5400@gmail.com",
      color: "from-blue-500 to-sky-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Deepaksingh-maker",
      href: "https://github.com/Deepaksingh-maker",
      color: "from-slate-800 to-slate-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "baghel-deepak",
      href: "https://www.linkedin.com/in/baghel-deepak",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, India",
      href: null,
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
            Communication
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Start a <span className="text-gradient">Conversation</span>
          </h2>
          <div className="mt-6 w-16 h-1.5 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {contactLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  {link.href ? (
                    <motion.a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex flex-col p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl"
                      whileHover={{ y: -5 }}
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${link.color} p-[1px] mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                          <link.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                      <p className="text-xs text-primary font-bold uppercase tracking-widest mb-2">
                        {link.label}
                      </p>
                      <p className="text-sm font-bold text-foreground truncate">
                        {link.value}
                      </p>
                    </motion.a>
                  ) : (
                    <div className="flex flex-col p-8 rounded-[2rem] bg-card border border-border/50">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${link.color} p-[1px] mb-6`}>
                        <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                          <link.icon className="w-6 h-6 text-foreground" />
                        </div>
                      </div>
                      <p className="text-xs text-primary font-bold uppercase tracking-widest mb-2">
                        {link.label}
                      </p>
                      <p className="text-sm font-bold text-foreground truncate">
                        {link.value}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="p-10 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-primary/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <Sparkles className="w-24 h-24 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">
                Available for New Projects
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                I'm currently seeking frontend development roles and internship opportunities. 
                Let's discuss how I can bring value to your team.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="p-10 md:p-12 rounded-[2.5rem] bg-card border border-border/50 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-bold text-foreground/70 ml-1 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-border/50 focus:border-primary focus:bg-background transition-all outline-none text-foreground font-medium"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-bold text-foreground/70 ml-1 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-border/50 focus:border-primary focus:bg-background transition-all outline-none text-foreground font-medium"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-bold text-foreground/70 ml-1 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-border/50 focus:border-primary focus:bg-background transition-all outline-none resize-none text-foreground font-medium"
                  placeholder="Tell me about your vision..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitted}
                className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-primary text-white font-bold shadow-xl shadow-primary/20 overflow-hidden transition-all duration-500 disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-all duration-1000" />
                <span className="relative z-10 flex items-center gap-3">
                  {submitted ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Message Delivered
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Transmission
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
