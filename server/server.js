var express = require('express');
var bodyParser = require('body-parser');

var app = express();

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('server/public'));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- DATABASE CONNECTION ---------- **/


/** ---------- EXPRESS ROUTES ---------- **/


/** ---------- START SERVER ---------- **/
var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log('Listening on port: ', port);
});
