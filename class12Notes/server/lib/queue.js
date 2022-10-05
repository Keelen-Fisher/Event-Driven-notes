'use strict';

class Queue{
  constructor(){
    this.data = {};
  }

  store(key, value){
    this.data[key] = value;
    // should look something like this
    // this.key.something = 'uhhhhhhhhhh, something'
    return key;
  }

  read(key){
    return this.data[key];
  }

  remove(key){
    console.log('something has been removed');
    let value = this.data[key];
    delete this.data[key];
    return value;
  }
}

module.exports = Queue;
