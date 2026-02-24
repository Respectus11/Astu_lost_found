const express = require("express");
const { reportLostItem, reportFoundItem } = require("../controllers/itemController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/lost", protect, reportLostItem);
router.post("/found", protect, reportFoundItem);

module.exports = router;
