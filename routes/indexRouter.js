const { Router } = require("express");
const {
  getMessages,
  postMessage,
  getExpandMessage,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/:messageID", getExpandMessage);
indexRouter.get("/", getMessages);
indexRouter.post("/new", postMessage);

module.exports = indexRouter;
