const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3001/api';

export async function sendChat(payload) {
  const response = await fetch(`${API_BASE}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Failed to get chat reply');
  }

  return response.json();
}

export async function startGame(type) {
  const response = await fetch(`${API_BASE}/game/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type })
  });

  if (!response.ok) {
    throw new Error('Failed to start game');
  }

  return response.json();
}
