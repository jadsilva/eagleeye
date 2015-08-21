var express = require('express');
var router = express.Router();
var dam = require('../dam/record');

// CREATE
router.post('/', function(req, res) {
  var newRecord = req.body;
  dam.create(newRecord);
  res.json(newRecord._id);
});

// READ
router.get('/:id', function(req, res) {
  var record = dam.read(req.params.id);
  res.json(record);
});

// UPDATE
router.put('/:id', function(req, res) {
  var record = req.body;
  dam.update(req.params.id, record);
  res.status(200);
  res.end();
});

// DELETE
router.delete('/:id', function(req, res) {
  dam.delete(req.params.id);
  res.status(200);
  res.end();
});

// LIST
router.get('/', function(req, res) {
  res.json(dam.query());
});

module.exports = router;
