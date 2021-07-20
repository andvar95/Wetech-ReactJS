const BaseService = require("./Base");

const { Status: Repository } = require("../repositories");

class StatusService extends BaseService {
  constructor() {
    super(Repository);
  }
}

module.exports = StatusService;