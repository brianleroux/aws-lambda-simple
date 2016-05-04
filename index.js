var validate = require('@smallwins/validate')
var lambda = require('@smallwins/lambda')

function valid(event, callback) {
  var schema = {}
  validate(event, schema, callback)
}

function fn(event, callback) {
  // callback(Error('name failed'))
  callback(null, {ok:true})
}

exports.handler = lambda(valid, fn)
    