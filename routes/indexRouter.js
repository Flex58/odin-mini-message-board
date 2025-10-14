const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/:messageID", indexController.getExpandMessage);
indexRouter.get("/", indexController.getMessages);
indexRouter.post("/new", indexController.postMessage);

module.exports = indexRouter;
