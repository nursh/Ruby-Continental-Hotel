import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import randomize from 'randomatic';

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
})

app.listen(8080, () => {
  console.log(`App is running on port:8080`);
})