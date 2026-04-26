
"use client"

import React from 'react'
import { Leaf, Send, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white pt-28 pb-14 px-6 md:px-12 border-t border-white/5">
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
              Elevating everyday living through bespoke furniture and architectural interior design.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 text-sm font-bold text-white/70">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>245 Fifth Avenue, Manhattan, NY 10016</span>
              </div>
              <div className="flex items-center space-x-4 text-sm font-bold text-white/70">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+1 (212) 555-0123</span>
              </div>
              <div className="flex items-center space-x-4 text-sm font-bold text-white/70">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>hello@elementaliving.com</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 lg:col-span-3 gap-16">
            <div className="space-y-8">
              <h4 className="font-black text-accent text-xs uppercase tracking-[0.2em]">Our Services</h4>
              <ul className="space-y-5 text-white/70 text-sm font-bold">
                <li><a href="#" className="hover:text-accent transition-colors">Interior Consultation</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Custom Furnishing</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Architectural Planning</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Project Management</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="font-black text-accent text-xs uppercase tracking-[0.2em]">Quick Links</h4>
              <ul className="space-y-5 text-white/70 text-sm font-bold">
                <li><a href="#" className="hover:text-accent transition-colors">Our Showrooms</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">The Design Team</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Sustainability</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="font-black text-accent text-xs uppercase tracking-[0.2em]">Newsletter</h4>
              <p className="text-white/50 text-xs font-bold leading-relaxed">Join our design inner circle for exclusive previews.</p>
              <div className="flex space-x-5 mt-4">
               {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                 <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 group">
                    <Icon className="w-5 h-5 group-hover:scale-110" />
                 </a>
               ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-14 flex flex-col md:flex-row justify-between items-center text-white/40 text-[10px] font-black tracking-[0.3em] uppercase">
          <p>© 2024 Elementa Living. Architectural Excellence.</p>
          <div className="flex space-x-10 mt-8 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
