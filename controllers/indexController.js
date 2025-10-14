const CustomNotFoundError = require("../errors/CustomNotFoundError");
const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const validateMessage = [
  body("to")
    .notEmpty()
    .trim()
    .isAlphanumeric()
    .withMessage("Username can only include Alphanumeric characters")
    .isLength({ max: 255 })
    .withMessage("Max Username length is 255 characters"),
  body("msg")
    .notEmpty()
    .trim()
    .escape()
    .isLength({ max: 1000 })
    .withMessage("Max Message length is 1000 characters"),
];

exports.getMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", { messages: messages, message: "Your Messages" });
};

exports.postMessage = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .render("form", { message: "Send a Message", errors: errors.array() });
    }
    const data = matchedData(req);
    data.added = new Date();
    console.log(data);
    await db.insertMessage(data);
    await res.redirect("/");
  },
];

exports.getExpandMessage = async (req, res) => {
  const message = await db.getMessage(req.params.messageID);
  console.log(message);
  if (!message) {
    throw new CustomNotFoundError("Message not found");
  }
  await res.render("message", {
    messages: message,
    message: "View Specific Message",
  });
};
