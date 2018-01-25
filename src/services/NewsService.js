import { APIManager } from '../utils'

class NewsService {

    constructor() {
        if (this.newsService === null) {
            this.newsService = this
        }
        return this.newsService
    }

    addNews = (params) => {
        return (
            APIManager
                .post('/api/add', params)
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
    };

    getAllNews = () => {
        return (
            APIManager
                .get('/api/allnews')
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
    };

    getNews = (params) => {
        return (
            APIManager
                .get('/api/news', params)
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
    };

    deleteNews = (params) => {
        return (
            APIManager
                .delete('/api/news', params)
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
    };

    editNews = (params) => {
        return (
            APIManager
                .put('/api/news', params)
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
}

export default NewsService


