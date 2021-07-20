const express = require('express');
const router = express.Router();
const { Enterprise: Controller } = require('../controllers');
const { Enterprise: Service } = require('../services');


const controller = new Controller(Service);


router.get("/",(req,res)=> controller.list(req,res,[{path:"members"},{
    path:"userId"
}]));
router.get("/:id", controller.getOne);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);
router.put("disable/:id", controller.deactivate);
module.exports = router;