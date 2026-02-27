const express = require("express");
const { approveClaim, rejectClaim } = require("../controllers/adminControllers");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

// Admin check endpoint for testing
router.get("/check", protect, adminOnly, (req, res) => {
  res.json({ 
    isAdmin: true, 
    user: { 
      id: req.user._id, 
      name: req.user.name, 
      email: req.user.email 
    } 
  });
});

router.put("/claims/:id/approve", protect, adminOnly, approveClaim);
router.put("/claims/:id/reject", protect, adminOnly, rejectClaim);

module.exports = router;
