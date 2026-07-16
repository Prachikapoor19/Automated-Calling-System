import { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaPhoneSlash,
  FaBroadcastTower,
} from "react-icons/fa";
import { getCampaignStats } from "../api/callApi";

function Statistics() {
  const [stats, setStats] = useState(null);

  const fetchStats = async () => {
    try {
      const response = await getCampaignStats();
      console.log("Campaign Stats:", response);
      setStats(response.data);
    } catch (error) {
      console.error("Failed to fetch statistics:", error);
    }
  };

  useEffect(() => {
    fetchStats();

    const interval = setInterval(fetchStats, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!stats) {
    return (
      <div className="card statistics h-100 d-flex justify-content-center align-items-center">
        <h5>Loading Statistics...</h5>
      </div>
    );
  }

  return (
    <div className="card statistics h-100 p-3">

      <h3 className="mb-4">📊 Call Statistics</h3>

      <div className="row g-3">

        <div className="col-md-4 col-6">
          <div className="card shadow-sm border-0 text-center p-3 h-100">
            <FaPhoneAlt size={28} className="text-primary mb-2" />
            <h2>{stats.total_calls}</h2>
            <span>Total Calls</span>
          </div>
        </div>

        <div className="col-md-4 col-6">
          <div className="card shadow-sm border-0 text-center p-3 h-100">
            <FaCheckCircle size={28} className="text-success mb-2" />
            <h2>{stats.completed_calls}</h2>
            <span>Completed</span>
          </div>
        </div>

        <div className="col-md-4 col-6">
          <div className="card shadow-sm border-0 text-center p-3 h-100">
            <FaTimesCircle size={28} className="text-danger mb-2" />
            <h2>{stats.failed_calls}</h2>
            <span>Failed</span>
          </div>
        </div>

        <div className="col-md-4 col-6">
          <div className="card shadow-sm border-0 text-center p-3 h-100">
            <FaPhoneSlash size={28} className="text-secondary mb-2" />
            <h2>{stats.unanswered_calls}</h2>
            <span>Unanswered</span>
          </div>
        </div>

        <div className="col-md-4 col-6">
          <div className="card shadow-sm border-0 text-center p-3 h-100">
            <FaClock size={28} className="text-warning mb-2" />
            <h2>{stats.pending_calls}</h2>
            <span>Pending</span>
          </div>
        </div>

        <div className="col-md-4 col-6">
          <div className="card shadow-sm border-0 text-center p-3 h-100">
            <FaBroadcastTower size={28} className="text-info mb-2" />
            <h2>{stats.active_calls}</h2>
            <span>Active</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Statistics;