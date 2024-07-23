var MongoClient = require('mongodb').MongoClient;

let dbUrl =
  "mongodb+srv://livestock_21:crypto@sandbox.vgwsp.mongodb.net/cheers?retryWrites=true&w=majority";

var mongoClient = new MongoClient(dbUrl);

module.exports = mongoClient;