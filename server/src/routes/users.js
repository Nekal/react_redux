var express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
        console.log(req.query)
    }
);

module.exports = router