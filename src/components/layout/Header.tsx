
"use client"

import React from 'react'
import { Search, ShoppingBag, User, Leaf } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

export const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 shadow-sm">
      {/* Top Notification Bar */}
      <div className="bg-primary text-white py-2.5 px-6 text-center text-xs md:text-sm font-medium tracking-wide">
        Sign up and <span className="text-accent font-bold">GET 25% OFF</span> for your first order. <span className="underline cursor-pointer">Sign up now.</span>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-border/40 py-5 px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="bg-primary p-1.5 rounded-lg group-hover:bg-accent transition-colors duration-300">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="font-headline font-bold text-2xl tracking-tighter text-primary">ELEMENTA</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center space-x-10">
          {['Home', 'Shop', 'Categories', 'About Us', 'Contact Us'].map((item, idx) => (
            <li key={item} className="relative group">
              <a href="#" className={`text-sm font-bold tracking-tight hover:text-accent transition-colors ${idx === 0 ? 'text-accent' : 'text-primary'}`}>
                {item}
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

        {/* Icons */}
        <div className="flex items-center space-x-3 md:space-x-6">
          <button className="p-2 hover:bg-background rounded-full transition-colors text-primary">
            <Search className="w-5 h-5" />
          </button>
          <div className="relative cursor-pointer p-2 hover:bg-background rounded-full transition-colors">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <Badge className="absolute -top-0.5 -right-0.5 bg-accent text-white h-5 w-5 flex items-center justify-center p-0 border-2 border-white text-[10px] font-bold rounded-full">
              3
            </Badge>
          </div>
          <button className="p-2 hover:bg-background rounded-full transition-colors text-primary">
            <User className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </header>
  )
}
