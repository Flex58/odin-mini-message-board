function getNew(req, res) {
  return res.render("form", { message: "Send a Message" });
}

module.exports = { getNew };
