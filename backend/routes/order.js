const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Order routes
router.get("/orders", orderController.getAllOrders);
router.get("/ordersByName/:name", orderController.orderByName);
router.get("/orderByName1/:id", orderController.orderByName1);
router.post("/orders", orderController.PostOrders);
router.delete("/orders/:id", orderController.deleteOrder);
router.get("/orders/:id", orderController.getOrderById);

module.exports = router;
