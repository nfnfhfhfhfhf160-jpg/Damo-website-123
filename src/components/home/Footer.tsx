
"use client"

import React from 'react'
import { Leaf, Send, Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-28 pb-14 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 lg:col-span-1 space-y-10">
            <div className="flex items-center space-x-3">
              <div className="bg-accent p-2 rounded-xl">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <span className="font-headline font-black text-3xl tracking-tighter">ELEMENTA</span>
            </div>
            <p className="text-white/60 text-base leading-loose font-medium">
              Elevating everyday living with thoughtfully curated furniture. We believe in the harmony of function, comfort, and unparalleled aesthetics.
            </p>
            <div className="flex space-x-5">
               {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                 <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 group">
                    <Icon className="w-5 h-5 group-hover:scale-110" />
                 </a>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 lg:col-span-3 gap-16">
            <div className="space-y-8">
              <h4 className="font-black text-accent text-xs uppercase tracking-[0.2em]">Our Collections</h4>
              <ul className="space-y-5 text-white/70 text-sm font-bold">
                <li><a href="#" className="hover:text-accent transition-colors">Living Room Luxury</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Master Bedroom</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Kitchen & Dining</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Executive Office</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="font-black text-accent text-xs uppercase tracking-[0.2em]">Information</h4>
              <ul className="space-y-5 text-white/70 text-sm font-bold">
                <li><a href="#" className="hover:text-accent transition-colors">Heritage & Craft</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Our Designers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Showroom Locator</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="font-black text-accent text-xs uppercase tracking-[0.2em]">Newsletter</h4>
              <p className="text-white/50 text-xs font-bold leading-relaxed">Subscribe to receive inspiration, product launches, and exclusive offers.</p>
              <div className="relative">
                <Input 
                  placeholder="Your Email Address" 
                  className="bg-white/5 border-white/10 h-16 rounded-2xl pl-6 pr-16 text-white placeholder:text-white/30 font-bold text-sm focus:ring-accent"
                />
                <Button className="absolute right-2 top-2 h-12 w-12 rounded-xl bg-accent hover:bg-white hover:text-accent transition-all duration-300 shadow-xl">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-14 flex flex-col md:flex-row justify-between items-center text-white/40 text-[10px] font-black tracking-[0.3em] uppercase">
          <p>© 2024 Elementa Living. Crafting Excellence.</p>
          <div className="flex space-x-10 mt-8 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
