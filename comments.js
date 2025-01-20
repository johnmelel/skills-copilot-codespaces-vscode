//Create web server
const express = require('express');
const app = express();
//create server
const http = require('http');
const server = http.createServer(app);
//create socket.io
const socketIo = require('socket.io');
const io = socketIo(server);
//create array for comments
let comments = [];
//create event for connection
io.on('connection', (socket) => {
  //send comments to client
  socket.emit('comments', comments);
  //receive comments from client
  socket.on('comment', (comment) => {
    comments.push(comment);
    io.emit('comments', comments);
  });
});
//listen port
server.listen(3000, () => {
  console.log('Server running');
});