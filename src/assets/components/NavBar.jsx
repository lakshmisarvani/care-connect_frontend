// src/assets/components/NavBar.jsx

import { Link } from 'react-router-dom';
import './NavBar.css'; // Import CSS for NavBar styling
import SupportIcon from '@mui/icons-material/Support';
import HandshakeIcon from '@mui/icons-material/Handshake'; // Import a hand/handshake icon
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';


const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">
        <HandshakeIcon className="support-icon" /> {/* Hand icon */}
        CareConnect
      </h1>
      <ul className="navbar-links">
        <li><Link to="/"><HomeIcon /> Home</Link></li>&nbsp;&nbsp;&nbsp;
        <li><Link to="/login"><LoginIcon /> Login</Link></li>&nbsp;&nbsp;&nbsp;
        <li><Link to="/about"><InfoIcon /> About Us</Link></li>&nbsp;&nbsp;&nbsp;
        {/* <li><Link to="/home"><LogoutIcon/> Logout</Link></li> Logout icon */}
      </ul>
    </nav>
  );
};

export default NavBar;
