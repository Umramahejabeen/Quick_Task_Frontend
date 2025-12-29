import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function TaskList() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔐 Fetch tasks (authenticated)
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await API.get("/tasks");
      setTasks(res.data || []);
    } catch (err) {
      setError("Failed to load tasks");
      if (err.response?.status === 401) {
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  // ➕ Create task
  const addTask = async () => {
    if (!title.trim()) return;

    try {
      const res = await API.post("/tasks", {
        title,
        completed: false,
      });

      setTasks([...tasks, res.data]);
      setTitle("");
    } catch {
      setError("Failed to create task");
    }
  };

  // ✅ Complete / Undo
  const toggleComplete = async (task) => {
    try {
      const res = await API.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });

      setTasks(tasks.map((t) => (t.id === task.id ? res.data : t)));
    } catch {
      setError("Failed to update task");
    }
  };

  // 📝 Start edit
  const startEdit = (task) => {
    setEditId(task.id);
    setEditTitle(task.title);
  };

  // 💾 Update task
  const updateTask = async () => {
    try {
      const res = await API.put(`/tasks/${editId}`, {
        title: editTitle,
      });

      setTasks(tasks.map((t) => (t.id === editId ? res.data : t)));
      setEditId(null);
      setEditTitle("");
    } catch {
      setError("Failed to update task");
    }
  };

  // ❌ Delete task
  const deleteTask = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await API.delete(`/tasks/${id}`);
      setTasks(tasks.filter((t) => t.id !== id));
    } catch {
      setError("Failed to delete task");
    }
  };

  return (
    <div className="container mt-4">

      {/* WELCOME */}
      <div className="card p-3 mb-4">
        <h4>Welcome to QuickTask</h4>
        <p className="text-muted">Manage your tasks efficiently</p>
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

      {/* ERROR */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* TASK LIST */}
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
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
                        task.completed
                          ? "btn-secondary"
                          : "btn-success"
                      }`}
                      onClick={() => toggleComplete(task)}
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
                    onClick={() => setEditId(null)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* CHANGE PASSWORD + LOGOUT */}
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
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
