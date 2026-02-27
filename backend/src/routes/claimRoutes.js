const express = require("express");
const { submitClaim, getClaimsForItem } = require("../controllers/claimController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

// Submit claim (student)
router.post("/", protect, submitClaim);

// Get claims for a specific item (student/admin)
router.get("/:itemId", protect, getClaimsForItem);

// Get all claims (admin only)
router.get("/", protect, adminOnly, async (req, res) => {
  try {
    const claims = await require("../models/Claim")
      .find()
      .populate("item", "title category status")
      .populate("claimant", "name email")
      .populate("reviewedBy", "name email")
      .sort({ dateSubmitted: -1 });
    
    res.json(claims);
  } catch (error) {
    res.status(500).json({ message: "Error fetching claims", error: error.message });
  }
});

// Get claims for current user
router.get("/user", protect, async (req, res) => {
  try {
    const claims = await require("../models/Claim")
      .find({ claimant: req.user._id })
      .populate("item", "title category status location")
      .sort({ dateSubmitted: -1 });
    
    res.json(claims);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user claims", error: error.message });
  }
});

module.exports = router;
