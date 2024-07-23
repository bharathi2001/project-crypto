var mongoClient = require("../config/db");
var db = mongoClient.db("crypto");

exports.getCryptoProducts = async (req, res) => {
  const { symbol } = req.params;
  if(symbol === "BTC"){
    db.collection("btc-collection").find().sort({ $natural: -1 }).limit(20).toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else{
        res.send(result);
      }
    });
  } else if(symbol === "DOGE"){
    db.collection("doge-collection").find().sort({ $natural: -1 }).limit(20).toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else{
        res.send(result);
      }
    });
  } else if(symbol === "ETH"){
    db.collection("eth-collection").find().sort({ $natural: -1 }).limit(20).toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else{
        res.send(result);
      }
    });
  } else if(symbol === "SOL"){
    db.collection("sol-collection").find().sort({ $natural: -1 }).limit(20).toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else{
        res.send(result);
      }
    });
  } else if(symbol === "BNB"){
    db.collection("bnb-collection").find().sort({ $natural: -1 }).limit(20).toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else{
        res.send(result);
      }
    });
  } 
};

exports.postCryptoProducts = async (req, res) => {
  try {
    const cryptoData = req.body;

    // Check if cryptoData is empty
    if (cryptoData.length === 0) {
      throw new Error("No data to insert.");
    }

    // Initialize collections
    const collections = {
      btc: db.collection("btc-collection"),
      doge: db.collection("doge-collection"),
      eth: db.collection("eth-collection"),
      sol: db.collection("sol-collection"),
      bnb: db.collection("bnb-collection")
    };

    // Insert data for each currency
    for (const currency in collections) {
      // await collections[currency].deleteMany({});
      await collections[currency].insertMany(cryptoData.filter(obj => obj.code === currency.toUpperCase()));
    }

    res.send("Data successfully inserted");
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Failed to insert data" });
  }
}