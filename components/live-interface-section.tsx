"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function LiveInterfaceSection() {
  const [activePanel, setActivePanel] = useState(0)
  const [waveformData, setWaveformData] = useState<number[]>([])
  
  useEffect(() => {
    // Generate random waveform data
    const interval = setInterval(() => {
      setWaveformData(Array.from({ length: 40 }, () => Math.random() * 100))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Cycle through panels
    const interval = setInterval(() => {
      setActivePanel((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-widest">INTERFACE PREVIEW</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Live <span className="text-primary glow-text-cyan">Operating System</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A glimpse into the MALIKA interface - where AI and human interaction converge seamlessly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main interface container */}
          <div className="glass-panel rounded-2xl p-6 glow-border-cyan overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="font-mono text-xs text-primary">MALIKA OS v0.9.1</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs text-muted-foreground">ULANGAN</span>
              </div>
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Voice Waveform Panel */}
              <div className="lg:col-span-2 glass-panel rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm text-primary">VOICE_INTERFACE</span>
                  <span className="text-xs text-muted-foreground">LISTENING</span>
                </div>
                <div className="h-24 flex items-center justify-center gap-[2px]">
                  {waveformData.map((height, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-primary rounded-full"
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.1 }}
                      style={{ minHeight: 4 }}
                    />
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground font-mono">{'"Open my calendar and schedule a meeting for tomorrow at 2pm"'}</p>
                </div>
              </div>

              {/* AI Status Panel */}
              <div className="glass-panel rounded-xl p-4">
                <span className="font-mono text-sm text-primary">AI_STATUS</span>
                <div className="mt-4 space-y-3">
                  {[
                    { label: "Processing", value: 87 },
                    { label: "Memory", value: 45 },
                    { label: "Network", value: 92 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="text-primary">{item.value}%</span>
                      </div>
                      <div className="h-1 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.value}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Tasks Panel */}
              <div className="glass-panel rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm text-primary">ISHLAMOQDA_TASKS</span>
                  <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">3 ISHLAYAPTI</span>
                </div>
                <div className="space-y-2">
                  {[
                    { name: "Calendar Sync", status: "active" },
                    { name: "Email Analysis", status: "active" },
                    { name: "Screen Monitor", status: "idle" },
                  ].map((task, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded bg-secondary/30">
                      <span className="text-xs">{task.name}</span>
                      <span className={`w-2 h-2 rounded-full ${task.status === "active" ? "bg-primary animate-pulse" : "bg-muted-foreground"}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Thinking Panel */}
              <div className="glass-panel rounded-xl p-4">
                <span className="font-mono text-sm text-primary">AI_THINKING</span>
                <div className="mt-4 space-y-2">
                  <motion.div
                    animate={{ opacity: activePanel === 0 ? 1 : 0.3 }}
                    className="text-xs text-muted-foreground"
                  >
                    → Parsing voice command...
                  </motion.div>
                  <motion.div
                    animate={{ opacity: activePanel === 1 ? 1 : 0.3 }}
                    className="text-xs text-muted-foreground"
                  >
                    → Accessing calendar API...
                  </motion.div>
                  <motion.div
                    animate={{ opacity: activePanel === 2 ? 1 : 0.3 }}
                    className="text-xs text-muted-foreground"
                  >
                    → Finding available slots...
                  </motion.div>
                  <motion.div
                    animate={{ opacity: activePanel === 3 ? 1 : 0.3 }}
                    className="text-xs text-muted-foreground"
                  >
                    → Confirming appointment...
                  </motion.div>
                </div>
              </div>

              {/* Telemetry Panel */}
              <div className="glass-panel rounded-xl p-4">
                <span className="font-mono text-sm text-primary">TELEMETRY</span>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {[
                    { label: "CPU", value: "23%" },
                    { label: "RAM", value: "4.2GB" },
                    { label: "GPU", value: "45%" },
                    { label: "TEMP", value: "42°C" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="text-lg font-bold text-primary">{item.value}</div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-primary/50" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-primary/50" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
        </motion.div>
      </div>
    </section>
  )
}
