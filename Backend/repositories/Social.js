const BaseRepository = require("./Base");
const Model = require("../models/social");

class RoleRepository extends BaseRepository {
  constructor() {
    super(Model);
  }
}

module.exports = RoleRepository;
