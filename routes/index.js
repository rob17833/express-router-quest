const express = require('express');
const posts = require('./posts.js');
const comments = require('./comments.js');

const router = express.Router();

router.use('/posts', posts);
router.use('/comments', comments);

module.exports = router;