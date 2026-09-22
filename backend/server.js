const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGODB_URI);

async function startServer() {
  try {
    await client.connect();

    console.log("MongoDB connected successfully!");

    app.get("/", (req, res) => {
      res.json({
        message: "Advertisement Hub Backend is running!",
      });
    });

    app.get("/api/health", (req, res) => {
      res.json({
        success: true,
        message: "Backend and MongoDB are working!",
      });
    });

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

startServer();