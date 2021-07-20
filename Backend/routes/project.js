const express = require("express");
const router = express.Router();
const Auth = require("../middleware/auth");
const { Project: Controller } = require("../controllers");
const { Project: Service } = require("../services");
const teamVerify = require("../middleware/teamverify");

const controller = new Controller(Service);

router.get("/", Auth,  (req, res) => controller.list(req, res, [{ path: 'members.userId',model:'user'},{ path: 'members.Role',model:'role'}]));
router.get("/:id", Auth,(req, res) => controller.getOne(req, res, [{ path: 'members.userId',model:'user'},{ path: 'members.Role',model:'role'}]));
router.get("/myrole/:id",Auth,controller.getRole)
router.post("/", Auth, controller.create);
router.put("/:id", Auth, controller.update);
router.delete("/:id", Auth, controller.remove);
router.put("disable/:id", Auth, controller.deactivate);
module.exports = router;