// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import API from "../api/axios";

// export default function TaskList() {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchTasks = async () => {
//     try {
//       const res = await API.get("/tasks");
//       setTasks(res.data);
//     } catch (err) {
//       console.error("Failed to fetch tasks");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const deleteTask = async (id) => {
//     if (!window.confirm("Delete this task?")) return;

//     try {
//       await API.delete(`/tasks/${id}`);
//       setTasks(tasks.filter((task) => task.id !== id));
//     } catch (err) {
//       alert("Failed to delete task");
//     }
//   };

//   if (loading) return <p className="text-center mt-5">Loading tasks...</p>;

//   return (
//     <div className="container mt-5">
//       <div className="d-flex justify-content-between mb-3">
//         <h3>Your Tasks</h3>
//         <Link to="/create-task" className="btn btn-dark">
//           + New Task
//         </Link>
//       </div>

//       {tasks.length === 0 ? (
//         <p>No tasks yet.</p>
//       ) : (
//         tasks.map((task) => (
//           <div key={task.id} className="card mb-3 shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title">{task.title}</h5>
//               <p className="card-text">{task.description}</p>

//               <span
//                 className={`badge ${
//                   task.status === "completed"
//                     ? "bg-success"
//                     : "bg-warning text-dark"
//                 }`}
//               >
//                 {task.status}
//               </span>

//               <div className="mt-3">
//                 <Link
//                   to={`/edit-task/${task.id}`}
//                   className="btn btn-outline-primary me-2"
//                 >
//                   Edit
//                 </Link>
//                 <button
//                   className="btn btn-outline-danger"
//                   onClick={() => deleteTask(task.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function TaskList() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        // Get logged-in user info
        const userRes = await API.get("/auth/me");
        setUser(userRes.data);

        // Get user tasks
        const taskRes = await API.get("/tasks");
        setTasks(taskRes.data);
      } catch (error) {
        console.error("Dashboard load failed");
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await API.delete(`/tasks/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch {
      alert("Failed to delete task");
    }
  };

  if (loading) {
    return <p className="text-center mt-5">Loading dashboard...</p>;
  }

  return (
    <div className="container mt-5">
      {/* Top Section: Welcome + Logout */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        {user && (
          <div>
            <h4>
              👋 Welcome, <strong>{user.username}</strong>
            </h4>
            <p className="text-muted mb-0">Manage your tasks below</p>
          </div>
        )}

        <button className="btn btn-outline-danger btn-sm" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Your Tasks</h5>
        <Link to="/create-task" className="btn btn-dark btn-sm">
          + New Task
        </Link>
      </div>

      {/* Tasks */}
      {tasks.length === 0 ? (
        <p>No tasks found. Create your first task.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{task.title}</h5>
              <p className="card-text">{task.description}</p>

              <span
                className={`badge ${
                  task.status === "completed"
                    ? "bg-success"
                    : "bg-warning text-dark"
                }`}
              >
                {task.status}
              </span>

              <div className="mt-3">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="btn btn-outline-primary btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
