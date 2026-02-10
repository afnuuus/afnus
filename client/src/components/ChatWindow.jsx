import { useState } from 'react';
import { sendChat, startGame } from '../services/api';
import GameLauncher from './GameLauncher';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

export default function ChatWindow({ mode, onReset }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: `Hi, I am your ${mode} companion. How are you feeling today?` }
  ]);
  const [loading, setLoading] = useState(false);
  const [gameMode, setGameMode] = useState('none');
  const [error, setError] = useState('');

  const handleGame = async (type) => {
    setError('');
    try {
      const data = await startGame(type);
      setGameMode(type);
      setMessages((prev) => [...prev, { role: 'assistant', content: `🎮 ${data.prompt}` }]);
    } catch {
      setError('Could not start game right now.');
    }
  };

  const handleSend = async (text) => {
    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setLoading(true);
    setError('');

    try {
      const data = await sendChat({ mode, message: text, history: newMessages, gameMode });
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setError('Connection issue. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-layout">
      <ChatHeader mode={mode} gameMode={gameMode} onReset={onReset} />
      <GameLauncher onPick={handleGame} />
      {error ? <p className="error">{error}</p> : null}
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} loading={loading} />
    </div>
  );
}
