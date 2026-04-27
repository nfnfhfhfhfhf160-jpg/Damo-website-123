
"use client"

import React from 'react'
import { MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const showrooms = [
  {
    city: "New York",
    name: "Elementa Flagship Studio",
    address: "245 Fifth Avenue, Manhattan, NY 10016",
    phone: "+1 (212) 555-0123",
    email: "ny@elementaliving.com",
    hours: "Mon - Sat: 10AM - 8PM",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
  },
  {
    city: "London",
    name: "Mayfair Design Hub",
    address: "12 Berkeley Square, London W1J 6BD",
    phone: "+44 20 7946 0123",
    email: "london@elementaliving.com",
    hours: "Mon - Fri: 9AM - 6PM",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
  }
]

export const Showrooms = () => {
  return (
    <section id="showrooms" className="px-6 md:px-12 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-accent font-black tracking-[0.3em] uppercase text-xs">- Visit Our Studios</span>
            <h2 className="text-5xl font-headline font-black text-primary tracking-tight">Our Showrooms</h2>
          </div>
          <p className="text-muted-foreground max-w-md font-medium leading-relaxed">
            Experience our furniture in person. Walk through curated spaces designed to inspire your next home transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {showrooms.map((room, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group bg-secondary rounded-[3rem] overflow-hidden border border-border/40 hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={room.img} 
                  alt={room.name} 
                  referrerPolicy="no-referrer"
                  loading="eager"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {room.city}
                </div>
              </div>
              <div className="p-10 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-3xl font-headline font-black text-primary tracking-tight">{room.name}</h3>
                  <div className="flex items-center text-muted-foreground font-medium text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-accent" />
                    {room.address}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center text-primary font-bold text-sm">
                      <Phone className="w-4 h-4 mr-3 text-accent" />
                      {room.phone}
                    </div>
                    <div className="flex items-center text-primary font-bold text-sm">
                      <Mail className="w-4 h-4 mr-3 text-accent" />
                      {room.email}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center text-primary font-bold text-sm">
                      <Clock className="w-4 h-4 mr-3 text-accent" />
                      {room.hours}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex space-x-4">
                  <Button className="rounded-2xl bg-primary text-white px-8 h-14 font-bold flex-1">
                    Book a Private Viewing
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-2xl h-14 w-14 border-2">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
