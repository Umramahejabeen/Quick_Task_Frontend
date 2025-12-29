import { useState } from "react";
import API from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      await API.post("/auth/register", {
        username,
        email,
        password,
      });

      setMessage(
        "Registration successful! Please check your email to verify your account."
      );

      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <h3 className="text-center mb-4">Register Account</h3>

      {error && <div className="alert alert-danger">{error}</div>}
      {message && <div className="alert alert-success">{message}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-dark w-100">Register</button>
      </form>

      <div className="text-center mt-3">
        <Link to="/">Already have an account? Login</Link>
      </div>
    </div>
  );
}
