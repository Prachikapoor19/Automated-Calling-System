import {
  FaPlay,
  FaPause,
  FaStop,
  FaRedo,
} from "react-icons/fa";

function Control() {
  return (
    <div className="card control-card h-100">

      <h3>Call Controls</h3>

      <p className="text-muted">
        Control the automated calling process.
      </p>

      <div className="control-buttons">

        <button className="btn btn-success">
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