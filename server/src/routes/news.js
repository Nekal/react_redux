let express = require('express');
const router = express.Router();

let news = require('../controllers/news');

router.get('/news', (req, res) => {
  news.findById(req.query.id)
    .then((result) => {
      sendResult(res, result);
    })
    .catch((error) => {
      sendError(res, error);
    });
});

router.delete('/news', (req, res) => {
  news.destroy(req.query.id)
    .then((result) => {
      sendResult(res, result);
    })
    .catch((error) => {
      sendError(res, error);
    });
});

router.put('/news', (req, res) => {
  news.update(req.body.id, req.body.title, req.body.description)
    .then((result) => {
      sendResult(res, result);
    })
    .catch((error) => {
      sendError(res, error);
    });
});

router.get('/allnews', (req, res) => {
  news.findAll()
    .then((result) => {
      sendResult(res, result);
    })
    .catch((error) => {
      sendError(res, error);
    });
});

router.post('/add', (req, res) => {
  news.create(req.body.title, req.body.description)
    .then((newNews) => {
      sendResult(res, newNews);
    })
    .catch((error) => {
      sendError(res, error);
    });
});

sendResult = (res, result) => {
  res.send(result);
};

sendError = (res, result) => {
  res.send(result);
};

module.exports = router;
