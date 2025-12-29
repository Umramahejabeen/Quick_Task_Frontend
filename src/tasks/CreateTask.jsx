import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function CreateTask() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await API.post("/tasks", {
        title,
        description,
      });

      navigate("/tasks");
    } catch (err) {
      setError("Failed to create task");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Create Task</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Task title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Task description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="btn btn-dark w-100">Create Task</button>
      </form>
    </div>
  );
}
