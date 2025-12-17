import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/public/LangdingPage";
import Login from "../pages/public/Login"
import SignUp from "../pages/public/SignUp"

import Dashboard from "../pages/mentor/men_dashboard";
import Gigs from "../pages/mentor/Gigs";
import Request from "../pages/mentor/Request"
import Schedule from "../pages/mentor/Schedule"
import Resources from "../pages/mentor/Resources"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />

        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/gigs" element={<Gigs/>} />
        <Route path="/request" element={<Request/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/resources" element={<Resources/>} />


      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
