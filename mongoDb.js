const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoUrl = process.env.MONGO_URL;
console.log(mongoUrl);
const client = new MongoClient(mongoUrl);

module.exports = client;