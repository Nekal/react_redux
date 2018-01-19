User = require("../models/").user

module.exports = function(sequelize, Sequelize) {
    var News = sequelize.define('news', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
    });
    return News;
}