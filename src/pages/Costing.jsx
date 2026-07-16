import { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaRupeeSign,
  FaWallet,
  FaChartLine,
} from "react-icons/fa";

import { getCosting } from "../api/callApi";

function Costing() {

  const [costing, setCosting] = useState(null);

  const fetchCosting = async () => {
    try {
      const data = await getCosting();
      console.log("Costing Response:", data);
      setCosting(data);
    } catch (error) {
      console.error("Failed to fetch costing:", error);


      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  useEffect(() => {
    fetchCosting();
  }, []);

  if (!costing) {
    return (
      <div className="text-center mt-5">
        <h4>Loading Costing...</h4>
      </div>
    );
  }

  return (
    <>
      <h2 className="fw-bold">Costing Dashboard</h2>

      <p className="text-muted">
        Monitor calling cost and usage.
      </p>

      <div className="row g-4 mt-3">

        <div className="col-lg-3 col-md-6">
          <div className="card shadow-sm border-0 p-4 text-center h-100">

            <FaPhoneAlt
              size={35}
              className="text-primary mb-3"
            />

            <h6>Total Calls</h6>

            <h2>{costing.summary.total_calls}</h2>

          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card shadow-sm border-0 p-4 text-center h-100">

            <FaRupeeSign
              size={35}
              className="text-success mb-3"
            />

            <h6>Cost Per Minute</h6>

            <h2>${costing.summary.cost_per_call}</h2>

          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card shadow-sm border-0 p-4 text-center h-100">

            <FaChartLine
              size={35}
              className="text-warning mb-3"
            />

            <h6>Total Cost</h6>

            <h2>${costing.summary.total_cost}</h2>

          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card shadow-sm border-0 p-4 text-center h-100">

            <FaWallet
              size={35}
              className="text-danger mb-3"
            />

            <h6>Remaining Balance</h6>

            <h2>${costing.summary.remaining_balance}</h2>

          </div>
        </div>

      </div>

      <div className="card shadow-sm border-0 mt-5">

        <div className="card-header bg-white">
          <h5 className="mb-0">Call Cost History</h5>
        </div>

        <div className="table-responsive">

          <table className="table table-hover mb-0">

            <thead className="table-light">

              <tr>

                <th>Date</th>

                <th>Total Calls</th>

                <th>Connected</th>

                <th>Failed</th>

                <th>Cost</th>

              </tr>

            </thead>

            <tbody>

              {costing.history.map((item, index) => (

                <tr key={index}>

                  <td>{item.date}</td>

                  <td>{item.stats.total}</td>

                  <td>{item.stats.connected}</td>

                  <td>{item.stats.failed}</td>

                  <td>₹{item.cost}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      <div className="card shadow-sm border-0 mt-4 p-4">

        <h5>Today's Usage</h5>

        <p>Total Usage</p>

        <div className="progress mb-3">

          <div
            className="progress-bar bg-success"
            style={{ width: "75%" }}
          >
            75%
          </div>

        </div>

        <div className="row">

          <div className="col-md-4">
            <h6>Total Minutes</h6>
            <h4>215 min</h4>
          </div>

          <div className="col-md-4">
            <h6>Average Cost</h6>
            <h4>₹{costing.summary.cost_per_call}</h4>
          </div>

          <div className="col-md-4">
            <h6>Status</h6>
            <span className="badge bg-success fs-6">
              Active
            </span>
          </div>

        </div>

      </div>

    </>
  );
}

export default Costing;