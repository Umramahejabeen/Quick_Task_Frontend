import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await API.post("/auth/forgot-password", { email });
      setSuccess(res.data.message || "Reset link sent to your email.");
    } catch (err) {
      setError(err.response?.data?.message || "Email not registered");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card p-4 shadow" style={{ maxWidth: "420px", width: "100%" }}>
        <h4 className="text-center mb-4">Forgot Password</h4>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={submit}>
          <input className="form-control mb-3" type="email" placeholder="Registered email" value={email} onChange={e => setEmail(e.target.value)} required />
          <button className="btn btn-dark w-100">Send Reset Link</button>
        </form>

        <div className="text-center mt-3">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}
