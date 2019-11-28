const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    //console.log('a user connected');
    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
    });
});

http.listen(8080, function(){
    console.log('listening on 8080');
});