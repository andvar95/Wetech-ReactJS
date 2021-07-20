const BaseController = require("./Base");
const { Tag: Service } = require("../services");

class TagController extends BaseController {
  constructor() {
    super(Service);
    this.service = new Service();
    this.getByField = this.getByField.bind(this);
  }



  async getByField(req,res){
   
    try{
    const result = await   this.service.getByField(req.query,false)
    return res.status(200).json({result})
    }
    catch(err){
      return res.status(400).json({message:err.message})
    }
  }



}

module.exports = TagController;