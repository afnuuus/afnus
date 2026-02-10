import { useState } from 'react';
import ModeSelector from './components/ModeSelector';
import ChatWindow from './components/ChatWindow';

export default function App() {
  const [mode, setMode] = useState('');

  return (
    <main className="container">
      {!mode ? (
        <ModeSelector onSelect={setMode} />
      ) : (
        <ChatWindow mode={mode} onReset={() => setMode('')} />
      )}
    </main>
  );
}
