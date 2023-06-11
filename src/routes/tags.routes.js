const { Router } = require("express");

const TagsController = require("../controllers/tagsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");


const tagsRoutes = Router();

const tagsController = new TagsController();

// userRoutes.use(myMiddleware) //todas as users routes
tagsRoutes.get("/", ensureAuthenticated, tagsController.index) //rota especifica

module.exports = tagsRoutes;