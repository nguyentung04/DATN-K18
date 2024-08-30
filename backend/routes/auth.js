const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Authentication routes
router.get("/login", userController.getAllUsers);
router.post("/login", userController.login);
router.get("/loginAdmin", userController.getAllUsers);
router.post("/loginAdmin", userController.loginAdmin);
router.post("/register", userController.register);

module.exports = router;
