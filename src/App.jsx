// import { Routes, Route } from "react-router-dom";

// /* Auth Pages */
// import Login from "./auth/Login";
// import Register from "./auth/Register";
// import ForgotPassword from "./auth/ForgotPassword";
// import ChangePassword from "./auth/ChangePassword";
// import ResetPassword from "./auth/ResetPassword";

// /* Dashboard */
// import TaskList from "./tasks/TaskList";

// export default function App() {
//   return (
//     <Routes>
//       {/* DEFAULT */}
//       <Route path="/" element={<Login />} />

//       {/* AUTH */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/change-password" element={<ChangePassword />} />

//       {/* TASKLIST / DASHBOARD */}
//       <Route path="/tasks" element={<TaskList />} />
//     </Routes>
//   );
// }




import { Routes, Route } from "react-router-dom";

/* Auth Pages */
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";
import ChangePassword from "./auth/ChangePassword";
import ResetPassword from "./auth/ResetPassword";

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

      {/* 🔑 RESET PASSWORD (BOTH WORK) */}
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      {/* DASHBOARD */}
      <Route path="/tasks" element={<TaskList />} />
    </Routes>
  );
}
