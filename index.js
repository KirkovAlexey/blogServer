var express = require('express');
var application = express();
var cors = require('cors');

var elements = require('./data').elements;

application.use(cors());

application.get('/', function(req, res) {
  res.json(elements);
});

application.get('/posts/:id', function(req, res) {
  var id = req.params.id;
  var element = elements.filter(function(o) { return o.id == id; })[0];
  res.json(element);
});

application.listen(3001, function(){
  console.log('Server on 3001');
});
