const BaseService = require("./Base");

const { Sprint: Repository } = require("../repositories");

class SprintService extends BaseService {
  constructor() {
    super(Repository);
  }
}

module.exports = SprintService;