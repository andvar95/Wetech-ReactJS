const BaseRepository = require("./Base");
const Model = require("../models/enterprise");

class EnterpriseRepository extends BaseRepository {
    constructor() {
        super(Model);
    }
}

module.exports = EnterpriseRepository;