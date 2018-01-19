import { APIManager } from '../utils'

export const AddNewsService = (params) => {
    console.log(params)
    APIManager
        .post('api/add', params)
        .then((response) => {
            if(response.body.errors !== undefined) {
                alert(response.body.errors[0].message)
            } else {
                window.location.href = "/" + response.body.id
            }
        })
        .catch(err => {
            console.log('ERROR: ' + JSON.stringify(err))
        })
}

export const GetAllNewsService = () => {
    APIManager
        .get('api/getAllNews')
        .then((response) => {
            if(response.body.errors !== undefined) {
                alert(response.body.errors[0].message)
            } else {
              return response.body
            }
        })
        .catch(err => {
            console.log('ERROR: ' + JSON.stringify(err))
        })
}

