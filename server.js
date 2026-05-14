const express = require("express");
const path = require("path");

const { connectDB, getDB } = require("./database");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {

  try {

    const db = getDB();

    if (!db) {
      return res.send("Database not connected");
    }

    const students = await db
      .collection("students")
      .find()
      .toArray();

    res.render("index", {
      students,
    });

  } catch (error) {

    console.log(error);

    res.send(error.message);

  }

});

app.post("/add-student", async (req, res) => {

  try {

    const db = getDB();

    const { name, age, rollnumber, image } = req.body;

    await db.collection("students").insertOne({
      name,
      age,
      rollnumber,
      image,
    });

    res.redirect("/");

  } catch (error) {

    console.log(error);

    res.send(error.message);

  }

});

(async () => {
  await connectDB();
})();

module.exports = app;