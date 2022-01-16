const express = require('express');
const fs = require('fs');
const handlebars = require('handlebars');

const app = express();
template = handlebars.compile(fs.readFileSync(`${__dirname}/index.html`, 'utf-8').toString());

app.get('/', function (_req, res) {
    res.send(template(JSON.parse(fs.readFileSync(`${__dirname}/dashboard.json`, 'utf-8'))));
});
app.get('*', (req, res) => {
    res.sendFile(__dirname + req.originalUrl);
});

var server = app.listen(process.env.PORT || 5000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

// Export the app for testing purposes
module.exports = {
    app
};