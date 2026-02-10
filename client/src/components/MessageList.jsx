export default function MessageList({ messages }) {
  return (
    <div className="messages" aria-live="polite">
      {messages.map((msg, idx) => (
        <div key={`${msg.role}-${idx}`} className={`bubble ${msg.role}`}>
          {msg.content}
        </div>
      ))}
    </div>
  );
}
