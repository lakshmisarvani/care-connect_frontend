import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
  Box,
  IconButton,
} from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook
import orphanage from '../../assets/images/orphanage.png';
import scholar from '../../assets/images/scholar.png';
import hospital from '../../assets/images/hospital.png';

const DonorDashBoard = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const projects = [
    {
      id: 1,
      img: orphanage,
      title: 'Project 1: Orphanage',
      donations: 200,
      livesSaved: 200,
      testimonials: 'Your support changed my life!',
      history: 'Main aim: Shelter for orphans, Funds collected: $50,000',
      details: 'This project aims to create a safe and nurturing environment for orphaned children.',
    },
    {
      id: 2,
      img: scholar,
      title: 'Project 2: Scholarship Program',
      donations: 150,
      livesSaved: 150,
      testimonials: 'Education is the key to a brighter future.',
      history: 'Main aim: Education for underprivileged, Funds collected: $30,000',
      details: 'Help us empower bright students by funding their education and providing them with life-changing opportunities.',
    },
    {
      id: 3,
      img: hospital,
      title: 'Project 3: Healthcare Initiative',
      donations: 300,
      livesSaved: 300,
      testimonials: 'The healthcare we received was life-saving.',
      history: 'Main aim: Accessible healthcare, Funds collected: $70,000',
      details: 'Our healthcare initiative aims to offer medical services to underserved communities, improving lives and health outcomes.',
    }
  ];

  const handleLogout = () => {
    // Perform any necessary logout actions, like clearing session or token
    navigate('/login'); // Redirect to the login page
  };
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: '#f7f7f7', color: '#333', minHeight: '100vh' }}>
      {/* Navbar */}
      <AppBar position="static" style={{ backgroundColor: '#ffffff', color: '#333', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h5"
            style={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            <HandshakeIcon style={{ marginRight: '10px', color: '#e63946' }} /> CareConnect
          </Typography>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link
              href="/donate/1"
              underline="none"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: '#333',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              <VolunteerActivismIcon style={{ color: '#e63946' }} />
              Make a Donation
            </Link>
            <Link
              href=""
              underline="none"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: '#333',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
              }}
              onClick={handleLogout} // Call the logout function
            >
              <LogoutIcon style={{ color: '#e63946' }} />
              Logout
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      {/* Your Dashboard Content Here */}
      <Container>
        <Box mt={3}>
          <Typography variant="h4" gutterBottom>
            Welcome to your Dashboard
          </Typography>
          {/* Project Overview with Stats */}
          <Box mb={3} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AttachMoneyIcon style={{ marginRight: '10px', color: '#e63946' }} />
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                Total Donations: 650
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FavoriteIcon style={{ marginRight: '10px', color: '#e63946' }} />
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                Lives Saved: 650
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ChatBubbleOutlineIcon style={{ marginRight: '10px', color: '#e63946' }} />
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                Testimonials: 3
              </Typography>
            </div>
          </Box>
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Card
                  style={{
                    border: '2px solid #e63946', // Adding a neat border
                    borderRadius: '8px',
                    height: '100%', // Ensuring the cards stay the same height
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Soft shadow for 3D effect
                    transition: 'transform 0.3s ease', // Adding a transition for hover effect
                  }}
                >
                  <CardMedia component="img" image={project.img} alt={project.title} />
                  <CardContent>
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>{project.title}</Typography>
                    <Typography variant="body2" style={{ marginBottom: '10px' }}>{project.details}</Typography>
                    <Box mt={2}>
                      <Typography variant="body2" display="flex" alignItems="center">
                        <AttachMoneyIcon style={{ marginRight: '8px' }} />
                        Donations: {project.donations}
                      </Typography>
                      <Typography variant="body2" display="flex" alignItems="center">
                        <FavoriteIcon style={{ marginRight: '8px' }} />
                        Lives Saved: {project.livesSaved}
                      </Typography>
                      <Typography variant="body2" display="flex" alignItems="center">
                        <ChatBubbleOutlineIcon style={{ marginRight: '8px' }} />
                        Testimonials: {project.testimonials}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default DonorDashBoard;