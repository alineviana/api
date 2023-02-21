const { Router } = require("express");

const usersRoutes = Router();

const UsersController = require("../controllers/UsersController");
const usersController = new UsersController();

const ensureAuthenticaded = require("../middlewares/ensureAuthenticaded");

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticaded, usersController.update);

module.exports = usersRoutes;
