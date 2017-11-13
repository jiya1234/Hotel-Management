var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
 Authentication= require('./models/authentication.js');
 var cors = require('cors')
 cors({ credentials: true, origin: true })
 app.use(cors())
 // Parsers for POST data
 app.use(bodyParser.json(), function (err, req, res, next) {
     if (err) {
         return res.status(500).json({ error: err });
     }
     next();
 });
 app.use(bodyParser.urlencoded({ extended: false }));
 // connect database to mongoose
 mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://jiyakhan:jumbo1234@ds259325.mlab.com:59325/javeriamuneeba', {
     useMongoClient: true
     /* other options */
 });
 app.post('/api/authentication', function (request, response) {
    response.header('Access-Control-Allow-Origin', "*");
    var data = {
        username: request.body.username,
        password: request.body.password
    };
    var AuthData = new Authentication({ username: request.body.username, password: request.body.password, type: request.body.type });
    AuthData.save(function (err, getData) {
        if (!err) {
            console.log("data", getData)
            return response.status(200).send(getData);
        } else {
            console.log("Err", err)
            return response.status(500).send(err);
        }
    })
})
app.post('/api/login', function (request, response) {
    Authentication.findOne({ username: request.body.username }, function (err, username) {
        if (err) {
            console.log("username err", err)
            return response.status(500).send(err)
            // return err
        }
        if (!username) {
            console.log("username 404 err")
            return response.status(404).send()
        }

            Authentication.findOne({ password: request.body.password }, function (err, password) {
                if (err) {
                    console.log("password", err)
                    return response.status(500).send(err)
                }
                if (!password) {
                    return response.status(404).send()
                }
                console.log("password", password)
                return response.status(200).send(password)
            })
    });
});
//create get request to mlab from server
app.get('/getData', function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    Authentication.find(function (err, data) {
        if (!err) {
            console.log("data", data)
            res.send(data)
        } else {
            console.log("Err", err)
            res.send(err)
        }
    });
})
// When successfully connected
mongoose.connection.on('connected to mongodb', function () {
    console.log('Mongoose default connection open to ');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});
var port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log("Server run on port " + port)
});