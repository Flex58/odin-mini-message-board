const { Router } = require("express");
const { getMessages, postMessage } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getMessages);
indexRouter.post("/new", postMessage);

module.exports = indexRouter;
