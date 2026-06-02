"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { motion } from "framer-motion"
import * as THREE from "three"

function RotatingRing({ radius, speed, thickness, segments }: { radius: number; speed: number; thickness: number; segments: number }) {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed * 0.5
      ref.current.rotation.y = state.clock.elapsedTime * speed
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2
    }
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, thickness, 16, segments]} />
      <meshBasicMaterial color="#00d4ff" transparent opacity={0.3} wireframe />
    </mesh>
  )
}

function EnergyCore() {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (ref.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      ref.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.5, 1]} />
      <meshBasicMaterial color="#00d4ff" transparent opacity={0.8} wireframe />
    </mesh>
  )
}

function OrbitParticles() {
  const ref = useRef<THREE.Points>(null)
  const particleCount = 200
  
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * Math.PI * 2
    const radius = 1.5 + Math.random() * 1.5
    positions[i * 3] = Math.cos(angle) * radius
    positions[i * 3 + 1] = (Math.random() - 0.5) * 0.5
    positions[i * 3 + 2] = Math.sin(angle) * radius
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#00d4ff" size={0.03} transparent opacity={0.6} />
    </points>
  )
}

function AIIndicators() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -state.clock.elapsedTime * 0.1
    }
  })

  const indicators = [
    { pos: [2.5, 0, 0], label: "VOICE" },
    { pos: [-2.5, 0, 0], label: "VISION" },
    { pos: [0, 2.5, 0], label: "AGENT" },
    { pos: [0, -2.5, 0], label: "MEMORY" },
  ]

  return (
    <group ref={groupRef}>
      {indicators.map((indicator, i) => (
        <mesh key={i} position={indicator.pos as [number, number, number]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#00d4ff" />
        </mesh>
      ))}
    </group>
  )
}

function AICore3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} color="#00d4ff" intensity={2} />
      
      <EnergyCore />
      <RotatingRing radius={1.2} speed={0.5} thickness={0.02} segments={64} />
      <RotatingRing radius={1.8} speed={-0.3} thickness={0.015} segments={80} />
      <RotatingRing radius={2.4} speed={0.2} thickness={0.01} segments={96} />
      <OrbitParticles />
      <AIIndicators />
    </Canvas>
  )
}

export function AICoreSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-primary tracking-widest">NEURAL ARCHITECTURE</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            The <span className="text-primary glow-text-cyan">AI Core</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A revolutionary neural processing tizim that powers all MALIKA capabilities. 
            Watch the energy flow through interconnected AI tizims.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-[500px] md:h-[600px] lg:h-[700px]"
        >
          <AICore3D />
          
          {/* Floating labels */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 glass-panel px-4 py-2 rounded-lg"
            >
              <span className="text-xs font-mono text-primary">VOICE_INTEL</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/3 right-1/4 glass-panel px-4 py-2 rounded-lg"
            >
              <span className="text-xs font-mono text-primary">NEURAL_VIS</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute bottom-1/3 left-1/3 glass-panel px-4 py-2 rounded-lg"
            >
              <span className="text-xs font-mono text-primary">AGENT_SYS</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute bottom-1/4 right-1/3 glass-panel px-4 py-2 rounded-lg"
            >
              <span className="text-xs font-mono text-primary">MEM_SYNC</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: "10B+", label: "Parameters" },
            { value: "<50ms", label: "Response Time" },
            { value: "99.9%", label: "Uptime" },
            { value: "∞", label: "Scalability" },
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-6 rounded-xl text-center glow-border-cyan">
              <div className="text-3xl md:text-4xl font-bold text-primary glow-text-cyan">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-2 font-mono">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
