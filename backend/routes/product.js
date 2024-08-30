const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Product routes
router.get("/products", productController.getAllProducts);
router.get("/products_banchay", productController.bestSellProducts);
router.get("/products_noibat", productController.featuredProducts);
router.get("/products_khuyenmai", productController.sellProducts);
router.get("/products/:id", productController.GetOneProduct);
router.post("/products", productController.postProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
