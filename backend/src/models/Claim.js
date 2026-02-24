const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item", // The item being claimed
      required: true,
    },
    claimant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // The student making the claim
      required: true,
    },
    proof: {
      type: String,
      required: true, // e.g., "Student ID number: 12345" or description of unique marks
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    dateSubmitted: {
      type: Date,
      default: Date.now,
    },
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Admin who reviewed the claim
    },
  },
  { timestamps: true }
);

const Claim = mongoose.model("Claim", claimSchema);

module.exports = Claim;
