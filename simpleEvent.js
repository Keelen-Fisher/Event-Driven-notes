'use strict';

const Event = require('events');
// event sengleton. Having a single event context is very important
const eventPool = new Event();

// client list
function keelensPhone(){
  console.log('sending message');
  
  // creating a payload to be emitted
  const payload = {text: 'What is up my guy! You are going to be so special in the next 3 years, wait on it!'}
  
  // .emit() takes 2 args. eventname as a string, payload
  eventPool.emit('SEND_MESSAGE', payload)
  console.log('/message was sent')
}

function JackiesPhone(payload){

  setTimeout(() => {
    console.log('Message Has been sent by Keelen and received by Jackie ::', payload);
    // Jackie could also emit an event to the event pool 
    // CRUD or REST operations 
    
  }, 1000)
}

function BrandonsPhone(payload){

  setTimeout(() => {
    console.log('Message Has been sent by Keelen and received by Brandon ::', payload);
  });
}

// clients subscribe with .on(), taking two args: eventname as a string, callaback
eventPool.on('SEND_MESSAGE', JackiesPhone); 
eventPool.on('SEND_MESSAGE', BrandonsPhone); 
// ^ this can get very long, but you can develop an array and map through it to develop a response.

// fires code every so often
setInterval(() => {
  keelensPhone();
}, 2000)

