const express = require('express');
const router = express.Router();
const { Dev: Controller } = require('../controllers');
const { Dev: Service } = require('../services');


const controller = new Controller(Service);


router.get("/", controller.list);
router.get("/:id", controller.getOne);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);
router.put("disable/:id", controller.deactivate);
module.exports = router;