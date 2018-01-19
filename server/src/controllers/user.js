User = require("../models/").user

module.exports = {
    findUser(req, res){
        User.findAll({
            where: {
                username: req.query.username,
                password: req.query.password,
            }})
            .then(function(User){
            sendResult(res, User);
        }).catch(function(error){
            sendError(res, error);
        });
    },
    create(req, res){
        User.create(req.body)
            .then(function(newUser){
                sendResult(res, newUser);
            })
            .catch(function(error){
                sendError(res, error);
            });
    },
}

function sendResult(res, result){
    res.send(result);
}

function sendError(res, result){
    res.send(result);
}
