const express = require("express");
const router = express.Router();
const { Search: Controller } = require("../controllers");

const { User: ServiceUser } = require('../services');
const { Project: ServiceProject } = require('../services');

const services = [ServiceUser, ServiceProject];

const controller = new Controller(services);

router.get("/", (req, res) => controller.search(req, res, [{ path: "role" }, { path: "tags" }]));
module.exports = router;