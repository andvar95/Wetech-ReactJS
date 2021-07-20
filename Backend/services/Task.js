const BaseService = require("./Base");

const { Task: Repository } = require("../repositories");

class TaskService extends BaseService {
    constructor() {
        super(Repository);
    }
}

module.exports = TaskService;