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
	req.session.song = 'be bop a lula';
	res.status(200).send('session variable initialized !')
});

module.exports = router;
