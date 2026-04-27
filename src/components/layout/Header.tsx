"use client"

import React from 'react'
import { Leaf, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/components/shared/StatusBadge'

export const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 shadow-sm">
      <div className="bg-primary text-white py-2.5 px-6 text-center text-xs md:text-sm font-medium tracking-wide">
        Experience Luxury: Visit our new <span className="text-accent font-bold">MAYFAIR STUDIO</span> in London.
      </div>

      <nav className="bg-white/80 backdrop-blur-md border-b border-border/40 py-5 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="bg-primary p-1.5 rounded-lg group-hover:bg-accent transition-colors duration-300">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="font-headline font-bold text-2xl tracking-tighter text-primary">ELEMENTA</span>
        </div>

        <ul className="hidden lg:flex items-center space-x-10">
          {[
            { name: 'Home', href: '#' },
            { name: 'Studio', href: '#studio' },
            { name: 'Projects', href: '#projects' },
            { name: 'Showrooms', href: '#showrooms' },
            { name: 'Contact', href: '#contact' }
          ].map((item, idx) => (
            <li key={item.name} className="relative group">
              <a href={item.href} className={`text-sm font-bold tracking-tight hover:text-accent transition-colors ${idx === 0 ? 'text-accent' : 'text-primary'}`}>
                {item.name}
              </a>
              {idx === 0 && (
                <motion.div 
                  layoutId="active-nav"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" 
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center gap-4">
            <StatusBadge />
            <div className="flex items-center text-primary font-black text-sm">
              <Phone className="w-4 h-4 mr-2 text-accent" />
              +1 (212) 555-0123
            </div>
          </div>
          <Button className="rounded-full bg-accent hover:bg-primary text-white px-6 font-bold text-xs uppercase tracking-widest transition-all">
            Book Consultation
          </Button>
        </div>
      </nav>
    </header>
  )
}
