User = require("../models/").user

module.exports = function(sequelize, Sequelize) {
    var News = sequelize.define('news', {
        title: Sequelize.STRING,
        description:  Sequelize.STRING,
    });
    return News;
}