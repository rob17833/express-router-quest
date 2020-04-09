const express = require('express');
const api = require('./routes/');
const app = express();
const port = 8000;

// this code to set up session before the routes

app.use('/api', api);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
