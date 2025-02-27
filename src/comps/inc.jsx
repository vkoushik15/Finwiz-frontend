import React, { useEffect, useState } from 'react';
import '../styling/inc.css'; // Import the CSS file
import { FaUsers } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";

const Inc = () => {
  const [eventsCount, setEventsCount] = useState(0); // Initialize events count to 0
  const [communityCount, setCommunityCount] = useState(0); // Initialize community count to 0

  const eventsTarget = 50; // Target number for events
  const communityTarget = 100; // Target number for community

  const duration = 2000; // Duration of the animation in milliseconds

  useEffect(() => {
    // Events Counter
    const eventsIncrementTime = duration / eventsTarget; // Time to increment each number
    let currentEventsCount = 0; // Start counting from 0

    const eventsInterval = setInterval(() => {
      if (currentEventsCount < eventsTarget) {
        currentEventsCount++; // Increment the count
        setEventsCount(currentEventsCount); // Update the state
      } else {
        clearInterval(eventsInterval); // Stop the interval when target is reached
      }
    }, eventsIncrementTime);

    // Community Counter
    const communityIncrementTime = duration / communityTarget; // Time to increment each number
    let currentCommunityCount = 0; // Start counting from 0

    const communityInterval = setInterval(() => {
      if (currentCommunityCount < communityTarget) {
        currentCommunityCount++; // Increment the count
        setCommunityCount(currentCommunityCount); // Update the state
      } else {
        clearInterval(communityInterval); // Stop the interval when target is reached
      }
    }, communityIncrementTime);

    return () => {
      clearInterval(eventsInterval); // Cleanup events interval on component unmount
      clearInterval(communityInterval); // Cleanup community interval on component unmount
    };
  }, [eventsTarget, communityTarget, duration]);

  return (
    <div className="counter">
      <div className="counter1">
  <h1>Events Conducted</h1>
  <FaUsers />
  <span>{eventsCount}+</span>
</div>
<div className="counter2">
  <h1>Active Community</h1>
  <AiOutlineStock />
  <span>{communityCount}+</span>
</div>
    </div>
  );
};

export default Inc;

