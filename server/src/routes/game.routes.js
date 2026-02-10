import { Router } from 'express';
import { nextGameTurn, startGame } from '../controllers/game.controller.js';

const router = Router();

router.post('/start', startGame);
router.post('/next', nextGameTurn);

export default router;
