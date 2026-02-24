const Claim = require("../models/Claim");
const Item = require("../models/Item");

// Submit a claim request (student)
const submitClaim = async (req, res) => {
  const { itemId, proof } = req.body;

  try {
    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    const claim = await Claim.create({
      item: itemId,
      claimant: req.user._id, // comes from protect middleware
      proof,
      status: "pending",
    });

    // Add claim reference to item
    item.claims.push(claim._id);
    await item.save();

    res.status(201).json(claim);
  } catch (error) {
    res.status(500).json({ message: "Error submitting claim", error: error.message });
  }
};

// Get all claims for a specific item (student/admin)
const getClaimsForItem = async (req, res) => {
  const { itemId } = req.params;

  try {
    const claims = await Claim.find({ item: itemId })
      .populate("claimant", "name email")
      .populate("reviewedBy", "name email");

    res.json(claims);
  } catch (error) {
    res.status(500).json({ message: "Error fetching claims", error: error.message });
  }
};

module.exports = { submitClaim, getClaimsForItem };
