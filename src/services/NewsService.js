import { APIManager } from '../utils'

class NewsService {
    newsService = null

    constructor() {
        if (this.newsService === null) {
            this.newsService = this
        }
        return this.newsService
    }

    addNews = (params) => {
        return (
            APIManager
                .post('api/add', params)
                .then((response) => {
                    if(response.body.errors !== undefined) {
                        alert(response.body.errors[0].message)
                    } else {
                        return new Promise((resolve) => {resolve(response.body)})
                    }
                })
                .catch(err => {
                    console.log('ERROR: ' + JSON.stringify(err))
                })
            )
    }

    getAllNews = () => {
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

    getNews = (params) => {
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

    deleteNews = (params) => {
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

    editNews = (params) => {
        return (
            APIManager
                .post('api/editNews', params)
                .then((response) => {
                    if(response.body.errors !== undefined) {
                        alert(response.body.errors[0].message)
                    } else {
                        return new Promise((resolve) => {resolve(response.body)})
                    }
                })
            )
    }
}

export default NewsService


