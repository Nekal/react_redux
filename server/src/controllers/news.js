News = require("../models/").news

module.exports = {
    findAll(){
        return (
            News.findAll()
        )
    },
    findById(id){
        return (
            News.findById(id)
        )
    },
    create(title, description){
        return(
            News.create({title, description})
        )
    },
    destroy(id){
        return(
            News.destroy({
                where: {
                    id: id
                }
            })
        )
    },

    update(id, title, description){
        return(
            News.update({title, description}, {
                title,
                description,
                where: {
                    id: id
                }
            })
        )
    },
}


