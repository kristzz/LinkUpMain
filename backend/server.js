const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
 }));

// Create a new pool for the database
const pool = new Pool({
 user: 'postgres',
 host: 'localhost',
 database: 'LinkUp',
 password: 'Ridzenebasketbal1',
 port: 5432,
});

const SECRET_KEY = "your-secret-key";

app.get('/ping', (req, res) =>{
 res.status(200).send('pong')
})

app.post('/register', (req, res) => {
 const { email, password } = req.body;

 // Hash the password
 const hashedPassword = bcrypt.hashSync(password, 10);

 pool.query('INSERT INTO users (email, pass) VALUES ($1, $2) RETURNING id', [email, hashedPassword], (error, results) => {
 if (!error) {
   res.status(201).send(`User added with ID: ${results.rows[0].id}`);
 } else {
   console.error('Error registering user:', error); // Log the error
   res.status(500).send('Error registering user');
 }
 });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
  if (error) {
  console.error(error);
  res.status(500).send('Error logging in user');
  } else if (results.rows.length > 0 && bcrypt.compareSync(password, results.rows[0].pass)) {
  // Generate a JWT
  const token = jwt.sign({ id: results.rows[0].id }, SECRET_KEY, { expiresIn: '1h' });
  // Save the user ID in the session
  req.session.userId = results.rows[0].id;
  // Log the user ID to the console
  console.log(`User ID: ${req.session.userId}`);
  // Return the JWT and user's ID in the response
  res.status(200).send({ token, id: results.rows[0].id });
  } else {
  res.status(401).send('Incorrect email or password');
  }
  });
 });
 

app.get('/verify', (req, res) => {
 const token = req.headers.authorization.split(' ')[1];
 jwt.verify(token, SECRET_KEY, (err, decoded) => {
 if (err) {
   res.status(401).send('Invalid token');
 } else {
   res.status(200).send('Token is valid');
 }
 });
});

app.put('/change-password', (req, res) => {
  const { id, newPassword } = req.body;
  const hashedPassword = bcrypt.hashSync(newPassword, 10);

  pool.query('UPDATE users SET pass = $1 WHERE id = $2', [hashedPassword, id], (error, results) => {
    if (!error) {
      res.status(200).send(`User modified with ID: ${id}`);
    } else {
      console.error('Error changing password:', error);
      res.status(500).send('Error changing password');
    }
  });
});

app.listen(5050, () => {
 console.log('Server running on http://localhost:5050');
});