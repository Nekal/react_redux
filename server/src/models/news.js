module.exports = (sequelize, Sequelize) => {
  const News = sequelize.define('news', {
    title: Sequelize.STRING,
    description: Sequelize.STRING
  });
  return News;
};
