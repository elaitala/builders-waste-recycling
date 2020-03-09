const express = require('express');
const bodyParser = require('body-parser');

// ENV File
require('dotenv').config();
const PORT = process.env.PORT;
const routes = require('./routes');

// MIDDLEWARE----------
app.use(bodyParser.json());


// ROUTES--------------
app.get('/', (req, res) => {
  res.send('<h1>Welcome to BWR</h1>')
})

app.use('/api/v1/:user', (req, res) => {
  res.send('<h1>This is the USER PROFILE</h1>')
})




app.listen(PORT, () =>
  console.log(`Server connected at http://localhost:${PORT}`)
);