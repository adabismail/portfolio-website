import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './ChatBot.css';

const GREETING = {
  role: 'assistant',
  content:
    "Hi! I'm Adab's AI assistant. Ask me anything about his skills, experience, projects, availability, or how to reach him.",
};

const SUGGESTIONS = [
  'Is Adab open to opportunities?',
  'What are his top skills?',
  'Tell me about his experience',
  'What projects has he built?',
  'How can I contact him?',
];

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to newest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError('');
    const nextMessages = [...messages, { role: 'user', content: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Don't send the static greeting — only real turns
        body: JSON.stringify({ messages: nextMessages.filter((m) => m !== GREETING) }),
      });


      const raw = await res.text();
      let data;
      try {
        data = JSON.parse(raw);
      } catch {
        throw new Error(
          'The assistant backend isn’t responding. It only runs on the deployed Vercel site (or locally via `vercel dev`), not `npm run dev`.'
        );
      }

      if (!res.ok) throw new Error(data.error || 'The assistant is unavailable right now.');

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setError(err.message || 'Could not reach the assistant. Please try again in a moment.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const showSuggestions = messages.length === 1 && !loading;

  return (
    <>
      {/* Launcher */}
      <button
        className={`chat-launcher${open ? ' chat-launcher--open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Ask about Adab'}
        title={open ? 'Close chat' : 'Ask about Adab'}
      >
        {open ? <FaTimes /> : <FaRobot />}
      </button>

      {/* Panel */}
      <div className={`chat-panel${open ? ' chat-panel--open' : ''}`} role="dialog" aria-label="Chat with Adab's assistant">
        <div className="chat-header">
          <div className="chat-header-avatar"><FaRobot /></div>
          <div className="chat-header-meta">
            <span className="chat-header-title">Ask about Adab</span>
            <span className="chat-header-status">
              <span className="chat-status-dot" /> AI assistant · online
            </span>
          </div>
          <button className="chat-header-close" onClick={() => setOpen(false)} aria-label="Close chat">
            <FaTimes />
          </button>
        </div>

        <div className="chat-messages" ref={scrollRef}>
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg chat-msg--${m.role}`}>
              {m.content}
            </div>
          ))}

          {loading && (
            <div className="chat-msg chat-msg--assistant chat-msg--typing">
              <span className="chat-dot" />
              <span className="chat-dot" />
              <span className="chat-dot" />
            </div>
          )}

          {error && <div className="chat-error">{error}</div>}

          {showSuggestions && (
            <div className="chat-suggestions">
              {SUGGESTIONS.map((s) => (
                <button key={s} className="chat-suggestion" onClick={() => sendMessage(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <form className="chat-input-row" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            className="chat-input"
            placeholder="Ask something about Adab…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <button type="submit" className="chat-send" disabled={!input.trim() || loading} aria-label="Send">
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatBot;
