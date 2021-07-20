const BaseService = require("./Base");

const { Team: Repository } = require("../repositories");

class TeamService extends BaseService {
  constructor() {
    super(Repository);
  }

  
  
}

module.exports = TeamService;