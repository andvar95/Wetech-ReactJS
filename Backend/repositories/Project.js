const BaseRepository = require("./Base");
const Model = require("../models/project");
const mongoose = require("mongoose")

class ProjectRepository extends BaseRepository {
    constructor() {
        super(Model);
    }




}

module.exports = ProjectRepository;