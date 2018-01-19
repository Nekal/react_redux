var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var env = require('dotenv').load();
var http = require('http');
var path = require('path')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoutes = require('./routes/users');
app.use('/api', userRoutes);

app.use('/app', express.static(path.resolve(__dirname, '../../build/')));
app.use(express.static(path.resolve(__dirname, '../../build/')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../build/index.html'));
})

app.set('port', 3101);

var models = require("./models");

//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});