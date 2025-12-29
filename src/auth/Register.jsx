// import { useState } from "react";
// import API from "../api/axios";
// import { Link, useNavigate } from "react-router-dom";

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     try {
//       await API.post("/auth/register", {
//         username,
//         email,
//         password,
//       });

//       setMessage(
//         "Registration successful! Please check your email to verify your account."
//       );

//       setTimeout(() => {
//         navigate("/");
//       }, 2500);
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: "450px" }}>
//       <h3 className="text-center mb-4">Register Account</h3>

//       {error && <div className="alert alert-danger">{error}</div>}
//       {message && <div className="alert alert-success">{message}</div>}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           className="form-control mb-3"
//           placeholder="Username"
//           required
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <input
//           type="email"
//           className="form-control mb-3"
//           placeholder="Email"
//           required
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           className="form-control mb-3"
//           placeholder="Password"
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button className="btn btn-dark w-100">Register</button>
//       </form>

//       <div className="text-center mt-3">
//         <Link to="/">Already have an account? Login</Link>
//       </div>
//     </div>
//   );
// }




// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export default function Register() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("user", JSON.stringify({ email, password }));
//     navigate("/login");
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
//       <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "420px" }}>
//         <h4 className="text-center mb-4">Register</h4>

//         <form onSubmit={submit}>
//           <input
//             className="form-control mb-3"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             className="form-control mb-3"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button className="btn btn-dark w-100">Register</button>
//         </form>

//         <div className="text-center mt-3">
//           Already have an account? <Link to="/login">Login</Link>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();

    // Save user details (frontend-only demo)
    localStorage.setItem(
      "user",
      JSON.stringify({ username, email, password })
    );

    navigate("/login");
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
        <h4 className="text-center mb-4">Register</h4>

        <form onSubmit={submit}>
          {/* USERNAME */}
          <input
            className="form-control mb-3"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          {/* EMAIL */}
          <input
            className="form-control mb-3"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* PASSWORD */}
          <input
            className="form-control mb-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn btn-dark w-100">
            Register
          </button>
        </form>

        <div className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
