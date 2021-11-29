var express = require("express");
var path = require("path");
var fs = require("fs");
var notesdb = require("./db/db.json")

var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

currentNote = notesdb.length; 

// Routes
app.get('/api/notes', (req, res) => {
    res.send(notesdb);
  });


app.post('/api/notes', (req, res) => {
    var nNotes = req.body; 
    nNotes['id'] = currentNote + 1; 
    currentNote++; 
    console.log(nNotes); 
    notesdb.push(nNotes); 
  });


//   app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "public/index.html"));
// });


app.listen(3003, () => {
    console.log(`API server now on port 3003!`);
  });