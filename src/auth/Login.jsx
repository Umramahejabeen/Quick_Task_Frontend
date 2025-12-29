
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const submit = (e) => {
//     e.preventDefault();
//     setError("");

//     const user = JSON.parse(localStorage.getItem("user"));

//     if (!user) {
//       return setError("No account found. Please register first.");
//     }

//     if (user.email !== email || user.password !== password) {
//       return setError("Invalid email or password.");
//     }

//     // ✅ REDIRECT TO TASKLIST ROUTE
//     navigate("/tasks");
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
//         <h4 className="text-center mb-4">Login</h4>

//         {error && <div className="alert alert-danger">{error}</div>}

//         <form onSubmit={submit}>
//           <div className="mb-3">
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button className="btn btn-dark w-100">
//             Login
//           </button>
//         </form>

//         <div className="text-center mt-3">
//           <Link to="/forgot-password">Forgot Password?</Link>
//           <br />
//           <Link to="/register">Create a new account</Link>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError("");

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return setError("No account found. Please register first.");
    }

    if (user.email !== email || user.password !== password) {
      return setError("Invalid email or password.");
    }

    // Redirect to TaskList
    navigate("/tasks");
  };

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      {/* PROJECT NAME */}
      <h2 className="mb-4" style={{ color: "#ffffff" }}>
        QuickTask
      </h2>

      <div
        className="card p-4 shadow"
        style={{ width: "100%", maxWidth: "420px" }}
      >
        <h4 className="text-center mb-4">Login</h4>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={submit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-dark w-100">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <Link to="/forgot-password">Forgot Password?</Link>
          <br />
          <Link to="/register">Create a new account</Link>
        </div>
      </div>
    </div>
  );
}
