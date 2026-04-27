
"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { IMAGE_ASSETS } from '@/lib/image-assets'
import { motion } from 'framer-motion'

export const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      title: "Chairs",
      items: "1500+ items",
      desc: "Experience ultimate comfort with our designer range of ergonomic and stylish chairs.",
      list: ["Gaming Chair", "Lounge Chair", "Folding Chair", "Dining Chair", "Office Chair", "Armchair", "Bar Stool", "Club Chair"],
      img: IMAGE_ASSETS.CHAIR_CATEGORY,
    },
    {
      id: 2,
      title: "Sofa",
      items: "750+ items",
      list: ["Reception Sofa", "Sectional Sofa", "Armless Sofa", "Curved Sofa"],
      img: IMAGE_ASSETS.SOFA_CATEGORY,
    },
    {
      id: 3,
      title: "Lighting",
      items: "450+ items",
      list: ["Table Lights", "Floor Lights", "Ceiling Lights", "Wall Lights"],
      img: IMAGE_ASSETS.LIGHTING_CATEGORY,
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  return (
    <section className="px-6 md:px-12 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          
          {/* Large Tall Card (Chairs) */}
          <motion.div variants={item} className="bg-background rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 group overflow-hidden relative border border-border/20 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="w-full md:w-1/2 space-y-8 z-10">
              <div className="space-y-4">
                <Badge className="bg-primary text-white rounded-full px-5 py-1.5 font-black text-[10px] uppercase tracking-widest">
                  {categories[0].items}
                </Badge>
                <h3 className="text-5xl font-headline font-black text-primary tracking-tighter">{categories[0].title}</h3>
              </div>
              <p className="text-muted-foreground text-sm font-medium leading-loose">{categories[0].desc}</p>
              <ul className="grid grid-cols-2 gap-y-4">
                {categories[0].list.map((listItem) => (
                  <li key={listItem} className="text-primary font-bold text-xs flex items-center group/item hover:text-accent transition-colors duration-300 cursor-pointer">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 opacity-60 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all" />
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative min-h-[350px]">
              <img 
                src={categories[0].img} 
                alt="Chairs category" 
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full h-full object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-[1.5s]"
              />
            </div>
          </motion.div>

          {/* Right Column Grid */}
          <div className="grid grid-cols-1 gap-10">
            {categories.slice(1).map((cat) => (
              <motion.div key={cat.id} variants={item} className="bg-background rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 group overflow-hidden border border-border/20 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="w-full md:w-1/2 space-y-4 md:space-y-6 z-10">
                  <div className="space-y-3 md:space-y-4">
                    <Badge className="bg-primary text-white rounded-full px-4 md:px-5 py-1 md:py-1.5 font-black text-[9px] md:text-[10px] uppercase tracking-widest">
                      {cat.items}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-headline font-black text-primary tracking-tighter">{cat.title}</h3>
                  </div>
                  <ul className="space-y-2 md:space-y-3">
                    {cat.list.map((listItem) => (
                      <li key={listItem} className="text-primary font-bold text-xs flex items-center group/item hover:text-accent transition-colors duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 opacity-60 group-hover/item:opacity-100 transition-all" />
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2 relative h-[200px] md:h-[250px]">
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    referrerPolicy="no-referrer"
                    loading="eager"
                    className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2rem] group-hover:scale-110 transition-transform duration-[1.5s]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
