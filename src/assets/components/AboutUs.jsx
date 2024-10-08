// src/assets/components/AboutUs.jsx
import './AboutUs.css'; // Import CSS for AboutUs styling
import NavBar from './NavBar';
import donar from '../../assets/images/donate.jpg';

const AboutUs = () => {
  return (
    <div>
      <NavBar/>
    <div className="about-us">
      <h2 >About Us</h2>
      <p>We are a non-profit organization dedicated to helping those in need through donations.

       Our goal is to facilitate the donation of essential items such as food, clothing, and other necessities, by connecting generous donors with people who require support.
      This platform serves as a bridge between donors, recipients, and logistical teams to ensure timely and effective delivery of essential supplies.
      With the collaboration of all participants, we aim to ensure that help reaches those in need swiftly and efficiently.</p>
      <img src={donar} style={{width:'600px',height:'500px'}}/>
    </div>
    </div>

  );
};

export default AboutUs;
