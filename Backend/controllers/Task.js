const BaseController = require("./Base");
const { Task: Service } = require("../services");
const Status = require("../models/status");
const Sprint = require("../models/sprint");
const Stats = require("../models/stats");
const Project = require("../models/project");

class TaskController extends BaseController {
  constructor() {
    super(Service);
    this.queryOut = this.queryOut.bind(this);
    this.createStat = this.createStat.bind(this);
  }

  queryOut(results, status) {
    let output = {};

    console.log(status);

    status.sort((a, b) => (a[2] > b[2] ? 1 : -1));

    status.forEach((stat) => {
      output[stat[0].toString()] = {
        title: stat[0],
        id: stat[1],
        tasks: [],
      };
    });

    results.forEach((task) => {
      Object.keys(output).forEach((out) => {
        if (task.status === out) {
          output[out].tasks.push(task);
        }
      });
    });

    return output;
  }

  async createStat(req, res, endDate) {
    const statData = {};

    const today = new Date();

    statData.dateInit =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    statData.dateExpected = endDate;

    console.log(statData);

    const stat = new Stats(statData);
    const result = await stat.save();

    console.log(result);

    if (!result) res.status(400).send({ message: "Error creating Team" });

    return result._id;
  }

  async create(req, res) {
    //const status = await Status.findOne({ name: "To-Do" });
    const project = await Project.findById(req.query.project);
    const status = project.status.filter((stat) => stat.name === "To-Do");

    req.body.historial = [status[0].name];
    req.body.status = status[0].name;
    console.log(req.body);

    const statId = await this.createStat(req, res, req.body.duration);
    console.log(statId);

    req.body.stats = statId;

    try {
      const result = await this.service.create(req.body);

      return res.status(201).json({ result });
    } catch (error) {
      return res.status(error.status || 500).json({ message: error.message });
    }
  }

  async list(req, res, populateField) {
    let results;
    let idUser;
    let sprint;
    let sprints;

    if (!req.query.sprint || !req.query.team) {
      sprint = await Sprint.find({ project: req.query.project });
      sprints = sprint.map((sp) => sp._id);
    }

    if (req.query.user) idUser = req.query.user;
    else idUser = req.user._id;

    console.log(req.query);
    console.log(req.params);

    try {
      if (req.query.sprint && ["DEV"].includes(req.params["RoleProject"]))
        results = await this.service.getAll(
          { $and: [{ usersId: idUser }, { sprint: req.query.sprint }] },
          populateField
        );
      else if (
        req.query.sprint &&
        req.query.team &&
        ["PO"].includes(req.params["RoleProject"])
      )
        results = await this.service.getAll(
          { $and: [{ sprint: req.query.sprint }, { team: req.query.team }] },
          populateField
        );
      else if (req.query.sprint && ["PO"].includes(req.params["RoleProject"])) {
        console.log("as");
        results = await this.service.getAll(
          { sprint: req.query.sprint },
          populateField
        );
      } else if (req.query.team && ["PO"].includes(req.params["RoleProject"])) {
        console.log("estoy dentro", req.query);
        results = await this.service.getAll(
          { $and: [{ team: req.query.team }] },
          populateField
        );
      } else if (
        req.query.sprint &&
        req.query.team &&
        ["DEV"].includes(req.params["RoleProject"])
      )
        results = await this.service.getAll(
          {
            $and: [
              { usersId: idUser },
              { sprint: req.query.sprint },
              { team: req.query.team },
            ],
          },
          populateField
        );
      else if (req.query.team && ["DEV"].includes(req.params["RoleProject"])) {
        console.log("Team dev");
        results = await this.service.getAll(
          { $and: [/*{ usersId: idUser }*/ { team: req.query.team }] },
          populateField
        );
      } else if (["PO"].includes(req.params["RoleProject"]))
        results = await this.service.getAll(
          { sprint: { $in: sprints } },
          populateField
        );
      else if (["DEV"].includes(req.params["RoleProject"])) {
        console.log(idUser, req.query.project);
        results = await this.service.getAll(
          { $and: [{ sprint: { $in: sprints } }, { usersId: idUser }] },
          populateField
        );
      }

      if (req.query.type === "All") {
        const result = results;
        return res.status(200).json({ result });
      }

      //const status = await Status.find({project:req.query.project});
      //const statusObject = status.map((stat) => [stat.name, stat._id]);

      const project = await Project.findById(req.query.project);
      const statusObject = project.status.map((stat) => [
        stat.name,
        stat._id,
        stat.index,
      ]);

      const result = this.queryOut(results, statusObject);
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    // console.log(req.body.status);
    // console.log(req.body.historial);
    // if (req.body.status !== req.body.historial[req.body.historial.lenght])
    //   req.body.historial.push(req.body.status);

    try {
      const result = await this.service.update(req.params.id, req.body);

      return res.status(202).json({ result });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = TaskController;
