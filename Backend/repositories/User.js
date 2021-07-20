const BaseRepository = require("./Base");
const Model = require("../models/user");
const bcrypt = require("bcrypt");
class UserRepository extends BaseRepository {
  constructor() {
    super(Model);
  }

  getToken(user) {
    return user.generateJWT();
  }
  verifyPwd(passwordDB, password) {
    return bcrypt.compare(password, passwordDB);
  }
}

module.exports = UserRepository;
