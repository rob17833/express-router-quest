const express = require('express');
const router = express.Router();
const session = require('express-session');
const FileStore = require('session-file-store')(session);

router.use(session({
    store: new FileStore(),
    secret: 'Super Secret !',
    resave: true,
    saveUninitialized: true,
    name : 'sessionId'
}));

router.get('/', function (req, res) {
	res.send(req.session.song);
});

module.exports = router;