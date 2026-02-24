const Item = require("../models/Item");

// Report a lost item
const reportLostItem = async (req, res) => {
  const { title, description, category, location, imageURL } = req.body;

  try {
    const item = await Item.create({
      title,
      description,
      category,
      location,
      imageURL,
      status: "lost",
      reportedBy: req.user._id, // comes from protect middleware
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: "Error reporting lost item", error: error.message });
  }
};

// Report a found item
const reportFoundItem = async (req, res) => {
  const { title, description, category, location, imageURL } = req.body;

  try {
    const item = await Item.create({
      title,
      description,
      category,
      location,
      imageURL,
      status: "found",
      reportedBy: req.user._id,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: "Error reporting found item", error: error.message });
  }
};

// Search items (by category, status, location, etc.)
const searchItems = async (req, res) => {
  const { category, status, location } = req.query;

  let filter = {};
  if (category) filter.category = category;
  if (status) filter.status = status;
  if (location) filter.location = location;

  try {
    const items = await Item.find(filter).populate("reportedBy", "name email");
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error searching items", error: error.message });
  }
};

module.exports = { reportLostItem, reportFoundItem, searchItems };
