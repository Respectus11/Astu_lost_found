const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, // e.g., "Scientific Calculator"
    },
    description: {
      type: String,
      required: true,
      trim: true, // e.g., "Casio , black color"
    },
    category: {
      type: String,
      enum: ["ID Card", "Electronics", "Books", "Clothing", "Other"],
      required: true,
    },
    status: {
      type: String,
      enum: ["lost", "found", "claimed"],
      default: "lost",
    },
    location: {
      type: String,
      required: true, // e.g., "Library", "Cafe"
    },
    dateReported: {
      type: Date,
      default: Date.now,
    },
    imageURL: {
      type: String, // store or local path
    },
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // link to the student who reported
      required: true,
    },
    claims: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Claim", // references claim requests
      },
    ],
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
