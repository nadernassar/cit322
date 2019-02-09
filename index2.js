
var express = require("express");
var app = express();
var PORT = process.env.PORT ;
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));
var io = require('socket.io').listen(app.listen(PORT));
console.log("NNN Listening on port " + PORT);
   
app.get("/", function(req, res){

    res.render("page");
});
io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});
