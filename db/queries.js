const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(params) {
  await pool.query(
    "INSERT INTO messages (username, text, added) VALUES($1, $2, $3)",
    [params.username, params.text, params.added]
  );
}

async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows;
}

module.exports = { getAllMessages, insertMessage, getMessage };
