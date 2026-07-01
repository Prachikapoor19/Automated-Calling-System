import {
  FaFileUpload,
  FaPhone,
  FaPhoneSlash,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

function RecentActivity() {
  const activities = [
    {
      icon: <FaFileUpload />,
      text: "CSV Uploaded Successfully",
      time: "10:20 AM",
    },
    {
      icon: <FaPhone />,
      text: "Campaign Started",
      time: "10:22 AM",
    },
    {
      icon: <FaCheckCircle />,
      text: "Call Connected",
      time: "10:23 AM",
    },
    {
      icon: <FaPhoneSlash />,
      text: "Call Ended",
      time: "10:25 AM",
    },
    {
      icon: <FaArrowRight />,
      text: "Next Number Dialing",
      time: "10:25 AM",
    },
  ];

  return (
    <div className="card activity h-100">

      <h3>Recent Activity</h3>

      <ul className="activity-list">

        {activities.map((item, index) => (

          <li key={index}>

            <div className="activity-icon">
              {item.icon}
            </div>

            <div className="activity-content">
              <strong>{item.text}</strong>
              <small>{item.time}</small>
            </div>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default RecentActivity;
