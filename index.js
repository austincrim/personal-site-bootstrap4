const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req, res) {
    let crypto = req.body.crypto;
    let currency = req.body.currency;
    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/" + crypto + currency, function(err, response, body) {
        res.send(body);
    });
    
});

app.listen(3000, function() {
    console.log('listening on 3000');
});