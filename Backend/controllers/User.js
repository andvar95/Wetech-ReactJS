const BaseController = require("./Base");

const { User: Service } = require("../services");

class UserController extends BaseController {
  constructor() {
    super(Service);
    this.service = new Service();
    this.getLoggued = this.getLoggued.bind(this);
  }

  async getLoggued(req, res) {
    const iAm = await this.service.getOne({ _id: req.user._id }, [
      { path: "role" },
      { path: "tags" },
    ]);

    return res.status(200).json({ iAm });
  }
}

module.exports = UserController;
