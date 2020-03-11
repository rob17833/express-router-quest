// TOTAL= 4 LINES OF CODE
// step 1 : do I need express? yes >>>require...
const express = require('express');
// step 2 : do I need a router? yes >>> create Router...
const router = express.Router();
// step 3 : do I need the posts? yes! >>> cut/past from
// index.js ! (don't forget to update the path)
const fakePosts = require('../data/posts');
// do I need a route? >>> well it's just the purpose of 
// WHY I WANT TO CREATE A ROUTER... TO CLEAN INDEX.JS FROM ALL ITS ROUTES !!!
// >>> cut and past the route from index.js to ... here...

// NOW AS WE USE A ROUTER>>> LET'S USE IT ...

// Get a list of posts ROUTE from index.js !
router.get('/', (req, res) => {
  res.json(fakePosts);
});


// Get a single post:
router.get('/:id', (req, res) => {
  // Find the post in the array that has the id given by req.params.id
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const postId = Number(req.params.id);
  const foundPost = fakePosts.find((post) => post.id === postId);
  if (!foundPost) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }
  return res.json(foundPost);
});

module.exports = router;


