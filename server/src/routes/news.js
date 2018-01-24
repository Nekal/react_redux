let express = require('express');
const router = express.Router();

let news = require('../controllers/news')

router.get('/getNews', (req, res) => {
    news.findById(req.query.id)
        .then(function(result){
            sendResult(res, result);
        }).catch(function(error){
            sendError(res, error);
        });
});

router.delete('/deleteNews', (req, res) => {
    news.destroy(req.query.id)
        .then(function(result){
            sendResult(res, result);
        }).catch(function(error){
        sendError(res, error);
    });
});

router.post('/editNews', (req, res) => {
    news.update(req.body.id, req.body.title, req.body.description)
        .then(function(result){
            sendResult(res, result);
        }).catch(function(error){
        sendError(res, error);
    });
});

router.get('/getAllNews', (req, res) => {
    news.findAll()
        .then(function(result){
            sendResult(res, result);
        }).catch(function(error){
            sendError(res, error);
        });
});

router.post('/add', (req, res) => {
    news.create(req.body.title, req.body.description)
        .then(function(newNews){
            sendResult(res, newNews);
        })
        .catch(function(error){
            sendError(res, error);
        });
});

function sendResult(res, result){
    res.send(result);
}

function sendError(res, result){
    res.send(result);
}

module.exports = router