import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/health.routes.js';
import chatRoutes from './routes/chat.routes.js';
import gameRoutes from './routes/game.routes.js';
import { errorHandler } from './utils/errorHandler.js';

export const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/health', healthRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/game', gameRoutes);

app.use(errorHandler);
