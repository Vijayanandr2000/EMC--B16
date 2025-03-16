import React from "react";
import { useNavigate } from "react-router-dom";

const Instructions = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Instructions</h1>
      <ul>
        <li>You will be presented with a series of questions.</li>
        <li>Select the best answer from the provided options.</li>
        <li>You have a limited time to answer each question.</li>
        <li>Your score will be displayed at the end.</li>
      </ul>
      <button onClick={() => navigate("/quiz")}>Start Quiz</button>
    </div>
  );
};

export default Instructions;
