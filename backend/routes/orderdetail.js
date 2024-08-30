const express = require("express");
const router = express.Router();
const order_detailController = require("../controllers/order_detailController");

// Order detail routes
router.get("/order_detail", order_detailController.getAllOrder_detail);
router.get('/order_detail/:id', order_detailController.getOrderDetailById);
router.put('/order_detail/:id', order_detailController.updateOrderDetailStatus);

module.exports = router;
