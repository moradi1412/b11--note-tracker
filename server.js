var express = require("express");
var path = require("path");
var fs = require("fs");
var notesdb = require("./db/db.json")

var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


  app.get('/', (req, res) => {
    res.send(notesdb);
  });


//   app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "public/index.html"));
// });


app.listen(3003, () => {
    console.log(`API server now on port 3003!`);
  });