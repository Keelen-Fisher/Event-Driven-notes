'use strict';

module.exports = (Socket) => (payload) => {
  console.log('Message Received!', payload);
  Socket.emit('RECEIVED', payload);
  
};
