import { useEffect, useState } from "react";
import { getQueueStatus } from "../api/callApi";

function LiveStatus() {
  const [statusData, setStatusData] = useState(null);

  const fetchLiveStatus = async () => {
    try {
      const data = await getQueueStatus();
      console.log("Live Status:", data);
      setStatusData(data);
    } catch (error) {
      console.error("Failed to fetch live status:", error);
    }
  };

  useEffect(() => {
    fetchLiveStatus();

    const interval = setInterval(fetchLiveStatus, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!statusData) {
    return (
      <div className="card live-status h-100">
        <div className="d-flex justify-content-center align-items-center h-100">
          <h5>Loading...</h5>
        </div>
      </div>
    );
  }

  const status = statusData.live_status.status;
  const currentNumber = statusData.live_status.current_calling_number;

  return (
    <div className="card live-status h-100">

      <div className="d-flex justify-content-between align-items-center">
        <h3 className="mb-0">Live Status</h3>

        <span
          className={`badge ${
            status === "calling"
              ? "bg-success"
              : status === "paused"
              ? "bg-warning text-dark"
              : status === "stopped"
              ? "bg-danger"
              : "bg-secondary"
          }`}
        >
          {status.toUpperCase()}
        </span>
      </div>

      <div className="status-box mt-4">

        <h2
          className={
            status === "calling"
              ? "text-success"
              : status === "paused"
              ? "text-warning"
              : status === "stopped"
              ? "text-danger"
              : "text-secondary"
          }
        >
          {status === "calling"
            ? "📞 Calling..."
            : status === "paused"
            ? "⏸️ Paused"
            : status === "stopped"
            ? "🛑 Stopped"
            : "💤 Idle"}
        </h2>

        <h5 className="mt-3">
          {currentNumber}
        </h5>

        <p className="text-muted">
          Current Contact
        </p>

      </div>

      <div className="progress mt-4">

        <div
          className="progress-fill"
          style={{
            width: status === "calling" ? "100%" : "0%",
          }}
        ></div>

      </div>

      <div className="d-flex justify-content-between mt-2">

        <small>Status</small>

        <small>{status}</small>

      </div>

    </div>
  );
}

export default LiveStatus;