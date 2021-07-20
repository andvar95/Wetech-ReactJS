const BaseRepository = require("./Base");
const Model = require("../models/sprint");

class SprintRepository extends BaseRepository {
  constructor() {
    super(Model);
  }
}

module.exports = SprintRepository;