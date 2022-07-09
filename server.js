// require express 
const express = require("express");
// you have to write it -> app signifies -> your server  
const app = express();
// get karna hai data from sayhello
app.get("/sayhello", function (req, res) {
    // frontend 
    res.end("Hello from server");
})
// get karna hai data from saybye
app.get("/saybye", function (req, res) {
    // frontend
    res.send("Bye");
})
//  3000 -> address of a  server -> on a given machine 
app.listen(3000, function () {
    console.log("server started at port 3000");
})
// console.log("Hello");

// routes to enter In browser : http://localhost:3000/saybye  -> will get Hello on browser
// routes to enter In browser : http://localhost:3000/sayhello -> Will get Bye on browser
