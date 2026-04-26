
"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const Hero = () => {
  const livingRoom = PlaceHolderImages.find(img => img.id === 'hero-living-room');
  const bedroom = PlaceHolderImages.find(img => img.id === 'hero-bedroom');

  return (
    <section className="relative px-6 md:px-12 py-12 md:py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary leading-[1.1]">
              Explore Our <span className="text-accent">Modern</span> Furniture Collection
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed font-body">
              Discover elegant pieces meticulously crafted to transform your living space into a sanctuary of style and comfort. Modern aesthetics meet timeless craftsmanship.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-semibold flex items-center group">
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="#" className="text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors">
              View All Products
            </a>
          </div>

          <div className="flex items-center space-x-4 pt-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden relative">
                  <Image 
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="User avatar" 
                    fill 
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-accent flex items-center justify-center text-white font-bold text-xs">
                50K+
              </div>
            </div>
            <div>
              <div className="flex items-center text-accent">
                <span className="font-extrabold text-xl">4.9</span>
                <Star className="w-4 h-4 fill-current ml-1" />
                <span className="text-primary font-bold ml-1">Ratings+</span>
              </div>
              <p className="text-muted-foreground text-sm font-medium">Trusted by 50K+ Customers</p>
            </div>
          </div>
        </div>

        {/* Right Column: Images */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Main Overlapping Cards */}
          <div className="relative w-full h-full">
            {/* Bed Room Card */}
            <div className="absolute top-0 right-0 w-[85%] h-[75%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Image 
                src={bedroom?.imageUrl || ''} 
                alt="Bedroom collection" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
                data-ai-hint="bedroom luxury"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl flex justify-between items-center shadow-lg">
                <div>
                  <h3 className="font-headline font-bold text-primary">Bed Room</h3>
                  <p className="text-xs text-muted-foreground font-medium">1,500+ items</p>
                </div>
                <Button size="icon" className="rounded-full bg-primary hover:bg-accent h-10 w-10">
                  <ArrowRight className="w-5 h-5 text-white" />
                </Button>
              </div>
            </div>

            {/* Living Room Card */}
            <div className="absolute bottom-0 left-0 w-[80%] h-[70%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Image 
                src={livingRoom?.imageUrl || ''} 
                alt="Living room collection" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
                data-ai-hint="living room modern"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-primary/95 backdrop-blur-sm p-5 rounded-2xl flex justify-between items-center shadow-lg">
                <div className="text-white">
                  <h3 className="font-headline font-bold">Living Room</h3>
                  <p className="text-xs opacity-80 font-medium">2,500+ items</p>
                </div>
                <Button size="icon" className="rounded-full bg-accent hover:bg-white hover:text-accent h-10 w-10 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
