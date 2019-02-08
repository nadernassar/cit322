
var express = require("express");
var app = express();
//var port = 8080;
var port = process.env.PORT
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));
var io = require('socket.io').listen(app.listen(port));
console.log("Listening on port " + port);
console.log("NNNN CLIENT step -1");
app.get("/", function(req, res){

    res.render("page");
});
console.log("NNNN CLIENT step -2");
console.log("HERE PRE SOCKET ");
io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chatoo1' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});
