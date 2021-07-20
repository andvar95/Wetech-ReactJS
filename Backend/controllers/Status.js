const BaseController = require("./Base");
const { Status: Service } = require("../services");

class StatusController extends BaseController {
  constructor() {
    super(Service);
  }

  
}

module.exports = StatusController;