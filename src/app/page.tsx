
import React from 'react'
import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/home/Hero'
import { ValueProp } from '@/components/home/ValueProp'
import { CategoryGrid } from '@/components/home/CategoryGrid'
import { ProductCollections } from '@/components/home/ProductCollections'
import { GenAITool } from '@/components/home/GenAITool'
import { Footer } from '@/components/home/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <Hero />
      <ValueProp />
      <CategoryGrid />
      <ProductCollections />
      <GenAITool />
      <Footer />
    </main>
  )
}
