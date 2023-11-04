const Product = require("../models/product");

module.exports.index = function (req, res) {
  let products = Product.find({})
    .then((posts) => {
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
