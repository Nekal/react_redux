// module.exports = [
//     {
//         "model": "user",
//         "data": {
//             "username": "admin",
//             "email": "admin@test.com",
//             "password": "admin",
//             "role": "admin",
//         }
//     }
// ]
const user = require('../controllers/user');

module.exports = () => {
  user.create('admin', 'admin@test.com', 'admin', 'admin');
};
