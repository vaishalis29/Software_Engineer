const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();

// ✅ MIDDLEWARES (TOP)
app.use(cors({
  origin: "*",
}));
app.use(express.json());

// ✅ ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

// ✅ HEALTH CHECK (Render-ku IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ PORT (Render uses process.env.PORT)
const PORT = process.env.PORT || 10000;

// ✅ MONGODB CONNECT
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    console.log(
      "JWT secret loaded:",
      process.env.JWT_SECRET ? "YES" : "NO"
    );

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
