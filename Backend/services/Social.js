const BaseService = require("./Base");

const { Social: Repository } = require("../repositories");

class SocialService extends BaseService {
  constructor() {
    super(Repository);
  }
}

module.exports = SocialService;
