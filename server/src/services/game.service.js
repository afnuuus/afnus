const truthOrDarePrompts = [
  'Truth or Dare? If truth: what is one thing you are proud of this year?',
  'Truth: what is a small romantic gesture you would love to receive?',
  'Dare: send yourself a kind note in your phone reminders right now.'
];

const wouldYouRatherPrompts = [
  'Would you rather plan a cozy movie night or a sunset walk date?',
  'Would you rather receive a handwritten letter or a surprise playlist?',
  'Would you rather have breakfast-in-bed or a candlelight dinner?'
];

export function nextGamePrompt(type) {
  const bank = type === 'would_you_rather' ? wouldYouRatherPrompts : truthOrDarePrompts;
  return bank[Math.floor(Math.random() * bank.length)];
}
