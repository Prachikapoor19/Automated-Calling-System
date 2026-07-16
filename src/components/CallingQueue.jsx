import { useEffect, useState } from "react";
import { getQueueStatus } from "../api/callApi";

function CallingQueue() {
  const [queueData, setQueueData] = useState(null);

  const fetchQueueStatus = async () => {
    try {
      const data = await getQueueStatus();
      console.log("Queue Status:", data);
      setQueueData(data);
    } catch (error) {
      console.error("Failed to fetch queue status:", error);
    }
  };

  useEffect(() => {
    fetchQueueStatus();

    // Auto refresh every 2 seconds
    const interval = setInterval(fetchQueueStatus, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!queueData) {
    return (
      <div className="card queue-card h-100 d-flex justify-content-center align-items-center">
        <h5>Loading Queue...</h5>
      </div>
    );
  }

  return (
    <div className="card queue-card h-100">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Calling Queue</h3>

        <button className="btn btn-outline-primary btn-sm">
          View All
        </button>
      </div>

      <div className="queue-grid">

        <div className="queue-item">
          <span>Total Numbers</span>
          <h2>{queueData.calling_queue.total}</h2>
        </div>

        <div className="queue-item">
          <span>Remaining</span>
          <h2>{queueData.calling_queue.remaining}</h2>
        </div>

        <div className="queue-item">
          <span>Completed</span>
          <h2>{queueData.calling_queue.completed}</h2>
        </div>

      </div>

      <hr />

      <div className="next-call">

        <small className="text-muted">
          Next In Queue
        </small>

        <h4 className="mt-2">
          {queueData.calling_queue.next_number}
        </h4>

      </div>

    </div>
  );
}

export default CallingQueue;