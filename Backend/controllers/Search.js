const User = require("../models/user");
const Project = require("../models/project");

class SearchController {
    constructor(services) {
        this.services = services.map(service => new service());

    }


    async search(req, res, populatedField) {
        const [mean] = Object.keys(req.query);
        let result = "No found";
        switch (mean) {
            case 'all':
                let arrayPromises = [];
                for (let i = 0; i < this.services.length; i++) {
                    arrayPromises.push(this.services[i].list(req.query.all));
                }
                let solved = await Promise.all(arrayPromises);

                result = [].concat.apply([], solved);
                break;
            case 'dev':
                result = await this.services[0].getAll({
                    name: req.query.dev,
                    isEnterprise: false
                });
                break;
            case 'enterprise':
                result = await this.services[0].getAll({
                    name: req.query.enterprise,
                    isEnterprise: true
                });
                break;
            case 'project':
                result = await this.services[1].list(req.query.project);

                break;
            default:
                break;
        }
        res.status(200).send({ result });

    }


}

module.exports = SearchController;