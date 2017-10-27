/**
 * Created by Yoana on 10/20/2017.
 */

var app = require('.././app');
var express = require('express');
var db_stories = require('../db_users');
var router = express.Router();
//var babelregister  = require('babel-register')({stage: 1});
var jwt    = require('jsonwebtoken');
var config = require('.././config'); // get our config file
// var port = process.env.PORT || 3000



var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

router.route('/')
    .get(function(request,response){
        db_stories.getAllUsers(function(err, users){
            if(err)
            {
                response.status(500).json("Internal Server Error");
            }else
            {
                //console.log("THE STORIES ARE ",stories);
                response.status(200).json(users);
            }
        })
    })
    .post(parseUrlencoded, function (request,response)
    {
        console.log("THE BODY IS ",request.body.name);
        db_stories.getUserByName(request.body.name, function(err, user)
        {
                console.log("the name is "+request.body.name);
                if(err)
                {
                    console.log("error");
                    console.log(err);
                    response.status(500).json("Internal Server Error");
                }else
                {
                    if(!user)
                    {
                        response.json({ success: false, message: 'Authentication failed. User not found.' });
                    }else if(user)
                    {
                        if(user[0].password != req.body.password)
                        {
                            response.json({ success: false, message: 'Authentication failed. Wrong password.' });
                        }else
                        {
                            const payload =
                                {
                                admin: user.admin
                                };

                            var token = jwt.sign(payload, app.get('superSecret'), {
                                expiresInMinutes: 1440 // expires in 24 hours
                            });

                            // return the information including token as JSON
                            response.json({
                                success: true,
                                message: 'Enjoy your token!',
                                token: token
                            });

                        }
                        // console.log("the empty info ",info);
                        // response.status(201).json(info);

                    }
                }

        });
    });

module.exports = router;