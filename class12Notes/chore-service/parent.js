'use strict';

const client = require('socket-io-client');
const socket = client.connect('http://localhost:3002/family');

function assignChore(){
  const chores = ['laundry', 'dishes', 'mow the lawn', 'wash the dishes again', 'go build a house'];
  const chore = chores[Math.floor(Math.random() * chores.length)];
  console.log('assign this chore: ', chore);
  // const chore 
  socket.emit('NEW_CHORE', chore);
}

setInterval(() => {
  assignChore();
}, 3000);
