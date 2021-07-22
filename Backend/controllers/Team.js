const BaseController = require("./Base");
const { Team: Service } = require("../services");
const Role = require("../models/role");

class TeamController extends BaseController {
  constructor() {
    super(Service);
  }

  async list(req, res, populateField) {
    let result;
    
    try {
      
      if (["PO", "SM", "TL"].includes(req.params["RoleProject"])) {
        result = await this.service.getAll(
          {
            $and: [{ project: req.query.project }],
          },
          populateField
        );
      } else if ("DEV" === req.params["RoleProject"]) {
        result = await this.service.getAll(
          {
            $and: [
              {
                members: req.user._id, //TODO: ESTO TIENE problema porque le pregunta si member que es un array es igual  a un string que es req.user._id
              },
              { project: req.query.project },
            ],
          },
          populateField
        );
      }
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = TeamController;
