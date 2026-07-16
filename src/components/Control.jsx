import { useState } from "react";
import { FaPlay, FaPause, FaStop, FaRedo } from "react-icons/fa";
import {
  startBulkCalling,
  pauseBulkCalling,
  resumeBulkCalling,
  stopBulkCalling,
} from "../api/callApi";

function Control({ contacts }) {
  const [calling, setCalling] = useState(false);
  const [paused, setPaused] = useState(false);

  const handleStart = async () => {
    if (calling) return;

   
    if (!contacts || contacts.length === 0) {
      alert("No contacts found! Please upload a CSV first.");
      return;
    }

    console.log("STARTING WITH CONTACTS:", contacts);

    try {
    
      const result = await startBulkCalling({ contacts: contacts });
      console.log("BACKEND RESPONSE:", result);

      setCalling(true);
      setPaused(false);
      alert("Bulk Calling Started");
    } catch (error) {
      console.error("CALL FAILED:", error);
      alert("Bulk Calling Failed");
    }
  };

  const handlePause = async () => {
    try {
      await pauseBulkCalling();
      setPaused(true);
      alert("Bulk Calling Paused");
    } catch (error) { alert("Pause Failed"); }
  };

  const handleResume = async () => {
    try {
      await resumeBulkCalling();
      setPaused(false);
      alert("Bulk Calling Resumed");
    } catch (error) { alert("Resume Failed"); }
  };

  const handleStop = async () => {
    try {
      await stopBulkCalling();
      setCalling(false);
      setPaused(false);
      alert("Bulk Calling Stopped");
    } catch (error) { alert("Stop Failed"); }
  };

  return (
    <div className="card control-card h-100">
      <h3>Call Controls</h3>
      <div className="control-buttons">
        <button className="btn btn-success" onClick={handleStart} disabled={calling}>
          <FaPlay className="me-2" /> Start
        </button>
        <button className="btn btn-warning" onClick={handlePause} disabled={!calling || paused}>
          <FaPause className="me-2" /> Pause
        </button>
        <button className="btn btn-info text-white" onClick={handleResume} disabled={!paused}>
          <FaRedo className="me-2" /> Resume
        </button>
        <button className="btn btn-danger" onClick={handleStop} disabled={!calling}>
          <FaStop className="me-2" /> Stop
        </button>
      </div>
    </div>
  );
}

export default Control;