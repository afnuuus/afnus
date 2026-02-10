import { env } from '../config/env.js';
import { getChatCompletion } from '../services/openai.service.js';
import { buildSystemPrompt } from '../services/prompt.service.js';
import { maybeGetMotivation } from '../services/motivation.service.js';
import { nextGamePrompt } from '../services/game.service.js';
import { getSafetyReply } from '../services/safety.service.js';
import { cleanMessage, sanitizeHistory, validateGameType, validateMode } from '../utils/validators.js';

export async function sendChat(req, res, next) {
  try {
    const mode = validateMode(req.body?.mode);
    const message = cleanMessage(req.body?.message);
    const history = sanitizeHistory(req.body?.history);
    const gameMode = req.body?.gameMode ?? 'none';

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const safetyReply = getSafetyReply(message);
    if (safetyReply) {
      return res.json({
        reply: safetyReply,
        motivationIncluded: false,
        gamePrompt: null,
        safetyIntervention: true
      });
    }

    const motivation = maybeGetMotivation(history.length, message);
    const gamePrompt = validateGameType(gameMode) ? nextGamePrompt(gameMode) : null;

    const userInstruction = [message];
    if (gamePrompt) {
      userInstruction.push(`If it fits naturally, include this game prompt: "${gamePrompt}".`);
    }
    if (motivation) {
      userInstruction.push(`Add this encouragement naturally: "${motivation}".`);
    }

    const messages = [
      { role: 'system', content: buildSystemPrompt(mode) },
      ...history,
      { role: 'user', content: userInstruction.join('\n\n') }
    ];

    const reply = await getChatCompletion({ model: env.openAiModel, messages });
    return res.json({
      reply,
      motivationIncluded: Boolean(motivation),
      gamePrompt,
      safetyIntervention: false
    });
  } catch (error) {
    return next(error);
  }
}
