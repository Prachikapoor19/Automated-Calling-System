import { NavLink } from "react-router-dom";
import {
  FaThLarge,
  FaPhone,
  FaUsers,
  FaFileUpload,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaRupeeSign,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h3 className="logo">📞 Auto Calling</h3>

      <ul className="menu">

        <li>
          <NavLink to="/">
           <FaThLarge /> Dashboard
          </NavLink>
       </li>

       <li>
          <NavLink to="/dialer">
           <FaPhone /> Dialer
          </NavLink>
       </li>

       <li>
         <NavLink to="/costing">
          <FaRupeeSign /> Costing
         </NavLink>
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