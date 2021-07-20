const BaseRepository = require("./Base");
const Model = require("../models/status");

class StatusRepository extends BaseRepository {
  constructor() {
    super(Model);
  }
}

module.exports = StatusRepository;