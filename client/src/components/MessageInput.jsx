import { useState } from 'react';

export default function MessageInput({ onSend, loading }) {
  const [text, setText] = useState('');

  const submit = () => {
    if (!text.trim() || loading) return;
    onSend(text);
    setText('');
  };

  return (
    <div className="composer">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        onKeyDown={(e) => e.key === 'Enter' && submit()}
      />
      <button onClick={submit} disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
    </div>
  );
}
