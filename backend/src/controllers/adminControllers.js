const Claim = require("../models/Claim");
const Item = require("../models/Item");

// Approve claim (admin only)
const approveClaim = async (req, res) => {
  const { id } = req.params;

  try {
    const claim = await Claim.findById(id).populate("item");
    if (!claim) {
      return res.status(404).json({ message: "Claim not found" });
    }

    claim.status = "approved";
    claim.reviewedBy = req.user._id;
    await claim.save();

    // Update item status to claimed
    const item = await Item.findById(claim.item._id);
    item.status = "claimed";
    await item.save();

    res.json({ message: "Claim approved", claim });
  } catch (error) {
    res.status(500).json({ message: "Error approving claim", error: error.message });
  }
};

// Reject claim (admin only)
const rejectClaim = async (req, res) => {
  const { id } = req.params;

  try {
    const claim = await Claim.findById(id);
    if (!claim) {
      return res.status(404).json({ message: "Claim not found" });
    }

    claim.status = "rejected";
    claim.reviewedBy = req.user._id;
    await claim.save();

    res.json({ message: "Claim rejected", claim });
  } catch (error) {
    res.status(500).json({ message: "Error rejecting claim", error: error.message });
  }
};

module.exports = { approveClaim, rejectClaim };
