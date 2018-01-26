const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('*/api', require('./routes/users'));
app.use('*/api', require('./routes/news'));

app.use('/app/:id', express.static(path.resolve(__dirname, '../../build/')));
app.use(express.static(path.resolve(__dirname, '../../build/')));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../build/index.html'));
});

app.set('port', 8000);

const models = require('./models');

models.sequelize.sync()
  .then(() => {
    console.log('Nice! Database looks fine');
  })
  .catch((err) => {
    console.log(err, 'Something went wrong with the Database Update!');
  });

require('./seeders/admin')();

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
