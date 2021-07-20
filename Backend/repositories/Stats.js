const BaseRepository = require("./Base");
const Model = require("../models/stats");

class StatsRepository extends BaseRepository {
  constructor() {
    super(Model);
  }
}

module.exports = StatsRepository;
