'use strict';

const events = require('../events.js');
const faker = require('faker');
require('../caps');
require('../driver/driver');
require('../vendor/vendor');

// Spies!
// get to know if something was called or not.

jest.spyOn(global.console, 'log');

describe('events Handler' , ()=>{
  
  let order = {
    store: 'store_name',
    orderID: faker.random.uuid(),
    customer: faker.name.findName(),
    address: faker.address.city(),
  };


  it('pickup', () => {
    events.emit('pickup',order);
    expect(console.log).toHaveBeenCalled();
  });
  

  it('transit', () => {
    events.emit('in-transit',order);
    expect(console.log).toHaveBeenCalled();
  });
  
  it('delivered', () => {
    events.emit('delivered',order);
    expect(console.log).toHaveBeenCalled();
  });

});


