const BaseController = require("./Base");
const { Social: Service } = require("../services");

class SocialController extends BaseController {
  constructor() {
    super(Service);
  }
}

module.exports = SocialController;
