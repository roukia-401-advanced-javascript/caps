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



// require net package 
const net = require('net');


//create a socket conncetion 
const client = new net.Socket(); //from net package

const host = process.env.HOST ||'localhost';
const port = process.env.PORT || 5000;

client.connect(port,host,()=>{ 
  console.log("conncting..")
})

// when i stop the conncection 
client.on('close',()=>{
  console.log("conncetion is closed")

});

client.on('data',(data)=>{
  // to get the data i have to parse it first when recivied it 
  let jsonData = JSON.parse(data);
  console.log("there is data now ")
  console.log(jsonData);
});


const msg = JSON.stringify({message:"hello from vendor "})

client.write(msg);
require('dotenv').config();


// const store_name = process.env.Store_Name || 'flowers';

// // require event pool
// const events = require('../events');

// //faker
// const faker = require('faker');

// require('../driver/driver');

// setInterval(() => {
//   let order = {
//     store: store_name,
//     orderID: faker.random.uuid(),
//     customer: faker.name.findName(),
//     address: faker.address.city(),
//   };
//   events.emit('pickup', order);
// }, 5000);

// events.on('delivered', payload => {
//   console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);

// });

