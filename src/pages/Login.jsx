import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthServices";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    const response = AuthService.loginUser(email, password);
    if (response.success) {
      navigate("/");
    } else {
      setError(response.message);
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-sm w-100" style={{ maxWidth: "400px" }}>
        <div className="card-header bg-primary text-white text-center py-3">
          <h4 className="mb-0">Student Dashboard</h4>
        </div>

        <div className="card-body p-4">
          <h5 className="text-center mb-4">Login to your account</h5>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Eg: john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Eg: ********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login / Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
