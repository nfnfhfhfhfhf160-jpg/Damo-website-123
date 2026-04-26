
"use client"

import React from 'react'
import { Search, ShoppingBag, User, Star, Facebook, Instagram, Twitter, Phone, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const Header = () => {
  return (
    <header className="w-full">
      {/* Top Notification Bar */}
      <div className="bg-primary text-white py-2.5 px-6 flex justify-between items-center text-xs md:text-sm font-medium">
        <div className="hidden md:flex items-center space-x-4 opacity-90">
          <div className="flex items-center space-x-2">
            <Phone className="w-3.5 h-3.5" />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center space-x-3">
            <Facebook className="w-3.5 h-3.5 cursor-pointer hover:text-accent transition-colors" />
            <Instagram className="w-3.5 h-3.5 cursor-pointer hover:text-accent transition-colors" />
            <Twitter className="w-3.5 h-3.5 cursor-pointer hover:text-accent transition-colors" />
          </div>
        </div>
        <div className="flex-1 text-center font-headline tracking-wide">
          Sign up and <span className="text-accent font-bold">GET 25% OFF</span> for your first order. <span className="underline cursor-pointer">Sign up now.</span>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <div className="flex space-x-0.5 text-accent">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="opacity-90 ml-2">4.9 (15k+ Reviews)</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-border/40 py-5 px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="bg-primary p-1.5 rounded-lg group-hover:bg-accent transition-colors">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight text-primary">ELEMENTA <span className="text-accent">LIVING</span></span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center space-x-10 relative">
          {['Home', 'Shop', 'Categories', 'About Us', 'Contact Us', 'Blog'].map((item, idx) => (
            <li key={item} className="relative group">
              <a href="#" className={`text-sm font-semibold hover:text-accent transition-colors ${idx === 0 ? 'text-accent' : 'text-primary'}`}>
                {item}
              </a>
              {idx === 0 && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />
              )}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-accent/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 pointer-events-none" />
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-3 md:space-x-5">
          <button className="p-2 hover:bg-secondary rounded-full transition-colors text-primary">
            <Search className="w-5 h-5" />
          </button>
          <div className="relative group cursor-pointer p-2 hover:bg-secondary rounded-full transition-colors">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <Badge className="absolute -top-1 -right-1 bg-accent text-white h-5 w-5 flex items-center justify-center p-0 border-2 border-white text-[10px] font-bold">
              3
            </Badge>
          </div>
          <button className="p-2 hover:bg-secondary rounded-full transition-colors text-primary">
            <User className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </header>
  )
}
