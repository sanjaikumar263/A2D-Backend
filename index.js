import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors'
import mongoose from "mongoose";
import { spaceform, spaceform1 } from "./controllers/formController.js";


dotenv.config()
const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB is Connected"))
  .catch((error) => console.error("DB connection failed:", error));

// Routes for User (moduls.js)
app.post("/post", spaceform);

// Routes for SecUser (secmodul.js)
app.post("/experbuilt", spaceform1);

app.get('/',async(req,res)=>{
  try {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Server Status</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #4CAF50; }
            .status { margin: 10px 0; padding: 10px; border: 1px solid #ddd; border-radius: 5px; }
            .connected { color: green; }
            .disconnected { color: red; }
          </style>
        </head>
        <body>
          <h1>Server ${process.env.port} Version :}</h1>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).json({
      message:"Internal Server Error"
    })
  }
})

// Server listening on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
