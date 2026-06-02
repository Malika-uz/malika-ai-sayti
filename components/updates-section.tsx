"use client"

import { motion } from "framer-motion"

const yangilanishlar = [
  {
    title: "Neural Ko‘rish Tizimi 2.0 Released",
    description: "Enhanced object recognition with 40% faster processing and improved accuracy in low-light conditions.",
    category: "VISION SYSTEM",
    date: "2024-01-15",
    status: "JOYLANDI",
  },
  {
    title: "Voice Lock Xavfsizlik Patch",
    description: "Critical security update improving voice biometric authentication with anti-spoofing measures.",
    category: "SECURITY",
    date: "2024-01-12",
    status: "JOYLANDI",
  },
  {
    title: "Agent System v3.5",
    description: "New autonomous agent capabilities with improved task chaining and error recovery.",
    category: "AGENT SYSTEM",
    date: "2024-01-10",
    status: "JOYLANDI",
  },
  {
    title: "Core Architecture Optimization",
    description: "Major performance improvements to the AI core reducing latency by 25%.",
    category: "CORE UPDATE",
    date: "2024-01-08",
    status: "JOYLANDI",
  },
  {
    title: "Memory Sync Protocol Update",
    description: "Enhanced cross-device memory synchronization with improved conflict resolution.",
    category: "AI SYSTEM",
    date: "2024-01-05",
    status: "SINOVDA",
  },
  {
    title: "UI Framework Refresh",
    description: "New holographic interface components and improved accessibility features.",
    category: "UI UPDATE",
    date: "2024-01-03",
    status: "ISHLANMOQDA",
  },
]

const categoryColors: Record<string, string> = {
  "VISION SYSTEM": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "SECURITY": "bg-red-500/20 text-red-400 border-red-500/30",
  "AGENT SYSTEM": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "CORE UPDATE": "bg-primary/20 text-primary border-primary/30",
  "AI SYSTEM": "bg-green-500/20 text-green-400 border-green-500/30",
  "UI UPDATE": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "VOICE SYSTEM": "bg-pink-500/20 text-pink-400 border-pink-500/30",
}

const statusColors: Record<string, string> = {
  "JOYLANDI": "text-green-400",
  "SINOVDA": "text-yellow-400",
  "ISHLANMOQDA": "text-blue-400",
}

export function UpdatesSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-widest">ISHLANMOQDA LOG</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            System <span className="text-primary glow-text-cyan">Updates</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Track the evolution of MALIKA with our live development changelog.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {yangilanishlar.map((update, index) => (
            <motion.div
              key={update.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"} mb-8`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-cyan z-10" />
              
              {/* Card */}
              <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 pl-8 md:pl-0" : "md:pl-8 pl-8"}`}>
                <div className="glass-panel rounded-xl p-6 glow-border-cyan group hover:scale-[1.02] transition-transform duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`text-xs font-mono px-2 py-1 rounded border ${categoryColors[update.category] || "bg-primary/20 text-primary border-primary/30"}`}>
                      {update.category}
                    </span>
                    <span className={`text-xs font-mono ${statusColors[update.status] || "text-muted-foreground"}`}>
                      {update.status}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {update.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {update.description}
                  </p>
                  
                  {/* Date */}
                  <span className="text-xs font-mono text-muted-foreground">
                    {update.date}
                  </span>
                  
                  {/* Holographic effect */}
                  <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
