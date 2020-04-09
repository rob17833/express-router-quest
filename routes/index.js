const express = require('express');
const posts = require('./posts.js');
const comments = require('./comments.js');
const sessionIn = require('./session-in.js');
const sessionOut = require('./session-out.js');

const router = express.Router();

router.use('/posts', posts);
router.use('/comments', comments);
router.use('/session-in', sessionIn);
router.use('/session-out', sessionOut);

module.exports = router;