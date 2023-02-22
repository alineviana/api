const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const UsersController = require("../controllers/UsersController");
const usersController = new UsersController();

const UserAvatarController = require("../controllers/UserAvatarController");
const userAvatarController = new UserAvatarController();

const ensureAuthenticaded = require("../middlewares/ensureAuthenticaded");

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticaded, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticaded, upload.single("avatar"), userAvatarController.update);

module.exports = usersRoutes;
