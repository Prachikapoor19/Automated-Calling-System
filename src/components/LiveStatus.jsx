function LiveStatus() {
  return (
    <div className="card live-status h-100">

      <div className="d-flex justify-content-between align-items-center">
        <h3 className="mb-0">Live Status</h3>

        <span className="badge bg-success">
          Live
        </span>
      </div>

      <div className="status-box mt-4">

        <h2 className="text-success">
          📞 Calling...
        </h2>

        <h5 className="mt-3">
          +91 9876543210
        </h5>

        <p className="text-muted">
          Current Contact
        </p>

      </div>

      <div className="progress mt-4">

        <div
          className="progress-fill"
          style={{ width: "56%" }}
        ></div>

      </div>

      <div className="d-flex justify-content-between mt-2">

        <small>Elapsed</small>

        <small>01:12 / 02:00</small>

      </div>

    </div>
  );
}

export default LiveStatus;