const express = require("express");
const router = express.Router();
const { User: Controller } = require("../controllers");
const contract = require("../contracts/user");
const dataCompleted = require("../middleware/validateData");
const Auth = require("../middleware/auth");
const Role = require("../middleware/role")
const userDB = require("../middleware/userDB");
const AuthMiddleware = require("../middleware/auth");

const controller = new Controller();

router.get("/", (req, res) => controller.list(req, res, [{ path: "role" }, { path: "tags" }]));
router.get("/:id", (req, res) => controller.getOne(req, res, [{ path: "role" }, { path: "tags" }]));
// router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

router.put("/disable/:id", controller.deactivate);

module.exports = router;