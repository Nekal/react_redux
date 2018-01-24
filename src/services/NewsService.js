import { APIManager } from '../utils'

export const AddNewsService = (params) => {
    APIManager
        .post('api/add', params)
        .then((response) => {
            if(response.body.errors !== undefined) {
                alert(response.body.errors[0].message)
            } else {
                window.location.href = "/"
            }
        })
        .catch(err => {
            console.log('ERROR: ' + JSON.stringify(err))
        })
}

export const GetAllNewsService = () => {
    return (
        APIManager
            .get('api/getAllNews')
            .then((response) => {
                if(response.body.errors !== undefined) {
                    alert(response.body.errors[0].message)
                } else {
                    return new Promise((resolve) => {resolve(response.body)})
                }
            })
    )
}

export const GetNewsService = (params) => {
    return (
        APIManager
            .get('api/getNews', params)
            .then((response) => {
                if(response.body.errors !== undefined) {
                    alert(response.body.errors[0].message)
                } else {
                    return new Promise((resolve) => {resolve(response.body)})
                }
            })
    )
}

export const deleteNewsService = (params) => {
    return (
        APIManager
            .delete('api/deleteNews', params)
            .then((response) => {
                if(response.body.errors !== undefined) {
                    alert(response.body.errors[0].message)
                } else {
                    return new Promise((resolve) => {resolve(response.body)})
                }
            })
    )
}

export const editNewsService = (params) => {
    APIManager
        .post('api/', params)
        .then((response) => {
            if(response.body.errors !== undefined) {
                alert(response.body.errors[0].message)
            } else {
                window.location.href = "/"
            }
        })
        .catch(err => {
            console.log('ERROR: ' + JSON.stringify(err))
        })
}

