# Valentine AI Companion MVP

A complete MVP for a Valentine's Day virtual companion app.

## What this app includes
- Mode selection: **Virtual Boyfriend** or **Virtual Girlfriend**
- Real-time chat UI
- Motivational support integrated into replies
- Chat mini-games: **Truth or Dare** and **Would You Rather**
- Basic emotional safety intervention response for crisis language

## Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- AI: OpenAI Chat Completions API

## Folder structure
- `client/` — React frontend
- `server/` — Express backend
- `start.sh` — starts client and server together

## Exactly what you need to do
1. Install Node.js 18+.
2. In one terminal:
   ```bash
   cd server
   cp .env.example .env
   # set OPENAI_API_KEY in .env
   npm install
   ```
3. In another terminal:
   ```bash
   cd client
   cp .env.example .env
   npm install
   ```
4. Start both apps (from repo root):
   ```bash
   ./start.sh
   ```
5. Open http://localhost:5173

If `OPENAI_API_KEY` is not set, the app still works in demo reply mode.

## API endpoints
- `GET /api/health`
- `POST /api/chat`
- `POST /api/game/start`
- `POST /api/game/next`

## Notes
- Frontend uses `VITE_API_BASE` (default: `http://localhost:3001/api`).
- Backend uses `PORT`, `OPENAI_API_KEY`, and `OPENAI_MODEL`.
