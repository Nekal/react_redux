import { APIManager } from '../utils'

export const SignUpService = (params) => {
    APIManager
        .post('api/signup', params)
        .then((response) => {
            if(response.body.errors !== undefined) {
                alert(response.body.errors[0].message)
            } else {
                window.location.href = "/signin"
            }
        })
        .catch(err => {
            console.log('ERROR: ' + JSON.stringify(err))
        })
}

export const SignInService = (params) => {
    APIManager
        .get('api/signin', params)
        .then((response) => {
            if(response.isEmpty()) {
                // window.location.href = "/"
            } else {
                alert("Username or password don't match")
            }
        })
        .catch(err => {
            console.log('ERROR: ' + JSON.stringify(err))
        })
}
