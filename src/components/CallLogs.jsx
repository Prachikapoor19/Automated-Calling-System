import { useEffect, useState } from "react";
import { getCallLogs } from "../api/callApi";

function CallLogs() {
  const [logs, setLogs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const data = await getCallLogs();

      console.log("Call Logs:", data);

      setLogs(data.logs || []);
    } catch (error) {
      console.error("Failed to fetch call logs:", error);
    }
  };

  // Default me sirf last 5 logs
  const displayedLogs = showAll
  ? logs
  : logs.slice(0, 5);

  return (
    <div className="card calllogs h-100">

      <div className="d-flex justify-content-between align-items-center mb-3">

        <h3 className="mb-0">Call Logs</h3>

        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}
        </button>

      </div>

      <div className="table-responsive">

        <table className="table table-hover align-middle">

          <thead>
            <tr>
              <th>Phone</th>
              <th>Date</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Cost</th>
            </tr>
          </thead>

          <tbody>

            {displayedLogs.length > 0 ? (
              displayedLogs.map((log) => (
                <tr key={log.id}>

                  <td>{log.phone_number}</td>

                  <td>{log.date}</td>

                  <td>
                    <span
                      className={
                        log.status === "Completed"
                          ? "badge bg-success"
                          : log.status === "Failed"
                          ? "badge bg-danger"
                          : "badge bg-warning text-dark"
                      }
                    >
                      {log.status}
                    </span>
                  </td>

                  <td>{log.duration} sec</td>

                  <td>₹{log.cost}</td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center text-muted"
                >
                  No Call Logs Available
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default CallLogs;