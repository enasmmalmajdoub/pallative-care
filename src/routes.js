import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import MinistryDashboard from "./pages/Dashboard/MinistryDashboard/MinistryDashboard";
import ProviderDashboard from "./pages/Dashboard/ProviderDashboard/ProviderDashboard";
import Patient from "./pages/Patient";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/dashboard/ministry" element={<MinistryDashboard />} />
      <Route path="/dashboard/provider" element={<ProviderDashboard />} />
      <Route path="/patient" element={<Patient />} />
      
    </Routes>
  );
};

export default AppRoutes;
