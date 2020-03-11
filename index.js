const express = require('express');
const comments = require('./routes/comments.js');
const posts = require('./routes/posts.js');
const app = express();
const port = 8000;





app.use('/api/posts', posts);
app.use('/api/comments', comments);
app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
