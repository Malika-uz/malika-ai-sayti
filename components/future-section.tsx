"use client"

import { motion } from "framer-motion"

export function FutureSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-sm font-mono text-primary tracking-widest">KELAJAK VIZIONI</span>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-6 mb-8 leading-tight">
            The Future of
            <br />
            <span className="text-primary glow-text-cyan">Human-AI Symbiosis</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            MALIKA envisions a world where artificial intelligence seamlessly augments human capability. 
            Where your thoughts become actions, your voice commands reality, and your digital environment 
            anticipates your every need. This is not just an operating tizim—it is the foundation of 
            a new era in computing.
          </p>

          {/* Vision points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "2024",
                subtitle: "Foundation",
                description: "Core AI tizims and voice intelligence deployment",
              },
              {
                title: "2025",
                subtitle: "Expansion",
                description: "Full autonomous agent integration and neural vision",
              },
              {
                title: "2026",
                subtitle: "Evolution",
                description: "Complete human-AI symbiosis across all devices",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-panel rounded-xl p-8 glow-border-cyan"
              >
                <div className="text-4xl font-bold text-primary glow-text-cyan mb-2">{item.title}</div>
                <div className="text-lg font-semibold text-foreground mb-3">{item.subtitle}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 text-xl md:text-2xl italic text-muted-foreground"
          >
            {'"The best way to predict the future is to create it."'}
            <footer className="mt-4 text-sm font-mono text-primary not-italic">
              — MALIKA MANIFESTO
            </footer>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  )
}
