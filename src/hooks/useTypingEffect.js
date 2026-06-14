import { useState, useEffect, useRef } from 'react';

export const useTypingEffect = (
  words,
  typingSpeed = 90,
  deletingSpeed = 55,
  pauseAfterType = 1800,
  pauseAfterDelete = 400
) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'paused' | 'deleting' | 'pausedAfterDelete'
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const tick = () => {
      if (phase === 'typing') {
        setDisplayText((prev) => {
          const next = currentWord.slice(0, prev.length + 1);
          if (next === currentWord) {
            setPhase('paused');
          }
          return next;
        });
      } else if (phase === 'paused') {
        setPhase('deleting');
      } else if (phase === 'deleting') {
        setDisplayText((prev) => {
          const next = prev.slice(0, -1);
          if (next === '') {
            setPhase('pausedAfterDelete');
          }
          return next;
        });
      } else if (phase === 'pausedAfterDelete') {
        setWordIndex((prev) => (prev + 1) % words.length);
        setPhase('typing');
      }
    };

    const delay =
      phase === 'paused'
        ? pauseAfterType
        : phase === 'pausedAfterDelete'
        ? pauseAfterDelete
        : phase === 'deleting'
        ? deletingSpeed
        : typingSpeed;

    timeoutRef.current = setTimeout(tick, delay);
    return () => clearTimeout(timeoutRef.current);
  }, [displayText, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete]);

  return displayText;
};
