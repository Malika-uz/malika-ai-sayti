"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface Update {
  id: string
  title: string
  description: string
  category: string
  status: string
  date: string
}

interface SystemStatus {
  name: string
  status: string
  isOnline: boolean
}

const initialUpdates: Update[] = [
  {
    id: "1",
    title: "Neural Ko‘rish Tizimi 2.0 Released",
    description: "Enhanced object recognition with 40% faster processing.",
    category: "VISION SYSTEM",
    status: "JOYLANDI",
    date: "2024-01-15",
  },
  {
    id: "2",
    title: "Voice Lock Xavfsizlik Patch",
    description: "Critical security update for voice authentication.",
    category: "SECURITY",
    status: "JOYLANDI",
    date: "2024-01-12",
  },
]

const initialSystemStatus: SystemStatus[] = [
  { name: "AI Core", status: "FAOL", isOnline: true },
  { name: "Voice Lock", status: "ISHLAMOQDA", isOnline: true },
  { name: "Neural Ko‘rish Tizimi", status: "TAYYOR", isOnline: true },
  { name: "Memory Sync", status: "ULANGAN", isOnline: true },
  { name: "Agent System", status: "ISHLAYAPTI", isOnline: true },
  { name: "Network Status", status: "HIMOYALANGAN", isOnline: true },
]

const categories = [
  "CORE UPDATE",
  "AI SYSTEM",
  "SECURITY",
  "UI UPDATE",
  "VOICE SYSTEM",
  "VISION SYSTEM",
  "AGENT SYSTEM",
]

const statuses = ["JOYLANDI", "SINOVDA", "ISHLANMOQDA"]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"yangilanishlar" | "tizim" | "media">("yangilanishlar")
  const [yangilanishlar, setUpdates] = useState<Update[]>(initialUpdates)
  const [tizimStatus, setSystemStatus] = useState<SystemStatus[]>(initialSystemStatus)
  const [showNewUpdateForm, setShowNewUpdateForm] = useState(false)
  const [newUpdate, setNewUpdate] = useState({
    title: "",
    description: "",
    category: "CORE UPDATE",
    status: "ISHLANMOQDA",
  })

  const handleAddUpdate = () => {
    if (newUpdate.title && newUpdate.description) {
      setUpdates([
        {
          id: Date.now().toString(),
          ...newUpdate,
          date: new Date().toISOString().split("T")[0],
        },
        ...yangilanishlar,
      ])
      setNewUpdate({
        title: "",
        description: "",
        category: "CORE UPDATE",
        status: "ISHLANMOQDA",
      })
      setShowNewUpdateForm(false)
    }
  }

  const handleDeleteUpdate = (id: string) => {
    setUpdates(yangilanishlar.filter((u) => u.id !== id))
  }

  const toggleSystemStatus = (index: number) => {
    const newStatus = [...tizimStatus]
    newStatus[index].isOnline = !newStatus[index].isOnline
    newStatus[index].status = newStatus[index].isOnline ? "FAOL" : "OFFLINE"
    setSystemStatus(newStatus)
  }

  return (
    <main className="min-h-screen p-4 md:p-8 relative">
      <div className="scanlines" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <Link href="/" className="text-2xl font-bold text-primary glow-text-cyan">
              MALIKA
            </Link>
            <p className="text-sm text-muted-foreground font-mono mt-1">ADMIN DASHBOARD</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-muted-foreground">SYSTEM ISHLAMOQDA</span>
            </div>
            <Link
              href="/"
              className="px-4 py-2 glass-panel rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Exit Dashboard
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {[
            { id: "yangilanishlar", label: "Updates" },
            { id: "tizim", label: "Tizim Holati" },
            { id: "media", label: "Media Library" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground glow-cyan"
                  : "glass-panel text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Updates Tab */}
          {activeTab === "yangilanishlar" && (
            <div className="space-y-6">
              {/* Add Update Button */}
              <button
                onClick={() => setShowNewUpdateForm(!showNewUpdateForm)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity glow-cyan"
              >
                {showNewUpdateForm ? "Cancel" : "+ New Update"}
              </button>

              {/* New Update Form */}
              {showNewUpdateForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="glass-panel rounded-xl p-6 glow-border-cyan"
                >
                  <h3 className="font-semibold mb-4">Create New Update</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-mono text-muted-foreground mb-2">
                        TITLE
                      </label>
                      <input
                        type="text"
                        value={newUpdate.title}
                        onChange={(e) => setNewUpdate({ ...newUpdate, title: e.target.value })}
                        className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                        placeholder="Update title..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-mono text-muted-foreground mb-2">
                        CATEGORY
                      </label>
                      <select
                        value={newUpdate.category}
                        onChange={(e) => setNewUpdate({ ...newUpdate, category: e.target.value })}
                        className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-mono text-muted-foreground mb-2">
                        DESCRIPTION
                      </label>
                      <textarea
                        value={newUpdate.description}
                        onChange={(e) => setNewUpdate({ ...newUpdate, description: e.target.value })}
                        className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary resize-none"
                        rows={3}
                        placeholder="Update description..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-mono text-muted-foreground mb-2">
                        STATUS
                      </label>
                      <select
                        value={newUpdate.status}
                        onChange={(e) => setNewUpdate({ ...newUpdate, status: e.target.value })}
                        className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                      >
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button
                    onClick={handleAddUpdate}
                    className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Publish Update
                  </button>
                </motion.div>
              )}

              {/* Updates List */}
              <div className="space-y-4">
                {yangilanishlar.map((update) => (
                  <div
                    key={update.id}
                    className="glass-panel rounded-xl p-6 glow-border-cyan flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-mono px-2 py-1 rounded bg-primary/20 text-primary">
                          {update.category}
                        </span>
                        <span className={`text-xs font-mono ${
                          update.status === "JOYLANDI" ? "text-green-400" :
                          update.status === "SINOVDA" ? "text-yellow-400" : "text-blue-400"
                        }`}>
                          {update.status}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground">{update.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{update.description}</p>
                      <span className="text-xs text-muted-foreground mt-2 block">{update.date}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteUpdate(update.id)}
                      className="px-4 py-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tizim Holati Tab */}
          {activeTab === "tizim" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tizimStatus.map((item, index) => (
                <div
                  key={item.name}
                  className="glass-panel rounded-xl p-6 glow-border-cyan"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <button
                      onClick={() => toggleSystemStatus(index)}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        item.isOnline ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 rounded-full bg-foreground transition-transform ${
                          item.isOnline ? "left-7" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.isOnline ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
                    <span className={`text-sm font-mono ${item.isOnline ? "text-green-400" : "text-red-400"}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Media Library Tab */}
          {activeTab === "media" && (
            <div className="glass-panel rounded-xl p-8 glow-border-cyan text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/50 flex items-center justify-center">
                <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Media Library</h3>
              <p className="text-muted-foreground mb-6">
                Upload and manage images and videos for your yangilanishlar.
              </p>
              <div className="border-2 border-dashed border-border rounded-xl p-8 hover:border-primary/50 transition-colors cursor-pointer">
                <p className="text-sm text-muted-foreground">
                  Drag and drop files here, or click to browse
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: "Total Updates", value: yangilanishlar.length.toString() },
            { label: "Systems Online", value: tizimStatus.filter((s) => s.isOnline).length.toString() },
            { label: "Deployed", value: yangilanishlar.filter((u) => u.status === "JOYLANDI").length.toString() },
            { label: "In Progress", value: yangilanishlar.filter((u) => u.status !== "JOYLANDI").length.toString() },
          ].map((stat) => (
            <div key={stat.label} className="glass-panel rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
