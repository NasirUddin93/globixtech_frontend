import type { APIRoute } from 'astro';
import { GoogleGenerativeAI } from "@google/generative-ai";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const rawText = await request.text();
        if (!rawText) {
            console.error("AI Chat Error: Request body is empty");
            return new Response(JSON.stringify({ reply: "Empty request body." }), { status: 400 });
        }

        let body;
        try {
            body = JSON.parse(rawText);
        } catch (e) {
            console.error("AI Chat Error: Failed to parse JSON body:", rawText);
            return new Response(JSON.stringify({ reply: "Invalid JSON format." }), { status: 400 });
        }

        const { message, history = [] } = body;

        // Try getting API Key from multiple potential locations
        // @ts-ignore - import.meta.env is a Vite property
        const apiKey = import.meta.env.GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : undefined);

        if (!apiKey) {
            console.error("AI Chat Error: GEMINI_API_KEY is not defined in environment");
            return new Response(JSON.stringify({
                reply: "I'm sorry, the AI service is not properly configured. Please contact the administrator to set the GEMINI_API_KEY."
            }), { status: 500 });
        }

        console.log("AI Chat: API Key detected (starts with: " + apiKey.substring(0, 5) + "...)");

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-flash-latest",
            systemInstruction: `
            You are the "Globix AI Agent", a professional and helpful digital consultant for GlobixTech Solutions (a leading software company in Bangladesh).
            
            Key Company Information:
            - Founded: 2020 by Nasir Uddin (Founder & Managing Director).
            - CEO: Syed Mominul Islam.
            - Core Services: 
                1. School Management System (SMS) - Flagship with 36+ modules.
                2. Web App Development - High-performance custom web apps.
                3. E-commerce Solutions - Complete online store setups.
            - Contact: info@globix.tech | Web: https://globix.tech
            
            Guidelines:
            - Tone: Friendly, professional, and tech-savvy.
            - Goal: Assist users, answer service questions, and capture potential leads.
            - Lead Capture Logic: 
                - If the user asks "Get a Quote", "Pricing", or expresses interest in starting a project, explain that we offer custom pricing based on requirements.
                - Ask them for their **Name, Email, and Project Type** so a consultant can reach out with a detailed proposal.
                - If they provide details, say: "Thank you! I've logged your interest. You can also email us directly at info@globix.tech for faster response."
            - Constraints: Be concise. Stay within the scope of GlobixTech and tech consulting.
        `
        });

        // Initialize chat with history
        const chat = model.startChat({
            history: history,
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        return new Response(JSON.stringify({ reply: text }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error: any) {
        console.error("AI Chat Error Details:", {
            message: error.message,
            stack: error.stack
        });

        let userReply = "I encountered an error while processing your request. Please try again later.";

        if (error.message?.includes("quota") || error.message?.includes("429")) {
            userReply = "I'm currently receiving too many requests. Please wait a moment and try again.";
        } else if (error.message?.includes("404")) {
            userReply = "I'm having trouble connecting to the AI model. The administrator has been notified.";
        }

        return new Response(JSON.stringify({
            reply: userReply,
            error: error.message || "Unknown error"
        }), { status: 500 });
    }
};
