'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {

setTimeout(() => {
  
  console.log('Brain: brightness has changed!', payload)
  if(payload.brightness > 50){
    eventPool.EventEmitter('DILATION', 'close');
    eventPool.EventEmitter('SHIELD_EYES', 'use hand to shield your eyes you fool!')
    eventPool.EventEmitter('')
  }
}
  
}, 1000);


// console.log('Brain: brightness has changed!');
