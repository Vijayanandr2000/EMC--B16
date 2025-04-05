import express from "express";
import cors from "cors";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
// const {  } = require("mongodb");

const app = express();

const PORT = 8080;

// Middleware
app.use(express.json());
app.use(cors());

const uri =
  "mongodb+srv://vijayanandr2000:id2obbFASaOWIktL@cluster0.y47rvpc.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("loginApp").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

const users = [
  {
    id: 1,
    password: "password",
    email: "vijay@example.com",
  },
];

const existingUser = async (email) => {
  // users.find((user) => user.email === email);
  return await client.db("loginApp").collection("users").findOne({ email });
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/vijay", (req, res) => {
  res.send("Hello World new!");
});

const check = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      error: {
        message: "Email and password are required",
      },
    });
  }

  next();
};

app.post("/user", check, async (req, res) => {
  const { email, password } = req.body;

  const userData = await existingUser(email);

  if (userData) {
    return res.status(200).json({
      error: {
        message: "User already exists",
      },
    });
  }

  let payload = { email, password };
  //   users.push(payload);
  await client.db("loginApp").collection("users").insertOne(payload);

  return res.status(201).json({
    message: "User created successfully",
    payload,
  });
});

app.post("/login", check, async (req, res) => {
  const { email, password } = req.body;

  const userData = await existingUser(email);

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
      id: userData._id,
    });
  }

  return res.status(401).json({
    error: {
      message: "Invalid credentials",
    },
  });
});

app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;

  const mongoDBID = new ObjectId(id);

  const response = await client.db("loginApp").collection("users").deleteOne({
    _id: mongoDBID,
  });

  if (response.deletedCount === 0) {
    return res.status(404).json({
      error: {
        message: "User not found",
      },
    });
  }

  return res.status(200).json({
    message: "Deleted successful",
  });
});

app.patch("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  const mongoDBID = new ObjectId(id);

  const response = await client
    .db("loginApp")
    .collection("users")
    .updateOne({ _id: mongoDBID }, { $set: { password } });

  if (response.modifiedCount === 0) {
    return res.status(404).json({
      error: {
        message: "User not found",
      },
    });
  }

  return res.status(200).json({
    message: "Updated successful",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  run().catch(console.dir);
});
