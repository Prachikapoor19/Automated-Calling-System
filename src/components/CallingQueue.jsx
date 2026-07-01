function CallingQueue() {
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
          <h2>50</h2>
        </div>

        <div className="queue-item">
          <span>Remaining</span>
          <h2>38</h2>
        </div>

        <div className="queue-item">
          <span>Completed</span>
          <h2>10</h2>
        </div>

      </div>

      <hr />

      <div className="next-call">

        <small className="text-muted">
          Next In Queue
        </small>

        <h4 className="mt-2">
          +91 91234 56780
        </h4>

      </div>

    </div>
  );
}

export default CallingQueue;