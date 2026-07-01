function Statistics() {
  return (
    <div className="card statistics h-100">

      <h3>Call Statistics</h3>

      <div className="stats">

        <div className="stat-box">
          <h2>50</h2>
          <span>Total Calls</span>
        </div>

        <div className="stat-box">
          <h2>10</h2>
          <span>Completed</span>
        </div>

        <div className="stat-box">
          <h2>2</h2>
          <span>Failed</span>
        </div>

        <div className="stat-box">
          <h2>38</h2>
          <span>Pending</span>
        </div>

      </div>

    </div>
  );
}

export default Statistics;