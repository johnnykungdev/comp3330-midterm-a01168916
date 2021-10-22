const { MongoClient } = require("mongodb");
require("dotenv").config();
let mongoUrl;
if (process.env.IN_DEV) {
   
    mongoUrl = process.env.MONGO_URL;
} else {
    mongoUrl = process.env.MONGO_URL;
}

console.log(mongoUrl);
const client = new MongoClient(mongoUrl);

module.exports = client;