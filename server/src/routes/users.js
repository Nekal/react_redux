let express = require('express');
const router = express.Router();

let user = require('../controllers/user')

router.post('/signup', (req, res) => {
    user.create(req.body.username, req.body.email, req.body.password, req.body.role)
        .then(function(newUser){
            sendResult(res, newUser);
        })
        .catch(function(error){
            sendError(res, error);
        });
});

router.get('/signin', (req, res) => {
    user.findUser(req.query.username, req.query.password)
        .then(function(result){
            sendResult(res, result);
        })
        .catch(function(error){
            sendError(res, error);
        });
});

function sendResult(res, result) {
    res.send(result);
}

function sendError(res, result) {
    res.send(result);
}

module.exports = router