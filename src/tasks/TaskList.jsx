
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function TaskList() {
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("user"));
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");

//   // Inline edit state
//   const [editId, setEditId] = useState(null);
//   const [editTitle, setEditTitle] = useState("");

//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     setTasks(storedTasks);
//   }, []);

//   const saveTasks = (updatedTasks) => {
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//     setTasks(updatedTasks);
//   };

//   // Create task
//   const addTask = () => {
//     if (!title.trim()) return;

//     const newTask = {
//       id: Date.now(),
//       title,
//       completed: false,
//     };

//     saveTasks([...tasks, newTask]);
//     setTitle("");
//   };

//   // Complete / Undo task
//   const toggleComplete = (id) => {
//     saveTasks(
//       tasks.map((t) =>
//         t.id === id ? { ...t, completed: !t.completed } : t
//       )
//     );
//   };

//   // Delete task
//   const deleteTask = (id) => {
//     if (!window.confirm("Delete this task?")) return;
//     saveTasks(tasks.filter((t) => t.id !== id));
//   };

//   // Start edit
//   const startEdit = (task) => {
//     setEditId(task.id);
//     setEditTitle(task.title);
//   };

//   // Update task
//   const updateTask = () => {
//     saveTasks(
//       tasks.map((t) =>
//         t.id === editId ? { ...t, title: editTitle } : t
//       )
//     );
//     setEditId(null);
//     setEditTitle("");
//   };

//   // Cancel edit
//   const cancelEdit = () => {
//     setEditId(null);
//     setEditTitle("");
//   };

//   return (
//     <div className="container mt-4">
//       {/* PROFILE */}
//       <div className="card p-3 mb-4">
//         <h4>Welcome, {user?.username || "User"}</h4>
//         <p className="text-muted">{user?.email}</p>

//         <div className="d-flex gap-2">
//           <button
//             className="btn btn-outline-secondary"
//             onClick={() => navigate("/change-password")}
//           >
//             Change Password
//           </button>

//           <button
//             className="btn btn-outline-danger"
//             onClick={() => navigate("/login")}
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* CREATE TASK */}
//       <div className="card p-3 mb-4">
//         <h5>Create Task</h5>
//         <div className="d-flex gap-2">
//           <input
//             className="form-control"
//             placeholder="Task title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <button className="btn btn-dark" onClick={addTask}>
//             Add
//           </button>
//         </div>
//       </div>

//       {/* TASK LIST */}
//       <ul className="list-group">
//         {tasks.map((task) => (
//           <li
//             key={task.id}
//             className={`list-group-item ${
//               task.completed ? "list-group-item-success" : ""
//             }`}
//           >
//             {/* NORMAL VIEW */}
//             {editId !== task.id ? (
//               <div className="d-flex justify-content-between align-items-center">
//                 <span
//                   style={{
//                     textDecoration: task.completed ? "line-through" : "none",
//                   }}
//                 >
//                   {task.title}
//                 </span>

//                 <div>
//                   <button
//                     className={`btn btn-sm me-2 ${
//                       task.completed ? "btn-secondary" : "btn-success"
//                     }`}
//                     onClick={() => toggleComplete(task.id)}
//                   >
//                     {task.completed ? "Undo" : "Complete"}
//                   </button>

//                   <button
//                     className="btn btn-sm btn-primary me-2"
//                     onClick={() => startEdit(task)}
//                   >
//                     Edit
//                   </button>

//                   <button
//                     className="btn btn-sm btn-danger"
//                     onClick={() => deleteTask(task.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               /* EDIT MODE */
//               <div className="d-flex gap-2">
//                 <input
//                   className="form-control"
//                   value={editTitle}
//                   onChange={(e) => setEditTitle(e.target.value)}
//                 />

//                 <button
//                   className="btn btn-success btn-sm"
//                   onClick={updateTask}
//                 >
//                   Update
//                 </button>

//                 <button
//                   className="btn btn-secondary btn-sm"
//                   onClick={cancelEdit}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>

//       {tasks.length === 0 && (
//         <p className="text-muted mt-3">No tasks yet</p>
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskList() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const saveTasks = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const addTask = () => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    saveTasks([...tasks, newTask]);
    setTitle("");
  };

  const toggleComplete = (id) => {
    saveTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    if (!window.confirm("Delete this task?")) return;
    saveTasks(tasks.filter((t) => t.id !== id));
  };

  const startEdit = (task) => {
    setEditId(task.id);
    setEditTitle(task.title);
  };

  const updateTask = () => {
    saveTasks(
      tasks.map((t) =>
        t.id === editId ? { ...t, title: editTitle } : t
      )
    );
    setEditId(null);
    setEditTitle("");
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditTitle("");
  };

  return (
    <div className="container mt-4">

      {/* WELCOME */}
      <div className="card p-3 mb-4">
        <h4>Welcome, {user?.username || "User"}</h4>
        <p className="text-muted">{user?.email}</p>
      </div>

      {/* CREATE TASK */}
      <div className="card p-3 mb-4">
        <h5>Create Task</h5>
        <div className="d-flex gap-2">
          <input
            className="form-control"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="btn btn-dark" onClick={addTask}>
            Add
          </button>
        </div>
      </div>

      {/* TASK LIST */}
      <ul className="list-group mb-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`list-group-item ${
              task.completed ? "list-group-item-success" : ""
            }`}
          >
            {editId !== task.id ? (
              <div className="d-flex justify-content-between align-items-center">
                <span
                  style={{
                    textDecoration: task.completed
                      ? "line-through"
                      : "none",
                  }}
                >
                  {task.title}
                </span>

                <div>
                  <button
                    className={`btn btn-sm me-2 ${
                      task.completed ? "btn-secondary" : "btn-success"
                    }`}
                    onClick={() => toggleComplete(task.id)}
                  >
                    {task.completed ? "Undo" : "Complete"}
                  </button>

                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => startEdit(task)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <div className="d-flex gap-2">
                <input
                  className="form-control"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button
                  className="btn btn-success btn-sm"
                  onClick={updateTask}
                >
                  Update
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="text-muted">No tasks yet</p>
      )}

      {/* 🔵 CHANGE PASSWORD & 🔴 LOGOUT — SIDE BY SIDE */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <div className="card p-3 border-primary">
            <button
              className="btn btn-primary w-100"
              onClick={() => navigate("/change-password")}
            >
              Change Password
            </button>
          </div>
        </div>

        <div className="col-md-6 mb-2">
          <div className="card p-3">
            <button
              className="btn btn-outline-danger w-100"
              onClick={() => navigate("/login")}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
