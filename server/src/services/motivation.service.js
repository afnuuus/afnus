const motivationalMessages = [
  'You are worthy of love exactly as you are. 💖',
  'Your presence matters more than you know.',
  'Small acts of self-kindness today can change your whole mood.'
];

export function maybeGetMotivation(turnCount = 0, userMessage = '') {
  const hasLowMoodKeyword = /(lonely|sad|down|hurt|empty)/i.test(userMessage);
  const shouldInject = hasLowMoodKeyword || (turnCount > 0 && turnCount % 4 === 0);
  if (!shouldInject) return null;
  return motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
}
