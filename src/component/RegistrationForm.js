import React, { useState } from "react";
import { TextField, Button, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    location: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false); // State to control Snackbar visibility
  const navigate = useNavigate(); // Hook to navigate to another page

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    fetch('https://sheetdb.io/api/v1/a2mxwmqy03z0i', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          data: [
              formData
          ]
      })
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
    console.log(formData);
  
    setOpenSnackbar(true); // Show success message
    setTimeout(() => {
      navigate("/payment"); // Navigate to payment page after success message
    }, 1000); // Wait for 1 second before navigation
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{
            padding: "24px",
            maxWidth: "500px",
            margin: "auto",
            marginTop: "10px",
          }}
        >
          <h2>Register</h2>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{ marginBottom: "16px" }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ marginBottom: "16px" }}
          />
          <TextField
            fullWidth
            label="Phone Number"
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            style={{ marginBottom: "16px" }}
          />
          <TextField
            fullWidth
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            style={{ marginBottom: "16px" }}
          />
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            style={{
              backgroundColor: "#22c55e",
              color: "#fff",
              marginTop: "16px",
            }}
          >
            Submit
          </Button>
        </div>
      </div>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000} // Auto hide after 2 seconds
        onClose={handleCloseSnackbar}
        message="Registration Successful!"
      />
    </div>
  );
}

export default RegistrationForm;
