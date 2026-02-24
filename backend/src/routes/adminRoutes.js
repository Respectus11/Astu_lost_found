const express = require("express");
const { approveClaim, rejectClaim } = require("../controllers/adminController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.put("/claims/:id/approve", protect, adminOnly, approveClaim);
router.put("/claims/:id/reject", protect, adminOnly, rejectClaim);

module.exports = router;
