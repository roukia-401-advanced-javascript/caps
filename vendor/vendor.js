//Vendor Module

// name of the events are from the net package.
'use strict';

const faker = require('faker');
require('dotenv').config();

// i have the server in caps i want to start a socket connection 
// i want this to connect to the server that is running 

// require net package 
const net = require('net');
// my server is running on port 5001 and its localhost
// i want to have an open socket (conncetion) with this server

//create a socket conncetion 
const client = new net.Socket(); //from net package
//concet it to caps.js localhost port:5000 //ip address with port
const host = process.env.HOST ||'localhost';
const port = process.env.PORT || 5001;

client.connect(port,host,()=>{ 
  console.log("conncting..")
})

client.on('close',()=>{
  console.log("conncetion is closed")

});
// data trigger 
// i am reciving here the payload from caps that it recived it from vendor write msg 
client.on('data',(data)=>{
  // parse it 
  let jsonData = JSON.parse(data);
  if(jsonData.event == 'delivered'){
    console.log(`thank you for delivering ${jsonData.payload.orderID}`);
}
});


const store_name = process.env.Store_Name || 'flowers';
/**
 * function to send the order object to the server faker data
 */
function pickupOrder (){
   let order = {
    store: store_name,
    orderID: faker.random.uuid(),
    customer: faker.name.findName(),
    address: faker.address.city(),
  };
 // i am sending the order object to the caps
 // strigify the data before sending it 
  let pickupMsg = JSON.stringify({event:'pickup',payload:order})
  client.write(pickupMsg);
}
setInterval(pickupOrder,5000);


