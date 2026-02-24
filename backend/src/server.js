const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
import authRoutes from "./routes/authRoutes.js";
const claimRoutes = require("./routes/claimRoutes");
const adminRoutes = require("./routes/adminRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/dashboard", dashboardRoutes);

app.use("/claims", claimRoutes);
app.use("/admin", adminRoutes);

app.use("/auth", authRoutes);

dotenv.config();
const itemRoutes = require("./routes/itemRoutes");

app.use("/items", itemRoutes);

const app = express();
app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.json({ message: "Server is running 🚀" });
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
  })
  .catch(err => console.error(" MongoDB connection error:", err));
