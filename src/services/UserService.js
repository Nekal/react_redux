import { APIManager } from '../utils'

const SignUpService = (params) => {
    APIManager
        .post('api/signup', params)
        .then((response) => {
            console.log("OK: " + JSON.stringify(response))
        })
        .catch(err => {
            console.log('ERROR: ' + JSON.stringify(err))
        })
}

export default SignUpService