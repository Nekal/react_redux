var express = require('express');
var path = require('path')
var app = express();

app.set('port', (process.env.PORT || 3006));

app.use('/app', express.static(path.resolve(__dirname, '../../build/static')));
app.use(express.static(path.join(__dirname, '../../build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../build/index.html'));
})

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});