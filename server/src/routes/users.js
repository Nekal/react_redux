const express = require('express');

const router = express.Router();

const user = require('../controllers/user');

router.post('/signup', (req, res) => {
  user.create(req.body.username, req.body.email, req.body.password, req.body.role)
    .then((newUser) => {
      res.send(newUser);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get('/signin', (req, res) => {
  user.findUser(req.query.username, req.query.password)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
