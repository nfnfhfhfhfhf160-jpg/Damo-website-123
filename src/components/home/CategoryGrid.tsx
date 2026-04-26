
"use client"

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export const CategoryGrid = () => {
  const chairImg = PlaceHolderImages.find(img => img.id === 'category-chair');
  const sofaImg = PlaceHolderImages.find(img => img.id === 'category-sofa');
  const lightImg = PlaceHolderImages.find(img => img.id === 'category-lighting');

  const categories = [
    {
      id: 1,
      title: "Chairs",
      items: "1500+ items",
      desc: "Experience ultimate comfort with our designer range of ergonomic and stylish chairs.",
      list: ["Gaming Chair", "Lounge Chair", "Folding Chair", "Dining Chair", "Office Chair", "Armchair", "Bar Stool", "Club Chair"],
      img: chairImg?.imageUrl,
      span: "row-span-2",
      height: "h-full"
    },
    {
      id: 2,
      title: "Sofa",
      items: "750+ items",
      list: ["Reception Sofa", "Sectional Sofa", "Armless Sofa", "Curved Sofa"],
      img: sofaImg?.imageUrl,
      span: "col-span-1",
      height: "h-[300px]"
    },
    {
      id: 3,
      title: "Lighting",
      items: "450+ items",
      list: ["Table Lights", "Floor Lights", "Ceiling Lights", "Wall Lights"],
      img: lightImg?.imageUrl,
      span: "col-span-1",
      height: "h-[300px]"
    }
  ]

  return (
    <section className="px-6 md:px-12 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[700px]">
          
          {/* Large Tall Card (Chairs) */}
          <div className="bg-secondary rounded-3xl p-10 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 group overflow-hidden relative border border-border/20">
            <div className="w-full md:w-1/2 space-y-6 z-10">
              <div className="space-y-2">
                <Badge className="bg-primary text-white hover:bg-primary/90 rounded-full px-3 py-1 font-medium text-xs">
                  {categories[0].items}
                </Badge>
                <h3 className="text-4xl font-headline font-extrabold text-primary">{categories[0].title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{categories[0].desc}</p>
              <ul className="grid grid-cols-2 gap-y-3">
                {categories[0].list.map((item) => (
                  <li key={item} className="text-primary font-bold text-xs flex items-center group/item hover:text-accent transition-colors cursor-pointer">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-60 group-hover/item:opacity-100" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative h-[300px] md:h-full">
              <Image 
                src={categories[0].img || ''} 
                alt="Chairs category" 
                fill 
                className="object-contain group-hover:scale-110 transition-transform duration-700"
                data-ai-hint="bar stool"
              />
            </div>
          </div>

          {/* Right Column Grid */}
          <div className="grid grid-cols-1 gap-8">
            {categories.slice(1).map((cat) => (
              <div key={cat.id} className="bg-secondary rounded-3xl p-8 flex items-center group overflow-hidden border border-border/20">
                <div className="w-1/2 space-y-4 z-10">
                  <div className="space-y-2">
                    <Badge className="bg-primary text-white hover:bg-primary/90 rounded-full px-3 py-1 font-medium text-xs">
                      {cat.items}
                    </Badge>
                    <h3 className="text-3xl font-headline font-extrabold text-primary">{cat.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.list.map((item) => (
                      <li key={item} className="text-primary font-bold text-xs flex items-center group/item hover:text-accent transition-colors cursor-pointer">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-60 group-hover/item:opacity-100" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/2 relative h-48">
                  <Image 
                    src={cat.img || ''} 
                    alt={cat.title} 
                    fill 
                    className="object-contain group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint={cat.title.toLowerCase()}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
