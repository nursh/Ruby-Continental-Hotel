import express from 'express';


const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Working now'})
})

app.listen(8080, () => {
  console.log(`App is running on port:8080`);
})