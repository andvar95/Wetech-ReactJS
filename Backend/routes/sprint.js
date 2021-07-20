const express = require("express");
const router = express.Router();
const TeamVerify = require("../middleware/teamverify")
const Auth = require("../middleware/auth")
const { Sprint: Controller } = require("../controllers");
const { Sprint: Service } = require("../services");


const controller = new Controller(Service);

router.get("/", Auth, TeamVerify.teamVerify("PO","DEV","TL","SM"),(req, res) => controller.list(req, res, [{ path: 'project' }]));
router.get("/:id", Auth,TeamVerify.teamVerify("PO","DEV","TL","SM"), (req, res) => controller.getOne(req, res, [{ path: 'project' }]));
router.post("/", Auth, TeamVerify.teamVerify("TL", "SM", "PO"), controller.create);
router.put("/:id", Auth, TeamVerify.teamVerify("TL", "SM", "PO"), controller.update);
router.delete("/:id", Auth, TeamVerify.teamVerify("TL", "SM"), controller.remove);
module.exports = router;