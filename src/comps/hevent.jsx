
import React, { useState } from 'react';
import "../styling/hevent.css";
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hevent = () => {
    const [ename, setEname] = useState("");
    const [edesc, setEdesc] = useState("");
    const [edate, setEdate] = useState("");
    const [etime, setEtime] = useState("");
    const [eloc, setEloc] = useState("");
    const [type, setType] = useState("");
    const[elink,setElink] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ type, ename, description: edesc, location: eloc, time: etime, date: edate });

        try {
            const res = await axios.post("http://localhost:3000/tpar/create", {
                type,
                ename,
                description: edesc,
                location: eloc,
                time: etime,
                date: edate,
               link :elink
            });
            console.log(res);
            toast.success("Event created successfully!");
            setEname("");
            setEdesc("");
            setEdate("");
            setEtime("");
            setEloc("");
            setType("");
            setElink("");
        } catch (error) {
            console.error("Error creating event:", error);
            toast.error("Failed to create event. Please try again.");
        }
    };

    return (
        <div className='hevent'>
            <h1>Enter the details of the event you want to create</h1>
            <form onSubmit={handleSubmit}>
                <select value={type} onChange={(e) => setType(e.target.value)} required>
                    <option value="" disabled>Select Single or Team</option>
                    <option value="Single">Single</option>
                    <option value="Team">Team</option>
                </select>
                <input type="text" placeholder="Enter Event Name" value={ename} onChange={(e) => setEname(e.target.value)} required />
                <input type="text" placeholder="Enter Event Description" value={edesc} onChange={(e) => setEdesc(e.target.value)} required />
                <input type="date" value={edate} onChange={(e) => setEdate(e.target.value)} required />
                <input type="time" value={etime} onChange={(e) => setEtime(e.target.value)} required />
                <input type="text" placeholder="Enter Event Location" value={eloc} onChange={(e) => setEloc(e.target.value)} required />
                <input type="text" placeholder="Enter Event Link" value={elink} onChange={(e) => setElink(e.target.value)} required />
                <button type="submit">Add Event</button>
            </form>
        </div>
    );
};

export default Hevent;
