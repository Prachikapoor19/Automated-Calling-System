import { useEffect, useState } from "react";
import { getFooterStats } from "../api/callApi";

function FooterCards() {
  const [stats, setStats] = useState(null);

  const fetchFooterStats = async () => {
    try {
      const response = await getFooterStats();

      console.log("Footer Stats:", response);

      setStats(response.data);
    } catch (error) {
      console.error("Failed to fetch footer stats:", error);
    }
  };

  useEffect(() => {
    fetchFooterStats();

    const interval = setInterval(fetchFooterStats, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!stats) {
    return (
      <div className="footer-cards">
        <div className="footer-card">
          <h5>Loading...</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="footer-cards">

      <div className="footer-card">
        <h5>Total Campaigns</h5>
        <h2>{stats.total_campaigns}</h2>
        <small>Running Campaigns</small>
      </div>

      <div className="footer-card">
        <h5>Today's Calls</h5>
        <h2>{stats.todays_calls}</h2>
        <small>Calls Processed Today</small>
      </div>

      <div className="footer-card">
        <h5>Success Rate</h5>
        <h2>{stats.success_rate}%</h2>
        <small>Overall Performance</small>
      </div>

    </div>
  );
}

export default FooterCards;