// import { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export default function TaskList() {
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");

//   // Load tasks from localStorage
//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     setTasks(savedTasks);
//   }, []);

//   const saveTasks = (updatedTasks) => {
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//     setTasks(updatedTasks);
//   };

//   // Create Task
//   const createTask = () => {
//     if (!title.trim()) return;

//     const newTask = {
//       id: Date.now(),
//       title,
//       completed: false,
//     };

//     saveTasks([...tasks, newTask]);
//     setTitle("");
//   };

//   // Complete / Undo Task
//   const toggleComplete = (id) => {
//     saveTasks(
//       tasks.map((task) =>
//         task.id === id
//           ? { ...task, completed: !task.completed }
//           : task
//       )
//     );
//   };

//   // Delete Task
//   const deleteTask = (id) => {
//     if (!window.confirm("Delete this task?")) return;
//     saveTasks(tasks.filter((task) => task.id !== id));
//   };

//   // Edit Task
//   const editTask = (id) => {
//     navigate(`/edit-task/${id}`);
//   };

//   return (
//     <div className="container mt-4">
//       <h4 className="mb-3">👋 Welcome to QuickTask</h4>

//       {/* CREATE TASK */}
//       <div className="card p-3 mb-4">
//         <h5>Create a Task</h5>
//         <div className="d-flex gap-2">
//           <input
//             className="form-control"
//             placeholder="Enter task title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <button className="btn btn-dark" onClick={createTask}>
//             Add
//           </button>
//         </div>
//       </div>

//       {/* TASK LIST */}
//       <h5>Your Tasks</h5>

//       <ul className="list-group mb-4">
//         {tasks.map((task) => (
//           <li
//             key={task.id}
//             className={`list-group-item d-flex justify-content-between align-items-center ${
//               task.completed ? "list-group-item-success" : ""
//             }`}
//           >
//             <span
//               style={{
//                 textDecoration: task.completed ? "line-through" : "none",
//               }}
//             >
//               {task.title}
//             </span>

//             <div>
//               <button
//                 className={`btn btn-sm me-2 ${
//                   task.completed ? "btn-secondary" : "btn-success"
//                 }`}
//                 onClick={() => toggleComplete(task.id)}
//               >
//                 {task.completed ? "Undo" : "Complete"}
//               </button>

//               <button
//                 className="btn btn-sm btn-primary me-2"
//                 onClick={() => editTask(task.id)}
//               >
//                 Edit
//               </button>

//               <button
//                 className="btn btn-sm btn-danger"
//                 onClick={() => deleteTask(task.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {tasks.length === 0 && (
//         <p className="text-muted">No tasks yet. Create one above.</p>
//       )}

//       {/* FOOTER ACTIONS */}
//       <div className="d-flex justify-content-between">
//         {/* CHANGE PASSWORD */}
//         <Link to="/change-password" className="btn btn-outline-secondary">
//           Change Password
//         </Link>

//         {/* BACK TO LOGIN */}
//         <button
//           className="btn btn-outline-danger"
//           onClick={() => navigate("/login")}
//         >
//           Back to Login
//         </button>
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const taskId = Number(id); // 🔥 FIX

  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = tasks.find((t) => t.id === taskId);

    if (task) {
      setTitle(task.title);
      setCompleted(task.completed);
    }
  }, [taskId]);

  const updateTask = (e) => {
    e.preventDefault();

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updated = tasks.map((t) =>
      t.id === taskId ? { ...t, title, completed } : t
    );

    localStorage.setItem("tasks", JSON.stringify(updated));
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h4>Edit Task</h4>

        <form onSubmit={updateTask}>
          <input
            className="form-control mb-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
            <label className="form-check-label">Completed</label>
          </div>

          <button className="btn btn-dark w-100 mb-3">
            Update Task
          </button>
        </form>

        <button
          className="btn btn-outline-secondary w-100"
          onClick={() => navigate("/")}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
