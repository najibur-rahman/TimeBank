import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/public/LangdingPage";
import Login from "../pages/public/Login"
import SignUp from "../pages/public/SignUp"

// Mentor
import Dashboard from "../pages/mentor/men_dashboard";
import Gigs from "../pages/mentor/Gigs";
import Request from "../pages/mentor/Request"
import Schedule from "../pages/mentor/Schedule"
import Resources from "../pages/mentor/Resources"
import Dispute from "../pages/mentor/Men_Dispute"
import Men_notification from "../pages/mentor/Men_notification"
import Men_Profile from "../pages/mentor/Men_Profile"
import EditProfile from "../pages/mentor/EditProfile";
import Settings from "../pages/mentor/Men_Settings";
import Community from "../pages/mentor/Community";
import Classroom from "../pages/mentor/Classroom"; 

// Admin
import Admin_Dashboard from "../pages/admin/Admin_Dashboard";
import Admin_Approval from "../pages/admin/approval";
import View_Approval from "../pages/admin/Approval_details";
import User_Management from "../pages/admin/User_Management";
import AdminDispute from "../pages/admin/Admin_Dispute";
import CaseDetails from "../pages/admin/Dispute_Review";
import Admin_Economy from "../pages/admin/Financial_Economy";
import Transaction_Log from "../pages/admin/TransactionLog";
import CategoryManager from "../pages/admin/Category";
import AdminRoles from "../pages/admin/Admin_Role";
import AdminNotification from "../pages/admin/Admin_Notification";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />

        {/* Mentor path */}
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/gigs" element={<Gigs/>} />
        <Route path="/request" element={<Request/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/dispute" element={<Dispute/>} />
        <Route path="/notification" element={<Men_notification/>} />
        <Route path="/profile" element={<Men_Profile/>} />
        <Route path="/editprofile" element={<EditProfile/>} />
        <Route path="/settings" element={<Settings/>} />


        {/* Mentor path */}
        <Route path="/admin_dashboard" element={<Admin_Dashboard/>} />
        <Route path="/approval" element={<Admin_Approval/>} />
        <Route path="/details" element={<View_Approval />} />
        <Route path="/management" element={<User_Management />} />
        <Route path="/admindispute" element={<AdminDispute />} />
        <Route path="/casedetails" element={<CaseDetails />} />
        <Route path="/economy" element={<Admin_Economy />} />
        <Route path="/transactions" element={<Transaction_Log  />} />
        <Route path="/category" element={<CategoryManager />} />
        <Route path="/roles" element={<AdminRoles />} />
        <Route path="/admin_notification" element={<AdminNotification />} />
        <Route path="/community" element={<Community/>} />
        <Route path="/classroom" element={<Classroom />} />


      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
