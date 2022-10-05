'use strict';

const client = require('socket-io-client');
const socket = client.connect('http://localhost:3002/family');

socket.emit('GETALL');


socket.on('CHORE', (payload) => {
  // console.log('this it the payload', payload);
  console.log('I have to do this chore.........I guess: ', payload.chore);
  socket.emit('RECEIVED', payload);
});
