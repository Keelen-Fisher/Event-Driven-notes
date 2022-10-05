'use strict';

module.exports = (socket) => (text) => {
  console.log('Sending message: ', text);
  socket.emit('MESSAGE', { text });
};

// sendMessage(socket)('some text');
