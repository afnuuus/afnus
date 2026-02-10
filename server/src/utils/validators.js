const allowedRoles = new Set(['user', 'assistant']);

export function sanitizeHistory(history = []) {
  if (!Array.isArray(history)) return [];

  return history
    .filter((item) => item && typeof item.content === 'string' && allowedRoles.has(item.role))
    .map((item) => ({ role: item.role, content: item.content.trim().slice(0, 800) }))
    .filter((item) => item.content.length > 0)
    .slice(-20);
}

export function validateMode(mode) {
  return mode === 'boyfriend' || mode === 'girlfriend' ? mode : 'girlfriend';
}

export function validateGameType(type) {
  return type === 'truth_or_dare' || type === 'would_you_rather';
}

export function cleanMessage(message = '') {
  return String(message).trim().slice(0, 1000);
}
