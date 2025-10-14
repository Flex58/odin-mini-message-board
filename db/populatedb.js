require("dotenv").config();
const { Client } = require("pg");

const SQL = `CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255), text TEXT, added TIMESTAMPTZ);`;

const insertSQL = `INSERT INTO messages (username, text, added)
VALUES ($1, $2, $3), ($4, $5, $6);`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.PGCONNECTIONSTRING,
  });
  await client.connect();
  await client.query(SQL);
  const nowA = new Date();
  const nowB = new Date();
  const values = ["Amando", "Hi There", nowA, "Charles", "Hello World", nowB];
  await client.query(insertSQL, values);
  await client.end();
  console.log("done");
}

main();
