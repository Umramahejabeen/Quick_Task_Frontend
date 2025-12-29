import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        QuickTask
      </Link>

      <div>
        {!token ? (
          <>
            <Link className="btn btn-outline-light me-2" to="/">
              Login
            </Link>
            <Link className="btn btn-outline-light" to="/register">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light me-2" to="/tasks">
              Tasks
            </Link>
            <Link className="btn btn-outline-light me-2" to="/create-task">
              Create Task
            </Link>
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
