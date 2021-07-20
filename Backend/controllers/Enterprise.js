const BaseController = require("./Base");
const { Enterprise: Service } = require('../services');

class EnterpriseController extends BaseController {
    constructor() {
        super(Service);
    }
}
module.exports = EnterpriseController;