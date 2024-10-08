import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import ListIcon from '@mui/icons-material/List';
import ReasonIcon from '@mui/icons-material/StickyNote2';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavBar from "./NavBar";

const SignUp = () => {
  const [rname, setRname] = useState("");
  const [rno, setRno] = useState("");
  const [rmail, setRmail] = useState("");
  const [rreason, setRreason] = useState("");
  const [ritem, setRitem] = useState("");
  const [rpwd, setRpwd] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rno.length !== 10 || isNaN(rno)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!validateEmail(rmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(rpwd)) {
      alert(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }

    alert("Details are sent to the Admin.");
    navigate("/admin-dashboard");
  };
  const handleBackClick = () => {
    navigate('/login'); 
  };


  return (
    <div>
      <NavBar/>
        <div >
      <IconButton 
        aria-label="back" 
        onClick={handleBackClick} 
        style={{ position: 'absolute',marginTop:'18px', left: '10px',width:'10px' }} // Adjust the position if needed
      >
        <ArrowBackIcon fontSize="small" />
      </IconButton>
      {/* Rest of the form components */}
    </div>
    <center>
      <div style={{ marginTop: '30px' }}>
        <div style={{ textAlign: 'left' }} className="card">
          <h3>Recipient Registration</h3>
          <br/>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField label="Name" value={rname} onChange={(e) => setRname(e.target.value)} placeholder="Enter Your Name" required
                style={{width:'310px'}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <br />
            <div>
              <TextField
                label="Mobile Number" type="number" value={rno} onChange={(e) => setRno(e.target.value)} placeholder="Enter your Phone Number" required
                style={{width:'310px'}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                  inputProps: { maxLength: 20 },
                }}
              />
            </div>
            <br />
            <div>
              <TextField label="Email" value={rmail} onChange={(e) => setRmail(e.target.value)} placeholder="Enter Email" required
                style={{width:'310px'}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <br />
            
            <div>
              <TextField label="Password" type="password" value={rpwd} onChange={(e) => setRpwd(e.target.value)} placeholder="Enter Password"
                required
                style={{width:'310px'}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  inputProps: { maxLength: 8 },
                }}
              />
            </div>
            <br />
            <Button variant="contained" type="submit"> Submit</Button>
          </form>
      
    </div>
        
          <footer className="login-footer" id='footer'>
        <p>Don't have an account as a recipient? <a href="/signup">Sign up now!</a></p>
        <p>Want to be a donor? <a href="mailto:admin@careconnect.in">Contact Admin!</a></p>
      </footer>
      </div>
    </center>
    </div>
  );
};

export default SignUp;
