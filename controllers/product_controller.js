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
    id: req.body.id,
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
        });
      }
    });
};
module.exports.delete = function (req, res) {
  let product = Product.deleteOne({ id: req.params.id });
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
  Product.findByIdAndUpdate(
    { id: req.params.id },
    {
      $pull: { quantity: req.query.number },
    }
  )
    .then(() => {
      return res.status(200).json({
        message: "Product has been updated",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    });
};
