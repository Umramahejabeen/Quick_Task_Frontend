import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function ChangePassword() {
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      await API.post("/auth/change-password", {
        oldPassword,
        newPassword,
      });

      alert("Password changed successfully");
      localStorage.removeItem("token");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Change password failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card p-4" style={{ maxWidth: "420px", width: "100%" }}>
        <h4 className="text-center mb-4">Change Password</h4>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={submit}>
          <input className="form-control mb-3" placeholder="Old Password" type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} required />
          <input className="form-control mb-3" placeholder="New Password" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required />
          <input className="form-control mb-4" placeholder="Confirm Password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
          <button className="btn btn-dark w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}
