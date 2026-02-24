const Item = require("../models/Item");
const Claim = require("../models/Claim");

// Admin dashboard statistics
const getDashboardStats = async (req, res) => {
  try {
    // Item stats
    const totalItems = await Item.countDocuments();
    const lostItems = await Item.countDocuments({ status: "lost" });
    const foundItems = await Item.countDocuments({ status: "found" });
    const claimedItems = await Item.countDocuments({ status: "claimed" });

    // Claim stats
    const totalClaims = await Claim.countDocuments();
    const pendingClaims = await Claim.countDocuments({ status: "pending" });
    const approvedClaims = await Claim.countDocuments({ status: "approved" });
    const rejectedClaims = await Claim.countDocuments({ status: "rejected" });

    res.json({
      items: {
        total: totalItems,
        lost: lostItems,
        found: foundItems,
        claimed: claimedItems,
      },
      claims: {
        total: totalClaims,
        pending: pendingClaims,
        approved: approvedClaims,
        rejected: rejectedClaims,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard stats", error: error.message });
  }
};

module.exports = { getDashboardStats };
