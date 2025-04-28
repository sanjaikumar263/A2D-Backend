const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./moduls/moduls"); // Import the User schema
const SecUser = require("./moduls/secmodul"); // Import the SecUser schema

const app = express();

require('dotenv').config()

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB is Connected"))
  .catch((error) => console.error("DB connection failed:", error));

// Routes for User (moduls.js)
app.post("/post", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// Routes for SecUser (secmodul.js)
app.post("/experbuilt", async (req, res) => {
  try {
    const secuser = await SecUser.create(req.body);
    res.status(201).json(secuser);
  } catch (error) {
    console.error("Error creating secuser:", error);
    res.status(500).json({ error: "Failed to create secuser" });
  }
});

// Server listening on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
