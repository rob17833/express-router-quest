const express = require('express');
const posts = require('./posts.js');
const comments = require('./comments.js');
const tags = require('./tags.js');
const router = express.Router();

router.use('/tags', tags);
router.use('/posts', posts);
router.use('/comments', comments);

module.exports = router;