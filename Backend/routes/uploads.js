const express = require("express");
const router = express.Router();
const { Uploads: Controller } = require("../controllers");
const upload = require("../middleware/file");

const controller = new Controller();

router.post("/", upload.single("img"), controller.imgUpload);
router.post("/pdf", upload.single("pdf"), controller.pdfUpload);
router.put("/:old", upload.single("img"), controller.imgUpdate);

module.exports = router;