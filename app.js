var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4200;
var cors = require('cors');

// Monogoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/MERNSTACK')
    .then(() => {//if all is ok we will be here
      console.log('start');
    })
    .catch(err => { // if error we will be here
            console.error('App starting error :', err.stack);
            process.exit(1);
    });
//require application specific custom router module
var itemRouter = require('./src/routes/itemRoutes');

//use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extentded: true}));
app.use(bodyParser.json());

app.use('/items',itemRouter);

//Start the server
app.listen(port, function(){
  console.log('Server is running on port: ',port);
});
