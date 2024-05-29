// database_setup.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('example.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)");

  db.run("INSERT INTO users (name, age) VALUES ('Alice', 25)");
  db.run("INSERT INTO users (name, age) VALUES ('Bob', 30)");
});

db.close();
