const {Pool} = require('pg')
require('dotenv').config();
const pool = new Pool({

    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: String(process.env.PGPASSWORD),
    port: process.env.PGPORT,
  });

  pool.connect(()=> {
    console.log("connect");
  });

  module.exports = {pool};