var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000;

  bodyParser = require('body-parser');

  // swagger:
  const swaggerUi = require('swagger-ui-express');
  
  const swaggerJsDoc=require('swagger-jsdoc');
  const swaggerDocument = require('./api/swagger/swagger.json');
  const swaggerDocs=swaggerJsDoc(swaggerDocument);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));  
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  var routes = require('./api/routes/mr_routes'); //importing route
  routes(app); //register the route
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(404).send({url: req.originalUrl + ' not found'})
    next();
  });
  
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

