import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const { user, score } = useContext(UserContext);

  useEffect(() => {
    if (user === null || user.length === 0) {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      <h1>Quiz Completed...!</h1>
      <p>
        Hello <b>{user}</b>, Your Score: <mark>{score}</mark>
      </p>
    </div>
  );
};

export default Result;
