/**
 * Created by Yoana on 9/12/2017.
 */
var express = require('express');
var app = express();
var db = require('./db');
var router = require('./routes/stories');

app.use('/stories',router);

app.use(express.static('./public'));


db.connect(db.MODE_TEST, function(err) {
    if (err) {
        console.log('Unable to connect to MySQL.')
        process.exit(1)
    } else {
        app.listen(4000, function() {
            console.log('Listening on port 4000...')
        })
    }
})
