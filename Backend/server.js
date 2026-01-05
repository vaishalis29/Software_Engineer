const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

// health check (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// 🔴 IMPORTANT FIX
const PORT = process.env.PORT || 10000;

// 🔴 SAFE MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    console.log("JWT secret loaded:", process.env.JWT_SECRET ? "YES" : "NO");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); // ❗ important for Render logs
  });
