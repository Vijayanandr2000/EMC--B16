import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Transfer Markup Language",
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlink and Text Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["text-style", "color", "font-color", "text-color"],
    answer: "color",
  },
  {
    question:
      "Which of the following is the correct way to declare a JavaScript variable?",
    options: [
      "var myVar = 10;",
      "variable myVar = 10;",
      "v myVar = 10;",
      "int myVar = 10;",
    ],
    answer: "var myVar = 10;",
  },
  {
    question: "What does the `document.getElementById('id')` method do?",
    options: [
      "Selects an element by its class",
      "Selects an element by its name",
      "Selects an element by its id",
      "Selects all elements",
    ],
    answer: "Selects an element by its id",
  },
];

const Quiz = () => {
  const navigate = useNavigate();

  const { setScore } = useContext(UserContext);

  const [currQuesIdx, setCurrQuesIdx] = useState(0);

  const handleAnswer = (selectedOption) => {
    const isCorrect = quizQuestions[currQuesIdx].answer === selectedOption;
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currQuesIdx < quizQuestions.length - 1) {
      setCurrQuesIdx(currQuesIdx + 1);
    } else {
      navigate("/result");
    }
  };
  return (
    <div>
      <h1>Quiz</h1>
      <h2>
        {currQuesIdx + 1}.{quizQuestions[currQuesIdx].question}
      </h2>
      {quizQuestions[currQuesIdx].options.map((option) => (
        <div
          style={{
            marginBottom: "5px",
          }}
        >
          <button onClick={() => handleAnswer(option)}>{option}</button>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
