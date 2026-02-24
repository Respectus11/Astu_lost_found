const express = require("express");
const { getDashboardStats } = require("../controllers/dashboardController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

// Admin dashboard stats (admin only)
router.get("/", protect, adminOnly, getDashboardStats);

module.exports = router;
