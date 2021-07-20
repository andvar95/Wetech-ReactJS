const express = require("express");
const cors = require("cors");
const { Router } = require("express");
const morgan = require("morgan");

function server() {
    this.app = express();
    this.run = (routes) => {
        this.middleware();
        this.router(routes);
        this.listen();
    };

    this.middleware = () => {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use("/uploads",express.static("uploads"));
    };

    this.router = (routes) => {
        const router = new Router();

        routes.forEach((route) => {
            router.use(route.path, route.controller);
        });
        this.app.use("/api", router);
    };

    this.listen = () => {
        this.app.listen(process.env.PORT, () => {
            console.log("Server Running on Port: ", process.env.PORT);
        });
    };
}

const Server = new server();
module.exports = Server;