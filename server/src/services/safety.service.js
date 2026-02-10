const distressPattern = /(self-harm|suicide|kill myself|end my life|hurt myself)/i;

export function getSafetyReply(message) {
  if (!distressPattern.test(message)) return null;

  return `I am really glad you told me this. You matter deeply. If you might act on these thoughts, please call emergency services now. If you can, contact a trusted person right away and consider your local crisis hotline. I can stay with you while you take that next step.`;
}
