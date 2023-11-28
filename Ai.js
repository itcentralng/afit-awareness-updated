import { config } from "dotenv";
import { OpenAI } from "openai";
config();

const ai = new OpenAI();

async function chatBot(prompt) {
  const res = await ai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You MUST generate your replies inside HTML tags.`,
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
  console.log(response);
  return response;
}

export default Main;
