User = require("../models/").user

module.exports = function(sequelize, Sequelize) {
    var News = sequelize.define('news', {
        title: Sequelize.STRING,
        description:  Sequelize.STRING,
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    });
    return News;
}