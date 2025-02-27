import React, { useEffect, useState } from 'react';
import '../styling/inc.css'; 
import { FaUsers } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";

const Inc = () => {
  const [eventsCount, setEventsCount] = useState(0); 
  const [communityCount, setCommunityCount] = useState(0); 

  const eventsTarget = 50; 
  const communityTarget = 100; 

  const duration = 2000; 

  useEffect(() => {
  
    const eventsIncrementTime = duration / eventsTarget; 
    let currentEventsCount = 0; 

    const eventsInterval = setInterval(() => {
      if (currentEventsCount < eventsTarget) {
        currentEventsCount++; 
        setEventsCount(currentEventsCount);
      } else {
        clearInterval(eventsInterval); 
      }
    }, eventsIncrementTime);

  
    const communityIncrementTime = duration / communityTarget; 
    let currentCommunityCount = 0; 

    const communityInterval = setInterval(() => {
      if (currentCommunityCount < communityTarget) {
        currentCommunityCount++; 
        setCommunityCount(currentCommunityCount); 
      } else {
        clearInterval(communityInterval); 
      }
    }, communityIncrementTime);

    return () => {
      clearInterval(eventsInterval); 
      clearInterval(communityInterval); 
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

