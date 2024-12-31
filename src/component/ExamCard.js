import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import ex3 from "../assets/ex3.jpg"; // Import the image directly

function ExamCard({ year, type }) {
  const navigate = useNavigate(); // Use the navigate hook

  const handleStartClick = () => {
    // Navigate to the registration form page
    navigate("/register");
  };

  return (
    <Card
      style={{
        backgroundColor: "#f5f5f5",
        top: "500px",
        borderRadius: "8px",
        marginTop: "50px", // Added marginTop to push the card down
      }}
    >
      <CardContent style={{ padding: "24px" }}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <Box>
            <Typography variant="h6" style={{ fontWeight: "500" }}>
              {year}
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "gray", fontSize: "0.875rem" }}
            >
              {type}
            </Typography>
          </Box>
          <img
            src={ex3} // Directly use the imported image
            alt="Q&A Icon"
            width={80}
            height={80}
            style={{ borderRadius: "8px" }}
          />
        </Box>
        <Button
          variant="contained"
          style={{
            width: "6rem",
            backgroundColor: "#22c55e",
            color: "#fff",
            textTransform: "none",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#16a34a")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#22c55e")}
          onClick={handleStartClick} // Navigate to the registration form
        >
          Start
        </Button>
      </CardContent>
    </Card>
  );
}

export default ExamCard;
