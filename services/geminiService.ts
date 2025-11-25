import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getSEOSuggestions = async (content: string, type: 'keyword' | 'meta' | 'audit'): Promise<string> => {
  if (!ai) return "AI services are currently unavailable. Please check configuration.";
  
  try {
    const promptMap = {
      keyword: "Analyze the following text for keyword optimization. Suggest 3-5 specific keywords to target that are missing or underutilized, and provide one tip for better semantic relevance. Keep it brief.",
      meta: "Generate an optimized Title Tag (max 60 chars) and Meta Description (max 160 chars) for the following content. Also suggest one improvement for click-through rate.",
      audit: "Provide a quick SEO checklist for this content regarding structure, readability, and intent."
    };

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `${promptMap[type]}\n\nContent excerpt:\n${content.substring(0, 1000)}...`, // Limit content size
    });

    return response.text || "No suggestions available.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Could not generate AI suggestions at this time.";
  }
};
