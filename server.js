var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require("./routes");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

<<<<<<< HEAD
app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/social-interactions/index.html'));
=======
app.use(express.static(path.join(__dirname, 'dist')));

app.use("/api",routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/group.html'));
>>>>>>> bc4c6dbb6f05e1fc558f1ae83c27f5dd7cf4285a
});

// Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

module.exports = app;