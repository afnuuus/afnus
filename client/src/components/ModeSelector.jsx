export default function ModeSelector({ onSelect }) {
  return (
    <div className="card">
      <h1>Valentine AI Companion 💌</h1>
      <p>Pick your companion mode and start chatting.</p>
      <div className="actions">
        <button onClick={() => onSelect('boyfriend')}>Virtual Boyfriend</button>
        <button onClick={() => onSelect('girlfriend')}>Virtual Girlfriend</button>
      </div>
      <p className="meta">Includes motivation and mini-games in chat.</p>
    </div>
  );
}
