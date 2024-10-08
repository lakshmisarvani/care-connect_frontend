import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Ensure your CSS is correctly linked
import NavBar from "./NavBar";

const Login = () => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleUserTypeSelection = (type) => {
    setUserType(type);
  };

  const handleLoginRedirect = () => {
    if (userType) {
      navigate(`/${userType}-signin`);
    }
  };

  return (
    <div>
      <NavBar/>
    <div className="login-container">
      
      <div class="container">
      <p class="type">Welcome to CareConnect!</p>
      </div>
      <h2>Select Your Role</h2>
      <div className="button-container">
        <button onClick={() => handleUserTypeSelection("donor")}>
          Login as Donor
        </button>
        <button onClick={() => handleUserTypeSelection("recipient")}>
          Login as Recipient
        </button>
        <button onClick={() => handleUserTypeSelection("admin")}>
          Login as Admin
        </button>
      </div>
      {userType && (
        <div>
          <br></br>
          <h3>You selected: {userType}</h3>
          <br></br>
          <button onClick={handleLoginRedirect}>Proceed to Sign In</button>
        </div>
      )}
      <footer className="login-footer">
        <p>Don't have an account as a recipient? <a href="/signup">Sign up now!</a></p>
        <p>Want to be a donor? <a href="mailto:admin@careconnect.in">Contact Admin!</a></p>
      </footer>
    </div>
    </div>
  );
};

export default Login;
