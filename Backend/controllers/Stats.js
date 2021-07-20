const BaseController = require("./Base");
const { Stats: Service } = require("../services");
const Project = require("../models/project");
const Team = require("../models/team");

class StatsController extends BaseController {
    constructor() {
        super(Service);
        this.service = new Service();
        this.finishTask = this.finishTask.bind(this);
        this.getTeam = this.getTeam.bind(this)
    }

    async getTeam(req, res, id) {

        console.log(id)
        const team = await Team.findOne({ _id: id })
        console.log("as")
        console.log(team)

        return team.members

    }

    async finishTask(req, res) {
        try {

            console.log(req.body)
            const results = await this.service.finishTask(req.params.id);
            const taskFinished = await this.service.update(req.params.id, results);

            let project = await Project.findOne({ _id: req.query.project });

            const teamMembers = await this.getTeam(req, res, req.body.team)



            project.members.forEach(Themember => {
                teamMembers.forEach(teamM => {
                    if (teamM.equals(Themember.userId)) {

                        Themember.score += results.score
                    }


                })

            });


            let result = await Project.findByIdAndUpdate(project._id, project);

            res.status(200).send(result);
        } catch (err) {
            return res.status(err.statusCode).json({ message: err.message });
        }
    }
}

module.exports = StatsController;