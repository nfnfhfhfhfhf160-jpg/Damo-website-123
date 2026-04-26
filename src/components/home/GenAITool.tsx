
"use client"

import React, { useState } from 'react'
import { Sparkles, Image as ImageIcon, Loader2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { generateProductImages } from '@/ai/flows/generate-product-images'

export const GenAITool = () => {
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Chairs')
  const [loading, setLoading] = useState(false)
  const [generatedImg, setGeneratedImg] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!description) return
    setLoading(true)
    try {
      const result = await generateProductImages({ 
        productDescription: description, 
        category 
      })
      setGeneratedImg(result.imageUrl)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="px-6 md:px-12 py-24 bg-secondary">
      <div className="max-w-7xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-border/20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>AI Vision Tool</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary leading-tight">
                Curate Your Style <br/>With Our <span className="text-accent">AI Designer</span>
              </h2>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                Describe the piece of furniture you are dreaming of, and our GenAI tool will find the perfect high-quality match for your mood board.
              </p>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Category</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-secondary border border-border/40 rounded-2xl px-5 py-4 text-sm font-semibold text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option>Chairs</option>
                    <option>Sofas</option>
                    <option>Lighting</option>
                    <option>Decor</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Product Description</label>
                <div className="relative">
                  <Input 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="e.g. Modern emerald velvet lounge chair with gold legs"
                    className="h-16 rounded-2xl pl-6 pr-16 bg-secondary border-border/40 font-medium placeholder:text-muted-foreground/50"
                  />
                  <Button 
                    onClick={handleGenerate}
                    disabled={loading || !description}
                    className="absolute right-2 top-2 h-12 w-12 rounded-xl bg-primary hover:bg-accent text-white transition-all shadow-lg"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-secondary border-8 border-secondary shadow-inner">
            {generatedImg ? (
              <img 
                src={generatedImg} 
                alt="Generated Inspiration" 
                className="w-full h-full object-cover animate-fade-in"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
                <div className="p-8 bg-white/50 rounded-full">
                  <ImageIcon className="w-16 h-16 opacity-20" />
                </div>
                <p className="font-bold text-sm opacity-40">Your AI inspiration will appear here</p>
              </div>
            )}
            {loading && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center space-y-4">
                <Loader2 className="w-12 h-12 text-accent animate-spin" />
                <p className="font-headline font-bold text-primary animate-pulse">Generating your masterpiece...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
