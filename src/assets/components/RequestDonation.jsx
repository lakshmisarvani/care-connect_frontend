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


function RequestDonation(){
    const [dname, setDname] = useState("");
  const [dno, setDno] = useState("");
  const [dmail, setDmail] = useState("");
  const [rreason, setRreason] = useState("");
  const [ritem, setRitem] = useState("");
  const [dpwd, setDpwd] = useState("");
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
  };
  const handleBackClick = () => {
    navigate('/login'); 
  };
  const handleData=()=>{
    alert("Submitted  to the Admin.");
    
  }


  return (
    <div>
      
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
          <h3>Donation Request</h3>
          <br/>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField label="Name" value={dname} onChange={(e) => setDname(e.target.value)} placeholder="Enter Your Name" required
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
                label="Mobile Number" type="number" value={dno} onChange={(e) => setDno(e.target.value)} placeholder="Enter your Phone Number" required
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
              <TextField label="Email" value={dmail} onChange={(e) => setDmail(e.target.value)} placeholder="Enter Email" required
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
              <TextField label="Reason for Asking Donation"  value={rreason} onChange={(e) => setRreason(e.target.value)} placeholder="Enter Reason" required
                style={{width:'310px'}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ReasonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <br />
            <div>
              <TextField label="Requesting Items" value={ritem} onChange={(e) => setRitem(e.target.value)} placeholder="Enter Requesting Items" required
                style={{width:'310px'}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ListIcon />
                    </InputAdornment>
                  ),
                  inputProps: { maxLength: 60 },
                }}
              />
            </div>
            <br />
            <div>
              <TextField label="Password" type="password" value={dpwd} onChange={(e) => setDpwd(e.target.value)} placeholder="Enter Password"
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
            <Button variant="contained" type="submit" onClick={handleData}> Submit</Button>
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

export default RequestDonation;