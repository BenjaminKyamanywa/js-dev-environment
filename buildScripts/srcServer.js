const express = require('express');
const path = require('path');
const open = require('open');
const PORT = process.env.PORT || 3000;

const app = express();

// routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// port initialisaton
app.listen(PORT, (err) => {
  err ? console.log(err)
    : open('https://localhost:' + PORT)
} )
