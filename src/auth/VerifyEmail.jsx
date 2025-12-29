import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function VerifyEmail() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState("verifying"); // verifying | success | error
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const res = await API.get(`/auth/verify/${token}`);
        setStatus("success");
        setMessage(
          res.data?.message || "Email verified successfully! You can now log in."
        );

        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (err) {
        setStatus("error");
        setMessage(
          err.response?.data?.message ||
            "Verification link is invalid or expired."
        );
      }
    };

    verifyAccount();
  }, [token, navigate]);

  return (
    <div className="container mt-5 text-center" style={{ maxWidth: "500px" }}>
      {status === "verifying" && (
        <>
          <h4>Verifying your email...</h4>
          <p>Please wait</p>
        </>
      )}

      {status === "success" && (
        <div className="alert alert-success">
          <h5>Verification Successful 🎉</h5>
          <p>{message}</p>
          <p>Redirecting to login...</p>
        </div>
      )}

      {status === "error" && (
        <div className="alert alert-danger">
          <h5>Verification Failed ❌</h5>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}
