import OpenAI from 'openai';
import { env } from '../config/env.js';

const client = env.openAiApiKey ? new OpenAI({ apiKey: env.openAiApiKey }) : null;

export async function getChatCompletion({ model, messages }) {
  if (!client) {
    return 'I am here with you 💕 (Demo mode: add OPENAI_API_KEY for live AI replies.)';
  }

  const completion = await client.chat.completions.create({
    model,
    messages,
    temperature: 0.8
  });

  return completion.choices?.[0]?.message?.content || 'I am still here with you.';
}
