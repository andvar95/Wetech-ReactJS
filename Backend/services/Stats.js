const BaseService = require("./Base");
const Project = require("../models/project");

const { Stats: Repository } = require("../repositories");

class StatsService extends BaseService {
  constructor() {
    super(Repository);
  }

  async finishTask(id) {
    
    const result = await this.repository.findById(id, false);

 

    const today = new Date()
    let dateFinish = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate()

    console.log(dateFinish)

    result.time = (today - result.dateInit.getTime()) /(1000 * 3600 * 24);

    const expected = (result.dateExpected.getTime() - result.dateInit.getTime()) /(1000 * 3600 * 24);



    result.score = (expected - result.time) * 10;
   
    if (!result) {
      const error = new Error("Task Could not be finished");
      error.status = 200;
      throw error;
    }
   
    return result;
  }
}

module.exports = StatsService;
