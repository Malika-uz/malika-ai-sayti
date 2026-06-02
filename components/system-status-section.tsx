"use client"

import { motion } from "framer-motion"

const tizimStatus = [
  { name: "AI Core", status: "FAOL", color: "bg-green-500" },
  { name: "Voice Lock", status: "ISHLAMOQDA", color: "bg-primary" },
  { name: "Neural Ko‘rish Tizimi", status: "TAYYOR", color: "bg-green-500" },
  { name: "Memory Sync", status: "ULANGAN", color: "bg-primary" },
  { name: "Agent System", status: "ISHLAYAPTI", color: "bg-green-500" },
  { name: "Network Status", status: "HIMOYALANGAN", color: "bg-green-500" },
]

export function SystemStatusSection() {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-widest">DIAGNOSTIKA</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            System <span className="text-primary glow-text-cyan">Status</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real-time monitoring of all MALIKA subtizims. All tizims operational.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tizimStatus.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel rounded-xl p-6 glow-border-cyan"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  <p className="text-sm font-mono text-primary mt-1">{item.status}</p>
                </div>
                <div className="relative">
                  <div className={`w-4 h-4 rounded-full ${item.color}`} />
                  <div className={`absolute inset-0 w-4 h-4 rounded-full ${item.color} animate-ping opacity-50`} />
                </div>
              </div>
              
              {/* Activity indicator */}
              <div className="mt-4 h-1 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 glass-panel px-6 py-3 rounded-full">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-50" />
            </div>
            <span className="font-mono text-sm">ALL SYSTEMS OPERATIONAL</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
