export default function GameLauncher({ onPick }) {
  return (
    <div className="actions">
      <button onClick={() => onPick('truth_or_dare')}>Truth or Dare</button>
      <button onClick={() => onPick('would_you_rather')}>Would You Rather</button>
    </div>
  );
}
