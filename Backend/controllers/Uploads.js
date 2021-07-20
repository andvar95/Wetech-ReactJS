const fs = require("fs");

class UploadsController {
    async imgUpload(req, res) {
        if (req.params["error-img"])
            return res.status(401).send("Accepte format: .png, .jpg, .jpeg, .gif");

        const url = req.protocol + "://" + req.get("host");
        let imageUrl = "";
        if (req.file !== undefined && req.file.filename)
            imageUrl = url + "/uploads/" + req.file.filename;

        return res.status(200).json({ image: imageUrl });
    }
    async pdfUpload(req, res) {
        if (req.params["error-pdf"])
            return res.status(401).send("Accepte format: .pdf");

        const url = req.protocol + "://" + req.get("host");
        let pdfUrl = "";
        if (req.file !== undefined && req.file.filename)
            pdfUrl = url + "/uploads/" + req.file.filename;

        return res.status(200).json({ pdf: pdfUrl });
    }
    async imgUpdate(req, res) {
        if (req.params["error-img"])
            return res.status(401).send("Accepte format: .png, .jpg, .jpeg");

        const url = req.protocol + "://" + req.get("host");
        let imageUrl = "";
        if (req.file !== undefined && req.file.filename) {
            imageUrl = url + "/uploads/" + req.file.filename;
        }

        const oldUrl = "./uploads/" + req.params.old;

        if (!oldUrl.includes("userDefault.jpeg")) {
            fs.unlinkSync(oldUrl);
        }

        return res.status(200).json({ image: imageUrl });
    }
    async pdfUpdate(req, res) {
        if (req.params["error-img"])
            return res.status(401).send("Accepte format: .png, .jpg, .jpeg");

        const url = req.protocol + "://" + req.get("host");
        let pdfUrl = "";
        if (req.file !== undefined && req.file.filename) {
            pdfUrl = url + "/uploads/pdf/" + req.file.filename;
        }
        if (req.params.old) {

            const oldUrl = "./uploads/" + req.params.old;
            fs.unlinkSync(oldUrl);
        }




        return res.status(200).json({ pdf: pdfUrl });
    }
}

module.exports = UploadsController;