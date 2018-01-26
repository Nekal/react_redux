// import request from 'superagent'

const users = (state = [], action) => {
  switch (action.type) {
    case 'SIGN_UP':
      // request.post('/api/signup')
      //     .query({username: action.username,
      //             email: action.email,
      //             password: action.password})
      //     .then(function(res) {
      //         alert(JSON.stringify(res.text));
      //     });

      return [
        ...state,
        {
          username: action.username,
          email: action.email,
          passwod: action.passwod
        }
      ];
    default:
      return state;
  }
};

export default users;
