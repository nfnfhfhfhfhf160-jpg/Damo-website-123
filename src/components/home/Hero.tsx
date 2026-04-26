
"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, PhoneCall } from 'lucide-react'
import { IMAGE_ASSETS } from '@/lib/image-assets'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="relative px-6 md:px-12 py-12 md:py-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <Badge className="bg-accent/10 text-accent border-none px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest">
              Established 1998
            </Badge>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary leading-[1.05] tracking-tight">
              Crafting <span className="text-accent italic">Legacy</span> Spaces & Timeless Furniture
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed font-body font-medium">
              At Elementa, we don't just sell furniture; we design environments. Explore our signature craftsmanship and visit our luxury showrooms to experience the harmony of form and function.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-bold flex items-center group transition-all duration-300 shadow-xl shadow-primary/20">
              Our Showrooms
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="rounded-full border-2 border-primary text-primary px-10 py-7 text-lg font-bold flex items-center group transition-all duration-300">
              <PhoneCall className="mr-2 w-5 h-5" />
              Contact Studio
            </Button>
          </div>

          <div className="flex items-center space-x-5 pt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-14 h-14 rounded-full border-4 border-white overflow-hidden relative shadow-md">
                  <img 
                    src={`https://picsum.photos/seed/designer${i}/100/100`} 
                    alt="Our Designer" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <p className="text-primary font-black text-xl tracking-tighter">Award-Winning Studio</p>
              <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest opacity-60">Over 25 Years of Excellence</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-[500px] md:h-[650px]"
        >
          <div className="relative w-full h-full">
            <div className="absolute top-0 right-0 w-[88%] h-[80%] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white z-10">
              <img 
                src={IMAGE_ASSETS.HERO_MAIN} 
                alt="Elementa Studio Main" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-border/20">
                <h3 className="font-headline font-black text-primary text-xl tracking-tight">The Heritage Collection</h3>
                <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase">Visit our Flagship Studio</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white z-20">
              <img 
                src={IMAGE_ASSETS.SOFA_CATEGORY} 
                alt="Craftsmanship detail" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
import { Badge } from '@/components/ui/badge'
