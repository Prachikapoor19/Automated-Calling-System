import Sidebar from "../components/Sidebar";
import UploadCard from "../components/UploadCard";
import CallingQueue from "../components/CallingQueue";
import Control from "../components/Control";
import LiveStatus from "../components/LiveStatus";
import Statistics from "../components/Statistics";
import RecentActivity from "../components/RecentActivity";
import CallLogs from "../components/CallLogs";
import FooterCards from "../components/FooterCards";
import "../styles/dashboard.css";
import "../styles/responsive.css";

function Dashboard() {
  return (
    <div className="dashboard d-flex">

      <Sidebar />

      <div className="main container-fluid p-4">

        <h2 className="fw-bold">AI Calling Dashboard</h2>
        <p className="text-muted">
          Manage your automated calling campaigns
        </p>

        <div className="row g-4">

          <div className="col-lg-8">
            <UploadCard />
          </div>

          <div className="col-lg-4">
            <CallingQueue />
          </div>

          <div className="col-12">
            <Control />
          </div>

          <div className="col-lg-6">
            <LiveStatus />
          </div>

          <div className="col-lg-6">
            <Statistics />
          </div>

          <div className="col-lg-6">
            <RecentActivity />
          </div>

          <div className="col-lg-6">
            <CallLogs />
          </div>

          <div className="col-12">
            <FooterCards />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;