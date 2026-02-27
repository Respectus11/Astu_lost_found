const express = require("express");
const { registerUser, loginUser, registerAdmin } = require("../controllers/authcontroller");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

// Register new user
router.post("/register", registerUser);

// Admin-only admin registration
router.post("/register-admin", protect, adminOnly, registerAdmin);

// Login existing user
router.post("/login", loginUser);

module.exports = router;
