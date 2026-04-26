
import React from 'react'
import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/home/Hero'
import { ValueProp } from '@/components/home/ValueProp'
import { CategoryGrid } from '@/components/home/CategoryGrid'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { Showrooms } from '@/components/home/Showrooms'
import { GenAITool } from '@/components/home/GenAITool'
import { Footer } from '@/components/home/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F9F7]">
      <Header />
      <Hero />
      <ValueProp />
      <CategoryGrid />
      <FeaturedProjects />
      <GenAITool />
      <Showrooms />
      <Footer />
    </main>
  )
}
