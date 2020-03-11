// step 1 : need express
const express = require('express');
// step 2 : import tags 
const fakeTags = require('../data/tags.json');
// step 3 : need new router
const router = express.Router();

// Get a list of posts ROUTE from index.js !
router.get('/', (req, res) => {
  res.json(fakeTags);
});

module.exports = router;