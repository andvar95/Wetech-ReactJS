const express = require("express");
const router = express.Router();
const { Social: Controller } = require("../controllers");
const { Social: Service } = require("../services");

const controller = new Controller(Service);

router.get("/", (req, res) => controller.list(req, res));
router.get("/:id", (req, res) => controller.getOne(req, res));
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);
router.put("disable/:id", controller.deactivate);
module.exports = router;
