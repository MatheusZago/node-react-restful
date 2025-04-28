const express = require('express');
const db = require('./database')
const userRoute = require('./routes/user-routes')

const app = express();
const PORT = 3000;

app.use(express.json()) 

app.get('/', (req, res) => {
  res.send('The server is working!');
});

app.use('/users', userRoute);

app.listen(PORT, () => {
  console.log("The server is running in the port " + PORT);
});