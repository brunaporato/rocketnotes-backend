const { Router } = require("express");

const UsersController = require("../controllers/usersController");
const UserAvatarController = require("../controllers/userAvatarController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

// userRoutes.use(myMiddleware) //todas as users routes
userRoutes.post("/", usersController.create) //rota especifica
userRoutes.put("/", ensureAuthenticated, usersController.update)
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = userRoutes;