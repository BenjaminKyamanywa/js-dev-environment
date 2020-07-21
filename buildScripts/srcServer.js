const express = require('express');
const path = require('path');
const chalk = require('chalk');
const PORT = process.env.PORT || 3000;

const app = express();

// routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// port initialisaton
app.listen(PORT, (err) => {
  (err) ? console.log(err) :
    console.log(chalk.yellow(`App is listening on https://localhost:${PORT}`))
});




