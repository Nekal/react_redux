const express = require('express');

const router = express.Router();

const news = require('../controllers/news');

router.get('/news', (req, res) => {
  news.findById(req.query.id)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.delete('/news', (req, res) => {
  news.destroy(req.query.id)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.put('/news', (req, res) => {
  news.update(req.body.id, req.body.title, req.body.description)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get('/allnews', (req, res) => {
  news.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.post('/add', (req, res) => {
  news.create(req.body.title, req.body.description)
    .then((newNews) => {
      res.send(newNews);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
