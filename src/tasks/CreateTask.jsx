import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function CreateTask() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setError("Task title is required");
    }

    try {
      await API.post("/tasks", {
        title,
        completed: false,
      });
      navigate("/tasks");
    } catch {
      setError("Failed to create task");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h4>Create Task</h4>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button className="btn btn-dark w-100">Create</button>
        </form>
      </div>
    </div>
  );
}
