 
 
const GROQ_API = import.meta.env.VITE_GROQ;
import {Groq} from "groq-sdk"


const groq = new Groq({
  apiKey: GROQ_API,
  dangerouslyAllowBrowser: true
});

export const requestToAi = async (content) => {
const reply = await groq.chat.completions.create({
        messages:[{
            role: "user",
            content,
        }] ,
        model:"llama3-70b-8192",
    });
    return reply.choices[0].message.content;
}