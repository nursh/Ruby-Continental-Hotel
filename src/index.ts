import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import randomize from 'randomatic';
require('dotenv').config();
import { connection } from './db';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  const randomDigits = randomize('0', 4);
  const password = randomize('Aa0', 10);
  const employeeNo = `4000${randomDigits}`
  res.send({ employeeNo, password });
});

app.post('/login', (req, res) => {
  const { employeeNo, password } = req.body;
  connection.query({
    sql: 'SELECT * AS person FROM `employees` WHERE `employee_no` = ? AND `password` = ?',
    values: [employeeNo, password]
  }, function (error, results, fields) {
    if (error) console.error(error);
    console.log(results);
  });
  connection.end();
  res.send('Got em');
})

app.listen(8080, () => {
  console.log(`App is running on port:8080`);
})