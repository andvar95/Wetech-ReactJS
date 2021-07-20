const BaseRepository = require("./Base");
const Model = require("../models/tag");

class TagRepository extends BaseRepository {
  constructor() {
    super(Model);
  }
}

module.exports = TagRepository;