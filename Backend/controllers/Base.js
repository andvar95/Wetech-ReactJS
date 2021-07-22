class BaseController {
    constructor(Service) {
        this.service = new Service();
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.list = this.list.bind(this);
        this.getOne = this.getOne.bind(this);
        this.remove = this.remove.bind(this);
        this.deactivate = this.deactivate.bind(this);
    }

    async create(req, res) {
        try {
            const result = await this.service.create(req.body);
            return res.status(201).json({ result });
        } catch (error) {
            return res.status(error.status || 500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const result = await this.service.update(req.params.id, req.body);

            return res.status(202).json({ result });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async list(req, res, populateField) {
        let result;

        try {
            if (req.query.name)
                result = await this.service.list(req.query.name, populateField);
            else if (req.query.email)
                result = await this.service.list(req.query.email, populateField);
            else if (!req.query.type)
                result = await this.service.list(req.query.type, false);
            else result = await this.service.getAll({}, populateField);
            console.log('AQUI ES',result);
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getOne(req, res, populateField) {
        try {
            const result = await this.service.get(req.params.id, populateField);
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(error.status || 500).json({ message: error.message });
        }
    }

    async remove(req, res) {
        try {
            const result = await this.service.remove(req.params.id);
            return res.status(202).json({ result });
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }

    async deactivate(req, res) {
        if (!req.body.active)
            return res.status(400).json({ message: "This field doesn't exist" });

        if (req.body.active === true) req.body.active = false;
        else req.body.active = true;

        try {
            const result = await this.service.update(req.params.id, req.body);
            return res.status(202).json({ result });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = BaseController;