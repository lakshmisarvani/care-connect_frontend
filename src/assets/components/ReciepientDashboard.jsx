import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import HandshakeIcon from '@mui/icons-material/Handshake'; // Import a hand/handshake icon
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';  // For Projects
import MailIcon from '@mui/icons-material/Mail';  // For Contact Us
import InfoIcon from '@mui/icons-material/Info';
import Logout from '@mui/icons-material/Logout';

const ReciepientDashboard=()=>{
  const navigate=useNavigate()
  const handleRequest=()=>{
    navigate('/requestdonation')
  }
  return(
    // src/assets/components/RecipientDashboard.jsx
<div>
<div>
<AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
          <h3 className="navbar-title">
        <HandshakeIcon className="support-icon" /> {/* Hand icon */}
        CareConnect
      </h3>
          </Typography>
          <ul className="navbar-links" >
          <li><a href='/recipient-dashboard'><HomeIcon />Home </a></li> 
          <li><a href='/history'><InfoIcon />Request History </a></li> 
          <li> <a href="/contactadmin"><MailIcon /> Contact Admin </a></li> 
          <li><a href='/login'><Logout/>LogOut </a></li>
          </ul>
        </Toolbar>
      </AppBar>
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Welcome to the Recipient Dashboard!</h2>
      <br></br>
      <div>
        <h3>Request a Donation</h3>
        <button style={{ margin: '5px', padding: '10px' }} onClick={handleRequest}>Request Donation</button>
      </div>
    </div>
    </div>
   
      </div>
  );
};

export default ReciepientDashboard;