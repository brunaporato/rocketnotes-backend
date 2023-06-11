const { Router } = require("express");

const NotesController = require("../controllers/notesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");


const notesRoutes = Router();

const notesController = new NotesController();

// userRoutes.use(myMiddleware) //todas as users routes

notesRoutes.use(ensureAuthenticated);

notesRoutes.get("/", notesController.index) //rota especifica
notesRoutes.post("/", notesController.create) //rota especifica
notesRoutes.get("/:id", notesController.show) //rota especifica
notesRoutes.delete("/:id", notesController.delete) //rota especifica

module.exports = notesRoutes;