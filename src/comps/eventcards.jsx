import React, { useState } from "react";
import "../styling/ecards.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Eventcards = ({ ename, edescription, edate, etime, elocation, etype, elink }) => {
  const [teamName, setTeamName] = useState("");
  const [playerNames, setPlayerNames] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const userData = useSelector((state) => state.auth.userData);

  const handleCardClick = () => {
    console.log(`Clicked on Event: ${ename}`);
  };

  const handleRegister = async (e) => {
    e.stopPropagation();

    if (isRegistered) {
      toast.info("You have already registered for this event.");
      return;
    }

    try {
      if (etype === "Team") {
        const s = `${teamName}-${playerNames}`;
        const response = await axios.post("http://localhost:3000/tpar/add", {
          ename: ename,
          tname: s,
        });
        if (response.status === 200) {
          setIsRegistered(true);
          toast.success("Registered Successfully");
        }
      } else {
        const response = await axios.post("http://localhost:3000/tpar/add", {
          ename: ename,
          tname: userData.name,
        });
        if (response.status === 200) {
          setIsRegistered(true);
          toast.success("Registered Successfully");
        }
      }
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="eventcards">
      <div className="eventcard" onClick={handleCardClick}>
        <h2>{ename}</h2>
        <p>{edescription}</p>
        <p><strong>Date:</strong> {edate}</p>
        <p><strong>Time:</strong> {etime}</p>
        <p><strong>Location:</strong> {elocation}</p>
        <a href={elink} target="_blank" rel="noreferrer">Join our WhatsApp group</a>

        {etype === "Team" && (
          <div className="team-registration" onClick={(e) => e.stopPropagation()}>
            <label>
              Team Name:
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Enter team name"
              />
            </label>
            <label>
              Player Names:
              <input
                type="text"
                value={playerNames}
                onChange={(e) => setPlayerNames(e.target.value)}
                placeholder="Enter player names (comma separated)"
              />
            </label>
          </div>
        )}

        <button onClick={handleRegister} disabled={isRegistered}>
          {isRegistered ? "Registered" : "Register"}
        </button>
      </div>
    </div>
  );
};

export default Eventcards;