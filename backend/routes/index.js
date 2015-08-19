var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TEste OK' });
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.end('Teste ok\n');
});

/* PROPFIND */
router.propfind('/', function(req, res, next) {
  //res.render('index', { title: 'PROPFIND METHOD ROUTED' });
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('PROPFIND METHOD ROUTED\n');
});

module.exports = router;
