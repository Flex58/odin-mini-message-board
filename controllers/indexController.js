const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

function getMessages(req, res) {
  res.render("index", { messages: messages, message: "Your Messages" });
}

function postMessage(req, res) {
  messages.push({ text: req.body.msg, user: req.body.to, added: new Date() });
  res.redirect("/");
}

module.exports = { getMessages, postMessage };
