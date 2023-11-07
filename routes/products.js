const express = require("express");
const router = express.Router();
const productController = require("../controllers/product_controller");

router.get("/", productController.index);
router.post("/create", productController.create);
router.delete("/:product_id", productController.delete);
router.post("/:product_id/update_quantity/", productController.updateQuantity);

module.exports = router;
