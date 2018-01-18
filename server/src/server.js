var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const userRoutes = require('./routes/users');
app.use('/api', userRoutes);

app.use('/app', express.static(path.resolve(__dirname, '../../build/')));
app.use(express.static(path.resolve(__dirname, '../../build/')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../build/index.html'));
})

app.get('*', (req, res) => {
    res.send('Sorry, page not found!');
});

app.set('port', 3100);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});