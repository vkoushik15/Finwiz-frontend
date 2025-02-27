import React, { useEffect, useState } from "react";
import Navbar from "../comps/navbar";
import { useSelector } from "react-redux";
import axios from "axios";
import Eventcards from "../comps/eventcards";
import "../styling/events.css";
import Paste from "../comps/paste";

const Events = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/tpar/getT");
        setEvents(response.data); 
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Navbar />
      <div className="events-page1">
        {isLogged ? (
          <>
            <h1>Events</h1>
            <div className="event-container">
              {events.length > 0 ? (
                events.map((event) => (
                  <Eventcards
                    key={event._id} 
                    ename={event.ename}
                    edescription={event.description}
                    edate={event.date}
                    etime={event.time}
                    elocation={event.location}
                    etype={event.type}
                    elink={event.link}
                  />
                ))
              ) : (
                <p>No events available</p>
              )}
            </div>
          </>
        ) : (
          <h1>Please Login to view events</h1>
        )}
      </div>
      <h1 style={{color:"black"}}> Some of our Successful past events</h1>
      <Paste />
    </>
  );
};

export default Events;
