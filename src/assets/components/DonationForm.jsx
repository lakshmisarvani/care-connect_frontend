import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    cvc: "",
    amount: "",
  });

  const navigate = useNavigate(); // hook to navigate to another page

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://springbootcare-connect.up.railway.app/processDonation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      if (result.status === "Success") {
        toast.success("Payment Successful!");
        // Redirect to success page after successful donation
        setTimeout(() => {
          navigate('/success');
        }, 2000); // Delay for a better user experience
      } else {
        toast.error(result.message || "Payment Failed");
      }
    } else {
      toast.error("Error processing the payment.");
    }
  };

  return (
    <div className="donation-form" style={styles.container}>
      <h1>Web Preparations</h1>
      <h3>Payment Details</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>CVC</label>
          <input
            type="text"
            name="cvc"
            value={formData.cvc}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Amount</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        
        <button type="submit" style={styles.button}>Pay Now</button>
      </form>
      <ToastContainer />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    width: "500px",
    margin: "0 auto",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default DonationForm;
