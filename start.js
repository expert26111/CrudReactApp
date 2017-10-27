/**
 * Created by Yoana on 10/27/2017.
 */

var app = require('./app');
var db = require('./db');

db.connect(db.MODE_TEST, function(err) {
    if (err) {
        console.log('Unable to connect to MySQL.')
        process.exit(1)
    } else {
        app.listen(4000, function() {
            console.log('app listening...')
        })
    }
})