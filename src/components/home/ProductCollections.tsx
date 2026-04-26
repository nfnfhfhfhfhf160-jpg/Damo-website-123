
"use client"

import React, { useState, useEffect } from 'react'
import { Heart, Star, Timer, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion, AnimatePresence } from 'framer-motion'

const products = [
  { id: 1, title: "Emerald Velvet Armchair", price: 320.00, discountPrice: 160.00, rating: 4.9, discount: "50% off", img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80' },
  { id: 2, title: "Scandinavian Oak Chair", price: 210.00, discountPrice: 189.00, rating: 4.8, discount: "10% off", img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80' },
  { id: 3, title: "Minimalist Brass Light", price: 150.00, discountPrice: 120.00, rating: 4.7, discount: "20% off", img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80' },
  { id: 4, title: "Linen Sectional Sofa", price: 1800.00, discountPrice: 1260.00, rating: 5.0, discount: "30% off", img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80' },
  { id: 5, title: "Walnut Coffee Table", price: 450.00, discountPrice: 360.00, rating: 4.6, discount: "20% off", img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80' },
]

export const ProductCollections = () => {
  const [activeTab, setActiveTab] = useState('All Products')
  const tabs = ['All Products', 'Latest Products', 'Best Sellers']
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, mins: 45, secs: 30 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 }
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 }
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="px-6 md:px-12 py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-black tracking-[0.3em] uppercase text-xs"
          >
            - Curated Selection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-headline font-black text-primary tracking-tight"
          >
            Our Products Collections
          </motion.h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-10 py-4 rounded-full text-sm font-black tracking-tight transition-all duration-500 border-2 ${
                activeTab === tab 
                  ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-110' 
                  : 'bg-white text-primary border-transparent hover:border-accent hover:text-accent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          {products.map((p, idx) => {
            // Inject Flash Sale Card at specific index
            if (idx === 2) {
              return (
                <motion.div 
                  key="flash-sale"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-primary rounded-[3rem] p-10 flex flex-col justify-between text-white border-4 border-accent shadow-2xl relative overflow-hidden group h-[500px]"
                >
                  <div className="absolute -right-16 -top-16 w-48 h-48 bg-accent rounded-full opacity-20 group-hover:scale-150 transition-transform duration-1000" />
                  <div className="space-y-8 z-10">
                    <div className="bg-accent/30 text-accent p-4 rounded-[2rem] w-fit shadow-xl backdrop-blur-md">
                      <Timer className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-headline font-black tracking-tighter">Flash Sale</h3>
                      <p className="opacity-80 text-sm font-bold mt-2 leading-relaxed">Exclusive discounts on premium collections.</p>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { val: timeLeft.days, unit: 'Days' },
                        { val: timeLeft.hours, unit: 'Hrs' },
                        { val: timeLeft.mins, unit: 'Min' },
                        { val: timeLeft.secs, unit: 'Sec' }
                      ].map((t, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-lg rounded-2xl p-3 text-center border border-white/10">
                          <div className="text-xl font-black">{String(t.val).padStart(2, '0')}</div>
                          <div className="text-[9px] uppercase tracking-widest opacity-60 font-black mt-1">{t.unit}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-8 bg-accent hover:bg-white hover:text-accent text-white font-black rounded-2xl py-8 transition-all duration-500 uppercase tracking-widest text-xs shadow-xl">
                    Grab Offer
                  </Button>
                </motion.div>
              )
            }

            return (
              <AnimatePresence mode="popLayout" key={p.id}>
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  {/* Image Area */}
                  <div className="relative aspect-[4/5] bg-white rounded-[2.5rem] overflow-hidden mb-8 border border-border/10 shadow-sm hover:shadow-2xl transition-all duration-500">
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <Badge className="absolute top-6 left-6 bg-primary text-white font-black px-4 py-2 rounded-full text-[10px] uppercase tracking-widest shadow-lg">
                      {p.discount}
                    </Badge>
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <Button className="rounded-full bg-white text-primary hover:bg-accent hover:text-white px-8 py-6 font-black uppercase text-xs tracking-widest shadow-2xl transition-all scale-90 group-hover:scale-100">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                       </Button>
                    </div>
                    <button className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl hover:bg-accent hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Info Area */}
                  <div className="space-y-4 px-2 text-center">
                    <div className="flex items-center justify-center space-x-1 text-accent">
                      {[1, 2, 3, 4, 5].map(s => (
                        <Star key={s} className={`w-4 h-4 ${s <= Math.floor(p.rating) ? 'fill-current' : 'opacity-30'}`} />
                      ))}
                      <span className="text-primary font-black text-xs ml-2">{p.rating}</span>
                    </div>
                    <h3 className="font-headline font-black text-primary group-hover:text-accent transition-colors duration-300 text-xl tracking-tight leading-none">
                      {p.title}
                    </h3>
                    <div className="flex items-center justify-center space-x-4">
                      <span className="text-2xl font-headline font-black text-primary tracking-tighter">${p.discountPrice.toFixed(2)}</span>
                      <span className="text-muted-foreground line-through text-sm font-bold opacity-40">${p.price.toFixed(2)}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
