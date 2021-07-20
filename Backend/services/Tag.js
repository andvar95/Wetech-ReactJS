const BaseService = require("./Base");

const { Tag: Repository } = require("../repositories");

class TagService extends BaseService {
  constructor() {
    super(Repository);
  }

  async getByField(field,populateField){
    return this.repository.getByField(field,populateField)
  }
}

module.exports = TagService;