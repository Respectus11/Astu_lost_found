const express = require("express");
const { reportLostItem, reportFoundItem, searchItems } = require("../controllers/itemController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Report items
router.post("/lost", protect, reportLostItem);
router.post("/found", protect, reportFoundItem);

// Create new item (lost or found) - for frontend compatibility
router.post("/", protect, async (req, res) => {
  try {
    const { title, description, category, location, dateReported, status, imageURL } = req.body;
    
    // Validate required fields
    if (!title || !description || !category || !location || !status) {
      return res.status(400).json({ message: "Please provide all required fields: title, description, category, location, and status" });
    }

    // Validate status
    if (!['lost', 'found'].includes(status)) {
      return res.status(400).json({ message: "Status must be either 'lost' or 'found'" });
    }

    // Create new item
    const Item = require("../models/Item");
    const item = new Item({
      title,
      description,
      category,
      location,
      dateReported: dateReported || new Date(),
      status,
      imageURL,
      reportedBy: req.user.id
    });

    await item.save();
    
    // Populate the reportedBy field for the response
    await item.populate("reportedBy", "name email");
    
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: "Error creating item", error: error.message });
  }
});

// Search and retrieve items
router.get("/", protect, searchItems);
router.get("/:id", protect, async (req, res) => {
  try {
    const item = await require("../models/Item").findById(req.params.id).populate("reportedBy", "name email");
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Error fetching item", error: error.message });
  }
});

module.exports = router;
