const { Router } = require("express");
const { getNew } = require("../controllers/newController");

const newRouter = Router();

newRouter.get("/", getNew);

module.exports = newRouter;
