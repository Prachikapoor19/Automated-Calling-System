import { useEffect, useState } from "react";
import {
  FaFileUpload,
  FaPhone,
  FaPhoneSlash,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { getRecentActivity } from "../api/callApi";

function RecentActivity() {
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    try {
      const response = await getRecentActivity();

      console.log("Recent Activity:", response);

      setActivities(response.data);
    } catch (error) {
      console.error("Failed to fetch recent activity:", error);
    }
  };

  useEffect(() => {
    fetchActivities();

    const interval = setInterval(fetchActivities, 2000);

    return () => clearInterval(interval);
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case "csv_uploaded":
        return <FaFileUpload />;
      case "campaign_started":
        return <FaPhone />;
      case "call_connected":
        return <FaCheckCircle />;
      case "call_ended":
        return <FaPhoneSlash />;
      case "next_call":
        return <FaArrowRight />;
      default:
        return <FaPhone />;
    }
  };

  return (
    <div className="card activity h-100">

      <h3>Recent Activity</h3>

      {activities.length === 0 ? (
        <div className="text-center mt-5">
          <p className="text-muted">
            No Recent Activity
          </p>
        </div>
      ) : (
        <ul className="activity-list">

          {activities.map((item, index) => (

            <li key={index}>

              <div className="activity-icon">
                {getIcon(item.type)}
              </div>

              <div className="activity-content">

                <strong>{item.text}</strong>

                <small>{item.time}</small>

              </div>

            </li>

          ))}

        </ul>
      )}

    </div>
  );
}

export default RecentActivity;


