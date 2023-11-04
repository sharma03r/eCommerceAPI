const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("productSchema", productSchema);
module.exports = Product;
