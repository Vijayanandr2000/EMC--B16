import express from "express";
import cors from "cors";

const app = express();

const PORT = 8080;

// Middleware
app.use(express.json());
app.use(cors());

const users = [
  {
    id: 1,
    password: "password",
    email: "vijay@example.com",
  },
];

const existingUser = (email) => users.find((user) => user.email === email);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/vijay", (req, res) => {
  res.send("Hello World new!");
});

app.post("/user", (req, res) => {
  const { email, password } = req.body;

  const userData = existingUser(email);

  if (userData) {
    return res.status(200).json({
      error: {
        message: "User already exists",
      },
    });
  }

  let payload = { id: users.length + 1, email, password };
  users.push(payload);

  return res.status(201).json({
    message: "User created successfully",
    payload,
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const userData = existingUser(email);

  if (!userData) {
    return res.status(404).json({
      error: {
        message: "User not found",
      },
    });
  }

  if (userData.password === password) {
    return res.status(200).json({
      message: "Login successful",
      user: userData.email,
    });
  }

  return res.status(401).json({
    error: {
      message: "Invalid credentials",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
