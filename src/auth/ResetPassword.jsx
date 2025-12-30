// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import API from "../api/axios";

// export default function ResetPassword() {
//   const { token } = useParams();
//   const navigate = useNavigate();

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       const res = await API.post(`/auth/reset-password/${token}`, {
//         password,
//       });

//       setMessage(
//         res.data?.message || "Password reset successful!"
//       );

//       setTimeout(() => {
//         navigate("/");
//       }, 2500);
//     } catch (err) {
//       setError(
//         err.response?.data?.message ||
//           "Reset link is invalid or expired."
//       );
//     }
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: "420px" }}>
//       <h3 className="text-center mb-4">Reset Password</h3>

//       {message && <div className="alert alert-success">{message}</div>}
//       {error && <div className="alert alert-danger">{error}</div>}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="password"
//           className="form-control mb-3"
//           placeholder="New Password"
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <input
//           type="password"
//           className="form-control mb-3"
//           placeholder="Confirm New Password"
//           required
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />

//         <button className="btn btn-dark w-100">
//           Reset Password
//         </button>
//       </form>
//     </div>
//   );
// }




import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function ResetPassword() {
  const { token } = useParams(); // may be undefined
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [clicked, setClicked] = useState(false); // 👈 NEW

  const handleSubmit = async (e) => {
    e.preventDefault();
    setClicked(true);
    setMessage("");
    setError("");

    if (!token) {
      return setError("Please open the reset link sent to your email.");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      const res = await API.post(`/auth/reset-password/${token}`, {
        password,
      });

      setMessage(res.data?.message || "Password reset successful!");

      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Reset link is invalid or expired."
      );
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "420px" }}>
      {/* ✅ WHITE HEADING */}
      <h3
        className="text-center mb-4"
        style={{ color: "#ffffff" }}
      >
        Reset Password
      </h3>

      {/* ⚠️ SHOW MESSAGE ONLY AFTER BUTTON CLICK */}
      {clicked && !token && (
        <div className="alert alert-warning">
          Please open the reset link sent to your email.
        </div>
      )}

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          className="form-control mb-3"
          placeholder="New Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Confirm New Password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* ✅ BUTTON IS CLICKABLE */}
        <button className="btn btn-dark w-100">
          Reset Password
        </button>
      </form>
    </div>
  );
}
