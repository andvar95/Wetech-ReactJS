const BaseRepository = require("./Base");
const Model = require("../models/dev");

class DevRepository extends BaseRepository {
    constructor() {
        super(Model);
    }
}

module.exports = DevRepository;