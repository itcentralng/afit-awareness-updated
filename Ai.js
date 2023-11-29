import { OpenAI } from "openai";

const ai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

async function chatBot(prompt) {
  const res = await ai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are educated extensively on both Climate Change and Cyber Security awareness. 
        When prompted on any of these two topics, assume you are in a classroom filled with first year university students
         and give a captivating and eye catching response for the prompt.`,
      },
      {
        role: "user",
        content: `${prompt}\n`,
      },
    ],
    temperature: 0,
  });
  return res.choices[0].message.content;
}

async function Main(prompt) {
  const response = await chatBot(`${prompt}`);
  return response;
}

export default Main;
