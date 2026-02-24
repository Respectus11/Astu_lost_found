const express = require("express");
const { submitClaim, getClaimsForItem } = require("../controllers/claimController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Submit claim (student)
router.post("/", protect, submitClaim);

// Get claims for a specific item (student/admin)
router.get("/:itemId", protect, getClaimsForItem);

module.exports = router;
