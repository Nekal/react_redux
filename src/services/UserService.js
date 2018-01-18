import { APIManager } from '../utils'

const SignUpService = (params) => {
    APIManager
        .post('api/signup', params)
        .then(response => {
            console.log("OK: " + response)
        })
        .catch((err) => {
            console.log('ERROR ' + err)
        })
}

export default SignUpService