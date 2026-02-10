import { Router } from 'express';
import { sendChat } from '../controllers/chat.controller.js';

const router = Router();

router.post('/', sendChat);

export default router;
