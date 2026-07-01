import {
  FaThLarge,
  FaPhone,
  FaUsers,
  FaFileUpload,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h3 className="logo">📞 Auto Calling</h3>

      <ul className="menu">

        <li className="active">
          <FaThLarge /> Dashboard
        </li>

        <li>
          <FaPhone /> Call Logs
        </li>

        <li>
          <FaUsers /> Contacts
        </li>

        <li>
          <FaFileUpload /> Upload CSV
        </li>

        <li>
          <FaChartBar /> Reports
        </li>

        <li>
          <FaCog /> Settings
        </li>

      </ul>

      <button className="logout">
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;