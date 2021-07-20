const express = require("express");
const router = express.Router();
const { Stats: Controller } = require("../controllers");
const { Stats: Service } = require("../services");

const controller = new Controller(Service);

router.get("/", (req,res)=>controller.list(req,res,{}));
router.get("/:id",(req,res)=> controller.getOne(req,res,{}));
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);
router.put("/finish/:id", controller.finishTask);
module.exports = router;


