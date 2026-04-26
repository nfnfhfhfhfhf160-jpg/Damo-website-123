
"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Heart, Maximize2, Star, Timer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const products = [
  { id: 1, title: "Modern Green Armchair", price: 160.00, discountPrice: 80.00, rating: 4.9, discount: "50% off", img: 'product-1' },
  { id: 2, title: "Nordic Dining Chair", price: 210.00, discountPrice: 189.00, rating: 4.8, discount: "10% off", img: 'product-2' },
  { id: 3, title: "Minimalist Coffee Table", price: 300.00, discountPrice: 240.00, rating: 4.7, discount: "20% off", img: 'product-3' },
  { id: 4, title: "Velvet Lounge Chair", price: 450.00, discountPrice: 315.00, rating: 5.0, discount: "30% off", img: 'product-4' },
  { id: 5, title: "Sleek Desk Lamp", price: 90.00, discountPrice: 72.00, rating: 4.6, discount: "20% off", img: 'product-5' },
  { id: 6, title: "Sectional Sofa Piece", price: 1200.00, discountPrice: 960.00, rating: 4.9, discount: "20% off", img: 'product-6' }
]

export const ProductCollections = () => {
  const [activeTab, setActiveTab] = useState('All Products')
  const tabs = ['All Products', 'Latest Products', 'Best Sellers', 'Featured Products']
  const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 12, mins: 30, secs: 25 })

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
    <section className="px-6 md:px-12 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">- Our Products</span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary">Our Products Collections</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-secondary text-primary hover:bg-border/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p, idx) => {
            const productImg = PlaceHolderImages.find(img => img.id === p.img);
            
            // Inject the Flash Sale timer card at position 3 (idx 2)
            if (idx === 2) {
              return (
                <div key="flash-sale" className="bg-primary rounded-3xl p-8 flex flex-col justify-between text-white border border-primary/20 shadow-2xl relative overflow-hidden group">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent rounded-full opacity-20 group-hover:scale-150 transition-transform duration-1000" />
                  <div className="space-y-6 z-10">
                    <div className="bg-accent/20 text-accent p-3 rounded-2xl w-fit">
                      <Timer className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-headline font-extrabold">Flash Sale</h3>
                      <p className="opacity-80 text-sm font-medium mt-1">Limited time only. Grab your favorites now!</p>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { val: timeLeft.days, unit: 'Days' },
                        { val: timeLeft.hours, unit: 'Hours' },
                        { val: timeLeft.mins, unit: 'Mins' },
                        { val: timeLeft.secs, unit: 'Sec' }
                      ].map((t, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-2 text-center border border-white/5">
                          <div className="text-lg font-bold">{String(t.val).padStart(2, '0')}</div>
                          <div className="text-[10px] uppercase tracking-tighter opacity-60 font-bold">{t.unit}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-accent hover:bg-white hover:text-accent text-white font-bold rounded-2xl py-6 transition-all">
                    Shop All Sale
                  </Button>
                </div>
              )
            }

            return (
              <div key={p.id} className="group animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                {/* Image Area */}
                <div className="relative aspect-square bg-secondary rounded-3xl overflow-hidden mb-6 border border-border/10">
                  <Image 
                    src={productImg?.imageUrl || ''} 
                    alt={p.title} 
                    fill 
                    className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                    data-ai-hint={productImg?.imageHint}
                  />
                  <Badge className="absolute top-5 left-5 bg-primary text-white hover:bg-primary font-bold px-3 py-1.5 rounded-full text-xs">
                    {p.discount}
                  </Badge>
                  <div className="absolute top-5 right-5 flex flex-col space-y-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white p-3 rounded-full shadow-lg hover:bg-accent hover:text-white transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="bg-white p-3 rounded-full shadow-lg hover:bg-accent hover:text-white transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Info Area */}
                <div className="space-y-3 px-2">
                  <div className="flex items-center space-x-1 text-accent">
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star key={s} className={`w-3.5 h-3.5 ${s <= Math.floor(p.rating) ? 'fill-current' : 'opacity-30'}`} />
                    ))}
                    <span className="text-primary font-bold text-xs ml-1">{p.rating}</span>
                  </div>
                  <h3 className="font-headline font-bold text-primary group-hover:text-accent transition-colors cursor-pointer text-lg leading-tight">
                    {p.title}
                  </h3>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl font-headline font-extrabold text-primary">${p.discountPrice.toFixed(2)}</span>
                    <span className="text-muted-foreground line-through text-sm font-medium opacity-60">${p.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
