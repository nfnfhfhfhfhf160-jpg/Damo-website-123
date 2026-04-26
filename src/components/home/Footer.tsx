
"use client"

import React from 'react'
import { Leaf, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1 space-y-8">
            <div className="flex items-center space-x-2">
              <div className="bg-accent p-1.5 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="font-headline font-bold text-2xl tracking-tight">ELEMENTA</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              Elevating everyday living with thoughtfully curated furniture. We believe in the harmony of function, comfort, and unparalleled aesthetics.
            </p>
            <div className="space-y-4">
              <h4 className="font-bold text-white text-sm uppercase tracking-widest">Subscribe to Newsletter</h4>
              <div className="relative">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/5 border-white/10 h-14 rounded-2xl pl-6 pr-16 text-white placeholder:text-white/30"
                />
                <Button className="absolute right-2 top-2 h-10 w-10 rounded-xl bg-accent hover:bg-white hover:text-accent transition-colors">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 lg:col-span-3 gap-12">
            <div className="space-y-6">
              <h4 className="font-bold text-accent text-sm uppercase tracking-widest">Our Store</h4>
              <ul className="space-y-4 text-white/60 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Living Room</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bed Room</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kitchen & Dining</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Office Furniture</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-accent text-sm uppercase tracking-widest">Information</h4>
              <ul className="space-y-4 text-white/60 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-accent text-sm uppercase tracking-widest">Support</h4>
              <ul className="space-y-4 text-white/60 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Order Tracking</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs font-bold tracking-widest uppercase">
          <p>© 2024 Elementa Living. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Facebook</a>
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
