
"use client"

import React from 'react'
import { Truck, Wallet, Headset } from 'lucide-react'
import { motion } from 'framer-motion'

export const ValueProp = () => {
  const props = [
    {
      icon: <Truck className="w-10 h-10 text-accent" />,
      title: "Free Shipping",
      desc: "Free shipping for order above $180"
    },
    {
      icon: <Wallet className="w-10 h-10 text-accent" />,
      title: "Flexible Payment",
      desc: "Multiple secure payment options"
    },
    {
      icon: <Headset className="w-10 h-10 text-accent" />,
      title: "24x7 Support",
      desc: "We support online all days"
    }
  ]

  return (
    <section className="px-6 md:px-12 py-10 bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 bg-white border border-border/40 rounded-[2.5rem] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-border/40 p-8 md:p-0 shadow-xl shadow-primary/5">
          {props.map((p, idx) => (
            <div key={idx} className="flex items-center space-x-6 md:p-14 hover:bg-background/50 transition-colors duration-500 cursor-default group">
              <div className="bg-background p-5 rounded-3xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                {p.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-headline font-black text-primary text-xl tracking-tight">{p.title}</h4>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
