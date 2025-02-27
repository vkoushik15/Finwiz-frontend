
/*
const Mainc = () => {
  const sentence = "This is the main sentence.";
  const word = "Animated"; // The word to be typed out
  const speed = 200; // Speed of typing in milliseconds
  const [displayedWord, setDisplayedWord] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < word.length) {
      const timer = setTimeout(() => {
        setDisplayedWord(prevWord => prevWord + word.charAt(index));
        setIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timer); // Clean up the timeout if the component unmounts
    }
  }, [index, word, speed]);

  return (
    <div className='mainc'>
      <div className='sentence'>{sentence}</div>
      <div className='animated-word'>{displayedWord}</div>
    </div>
  );
}

export default Mainc;*/
// import React, { useState, useEffect } from 'react';
// import "../styling/mainc.css";

// const Mainc = () => {
//   const sentence = "This is the main sentence.";
//   const words = ["Animated", "Dynamic", "Engaging"]; // Array of words to type out
//   const typingSpeed = 200; // Speed of typing in milliseconds
//   const deletingSpeed = 100; // Speed of deleting in milliseconds
//   const pauseTime = 1000; // Pause time after each word is fully typed
//   const [displayedWord, setDisplayedWord] = useState("");
//   const [index, setIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentWord = words[index % words.length]; // Get current word based on index

//     if (isDeleting) {
//       // If currently deleting
//       if (displayedWord.length > 0) {
//         setTimeout(() => {
//           setDisplayedWord(prev => prev.slice(0, -1)); // Remove last character
//         }, deletingSpeed);
//       } else {
//         // Switch to the next word after deletion
//         setIsDeleting(false);
//         setIndex(prevIndex => prevIndex + 1); // Move to next word
//         setTimeout(() => {}, pauseTime); // Pause before typing the next word
//       }
//     } else {
//       // If currently typing
//       if (displayedWord.length < currentWord.length) {
//         setTimeout(() => {
//           setDisplayedWord(prev => prev + currentWord.charAt(displayedWord.length)); // Add next character
//         }, typingSpeed);
//       } else {
//         // Start deleting after completing the current word
//         setIsDeleting(true);
//         setTimeout(() => {}, pauseTime); // Pause before starting to delete
//       }
//     }
//   }, [displayedWord, isDeleting, index, words, typingSpeed, deletingSpeed]);

//   return (
//     <div className='mainc'>
//       <div className='sentence'>{sentence}</div>
//       <div className='animated-word'>{displayedWord}</div>
//     </div>
//   );
// }

// export default Mainc;
// import React, { useState, useEffect } from 'react';
// import "../styling/mainc.css";

// const Mainc = () => {
//   const sentence = "We make money matters exciting and accessible.";
//   const words = ["Exciting", "Approachable", "Fun"]; // Array of words to type out
//   const typingSpeed = 200; // Speed of typing in milliseconds
//   const deletingSpeed = 100; // Speed of deleting in milliseconds
//   const pauseTime = 1000; // Pause time after each word is fully typed
//   const [displayedWord, setDisplayedWord] = useState("");
//   const [index, setIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentWord = words[index % words.length]; // Get current word based on index

//     if (isDeleting) {
//       // If currently deleting
//       if (displayedWord.length > 0) {
//         setTimeout(() => {
//           setDisplayedWord(prev => prev.slice(0, -1)); // Remove last character
//         }, deletingSpeed);
//       } else {
//         // Switch to the next word after deletion
//         setIsDeleting(false);
//         setIndex(prevIndex => prevIndex + 1); // Move to next word
//         setTimeout(() => {}, pauseTime); // Pause before typing the next word
//       }
//     } else {
//       // If currently typing
//       if (displayedWord.length < currentWord.length) {
//         setTimeout(() => {
//           setDisplayedWord(prev => prev + currentWord.charAt(displayedWord.length)); // Add next character
//         }, typingSpeed);
//       } else {
//         // Start deleting after completing the current word
//         setIsDeleting(true);
//         setTimeout(() => {}, pauseTime); // Pause before starting to delete
//       }
//     }
//   }, [displayedWord, isDeleting, index, words, typingSpeed, deletingSpeed]);

//   return (
//     <div className='mainc'>
//       <div className='sentence'>{sentence}</div>
//       <div className='animated-word'>{displayedWord}</div>
//     </div>
//   );
// }

// export default Mainc;


import React, { useState, useEffect } from 'react';
import '../styling/mainc.css'; // External CSS file


const Mainc = () => {
  const words = ['explore', 'learn', 'study'];
  const [currentWord, setCurrentWord] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = 150; // Typing speed in milliseconds
    const deleteSpeed = 100; // Deleting speed in milliseconds

    const typingInterval = setInterval(() => {
      if (isTyping) {
        // Typing logic
        if (charIndex < words[wordIndex].length) {
          setCurrentWord((prev) => prev + words[wordIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => setIsTyping(false), 1000); // Pause before deleting
        }
      } else {
        // Deleting logic
        if (charIndex > 0) {
          setCurrentWord((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsTyping(true);
          setWordIndex((prev) => (prev + 1) % words.length); // Move to the next word
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
            <span className="cursor">|</span> {/* Blinking cursor */}
          </span>{' '}
          the finance world.
        </h1>
      </div>
    </div>
  );
};

export default Mainc;