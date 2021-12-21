var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000, () => {
    console.log(`listening port 3000`);
});


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://minigame:GRsWVNPBSDHEEXXV@cluster0.h9fvv.mongodb.net/minigame?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, function(err){
    if(err){
        console.log(`mongo connected error ${err}`);
    }else{
        console.log(`mongo connected`);
    }
})

//minigame: oHw6Ml3E6jv5O1vj

require("./controllers/game")(app);