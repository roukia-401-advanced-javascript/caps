// Drivers Module

'use strict';

require('dotenv').config();
const net = require('net');

//create a socket conncetion 
const client = new net.Socket(); //from net package
//concet it to caps.js localhost port:5000 //ip address with port
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5001;

client.connect(port, host, () => {
  console.log('conncting..');
});

client.on('close', () => {
  console.log('conncetion is closed');

});

client.on('data', data => {
  //pares data
  let jsonData = JSON.parse(data);
  if (jsonData.event == 'pickup') {
    setTimeout(() => {
      console.log(`pickup ${jsonData.payload.orderID}`);
      let msg = JSON.stringify({ event: 'in transit', payload: jsonData.payload });
      client.write(msg);
    }, 1000);
    setTimeout(() => {
      console.log(`delivered ${jsonData.payload.orderID}`);
      let msg = JSON.stringify({ event: 'delivered', payload: jsonData.payload });
      client.write(msg);
    }, 3000);
  }
});