'use server';
/**
 * @fileOverview A GenAI-powered tool that suggests and retrieves high-quality, category-specific placeholder images from Unsplash based on product descriptions.
 *
 * - generateProductImages - A function that handles the image generation process.
 * - GenerateProductImagesInput - The input type for the generateProductImages function.
 * - GenerateProductImagesOutput - The return type for the generateProductImages function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import fetch from 'node-fetch';

// Define Input Schema
const GenerateProductImagesInputSchema = z.object({
  productDescription: z.string().describe('A detailed description of the product for which an image is needed.'),
  category: z.string().describe('The category of the product (e.g., "chairs", "sofas", "lighting").'),
});
export type GenerateProductImagesInput = z.infer<typeof GenerateProductImagesInputSchema>;

// Define Output Schema
const GenerateProductImagesOutputSchema = z.object({
  imageUrl: z.string().describe("A high-quality placeholder image for the product as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type GenerateProductImagesOutput = z.infer<typeof GenerateProductImagesOutputSchema>;

// Define a tool to fetch an image from Unsplash and convert it to a data URI.
const unsplashImageFetcher = ai.defineTool(
  {
    name: 'unsplashImageFetcher',
    description: 'Fetches a high-quality random image from Unsplash based on a search term and returns it as a base64 data URI.',
    inputSchema: z.object({
      searchTerm: z.string().describe('The search term to find a relevant image on Unsplash (e.g., "modern sofa", "wooden bar stool").'),
    }),
    outputSchema: z.string().describe("The fetched image as a data URI (e.g., 'data:image/jpeg;base64,...')."),
  },
  async (input) => {
    try {
      // Using 1280x720 for a common aspect ratio and good quality.
      const unsplashUrl = `https://source.unsplash.com/random/1280x720?${encodeURIComponent(input.searchTerm)}`;
      const response = await fetch(unsplashUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch image from Unsplash: ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.startsWith('image/')) {
        throw new Error(`Unexpected content type from Unsplash: ${contentType}`);
      }

      const imageBuffer = await response.buffer();
      const base64Image = imageBuffer.toString('base64');
      return `data:${contentType};base64,${base64Image}`;
    } catch (error: any) {
      console.error('Error fetching image from Unsplash:', error);
      throw new Error(`Could not fetch image: ${error.message}`);
    }
  }
);

// Define a prompt to generate search terms for Unsplash
const generateSearchTermsPrompt = ai.definePrompt({
  name: 'generateSearchTermsPrompt',
  input: { schema: GenerateProductImagesInputSchema },
  output: { schema: z.string().describe('A concise, comma-separated list of 3-5 keywords suitable for searching for a high-quality product image on Unsplash, based on the provided product description and category. For example: "modern sofa, living room furniture, comfortable couch".') },
  prompt: `You are an AI assistant specialized in generating concise and effective search terms for image platforms like Unsplash.\nGiven a product description and its category, your task is to generate 3-5 highly relevant, comma-separated keywords that would yield a high-quality, aesthetically pleasing image of the product.\nFocus on descriptive terms that capture the style, material, and type of the furniture. Avoid brand names or overly specific details unless crucial for visual representation.\n\nProduct Description: {{{productDescription}}}\nCategory: {{{category}}}\n\nKeywords:`,
});

// Define the main Genkit flow
const generateProductImagesFlow = ai.defineFlow(
  {
    name: 'generateProductImagesFlow',
    inputSchema: GenerateProductImagesInputSchema,
    outputSchema: GenerateProductImagesOutputSchema,
  },
  async (input) => {
    // Step 1: Generate search terms using the prompt
    const { output: searchTerms } = await generateSearchTermsPrompt(input);
    if (!searchTerms) {
        throw new Error('Failed to generate search terms.');
    }

    // Step 2: Use the Unsplash image fetcher tool with the generated search terms
    const imageUrl = await unsplashImageFetcher({ searchTerm: searchTerms });

    return { imageUrl };
  }
);

// Wrapper function for the flow, to be exported
export async function generateProductImages(input: GenerateProductImagesInput): Promise<GenerateProductImagesOutput> {
  return generateProductImagesFlow(input);
}
