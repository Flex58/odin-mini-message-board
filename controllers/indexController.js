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

module.exports = { getMessages };
