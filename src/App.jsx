import { Routes, Route } from "react-router-dom";

import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import VerifyEmail from "./auth/VerifyEmail";

import TaskList from "./tasks/TaskList";
import CreateTask from "./tasks/CreateTask";
import EditTask from "./tasks/EditTask";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      {/* Project Name */}
      <div className="text-center mt-3 mb-4">
        <h2>QuickTask</h2>
      </div>

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/verify/:token" element={<VerifyEmail />} />

        {/* Protected Routes */}
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <TaskList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-task"
          element={
            <ProtectedRoute>
              <CreateTask />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-task/:id"
          element={
            <ProtectedRoute>
              <EditTask />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
