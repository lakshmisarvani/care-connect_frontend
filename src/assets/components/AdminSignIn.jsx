// src/components/AdminSignIn.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AdminSignIn.css'; // Assuming you're using a separate CSS file for styling
import AdminDashboard from "./AdminDashboard";
import NavBar from "./NavBar";

const AdminSignIn = () => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful sign-in logic
    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }
    // Redirect to admin dashboard after sign-in
    alert("Admin signed in ");
    navigate("/admin-dashboard");
  };
  

  return (
    <div>
      <NavBar/>
    <div className="admin-signin-container">
      <div className="card">
        <h2>Admin Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              placeholder="Enter your admin ID"
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button onClick={AdminDashboard}>Sign In</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AdminSignIn;
