const BaseRepository = require("./Base");
const Model = require("../models/task");

class TaskRepository extends BaseRepository {
  constructor() {
    super(Model);
  }

}

module.exports = TaskRepository;
