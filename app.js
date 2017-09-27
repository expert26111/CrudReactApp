/**
 * Created by Yoana on 9/12/2017.
 */
var express = require('express');
var app = express();
var db = require('./db');
var router = require('./routes/stories');

var port = process.env.PORT || 3000

 app.use('/stories',router);

 app.use(express.static('./public'));

// app.get('http://e84c4736.ngrok.io/stories',function(req,res){
//
//
//             db_stories.getAll(function(err, stories){
//                 if(err)
//                 {
//                     response.status(500).json("Internal Server Error");
//                 }else
//                 {
//                     //console.log("THE STORIES ARE ",stories);
//                     response.status(200).json(stories);
//                 }
//             })
//
//
//             });




// db.connect(db.MODE_TEST, function(err) {
//     if (err) {
//         console.log('Unable to connect to MySQL.')
//         process.exit(1)
//     } else {
//         app.listen(4000, function() {
//             console.log('Listening on port 4000...')
//         })
//     }
// })

app.listen(port, function() {
            console.log('app listening...')
        })
