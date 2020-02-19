const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/../build/'));
app.get('/', (req, res) => res.sendFile(__dirname + '/build/index.html'));

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('message', message => {
    io.emit('message', message);
    console.log(`${message.nick}: ${message.text}`);
  });
});

http.listen(5000, () => console.log('listening on *:5000'));
