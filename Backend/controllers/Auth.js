const { User: Service } = require("../services");

class AuthController {
    constructor() {
        this.service = new Service();
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.getLoggued = this.getLoggued.bind(this);
    }
    async login(req, res) {
        const user = await this.service.getOne({ email: req.body.email });

        if (!user) {
            return res.status(500).json({ message: "Invalid Credentialsz" });
        } else {
            try {
                const isValid = await this.service.verifyPassword(
                    user.password,
                    req.body.password
                );
                const token = await this.service.getTokenS(user);
                // user.generateJWT();
                res.status(200).send({ token,user:user._id });
            } catch (error) {
                return res.status(401).json({ message: error.message });
            }
        }
    }
    async register(req, res) {

       
        try {
            const response = await this.service.create(req.body);

            

            return res.status(200).send({ token: response[0], _id:response[1]});
        } catch (error) {
            return res.status(401).json({ message: error.message });
        }
    }

    async getLoggued(req, res) {
        const iAm = await this.service.getOne({ _id: req.user._id }, [
            { path: "role" },
            { path: "tags" },
        ]);

        return res.status(200).json({ iAm });
    }
}
module.exports = AuthController;