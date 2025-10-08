const CustomNotFoundError = require("../errors/CustomNotFoundError");

const messages = [
  {
    id: crypto.randomUUID(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: crypto.randomUUID(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

function getMessages(req, res) {
  res.render("index", { messages: messages, message: "Your Messages" });
}

function postMessage(req, res) {
  messages.push({
    id: crypto.randomUUID(),
    text: req.body.msg,
    user: req.body.to,
    added: new Date(),
  });
  res.redirect("/");
}

function getExpandMessage(req, res) {
  const message = messages.find(
    (message) => message.id === req.params.messageID
  );
  if (!message) {
    throw new CustomNotFoundError("Message not found");
  }
  res.render("message", {
    messages: message,
    message: "View Specific Message",
  });
}

module.exports = { getMessages, postMessage, getExpandMessage };
