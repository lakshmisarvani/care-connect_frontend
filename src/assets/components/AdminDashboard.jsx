//import AddDonar from "./AddDonar";
import { useNavigate } from "react-router-dom";
//import NavBar from "./NavBar";
import { AppBar, Toolbar, Typography } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HomeIcon from '@mui/icons-material/Home';
import Logout from '@mui/icons-material/Logout';


const AdminDashboard = () => {

  const navigate = useNavigate();

  const handleViewDonation = () => {
    navigate('/viewdonations');
  };
  const handleAccepted=()=>{
    navigate('/accepted')
  }
  const handleRejected=()=>{
    navigate('/rejected')
  }
  const handleViewRecipient = () => {
    navigate('/viewrecipient');
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
          <li><a href='/'><HomeIcon />Home </a></li> 
          <li><a href='/login'><Logout/>LogOut </a></li>
          </ul>
        </Toolbar>
      </AppBar>
    <div style={{ padding: '20px' }}>
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin!</p>
      <div>
        <h3>Manage Donations</h3>
        <button style={{ margin: '5px', padding: '10px' }} onClick={handleViewDonation}>View Donations</button>
        <button style={{ margin: '5px', padding: '10px' }} onClick={handleAccepted}>Approved Donations</button>
        <button style={{ margin: '5px', padding: '10px' }} onClick={handleRejected}>Rejected Donations</button>
      </div>
      <div>
        <h3>Manage Recipients</h3>
        <button style={{ margin: '5px', padding: '10px' }} onClick={handleViewRecipient}>View Recipients</button>
        <button style={{ margin: '5px', padding: '10px' }}>Remove Recipient</button>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
