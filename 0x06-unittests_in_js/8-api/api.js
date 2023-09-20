const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

const port = 7865;

app.listen(port, 'localhost', () => {
  console.log(`API avalilable on localhost port ${port}`);
});

module.exports = app;
