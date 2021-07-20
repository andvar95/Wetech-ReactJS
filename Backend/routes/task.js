const express = require("express");
const router = express.Router();
const { Task: Controller } = require("../controllers");
const { Task: Service } = require("../services");
const Auth = require("../middleware/auth")
const TeamVerify = require("../middleware/teamverify")

const controller = new Controller(Service);

router.get("/",Auth, TeamVerify.teamVerify("TL","DEV","PO"), (req,res)=>controller.list(req,res,[{path:'usersId'},
{path:'tags'},
{path:'stats'},
{path:'sprint'},
{path:'team'},
{path:'stats'}]));

router.get("/:id",Auth,TeamVerify.teamVerify("TL","DEV","PO"), (req,res)=>controller.getOne(req,res,[{path:'usersId'},
{path:'tags'},
{path:'stats'},
{path:'sprint'},
{path:'team'},
{path:'stats'}]));

router.post("/",Auth, TeamVerify.teamVerify("TL","PO"), controller.create);
router.put("/:id",Auth,TeamVerify.teamVerify("TL","DEV","PO"), controller.update);
router.delete("/:id",Auth,TeamVerify.teamVerify("TL","PO"), controller.remove);
module.exports = router;
