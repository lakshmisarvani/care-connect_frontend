// src/components/DonorSignIn.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './DonorSignIn.css'; // Assuming you're using a separate CSS file for styling
import NavBar from "./NavBar";

const DonorSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }
    alert("Donor signed in ");

    navigate("/donor-dashboard");
  };
  

  return (
    <div>
      <NavBar/>
    <div className="donor-signin-container">
      <div className="card">
        <h2>Donor Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
    <footer className="login-footer" id='footer'>
        <p>Don't have an account as a recipient? <a href="/signup">Sign up now!</a></p>
        <p>Want to be a donor? <a href="mailto:admin@careconnect.in">Contact Admin!</a></p>
      </footer>
      
    </div>
  );
};

export default DonorSignIn;
