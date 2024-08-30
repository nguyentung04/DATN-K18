const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Category routes
router.get("/categories", categoryController.getAllcategoris);
router.get("/categories/:id", categoryController.getCategoryById);
router.post("/categories", categoryController.postCategory);
router.put("/categories/:id", categoryController.updateCategory);
router.delete("/categories/:id", categoryController.deleteCategory);

module.exports = router;
