// Drivers Module
// Monitor the system for events …
// On the ‘pickup’ event …
// Wait 1 second
// Log “DRIVER: picked up [ORDER_ID]” to the console.
// Emit an ‘in-transit’ event with the payload you received
// Wait 3 seconds
// Log “delivered” to the console
// Emit a ‘delivered’ event with the same payload


'use strict';
// require event pool
const events = require('../events');

events.on('pickup', payload => {
  pickupHandler('pickup', payload);
});

/**
 * function to console driver confermation and send the transit and deliverd events
 * @param {string} event 
 * @param {object} payload 
 */
function pickupHandler(event, payload) {

  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderID}`);
    // send the transit event after the driver console
    events.emit('transit', payload);
  }, 1000);

  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.orderID}`);
    //send the deliverd event after the deliverd console
    events.emit('delivered', payload);
  }, 3000);
}

