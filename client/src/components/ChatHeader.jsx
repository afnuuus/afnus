export default function ChatHeader({ mode, gameMode, onReset }) {
  const title = mode === 'boyfriend' ? 'Virtual Boyfriend' : 'Virtual Girlfriend';
  const activeGame = gameMode === 'none' ? 'No active game' : gameMode.replaceAll('_', ' ');

  return (
    <div className="topbar">
      <div>
        <strong>{title}</strong>
        <p className="meta">{activeGame}</p>
      </div>
      <button onClick={onReset}>Change Mode</button>
    </div>
  );
}
