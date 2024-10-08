import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css'; // Make sure this path is correct
import orphan1 from '../../assets/images/goods.jpg'; // Replace with actual image paths
import orphan2 from '../../assets/images/orphan2.jpg';
import orphan3 from '../../assets/images/clothes.jpeg';
import orphan4 from '../../assets/images/medical.jpeg';
import NavBar from './NavBar';

const orphans = [
  { id: 1, name: 'Supplies Donation', image: orphan1 },
  { id: 2, name: 'Food Donation', image: orphan2 },
  { id: 3, name: 'Clothing Donation', image: orphan3 },
  { id: 4, name: 'Emergency Kits', image: orphan4 },
];

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to navigate to the donation form
  const navigateToDonationForm = (orphanId) => {
    navigate(`/donate/${orphanId}`); // Navigate to the DonationForm with orphanId
  };

  return (
    <div className="home-container">
      <NavBar/>
      <h1>Building Connections for Better Care Together</h1>
      
      {/* Scrolling Text Below Navbar */}
      <div className="scrolling-text">
        <div className="text">
          Your support helps those in need! | Every contribution makes a difference! | Join us in making a difference!
        </div>
      </div>

      <div className="orphans-grid">
        {orphans.map((orphan) => (
          <div key={orphan.id} className="orphan-card">
            <img src={orphan.image} alt={orphan.name} />
            <h2>{orphan.name}</h2>
            <button onClick={() => navigateToDonationForm(orphan.id)}>Donate</button>
          </div>
        ))}
      </div>

      {/* Add new section here */}
      <div className="sign-up-section">
        <p>Don't have an account as recipient? <a href="/signup">Sign up now</a></p>
        <p>Want to be a Donor? Contact <a href="mailto:admin@careconnect.in">admin@careconnect.in</a></p>
      </div>
    </div>
  );
};

export default HomePage;
