import { FaPlay, FaPause, FaStop, FaRedo } from "react-icons/fa";
import { makeCall } from "../api/callApi";

function Control() {

  const handleStart = async () => {
    console.log("START BUTTON CLICKED");
    try {
      const result = await makeCall("917524856296"); // Test number
      alert("Call Started!\n" + JSON.stringify(result));
    } catch (error) {
      console.error(error);
      alert("Call Failed");
    }
  };

  return (
    <div className="card control-card h-100">

      <h3>Call Controls</h3>

      <p className="text-muted">
        Control the automated calling process.
      </p>

      <div className="control-buttons">

        <button
          className="btn btn-success"
          onClick={handleStart}
        >
          <FaPlay /> Start
        </button>

        <button className="btn btn-warning">
          <FaPause /> Pause
        </button>

        <button className="btn btn-info text-white">
          <FaRedo /> Resume
        </button>

        <button className="btn btn-danger">
          <FaStop /> Stop
        </button>

      </div>

    </div>
  );
}

export default Control;