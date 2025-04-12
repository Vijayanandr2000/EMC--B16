import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigator = useNavigate();

  const [user, setUser] = useState({});
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", user);
    const resp = await axios.post("https://emc-b16.onrender.com/user", user);

    console.log(resp.status);
    if (resp.status === 201) {
      alert("Signup successful");
      navigator("/");
      setErr("");
    } else {
      setErr(resp.data.error.message);
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexFlow: "column",
        gap: "10px",
      }}
      onSubmit={handleSubmit}
    >
      <section>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </section>
      <section>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </section>

      {err && <p style={{ color: "red" }}>{err}</p>}

      <section>
        <input type="submit" value="Signup" />
      </section>
    </form>
  );
};

export default Signup;
