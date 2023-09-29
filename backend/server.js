const express = require('express');
const { Pool } = require('pg');
const app = express();

// create a new pool for the database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'master',
  password: 'Ridzenebasketbal1',
  port: 5432,
});

app.get('/', (req, res) => {
  pool.query('SELECT * FROM master', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.listen(3000, () => {
  console.log('App running on port 3000.');
});
