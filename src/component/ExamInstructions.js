import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";  // Import the useNavigate hook
import Header from "./Header";
import Sidebar from "./Sidebar";

function ExamInstructions() {
  const navigate = useNavigate();  // Hook to navigate

  const handleStartExam = () => {
    navigate("/quiz21");  // Navigate to the QuizInterface component
  };

  return (
    <div>
    <Header />
    <div style={{ display: 'flex' }}>
    <Sidebar />
    <div style={{ padding: "24px", maxWidth: "600px", margin: "auto", marginTop: "10px" }}>
      <h2>Welcome to the Exam</h2>
      <p>
        Welcome to the [Exam Name, e.g., TNPSC Group 1 Preliminary Examination 2024]. The exam will begin shortly. 
        Please take note of the following instructions:
      </p>
      <ul>
        <li>Ensure your internet connection is stable.</li>
        <li>Have your ID ready for verification.</li>
        <li>Follow the instructions carefully during the exam.</li>
        <li>Once you start, you cannot pause the exam.</li>
      </ul>
      <Button
        color="primary"
        variant="contained"
        style={{ backgroundColor: "#22c55e", color: "#fff" }}
        onClick={handleStartExam}  // Call the navigate function on click
      >
        Start Exam
      </Button>
    </div>
    </div>
    </div>
  );
}

export default ExamInstructions;
