var express = require("express");
var app = express();

// change port!!
var myPort = 2160; 


// if no path is given, serv html from views dir
app.use(express.static(__dirname + '/views'));


// "/process" path listener
app.get("/process", function (req, res) {
    res.send("processing...<a href='/'>Back</a>");
});

// "/output" path listener
app.get("/output", function (req, res) {
    res.send("This is output...<a href='/'>Back</a>");
});

// bind this app to a port and begin to listen on the wire
var port = process.env.PORT || myPort
app.listen(port, function () {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});


