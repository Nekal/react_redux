const User = require('../models/').user;

module.exports = {
  findUser(username, password) {
    return (
      User.findOne({
        where: {
          username,
          password
        }
      })
    );
  },
  create(username, email, password, role) {
    return (
      User.create({
        username, email, password, role
      })
    );
  }
};
