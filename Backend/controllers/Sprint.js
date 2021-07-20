const BaseController = require("./Base");
const { Sprint: Service } = require("../services");


class SprintController extends BaseController {
    constructor() {
        super(Service);
    }


    async list(req, res, populateField) {



        if (!req.query.project) return res.status(402).json({ error: "You must specify a project" })
        const result = await this.service.getAll({ 'project': req.query.project });
        return res.status(200).json({ result })

    }


}

module.exports = SprintController;