const user = require('../controllers/user');

module.exports = () => {
  user.create('admin', 'admin@test.com', 'admin', '12345')
    .catch(() => {});
};
