const { MongoClient } = require("mongodb");

const uri =
"mongodb+srv://mhussainakhter:hussain123@hussain.78rwg7r.mongodb.net/studentDB?retryWrites=true&w=majority";

const client = new MongoClient(uri);

let db = null;

async function connectDB() {

  try {

    if (db) return db;

    await client.connect();

    console.log("✅ MongoDB Connected");

    db = client.db("studentDB");

    return db;

  } catch (error) {

    console.log(error);

    throw error;

  }

}

async function getDB() {

  if (!db) {
    db = await connectDB();
  }

  return db;
}

module.exports = {
  connectDB,
  getDB,
};