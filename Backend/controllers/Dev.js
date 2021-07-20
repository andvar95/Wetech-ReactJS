const BaseController = require("./Base");
const { Dev: Service } = require('../services');

class DevController extends BaseController {
    constructor() {
        super(Service);
    }
}
module.exports = DevController;