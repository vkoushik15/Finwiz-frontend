

import React, { useState, useEffect } from 'react';
import '../styling/mainc.css'; 


const Mainc = () => {
  const words = ['explore', 'learn', 'study'];
  const [currentWord, setCurrentWord] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = 150; 
    const deleteSpeed = 100; 

    const typingInterval = setInterval(() => {
      if (isTyping) {
       
        if (charIndex < words[wordIndex].length) {
          setCurrentWord((prev) => prev + words[wordIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => setIsTyping(false), 1000); 
        }
      } else {
       
        if (charIndex > 0) {
          setCurrentWord((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsTyping(true);
          setWordIndex((prev) => (prev + 1) % words.length); 
        }
      }
    }, isTyping ? typeSpeed : deleteSpeed);

    return () => clearInterval(typingInterval);
  }, [isTyping, charIndex, wordIndex, words]);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          We help you{' '}
          <span className="typing-word">
            {currentWord}
            <span className="cursor">|</span> 
          </span>{' '}
          the finance world.
        </h1>
      </div>
    </div>
  );
};

export default Mainc;
