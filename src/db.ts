import mysql from 'mysql';

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
})

export { connection };