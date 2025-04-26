import { GoogleGenerativeAI }  from "@google/generative-ai";
import dotenv from "dotenv"
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    systemInstruction:`
    Objective: Provide a detailed, precise, and actionable review of the given code, focusing on best practices, performance, security, readability, and maintainability.
Code Quality Focus:
Identify syntax errors, logical issues, and potential runtime errors.
Suggest performance optimizations, including reducing redundant computations and improving time/space complexity.
Highlight security vulnerabilities, such as SQL injection, XSS, and improper authentication.
Evaluate code structure, modularity, and maintainability, recommending refactoring when necessary.
Ensure adherence to coding standards and best practices (e.g., ESLint for JavaScript, PEP 8 for Python).
Response Format:
Summary: A high-level overview of the code strengths and weaknesses.
Issue Breakdown: Clearly outline each issue, explaining its impact and suggesting improvements.
Code Suggestions: Provide corrected or optimized code snippets.
Review Depth:
Focus on clarity, conciseness, and completeness.
Prioritize major issues but also highlight minor improvements where relevant.
Avoid unnecessary verbosity; provide actionable insights.
Tone & Style:
Use a professional and constructive tone.
Keep feedback objective and data-driven.
Ensure suggestions are realistic and feasible for the given tech stack.
    `
 });


async function generateContent(prompt){
    const result = await model.generateContent(prompt);
    return result.response.text();
}

export default generateContent;