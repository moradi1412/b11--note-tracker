var express = require("express");
var path = require("path");
var fs = require("fs");
var notesdb = require("./db/db.json")

var app = express();
var PORT = process.env.PORT || 3003;


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
    writeDb(); 
  });


app.use(express.static("public"));

// HTML Routes
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

//function to write in db.json 
function writeDb() {
    fs.writeFile("db/db.json", JSON.stringify(notesdb), function (err) {
        if (err) {
            console.log("error")
            return console.log(err);
        }
        console.log("Success!");
    });
}; 



app.listen(3003, () => {
    console.log(`API server now on port 3003!`);
  });