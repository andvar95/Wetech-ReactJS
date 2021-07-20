const express = require("express");
const router = express.Router();
const Auth = require("../middleware/auth");
const TeamVerify = require("../middleware/teamverify");
const { Team: Controller } = require("../controllers");
const { Team: Service } = require("../services");

const controller = new Controller(Service);

router.get("/", Auth, TeamVerify.teamVerify("PO", "DEV", "TL", "SM"), (req, res) => controller.list(req, res, [{ path: 'projects' }, { path: "members" }]));
router.get("/:id", Auth, TeamVerify.teamVerify("PO", "DEV", "TL", "SM"), (req, res) => controller.getOne(req, res, [{ path: 'projects' }, { path: "members" }]));
router.post("/", Auth, controller.create);
router.put("/:id", [Auth, TeamVerify.teamVerify("PO", "DEV", "TL", "SM"), ], controller.update);
router.delete("/:id", Auth, controller.remove);
router.put("disable/:id", Auth, controller.deactivate);
module.exports = router;