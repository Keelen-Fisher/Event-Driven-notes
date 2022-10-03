'use strict';

const handleBrain = require('./brainHandler');
const eventPool = require('../eventPool');
const { default: JestHasteMap } = require('jest-haste-map');
const { describe } = require('yargs');
const { default: test } = require('node:test');
const { hasUncaughtExceptionCaptureCallback } = require('process');


//  2 params to mock
// 1. module/object to mock
// 2. callback that returns an object, because the eventPool is an object (with two methods)

jest.mock(eventPool, () => {
  return{
    on: jest.fn(),
    emit: jest.fn(),
  }
});

describe('Can Handle Brain Test', () => {
  console.log = jext.fn();

  test('log and emit DILATION event to close pupils', () => {
    handleBrain({brightness: 55});
    expect(console.log).toHaveBeenCalledWith('Brain: brightness has changed!', {brightness: 55})
    
  })
})
