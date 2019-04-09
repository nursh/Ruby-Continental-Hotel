import mysql from 'mysql';

const connection = mysql.createConnection({
  user: 'root',
  password: 'Bismillah01',
  database: 'ruby_continental'
})

connection.connect();
export { connection };
