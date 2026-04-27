
"use client"

import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Minimalist Penthouse",
    location: "Upper East Side, NY",
    category: "Interior Design",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
  },
  {
    title: "The Nordic Retreat",
    location: "Oslo, Norway",
    category: "Full Furnishing",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80"
  },
  {
    title: "Corporate Zen Hub",
    location: "Silicon Valley, CA",
    category: "Office Solutions",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
  }
]

export const FeaturedProjects = () => {
  return (
    <section className="px-6 md:px-12 py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <span className="text-accent font-black tracking-[0.3em] uppercase text-xs">- Our Signature Work</span>
          <h2 className="text-5xl md:text-6xl font-headline font-black text-primary tracking-tight">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  referrerPolicy="no-referrer"
                  loading="eager"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white p-5 rounded-full shadow-2xl scale-50 group-hover:scale-100 transition-transform">
                    <ArrowUpRight className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-accent font-black text-[10px] uppercase tracking-widest">{p.category}</p>
                <h3 className="text-2xl font-headline font-black text-primary">{p.title}</h3>
                <p className="text-muted-foreground text-sm font-medium">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
