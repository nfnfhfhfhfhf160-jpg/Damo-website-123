
"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star } from 'lucide-react'
import { IMAGE_ASSETS } from '@/lib/image-assets'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="relative px-6 md:px-12 py-12 md:py-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary leading-[1.05] tracking-tight">
              Explore Our <span className="text-accent italic">Modern</span> Furniture Collection
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed font-body font-medium">
              Discover elegant pieces meticulously crafted to transform your living space into a sanctuary of style and comfort. Modern aesthetics meet timeless craftsmanship.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-bold flex items-center group transition-all duration-300 shadow-xl shadow-primary/20">
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="#" className="text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-all duration-300">
              View All Products
            </a>
          </div>

          <div className="flex items-center space-x-5 pt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-14 h-14 rounded-full border-4 border-white overflow-hidden relative shadow-md">
                  <img 
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="User avatar" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-14 h-14 rounded-full border-4 border-white bg-accent flex items-center justify-center text-white font-black text-xs shadow-md">
                50K+
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center text-accent">
                <span className="font-black text-2xl tracking-tighter">4.9</span>
                <Star className="w-5 h-5 fill-current ml-1" />
                <span className="text-primary font-bold ml-1">Ratings+</span>
              </div>
              <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest opacity-60">Trusted by 50K+ Customers</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Images */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-[500px] md:h-[650px]"
        >
          <div className="relative w-full h-full">
            {/* Main Image Card */}
            <div className="absolute top-0 right-0 w-[88%] h-[80%] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white z-10">
              <img 
                src={IMAGE_ASSETS.HERO_MAIN} 
                alt="Main furniture display" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-3xl flex justify-between items-center shadow-2xl border border-border/20">
                <div>
                  <h3 className="font-headline font-black text-primary text-xl tracking-tight">Living Room</h3>
                  <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase">2,500+ Luxury Items</p>
                </div>
                <Button size="icon" className="rounded-2xl bg-primary hover:bg-accent h-14 w-14 transition-all duration-300">
                  <ArrowRight className="w-6 h-6 text-white" />
                </Button>
              </div>
            </div>

            {/* Secondary Overlapping Card */}
            <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white z-20">
              <img 
                src={IMAGE_ASSETS.SOFA_CATEGORY} 
                alt="Secondary furniture piece" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute top-6 right-6 bg-accent text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg">
                Premium
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
