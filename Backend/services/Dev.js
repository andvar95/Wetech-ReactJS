const BaseService = require("./Base");
const { Dev: Repository } = require("../repositories");
class DevService extends BaseService {
    constructor() {
        super(Repository);
    }
}
module.exports = DevService;