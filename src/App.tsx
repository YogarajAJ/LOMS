import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import DashboardLayout from "@/pages/DashboardLayout";
import Home from "@/pages/Home";
import Settings from "@/pages/Settings";

export default function App() {
  const isLoggedIn = false; // Replace with actual logic

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard/home" /> : <LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        {/* Add more routes */}
      </Route>
    </Routes>
  );
}
