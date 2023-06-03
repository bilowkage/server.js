const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
  console.log('A user connected.');

  // Handle event to add a video to the playlist
  socket.on('addVideo', function(videoUrl) {
    io.emit('addVideo', videoUrl);
  });

  // Handle event to play a video
  socket.on('playVideo', function(videoUrl) {
    io.emit('playVideo', videoUrl);
  });

  socket.on('disconnect', function() {
    console.log('A user disconnected.');
  });
});

server.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});
