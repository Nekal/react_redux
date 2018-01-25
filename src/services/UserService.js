import { APIManager } from '../utils'

class UserService {
    userService = null

    constructor() {
        if (this.userService === null) {
            this.userService = this
        }
        return this.userService
    }

    signUp = (params) => {
        APIManager
            .post('api/signup', params)
            .then((response) => {
                if(response.body.errors !== undefined) {
                    alert(response.body.errors[0].message)
                } else {
                    window.location.href = '/signin'
                }
            })
            .catch(err => {
                console.log('ERROR: ' + JSON.stringify(err))
            })
    };

    signIn = (params) => {
        APIManager
            .get('api/signin', params)
            .then((response) => {
                if(response.body !== null) {
                    window.localStorage.setItem('USER_DATA', JSON.stringify(response.body));
                    window.location.href = '/'
                } else {
                    alert('Username or password dont match')
                }
            })
            .catch(err => {
                console.log('ERROR: ' + JSON.stringify(err))
            })
    };

    static getUserData = () => {
        let user = JSON.parse(window.localStorage.getItem('USER_DATA'))
        if(user) {
            return user
        } else {
            return null
        }
    }
}

export default UserService

