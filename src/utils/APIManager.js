import superagent from 'superagent'
import Promise from 'bluebird'

export default {
    get(url, params) {
        return new Promise((resolve, reject) => {
            superagent
                .get(url)
                .query(params)
                .set('Accept', 'application/json')
                .end((response) => {
                    if (response.status !== 200){
                        reject({message: response.message})
                        return
                    }
                    resolve(response)
                })
            })
    },

    post (url, params) {
        return new Promise((resolve, reject) => {
            superagent
                .post(url)
                .send(params)
                .set('Accept', 'application/json')
                .then((response) => {
                    if (response.status !== 200){
                        alert(JSON.stringify(response))
                        reject({message: response.message})
                        return
                    }
                    resolve(response)
                })
        })
    }
}
