const { MongoClient } = require("mongodb");

const uri =
"mongodb://mhussainakhter:Shaddam%40123@ac-nmsw8zk-shard-00-00.78rwg7r.mongodb.net:27017,ac-nmsw8zk-shard-00-01.78rwg7r.mongodb.net:27017,ac-nmsw8zk-shard-00-02.78rwg7r.mongodb.net:27017/studentDB?ssl=true&replicaSet=atlas-4ljvmr-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Hussain";

const client = new MongoClient(uri);

let db;

async function connectDB() {
  try {
    await client.connect();

    console.log("✅ MongoDB Connected");

    db = client.db("studentDB");

  } catch (error) {
    console.log("❌ Database Connection Error");
    console.log(error);
  }
}

function getDB() {
  return db;
}

module.exports = {
  connectDB,
  getDB,
};