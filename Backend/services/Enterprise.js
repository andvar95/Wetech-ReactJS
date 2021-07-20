const BaseService = require("./Base");
const { Enterprise: Repository } = require("../repositories");
class EnterpriseService extends BaseService {
    constructor() {
        super(Repository);
    }
}
module.exports = EnterpriseService;