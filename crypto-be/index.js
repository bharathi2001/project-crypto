const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const PORT = 3005;
let mongoClient = require("mongodb").MongoClient;
let dburl =
  "mongodb+srv://livestock_21:crypto@sandbox.vgwsp.mongodb.net/crypto?retryWrites=true&w=majority";
let db;

mongoClient.connect(dburl, function (err, client) {
  if (err) {
    console.log("error while connecting db", err);
  } else {
    db = client.db("crypto");
    console.log("connected to db");
  }
});
app.use(require('./routes/crypto_routes'));

app.listen(PORT, function (err, res) {
  if (err) throw err;
  console.log(`application started successfully and running on : ${PORT}`);
});
