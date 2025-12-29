import { Routes, Route } from "react-router-dom";

/* Auth Pages */
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";
import ChangePassword from "./auth/ChangePassword";

/* Dashboard */
import TaskList from "./tasks/TaskList";

export default function App() {
  return (
    <Routes>
      {/* DEFAULT */}
      <Route path="/" element={<Login />} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/change-password" element={<ChangePassword />} />

      {/* TASKLIST / DASHBOARD */}
      <Route path="/tasks" element={<TaskList />} />
    </Routes>
  );
}
