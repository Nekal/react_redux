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
let user = require('../controllers/user');

module.exports = () => {
  user.create('admin', 'admin@test.com', 'admin', 'admin')
    .then((newUser) => {

    })
    .catch((error) => {
      // console.log("Error in admin");
    });
};
