const bcrypt = require("bcrypt");
const BaseService = require("./Base");

const {
    User: UserRepository,
    Role: RoleRepository,
} = require("../repositories");

class UserService extends BaseService {
    constructor() {
        super(UserRepository);
        this.roleRepository = new RoleRepository();
    }

    async create(element) {

        if (!element.role) {


            const roleUser = await this.roleRepository.findOne({ name: "user" });
            element.role = roleUser._id;
        }
        const role = await this.roleRepository.findById(element.role);

        if (!role) {
            const error = new Error("There is not role to assign");
            error.statusCode = 400;
            throw error;
        }


       
        const encryptedPassword = await bcrypt.hash(element.password, 10);

        const findCriteria = { email: element.email };
        const createdUser = await super.create({...element, password: encryptedPassword },
            findCriteria
        );
       
        return [createdUser.generateJWT(), createdUser._id];
    }

    async update(id, element) {
        let updatedUser;

        if (!element.password) {
            updatedUser = await super.update(id, {
                ...element,
            });
        } else {
            const encryptedPassword = await bcrypt.hash(element.password, 10);

            updatedUser = await super.update(id, {
                ...element,
                password: encryptedPassword,
            });
        }
        return updatedUser;
    }

    getAll(params = {}, populateField) {
        if (Object.keys(params).includes('isEnterprise')) {
            return super.getAll(params, populateField);
        } else if (params.name) {
            return this.repository.list(params.name, populateField);
        }
        return super.getAll(params, populateField);
    }
    async verifyPassword(passwordDB, password) {
        const paa = await bcrypt.hash(password, 10)
        const isCorrect = await this.repository.verifyPwd(passwordDB, password);
        if (!isCorrect) {
            const error = new Error("Invalid Credentials");
            error.statusCode = 401;
            throw error;
        }
    }
    async getTokenS(user) {
        const jwt = await this.repository.getToken(user);
        return jwt;
    }

}

module.exports = UserService;