import React, { useEffect, useState } from 'react';
import { List, ListItem} from '@mui/material';

import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import HandshakeIcon from '@mui/icons-material/Handshake'; // Import a hand/handshake icon
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';  // For Projects
import MailIcon from '@mui/icons-material/Mail';  // For Contact Us
import InfoIcon from '@mui/icons-material/Info';
import Logout from '@mui/icons-material/Logout';

const RequestHistory = () => {
    const [requestHistory, setRequestHistory] = useState([]);

    useEffect(() => {
        const fetchRequestHistory = async () => {
            const data = await getRequestHistoryFromAPI();
            setRequestHistory(data);
        };

        fetchRequestHistory();
    }, []);

    const getRequestHistoryFromAPI = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, title: 'Request for Medical Assistance', date: '2024-01-15', status: 'Completed' },
                    { id: 2, title: 'Request for Food Supplies', date: '2024-02-20', status: 'Pending' },
                    { id: 3, title: 'Request for Shelter after Natural Disaster', date: '2024-03-10', status: 'Rejected' },
                ]);
            }, 1000);
        });
    };

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Completed':
                return { backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '4px' };
            case 'Pending':
                return { backgroundColor: 'yellow', color: 'black', padding: '10px', borderRadius: '4px' };
            case 'Rejected':
                return { backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '4px' };
            default:
                return {};
        }
    };

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
          <li><a href='/recipient-dashboard'><HomeIcon />Home </a></li> 
          <li><a href='/history'><InfoIcon />Request History </a></li> 
          <li> <a href="/contactadmin"><MailIcon /> Contact Admin </a></li> 
          <li><a href='/login'><Logout/>LogOut </a></li>
          </ul>
        </Toolbar>
      </AppBar>
        <Container style={{ marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Request History
            </Typography>
            <List>
                {requestHistory.map(request => (
                    <ListItem key={request.id}>
                        <Card style={{ width: '100%', marginBottom: '10px' }}>
                            <CardContent>
                                <Typography variant="h6" style={getStatusStyle(request.status)}>
                                    {request.title}
                                </Typography>
                                <Typography>
                                    Date: {request.date} - Status: {request.status}
                                </Typography>
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </Container>
        </div>
    );
};

export default RequestHistory;
