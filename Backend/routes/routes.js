const user = require("./user");
const role = require("./role");
const task = require("./task");
const tag = require("./tag");
const status = require("./status");
const project = require("./project");
const sprint = require("./sprint");
const team = require("./team");
const auth = require("./auth");
const stats = require("./stats");
const upload = require("./uploads");
const social = require("./social");
const dev = require("./dev");
const enterprise = require("./enterprise");
const search = require("./search");
const routes = [
    { path: "/users/", controller: user },
    { path: "/roles/", controller: role },
    { path: "/tag/", controller: tag },
    { path: "/task/", controller: task },
    { path: "/status/", controller: status },
    { path: "/project/", controller: project },
    { path: "/sprint/", controller: sprint },
    { path: "/team/", controller: team },
    { path: "/auth/", controller: auth },
    { path: "/stats/", controller: stats },
    { path: "/upload/", controller: upload },
    { path: "/social/", controller: social },
    { path: "/dev/", controller: dev },
    {path:"/search/",controller:search},
    { path: "/enterprise/", controller: enterprise },
    { path: "/search/", controller: search },
];

module.exports = routes;