let express = require('express');
const router = express.Router();

let user = require('../controllers/user')

router.post('/signup', (req, res) => {
    user.create(req, res)
});

router.get('/signin', (req, res) => {
    user.findUser(req, res)
});

module.exports = router