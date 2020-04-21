var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  console.log(`${__dirname}/covid19UI/`);
  app.use(express.static(`${__dirname}/covid19UI`));
  app.route('/getLastKnown').get(getLastKnown);
  app.route('/getLastUpdate').get(getLastUpdate);
  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
  
  app.listen(port);
  console.log(`GUI's available on port ${port}`);


  exports.getLastKnown= async function (req,res){
    clientRedis.hgetall("LastKnown", function (err, obj) {
        if(err){
            console.log(err);
        }else{
            //res.send(obj[Object.keys(obj)[0]]);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(obj)
            res.end();
        }    
     });
}

exports.getLastUpdate= async function (req,res){
    clientRedis.hgetall("last_update", function (err, obj) {
        if(err){
            console.log(err);
        }else{
            // res.send(obj[Object.keys(obj)[0]]);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send(obj)
            res.end();
        }    
     });
}