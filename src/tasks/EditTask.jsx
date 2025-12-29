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
