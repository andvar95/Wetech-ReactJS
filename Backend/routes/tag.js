const express = require("express");
const router = express.Router();
const { Tag: Controller } = require("../controllers");
const { Tag: Service } = require("../services");

const controller = new Controller(Service);

router.get("/", controller.getByField);
router.get("/:id", (req, res) => controller.getOne(req, res, false));
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);
module.exports = router;