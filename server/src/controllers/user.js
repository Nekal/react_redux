User = require('../models/').user;

module.exports = {
    findUser (username, password) {
        return (
            User.findOne({
                where: {
                    username: username,
                    password: password
                }})
        );
    },
    create (username, email, password, role) {
        return (
            User.create({username, email, password, role})
        );
    }
};
