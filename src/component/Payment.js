import React, { useState } from "react";
import { Button, Snackbar, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Card, CardContent, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import UPIImage from "../assets/UPI.jpg"; // Import the UPI image correctly

function Payment() {
  const [openSnackbar, setOpenSnackbar] = useState(false); // State to control Snackbar visibility
  const [paymentType, setPaymentType] = useState(""); // State to store selected payment type
  const [showQRCode, setShowQRCode] = useState(false); // State to control QR code visibility
  const [amount, setAmount] = useState(""); // State for payment amount
  const navigate = useNavigate(); // Hook to navigate to another page

  const handlePayment = () => {
    if (Number(amount) !== 200) {
      setOpenSnackbar(true); // Show error message
      return;
    }
    setOpenSnackbar(true); // Show payment success message

    // After 2 seconds, navigate to the next page
    setTimeout(() => {
      navigate("/exam-instructions"); // Navigate to the exam instructions page
    }, 2000); // Wait for 2 seconds before navigating
  };

  const handleUPIPayment = () => {
    if (Number(amount) !== 200) {
      setOpenSnackbar(true); // Show error message
      return;
    }
    setShowQRCode(true); // Show the QR code for UPI payment
    setTimeout(() => {
      setOpenSnackbar(true); // Simulate payment success
      setShowQRCode(false); // Hide the QR code after payment success
      navigate("/exam-instructions"); // Navigate to the next page
    }, 2000); // Simulate a delay for payment processing
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value); // Update selected payment type
    if (event.target.value !== "UPI") {
      setShowQRCode(false); // Hide QR code if payment type is not UPI
    }
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "24px", maxWidth: "500px", margin: "auto", marginTop: "10px" }}>
          <h2>Payment Page</h2>
          <p>Welcome to the payment page! Please select your payment method and proceed.</p>

          {/* Payment Amount Input */}
          <TextField
            label="Enter Amount"
            variant="outlined"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ marginBottom: "16px" }}
          />

          {/* Payment Type Selection */}
          <FormControl component="fieldset" style={{ marginBottom: "16px" }}>
            <FormLabel component="legend">Payment Type</FormLabel>
            <RadioGroup value={paymentType} onChange={handlePaymentTypeChange}>
              <FormControlLabel value="Card" control={<Radio />} label="Card Payment" />
              <FormControlLabel value="UPI" control={<Radio />} label="UPI Payment" />
            </RadioGroup>
          </FormControl>

          {/* Show UPI QR Code if UPI is selected */}
          {paymentType === "UPI" && (
            <Card style={{ textAlign: "center", marginBottom: "16px" }}>
              <CardContent>
                <Typography variant="h6">Scan QR Code to Pay</Typography>
                <img
                  src={UPIImage} // Correctly import and use the UPI image
                  alt="UPI QR Code"
                  style={{ width: "150px", height: "150px", marginTop: "8px" }}
                />
                <Button
                  onClick={handleUPIPayment}
                  color="primary"
                  variant="contained"
                  style={{ marginTop: "16px", backgroundColor: "#22c55e", color: "#fff" }}
                >
                  Pay via UPI
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Show Proceed to Pay button if Card is selected */}
          {paymentType === "Card" && (
            <Button
              onClick={handlePayment}
              color="primary"
              variant="contained"
              style={{ backgroundColor: "#22c55e", color: "#fff" }}
            >
              Proceed to Pay
            </Button>
          )}

          {/* Snackbar for payment success message */}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={2000} // Auto hide after 2 seconds
            onClose={handleCloseSnackbar}
            message={
              Number(amount) !== 200
                ? "Payment failed! Amount must be 200."
                : "Payment Successful!"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Payment;
