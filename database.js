const { MongoClient } = require("mongodb");

const uri ="mongodb+srv://mhussainakhter:Hussain123@hussain.78rwg7r.mongodb.net/studentDB?retryWrites=true&w=majority";
const client = new MongoClient(uri);

let db;

async function connectDB() {

  if (db) return db;

  try {

    await client.connect();

    console.log("✅ MongoDB Connected");

    db = client.db("studentDB");

    return db;

  } catch (error) {

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