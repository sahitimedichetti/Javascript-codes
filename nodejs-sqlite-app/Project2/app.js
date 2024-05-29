// app.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Database connection function
const getDbConnection = () => {
  return new sqlite3.Database('example.db');
};

// Routes- getting the details in UI
app.get('/', (req, res) => {
  const db = getDbConnection();
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      throw err;
    }
    res.render('index', { user: rows });
  });
  db.close();
});

// Adding new user
app.get('/add', (req, res) => {
  res.render('add');
});

// Added user display
app.post('/add', (req, res) => {
  const { name, age } = req.body;
  const db = getDbConnection();
  db.run('INSERT INTO users (name, age) VALUES (?, ?)', [name, age], (err) => {
    if (err) {
      throw err;
    }
    res.redirect('/');
  });
  db.close();
});

// Deleting the user
app.post('/delete/:id', (req, res) => {
    const userID = req.params.id;
    const db = getDbConnection();
    db.run('DELETE FROM users WHERE id = ?', [userID], (err) => {
      if (err) {
        throw err;
      }
      res.redirect('/');
    });
    db.close();
});

app.get('/user/:id', (req, res) => {
    const userID = req.params.id;
    const db = getDbConnection();
    db.get('SELECT * FROM users WHERE id = ?', [userID], (err, rows) => {
      if (err) {
        throw err;
      }
      res.render('user', {user:rows});
    });
    db.close();
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
