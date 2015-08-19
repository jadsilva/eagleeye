var db = require('json_file_system');
var debug = require('debug')('dam/record');

connect = function () {
  return db.connect('/tmp', ['record']);
}

exports.create = function (record) {
  db = connect();
  db.record.save(record);
  debug('new record: %s', JSON.stringify(record));
};

exports.read = function (id) {
  connect();
  var query = {_id: id};
  var record = db.record.findOne(query);
  debug('read: %s -> %s', JSON.stringify(query), JSON.stringify(record));
  return record;
};

//TODO bug jsonfs com "/tmp"
exports.update = function (id, record) {
  connect();
  var query = {_id: id};
  var options = {multi: false, upsert: false};
  var result = db.record.update(query, record, options);
  debug('update: %s -> %s', JSON.stringify(result), JSON.stringify(record));
};

exports.delete = function (id) {
  connect();
  var query = {_id: id};
  db.record.remove(query);
  debug('delete: query: %s', JSON.stringify(query));
};

exports.query = function () {
  connect();
  var records = db.record.find();
  debug('query all');
  return records.filter(function (record) {
    return record !== undefined;
  });
};
