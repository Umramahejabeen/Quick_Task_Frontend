import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/login", { email, password });

      // ✅ JWT stored
      localStorage.setItem("token", res.data.token);

      navigate("/tasks");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <h2 className="mb-4" style={{ color: "#ffffff" }}>QuickTask</h2>

      <div className="card p-4 shadow" style={{ maxWidth: "420px", width: "100%" }}>
        <h4 className="text-center mb-4">Login</h4>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={submit}>
          <input className="form-control mb-3" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input className="form-control mb-3" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button className="btn btn-dark w-100">Login</button>
        </form>

        <div className="text-center mt-3">
          <Link to="/forgot-password">Forgot Password?</Link><br />
          <Link to="/register">Create a new account</Link>
        </div>
      </div>
    </div>
  );
}
