const Role = require("../models/role");
const Project = require("../models/project");

const teamVerify = (...role) => {
    return async(req, res, next) => {
        let error = true;
        try {

            let idProject;
            if (req.body.project) idProject = req.body.project;
            else if (req.query.project) idProject = req.query.project;

            const project = await Project.findById(idProject);
            const isMember = project.members.filter(
                (theProject) => theProject.userId == req.user._id
            );



            if (isMember.length < 1)
                return res.status(401).send("You are not a member");

            const roleDB = await Role.findById(isMember[0].Role);

            req.params.RoleProject = roleDB.name;
            if (!role.includes(roleDB.name))
                return res.status(400).send("You need be " + role);

            next();
        } catch (err) {
            res.status(400).send("Error checking role");
        }
    };
};
module.exports = {
    teamVerify,
};