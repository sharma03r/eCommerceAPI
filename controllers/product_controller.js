const Product = require("../models/product");

module.exports.index = function (req, res) {
  Product.find({})
    .then((products) => {
      return res.status(200).json({
        message: "List of Products",
        products: products,
      });
    })
    .catch((err) => {
      if (err) {
        return res.status(404).json({
          message: "Could not find the products",
        });
      }
    });
};

module.exports.create = function (req, res) {
  Product.create({
    product_id: req.body.product_id,
    name: req.body.name,
    quantity: req.body.quantity,
  })
    .then((product) => {
      if (true) {
        return res.status(200).json({
          data: {
            product: product,
          },
          message: "Product added successfully",
        });
      }
    })
    .catch((err) => {
      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      }
    });
};
module.exports.delete = function (req, res) {
  let product = Product.deleteOne({ product_id: req.params.product_id });
  if (product) {
    console.log(product);
    product
      .deleteOne()
      .then(() => {
        return res.status(200).json({
          message: "Product deleted successfully",
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: "Internal Server Error",
        });
      });
  }
};

module.exports.updateQuantity = function (req, res) {
  const productId = req.params.product_id; // ID of the document to be updated
  const newQuantity = req.query.number; // New value for the quantity field

  Product.findOne({ product_id: productId })
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      // Update the quantity field
      product.quantity = newQuantity;

      // Save the changes
      return product.save();
    })
    .then((updatedProduct) => {
      return res.status(200).json({
        message: "Product has been updated",
        updatedProduct,
      });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ message: "Error updating product", error: err });
    });
};
