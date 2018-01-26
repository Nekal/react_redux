let express = require('express');
const router = express.Router();

let user = require('../controllers/user');

router.post('/signup', (req, res) => {
  user.create(req.body.username, req.body.email, req.body.password, req.body.role)
    .then((newUser) => {
      sendResult(res, newUser);
    })
    .catch((error) => {
      sendError(res, error);
    });
});

router.get('/signin', (req, res) => {
  user.findUser(req.query.username, req.query.password)
    .then((result) => {
      sendResult(res, result);
    })
    .catch((error) => {
      sendError(res, error);
    });
});

const sendResult = (res, result) => {
  res.send(result);
};

const sendError = (res, result) => {
  res.send(result);
};

module.exports = router;
