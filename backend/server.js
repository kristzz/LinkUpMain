const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


// Create a new pool for the database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'LinkUp',
  password: 'Ridzenebasketbal1',
  port: 5432,
});

app.get('/ping', (req, res) =>{
  res.status(200).send('pong')
})

app.post('/register', (req, res) => {
  const { email, password } = req.body;
   pool.query('INSERT INTO users (email, pass) VALUES ($1, $2) RETURNING id', [email, password], (error, results) => {
     if (!error) {
       res.status(201).send(`User added with ID: ${results.rows[0].id}`);
     } else {
        console.error(error);
        res.status(500).send('Error registering user');
     }
   });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  pool.query('SELECT * FROM users WHERE email = \$1 AND pass = \$2', [email, password], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error logging in user');
    } else if (results.rows.length > 0) {
      res.status(200).send('User logged in');
    } else {
      res.status(401).send('Incorrect email or password');
    }
  });
});

app.listen(5050, () => {
  console.log('Server running on http://localhost:5050');
});