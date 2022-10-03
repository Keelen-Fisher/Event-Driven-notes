'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {
  console.log(`Eyes:: We see the brightness of ${payload.brightness}, go tell the brain!`);
  eventPool.emit('BRIGHTNESS', payload);
}
// console.log('Brain: brightness has changed!');
