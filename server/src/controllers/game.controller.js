import { nextGamePrompt } from '../services/game.service.js';
import { validateGameType } from '../utils/validators.js';

export function startGame(req, res) {
  const { type } = req.body;
  if (!validateGameType(type)) {
    return res.status(400).json({ error: 'Invalid game type' });
  }

  return res.json({ type, prompt: nextGamePrompt(type) });
}

export function nextGameTurn(req, res) {
  const { type } = req.body;
  if (!validateGameType(type)) {
    return res.status(400).json({ error: 'Invalid game type' });
  }

  return res.json({ type, prompt: nextGamePrompt(type) });
}
