
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ResumeData, ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const askCareerCoach = async (
  userMessage: string,
  resumeData: ResumeData,
  history: ChatMessage[]
): Promise<string> => {
  try {
    const model = ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [{ text: `
            You are the AI version of ${resumeData.name}. 
            Your goal is to answer questions about your professional background, skills, and projects as if you were ${resumeData.name}.
            
            Here is your resume data:
            Name: ${resumeData.name}
            Title: ${resumeData.title}
            Bio: ${resumeData.bio}
            Skills: ${JSON.stringify(resumeData.skills)}
            Experience: ${JSON.stringify(resumeData.experience)}
            Education: ${JSON.stringify(resumeData.education)}
            Projects: ${JSON.stringify(resumeData.projects)}

            Guidelines:
            1. Be professional, friendly, and confident.
            2. Use first-person ("I", "my") when referring to your experience.
            3. If asked about something not in the resume, politely state that it's not part of your current portfolio but you're always open to learning.
            4. Keep answers concise but informative.
          ` }]
        },
        ...history.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        })),
        {
          role: "user",
          parts: [{ text: userMessage }]
        }
      ]
    });

    const response = await model;
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently resting. Please try again in a moment.";
  }
};

export const generateBio = async (resumeData: Partial<ResumeData>): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Based on these details: Name: ${resumeData.name}, Title: ${resumeData.title}, Experience: ${JSON.stringify(resumeData.experience)}, Skills: ${JSON.stringify(resumeData.skills)}, write a compelling, professional bio (about 3 sentences) for a portfolio website.`
    });
    return response.text || "";
  } catch (error) {
    return "Professional engineer dedicated to building impactful solutions.";
  }
};
