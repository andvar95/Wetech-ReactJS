const BaseRepository = require("./Base");
const Model = require("../models/team");

class TeamRepository extends BaseRepository {
  constructor() {
    super(Model);
  }
}

module.exports = TeamRepository;