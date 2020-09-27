//Vendor Module
// Declare your store name (perhaps in a .env file, so that this module is re-usable)
// Every 5 seconds, simulate a new customer order
// Create a fake order, as an object:
// storeName, orderId, customerName, address
// Emit a ‘pickup’ event and attach the fake order as payload
// HINT: Have some fun by using the faker library to make up phony information
// Monitor the system for events …
// Whenever the ‘delivered’ event occurs
// Log “thank you” to the console

'use strict';
require('dotenv').config();

const store_name = process.env.Store_Name || 'flowers';

// require event pool
const events = require('../events');

//faker
const faker = require('faker');

require('./driver');

setInterval(() => {
  let order = {
    store: store_name,
    orderID: faker.random.uuid(),
    customer: faker.name.findName(),
    address: faker.address.city(),
  };
  events.emit('pickup', order);
}, 5000);

events.on('delivered', payload => {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);

});

