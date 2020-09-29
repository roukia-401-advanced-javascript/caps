// Main Hub Application //server
// Manages the state of every package (ready for pickup, in transit, delivered, etc)
// Logs every event to the console with a timestamp and the event payload
// i.e. “EVENT {}”

'use strict';

const net = require('net'); // this package is from node 1st party dont have to install it is to create tcp conncections create server and listen to it 
// create server
const server = net.createServer();
// start the server to have the tcp connection i have to have port
const port = process.env.PORT || 5000;
//start listeng on the port 
server.listen(port,()=>{
console.log(`server is running on the ${port}`)
});

//add some event lisetners on connection 
//when client connected to us trigger callback

server.on('connection',(socket)=>{
  console.log("user is online!!!");
  console.log("socket",socket); //socket is an object 
 
  socket.on('data',buffer=>{
   
    console.log("buffer>>>>",buffer)
    //parse buffer
    let msg = JSON.parse(buffer.toString());
    console.log("msg>>",msg);
  })

})



// const events = require('./events');

// require('./module/driver');
// require('./module/vendor');

// // add some event listeners 
// events.on('pickup', payload=> log('pickup', payload));
// events.on('transit', payload=> log('transit', payload));
// events.on('delivered', payload=> log('delivered', payload));

// /**
//  * funtion that take event name and payload order info object
//  * @param {string} event 
//  * @param {object} payload 
//  */
// function log(event, payload) {
//   let time = new Date();
//   console.log('EVENT', {event,time, payload});
// }
