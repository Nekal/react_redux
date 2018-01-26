const sequelize_fixtures = require('sequelize-fixtures');

const path = require('path');
const models = require('../models/');
const admin = require('../seeders/admin.js');

sequelize_fixtures.loadFiles([admin], models).then(() => {
  console.log('Seed data loaded!');
});
