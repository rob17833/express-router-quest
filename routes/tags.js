// step 1 : need express
const express = require('express');
// step 2 : import tags 
const fakeTags = require('../data/tags.json');
// bonus
const posts = require('../data/posts.json');
// step 3 : need new router
const router = express.Router();

// Get a list of posts ROUTE from index.js !
router.get('/', (req, res) => {
  res.json(fakeTags);
});

router.get('/:tagId/posts', (req, res)=>{
	const tagId = req.params.tagId;
	res.json(posts.filter(item=>item.tag_ids.toLowerCase().includes(tagId.toLowerCase().toString())));
})

// ***BONUS***
// note that you can use both upperCase or lowerCase params for the tag, the route 
// will works... but the hyphen is required
// I let you fix that ;)

module.exports = router;