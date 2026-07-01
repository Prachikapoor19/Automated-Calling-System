function CallLogs() {

  const logs = [
    {
      number: "+91 9876543210",
      status: "Completed",
      duration: "02:00",
    },
    {
      number: "+91 9876543211",
      status: "Failed",
      duration: "00:15",
    },
    {
      number: "+91 9876543212",
      status: "Completed",
      duration: "02:00",
    },
  ];

  return (
    <div className="card calllogs h-100">

      <div className="d-flex justify-content-between align-items-center mb-3">

        <h3 className="mb-0">Call Logs</h3>

        <button className="btn btn-outline-primary btn-sm">
          View All
        </button>

      </div>

      <div className="table-responsive">

        <table className="table table-hover align-middle">

          <thead>

            <tr>
              <th>Phone</th>
              <th>Status</th>
              <th>Duration</th>
            </tr>

          </thead>

          <tbody>

            {logs.map((log, index) => (

              <tr key={index}>

                <td>{log.number}</td>

                <td>

                  <span
                    className={
                      log.status === "Completed"
                        ? "badge bg-success"
                        : "badge bg-danger"
                    }
                  >
                    {log.status}
                  </span>

                </td>

                <td>{log.duration}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default CallLogs;