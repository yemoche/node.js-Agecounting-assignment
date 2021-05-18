const express = require('express');
const routes = require('./routes');
// const bodyParser = require("body-parser")
// const multer = require("multer");
const middleware = require('./middleware');
const mongoose = require('mongoose');
require('dotenv').config();
const configs = require('./configs/configs');

//require('./models/sequelize');
 
//const upload = multer();

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// TODO organised the middleware to have its own file. Just like the route .


// TODO add a rate limiter to this application 

middleware(app)
routes(app);

 //connecting to Database
 mongoose.connect(configs.mongodbURI,{
           useNewUrlParser: true,
           useUnifiedTopology: true
          })
           .then(() => {
            console.log(`Awesome we are connected to our DB!`);
          })
          .catch((err) => {
            console.log('oops fail to connect to db', err.message);
           });



const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
