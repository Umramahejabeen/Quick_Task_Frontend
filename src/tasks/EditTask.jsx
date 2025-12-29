import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await API.get(`/tasks/${id}`);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setStatus(res.data.status);
      } catch {
        setError("Failed to load task");
      }
    };

    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await API.put(`/tasks/${id}`, {
        title,
        description,
        status,
      });

      navigate("/tasks");
    } catch {
      setError("Failed to update task");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Edit Task</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="form-control mb-3"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="form-control mb-3"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <button className="btn btn-dark w-100">Update Task</button>
      </form>
    </div>
  );
}
