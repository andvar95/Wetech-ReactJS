const BaseService = require("./Base");

const { Project: Repository } = require("../repositories");

class ProjectService extends BaseService {
    constructor() {
        super(Repository);
    }
}

module.exports = ProjectService;