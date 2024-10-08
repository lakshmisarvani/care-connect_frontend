import NavBar from "./NavBar";
import { AppBar, Toolbar, Typography } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';  // For Projects
import MailIcon from '@mui/icons-material/Mail';  // For Contact Us
import InfoIcon from '@mui/icons-material/Info';
import Logout from '@mui/icons-material/Logout';

const ViewReciepients=()=>{

 return(
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
          <li><a href='/admin-dashboard'><HomeIcon />Home </a></li> 
          <li><a href='/login'><Logout/>LogOut </a></li>
          </ul>
        </Toolbar>
      </AppBar>
    <div>
        <h3 style={{textAlign:'center',marginTop:'20px'}}> Recipients List </h3>
        <table style={{
          width: '60%',
          margin: '0 auto',
          borderCollapse: 'collapse',
          textAlign: 'center',
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
        }}>
            <thead>
                <tr>
                <td>Name </td>
                <td>Email</td>
                <td>Doantion Required For </td>
                <td>Items Required </td>
                </tr>
            </thead>
            <tr style={{ padding: '10px', border: '1px solid #ddd',backgroundColor:'#f9f9f9' }}>
                <td>Harika</td>
                <td>harika@gmail.com</td>
                <td> Cyclone effected </td>
                <td> Food,Clothes</td>
            </tr>
            <tr style={{ padding: '10px', border: '1px solid #ddd',backgroundColor:'#f9f9f9' }}>
                <td>Manikanta</td>
                <td>mani@gmail.com</td>
                <td>Flood effected </td>
                <td>Medications </td>
            </tr>
            <tr style={{ padding: '10px', border: '1px solid #ddd',backgroundColor:'#f9f9f9' }}>
                <td>Nivesh</td>
                <td>nivesh@gmail.com</td>
                <td>Earthquake</td>
                <td>Food</td>
            </tr>
        </table>
    </div>
    </div>
 )
}
export default ViewReciepients;