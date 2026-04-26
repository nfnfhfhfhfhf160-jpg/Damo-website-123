
"use client"

import React from 'react'
import { Truck, Wallet, Headset } from 'lucide-react'

export const ValueProp = () => {
  const props = [
    {
      icon: <Truck className="w-8 h-8 text-accent" />,
      title: "Free Shipping",
      desc: "Free shipping for order above $180"
    },
    {
      icon: <Wallet className="w-8 h-8 text-accent" />,
      title: "Flexible Payment",
      desc: "Multiple secure payment options"
    },
    {
      icon: <Headset className="w-8 h-8 text-accent" />,
      title: "24x7 Support",
      desc: "We support online all days"
    }
  ]

  return (
    <section className="px-6 md:px-12 py-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 bg-secondary border border-border/40 rounded-3xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-border/40 p-8 md:p-0">
          {props.map((p, idx) => (
            <div key={idx} className="flex items-center space-x-5 md:p-12 hover:bg-white transition-colors duration-300">
              <div className="bg-white p-4 rounded-2xl shadow-sm">
                {p.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-headline font-bold text-primary text-lg">{p.title}</h4>
                <p className="text-muted-foreground text-sm font-medium">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
