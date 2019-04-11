import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import randomize from 'randomatic';
import './env';

import { connection } from './db';
import { hashPassword, checkPassword } from './utils/password';
import { generateToken } from './utils/jwt';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
  const randomDigits = randomize('0', 4);
  const password = randomize('Aa0', 10);
  const employeeNo = `4000${randomDigits}`
  res.send({ employeeNo, password });
});

app.post('/api/hash', (req, res) => {
  const { password } = req.body;
  const hash = hashPassword(password);
  res.send({ hash });
});

app.post('/api/login', (req, res) => {
  const { employeeNo, password } = req.body;

  connection.query({
    sql: 'SELECT * FROM `employees` WHERE `employee_no` = ?',
    values: [employeeNo]
  }, async function (error, results) {
    if (error) console.error(error);
    const passwordMatches = checkPassword(password, results[0].password);
    if (passwordMatches) {
      const tokenData = results[0];
      const token = await generateToken({
        employeeNo: tokenData.employee_no,
        role: tokenData.role
      });
      res.send({ token });
    }
  });
})

app.listen(8080, () => {
  console.log(`App is running on port:8080`);
})