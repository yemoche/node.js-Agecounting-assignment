const bodyParser = require("body-parser")
const rateLimit = require("express-rate-limit");
const path = require('path')

module.exports = (app) => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended:false}));
  
  
  //setting up ejs template
  app.set('view engine', 'ejs');
  app.set('views',path.join(__dirname, '../app'))

  //adding a rate limiter to limit DOS attack
    app.use(rateLimit({
        windowMs: 20 * 60 * 1000, // 20 minute
        max: 200 // limit each IP to 200 requests per windowMs
      }))

    //app.use(limiter)
      
};