import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import HandshakeIcon from '@mui/icons-material/Handshake'; // Import a hand/handshake icon
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';  // For Projects
import MailIcon from '@mui/icons-material/Mail';  // For Contact Us
import InfoIcon from '@mui/icons-material/Info';
import Logout from '@mui/icons-material/Logout';
import orphanage from '../../assets/images/orphanage.png'
import scholar from '../../assets/images/scholar.png'
import hospital from '../../assets/images/hospital.png'

const DonorDashBoard = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  return (
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
          <li><a href='/donor-dashboard'><HomeIcon />Home </a></li> 
          <li><a href='/about'><InfoIcon /> About Us </a></li> 
          <li> <a href='#project'><FolderIcon /> Projects</a> </li>
          <li> <a href="/contactadmin2"><MailIcon /> Contact Us </a></li> 
          <li><a href='/login'><Logout/>LogOut </a></li>
          </ul>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '20px' }}>
        {/* Hero Section */}
        
  
        {/* Impact Highlights */}
        <Grid container spacing={4} style={{ marginBottom: '20px' }} id='project'>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Impact Highlights</Typography>
            <Typography>Number of Lives Impacted: 5000</Typography>
            <Typography>Funds Raised: $200,000</Typography>
            <Typography>Success Stories: 150</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Testimonials</Typography>
            <Typography>"Your support changed my life!" - Beneficiary</Typography>
          </Grid>
        </Grid>

        {/* Current Projects */}
        <Typography variant="h4" style={{ marginBottom: '20px' }} >Current Projects</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={orphanage}
              />
              <CardContent>
                <Typography variant="h5">Project 1</Typography>
                <Typography>Help us build a new orphanage.</Typography>
                <Button variant="contained" color="primary">Learn More</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={scholar}
              />
              <CardContent>
                <Typography variant="h5">Project 2</Typography>
                <Typography>Support our scholarship program.</Typography>
                <Button variant="contained" color="primary">Learn More</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={hospital}
              />
              <CardContent>
                <Typography variant="h5">Project 3</Typography>
                <Typography>Help us provide healthcare services.</Typography>
                <Button variant="contained" color="primary">Learn More</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Upcoming Events */}
        <Typography variant="h4" style={{ marginTop: '20px' }}>Upcoming Events</Typography>
        <Typography>Join us for our charity gala on March 20, 2024!</Typography>

        {/* Newsletter Signup */}
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h5">Stay Updated</Typography>
          <TextField label="Email" variant="outlined" style={{ marginRight: '10px' }} />
          <Button variant="contained" color="primary">Subscribe</Button>
        </div>
      </Container>
      
      <footer className="login-footer" id='footer'>
        <p>Don't have an account as a recipient? <a href="/signup">Sign up now!</a></p>
        <p>Want to be a donor? <a href="mailto:admin@careconnect.in">Contact Admin!</a></p>
      </footer>
      
    </div>
 
  );
}

export default DonorDashBoard;
