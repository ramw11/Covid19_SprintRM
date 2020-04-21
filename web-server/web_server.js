let redis = require('redis'),
clientRedis = redis.createClient({
    port: 6379,               // replace with your port
    host: 'cv19redis-001.d9jy7a.0001.euw1.cache.amazonaws.com'
});

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


  function getLastKnown(req,res){
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

function getLastUpdate(req,res){
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