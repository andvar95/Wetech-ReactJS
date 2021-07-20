const express = require("express");
const router = express.Router();
const { Auth: Controller } = require("../controllers");
const { User: Service } = require("../services");
const AuthMiddleware = require("../middleware/auth");
const contract = require("../contracts/login");
const validateData = require("../middleware/validateData");

const controller = new Controller();
// 
router.post("/login", validateData(contract.login), controller.login);
router.post("/register", controller.register);
router.get("/log", AuthMiddleware, controller.getLoggued);

module.exports = router;