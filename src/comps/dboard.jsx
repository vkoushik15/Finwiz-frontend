import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styling/dboard.css"

const Dboard = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/tpar/get");
                setEvents(response.data);
            } catch (error) {
                console.error("Error fetching event data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
  
    
    

    return (
        <>
        <div className="event-container">
            <h1 className="event-title">Event Details</h1>
            
            {loading ? (
                <p className="loading-text">Loading events...</p>
            ) : (
                <div className="table-wrapper">
                    <table className="event-table">
                        <thead>
                            <tr>
                                <th>Event Name</th>
                                <th>Teams</th>
                                <th>Total Teams</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event, index) => (
                                <tr key={index}>
                                    <td className="event-name">{event.ename}</td>
                                    <td>
                                        <ul className="team-list">
                                            {event.tnames.map((team, idx) => (
                                                <li key={idx}>
                                                    {team.replace(/-/g, " → ")}
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td>{event.teamCount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
        
        </>
    );
};

export default Dboard;
