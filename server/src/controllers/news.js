News = require("../models/").news

module.exports = {
    findAll(){
        return (
            News.findAll()
        )
    },
    findById(id){
        return (
            News.findById({
                where: {
                    id: id,
                }})
        )
    },
    create(title, description){
        return(
            News.create({title, description})
        )
    },
}


