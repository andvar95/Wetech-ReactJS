const BaseController = require("./Base");
const { Project: Service } = require("../services");
const Team = require("../models/team");
const Role = require("../models/role");
const Status = require("../models/status");

class ProjectController extends BaseController {
    constructor() {
        super(Service);
        this.getRole = this.getRole.bind(this)
    }

    async list(req, res, populateField) {
        const result = await this.service.getAll({
                members: {
                    $elemMatch: {
                        userId: req.user._id,
                    },
                },
            },
            populateField
        );

        return res.status(200).json({ result });
    }

     createProjectStatus(){

        const basicStatus = [
        {name:'To-Do',index:1},
        {name:'In-Progress',index:2},
        {name:'Done',index:3}]
        /*

        basicStatus.forEach(
            async (status,index)=>{
                const newStatus = new Status({
                    name:status,
                    index:index+1,
                    project:id
                })
                const result = await newStatus.save();
                if(!result) return res.status(400).send("Error creating status")
            }
        )
    */
        return basicStatus

    }

    async mainTeamCreate(req, res, idProject, Members, update = 1) {
        let teamData = {};
        teamData.members = [];
        teamData.project = idProject;
        teamData.name = "General";
        teamData.description = "This is the default team";
        Members.forEach((member) => teamData.members.push(member));
        const teamDB = new Team(teamData);
        const teamDefault = await teamDB.save();

        return teamDefault;
    }

    async mainTeamUpdate(req, res, Members) {
      

        const teamDef = await Team.findOne({$and:[{ name: 'General' },{project:req.params.id}]})
      
      

        teamDef.members = Members;

        const teamUpdate = await Team.findByIdAndUpdate(teamDef._id, teamDef, { new: true })

        return teamUpdate

    }

    async create(req, res) {

        const PO = await Role.findOne({ name: "PO" });
        const dev = await Role.findOne({ name: "DEV" });

        
        req.body.members = req.body.members.map(member=>{
            if (member === req.user._id) return {userId: member, Role: PO._id }
            else return {userId: member, Role: dev._id }
        })
    
        let id_Members = req.body.members.map((member) => member.userId);
        try {
            req.body.status = [
                {name:'To-Do',index:1},
                {name:'In-Progress',index:2},
                {name:'Done',index:3}]


            const result = await this.service.create(req.body);

            const team = await this.mainTeamCreate(req, res, result._id, id_Members);
            if (!team) return res.status(400).send("Error creating Team");

            //const status = await this.createProjectStatus(req,res,result._id)
            //if (!status) return res.status(400).send("Error creating status");

            return res.status(201).json({ result });
        } catch (error) {
            return res.status(error.status || 500).json({ message: error.message });
        }
    }


    async update(req, res) {

        const PO = await Role.findOne({ name: "PO" });
        const dev = await Role.findOne({ name: "DEV" });

        
        req.body.members = req.body.members.map(member=>{
            if (member === req.user._id) return {userId: member, Role: PO._id }
            else return {userId: member, Role: dev._id }
        })

    console.log(req.body)
        try {
            const results = await this.service.update(req.params.id, req.body);

            if (req.body.members) {
                let id_Members = results.members.map((member) => member.userId);
                const team = await this.mainTeamUpdate(req, res, id_Members);

                if (!team) return res.status(400).send("Error updating Team");
            }

            return res.status(202).json({ results });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }


    async list(req, res, populateField) {
        const result = await this.service.getAll({
                members: {
                    $elemMatch: {
                        userId: req.user._id,
                    },
                },
            },
            populateField
        );

        return res.status(200).json({ result });
    }

    async getRole(req,res){

        const options = {     
            links: [        
              { url: 'dashboard', name: 'DashBoard' },
              { url: 'stacks', name: 'Stacks' },
              { url: 'project', name: 'Project' },
              { url: 'team', name: 'Team' },
              { url: 'sprint', name: 'Sprint' },
              //{ url: 'task', name: 'Task' },
              { url: 'tag', name: 'Tags' },
            ],
          };

          const PO = ['dashboard','stacks','project','team','sprint','task','tag']
          const SM = ['dashboard','stacks','project','team','sprint','task','tag']
          const TL = ['dashboard','stacks','project','team','sprint','task','tag']
          const DEV = ['stacks','project','team']

         const  options2 = {     
            links: [        
            
              { url: 'stacks', name: 'Stacks' },
              { url: 'team', name: 'Team' },

              { url: 'user', name: 'Profile' },
              { url: 'task', name: 'Task' },
              { url: 'tag', name: 'Tags' },
            ],
          };

          
        const project = await this.service.get(req.params.id,false)
        const iAm = project.members.filter(member=>member.userId.equals(req.user._id))
        const role = await Role.findOne({_id:iAm[0].Role})
        let result = {}
         rol.rol =role.name

        if(role.name === "PO") rol.opt = options.links.filter(link=>PO.indexOf(link.url)!== -1)
        if(role.name === "DEV") rol.opt = options.links.filter(link=>DEV.indexOf(link.url)!== -1)
        if(role.name === "SM") rol.opt = options.links.filter(link=>SM.indexOf(link.url)!== -1)
        if(role.name === "TL") rol.opt = options.links.filter(link=>TL.indexOf(link.url)!== -1)

       

       return res.status(200).json({result})
    }


}

module.exports = ProjectController;