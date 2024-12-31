import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import of BrowserRouter
import Page from './component/Page'; // Importing the Page component
import RegistrationForm from './component/RegistrationForm';
import Payment from './component/Payment';
import ExamInstructions from './component/ExamInstructions';
import Result from './component/Result';
import QuizInterfaceone from './component/QuizInterfaceone';
import QuizInterfaceTwo from './component/QuizInterfaceTwo';
import QuizInterfaceThree from './component/QuizInterfaceThree';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/exam-instructions" element={<ExamInstructions />} />
        <Route path="/quiz21" element={<QuizInterfaceone />} />
        <Route path="/quiz22" element={<QuizInterfaceTwo />} />
        <Route path="/quiz23" element={<QuizInterfaceThree />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;
