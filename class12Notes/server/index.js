'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

// instance of a listening event server at http://localhost:3002
const server = new Server(PORT);


// now I can create a namespace
const brightness = server.of('/brightness');



// time to connect to server
server.on('connection', (socket) => {
  console.log('Socket connected to Event server!', socket.id);

  socket.on('MESSAGE', (payload) => {
    console.log('Server MESSAGE event', payload);
    // 3 different ways that I might emit - likely makes sense to do ONLY one
    // socket.emit('MESSGAE', payload); //sends to all parties in the socket
    // server.emit('MESSAGE', payload); //sending the message to all parties in the server
    socket.broadcast.emit('MESSAGE', payload); //send to all parties in socket EXCEPT the the sender
  });
  socket.on('RECEIVED', (payload) => {
    console.log('Server RECEIVED event', payload);
    socket.broadcast.emit('RECEIVED', payload);
  });


});


brightness.on('connection', (socket) => {
  console.log('Socket connected to brightness namespace!', socket.id);
  // how to join a room 
  socket.on('JOIN', (room) => {
    console.log(`You've joined the ${room} room!!`);
  });

  // subribe, emit and prove that it happened
  socket.on('SUNLIGHT', (payload) => {
    logEvent('SUNLIGHT',payload);
    brightness.emit('SUNLIGHT', payload);
  });
});

function logEvent( event, payload){
  const date = new Date();
  const time = date.toTimeString();
  console.log('EVENT', {event, time, payload});
}
