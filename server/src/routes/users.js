var express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
        console.log(req.body)
        res.send({message: 'success'})
    }
);

module.exports = router