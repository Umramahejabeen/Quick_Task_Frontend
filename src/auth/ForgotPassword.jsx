import { useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await API.post("/auth/forgot-password", { email });
      setMessage(
        res.data?.message ||
          "Password reset link sent to your email."
      );
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong."
      );
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "420px" }}>
      <h3 className="text-center mb-4">Forgot Password</h3>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter your registered email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="btn btn-dark w-100">
          Send Reset Link
        </button>
      </form>

      <div className="text-center mt-3">
        <Link to="/">Back to Login</Link>
      </div>
    </div>
  );
}
