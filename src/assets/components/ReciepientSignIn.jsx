// src/components/RecipientSignIn.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './RecipientSignIn.css'; // Assuming you're using a separate CSS file for styling
import NavBar from "./NavBar";

const RecipientSignIn = () => {
  const [username, setUsername] = useState("");
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
    alert("Recipient signed in");
    // Redirect to recipient dashboard after sign-in
    navigate("/recipient-dashboard");

  };


  return (
    <div>
      <NavBar/>
    <div className="recipient-signin-container">
      <div className="card">
        <h2>Recipient Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
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

export default RecipientSignIn;
