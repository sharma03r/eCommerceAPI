const express = require("express");
const router = express.Router();
const productController = require("../controllers/product_controller");

router.get("/", productController.index);
router.post("/create", productController.create);
router.delete("/:id", productController.delete);
router.post("/:id/update_quantity/?number=", productController.updateQuantity);

module.exports = router;
