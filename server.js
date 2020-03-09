const express = require('exzpress');
const bodyParser = require('body-parser');

// ENV File
const PORT = process.env.PORT;
const routes = require('./routes');

// MIDDLEWARE----------
app.use(bodyParser.json());


// ROUTES--------------
app.get('/', (req, res) => {
  res.send('<h1>Welcome to BWR</h1>')
})

app.listen(PORT, () =>
  console.log(`Server connected at http://localhost:${PORT}`)
);