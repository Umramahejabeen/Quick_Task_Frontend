// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function ChangePassword() {
//   const navigate = useNavigate();
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const submit = (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       return setError("Passwords do not match");
//     }

//     localStorage.setItem("password", newPassword);
//     alert("Password changed successfully");
//     navigate("/login");
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
//       <div className="card p-4" style={{ maxWidth: "420px", width: "100%" }}>
//         <h4 className="text-center mb-4">Change Password</h4>

//         {error && <div className="alert alert-danger">{error}</div>}

//         <form onSubmit={submit}>
//           <input
//             type="password"
//             className="form-control mb-3"
//             placeholder="Old Password"
//             value={oldPassword}
//             onChange={(e) => setOldPassword(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             className="form-control mb-3"
//             placeholder="New Password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             className="form-control mb-4"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />

//           <button className="btn btn-dark w-100 mb-3">Submit</button>
//         </form>

//         <button
//           className="btn btn-outline-secondary w-100"
//           onClick={() => navigate("/login")}
//         >
//           Back to Login
//         </button>
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function ChangePassword() {
//   const navigate = useNavigate();
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const submit = (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       return setError("Passwords do not match");
//     }

//     alert("Password changed successfully");
//     navigate("/login"); // ✅ ALWAYS login
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
//       <div className="card p-4" style={{ maxWidth: "420px", width: "100%" }}>
//         <h4 className="text-center mb-4">Change Password</h4>

//         {error && <div className="alert alert-danger">{error}</div>}

//         <form onSubmit={submit}>
//           <input className="form-control mb-3" placeholder="Old Password" type="password" required />
//           <input className="form-control mb-3" placeholder="New Password" type="password" required />
//           <input className="form-control mb-4" placeholder="Confirm Password" type="password" required />

//           <button className="btn btn-dark w-100 mb-3">Submit</button>
//         </form>

//         <button
//           className="btn btn-outline-secondary w-100"
//           onClick={() => navigate("/login")}
//         >
//           Back to Login
//         </button>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return setError("Passwords do not match");
    }

    // Demo logic
    localStorage.setItem("password", newPassword);

    alert("Password changed successfully");
    navigate("/login");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card p-4" style={{ maxWidth: "420px", width: "100%" }}>
        <h4 className="text-center mb-4">Change Password</h4>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={submit}>
          <input
            className="form-control mb-3"
            placeholder="Old Password"
            type="password"
            required
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <input
            className="form-control mb-3"
            placeholder="New Password"
            type="password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            className="form-control mb-4"
            placeholder="Confirm Password"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="btn btn-dark w-100 mb-3">Submit</button>
        </form>

        <button
          className="btn btn-outline-secondary w-100"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
