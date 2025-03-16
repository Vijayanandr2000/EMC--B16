import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);
  console.log("user", user);

  return (
    <div>
      <h1>Welcome to Quiz APP..!</h1>

      <br />

      <section>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setUser(e.target.value)}
        />
      </section>

      <br />

      <button
        disabled={user === null || user.length === 0}
        onClick={() => navigate("/instructions")}
      >
        Next
      </button>
    </div>
  );
};

export default Home;
