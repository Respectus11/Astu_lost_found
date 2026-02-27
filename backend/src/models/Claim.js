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
      required: true, // e.g., "Student ID number: ugr/37121/17" 
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
    collectionInstructions: {
      type: String,
      default: "Visit the admin office during business hours (8:00 AM - 5:00 PM, Monday-Friday) with your student ID to collect your item."
    },
  },
  { timestamps: true }
);

const Claim = mongoose.model("Claim", claimSchema);

module.exports = Claim;
