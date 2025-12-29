// import { useState } from "react";
// import API from "../api/axios";
// import { Link } from "react-router-dom";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     try {
//       const res = await API.post("/auth/forgot-password", { email });
//       setMessage(
//         res.data?.message ||
//           "Password reset link sent to your email."
//       );
//     } catch (err) {
//       setError(
//         err.response?.data?.message || "Something went wrong."
//       );
//     }
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: "420px" }}>
//       <h3 className="text-center mb-4">Forgot Password</h3>

//       {message && <div className="alert alert-success">{message}</div>}
//       {error && <div className="alert alert-danger">{error}</div>}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           className="form-control mb-3"
//           placeholder="Enter your registered email"
//           required
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <button className="btn btn-dark w-100">
//           Send Reset Link
//         </button>
//       </form>

//       <div className="text-center mt-3">
//         <Link to="/">Back to Login</Link>
//       </div>
//     </div>
//   );
// }




// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");

//   const submit = (e) => {
//     e.preventDefault();
//     alert(`Password reset link sent to ${email}`);
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Forgot Password</h3>
//       <form onSubmit={submit}>
//         <input
//           className="form-control mb-3"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button className="btn btn-dark w-100">Send Reset Link</button>
//       </form>

//       <p className="mt-3">
//         <Link to="/login">Back to Login</Link>
//       </p>
//     </div>
//   );
// }



// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");

//   const submit = (e) => {
//     e.preventDefault();
//     alert(`Password reset link sent to ${email}`);
//   };

//   return (
//     <div
//       className="container d-flex justify-content-center align-items-center"
//       style={{ minHeight: "100vh" }}
//     >
//       <div
//         className="card p-4 shadow"
//         style={{ width: "100%", maxWidth: "420px" }}
//       >
//         <h4 className="text-center mb-4">Forgot Password</h4>

//         <form onSubmit={submit}>
//           <input
//             className="form-control mb-3"
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <button className="btn btn-dark w-100">
//             Send Reset Link
//           </button>
//         </form>

//         <div className="text-center mt-3">
//           <Link to="/login">Back to Login</Link>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return setError("No registered account found.");
    }

    if (user.email !== email) {
      return setError("This email is not registered.");
    }

    // ✅ Valid registered email
    setSuccess("Password reset link has been sent to your email.");
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card p-4 shadow"
        style={{ width: "100%", maxWidth: "420px" }}
      >
        <h4 className="text-center mb-4">Forgot Password</h4>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={submit}>
          <input
            className="form-control mb-3"
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="btn btn-dark w-100">
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-3">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}
