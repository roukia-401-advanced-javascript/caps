// Main Hub Application //server

'use strict';
const faker = require('faker');
const net = require('net'); // this package is from node 1st party dont have to install it 
// create server tcp
const server = net.createServer();
// start the server //start listeng on the port 
const port = process.env.PORT || 5001;

server.listen(port, () => {
  console.log(`server is running on the ${port}`);
});

//add some event lisetners on connection 
//when client connected to us trigger callback
let socketPool = {};
server.on('connection', (socket) => {
  console.log('user is online!!!');

  // everytime i connect i will have diffrent id for the socket 
  // i will assign it to the socket pool

  const id = `Socket-${faker.random.uuid()}`;
  console.log('id >>>>>>> ', id);
  socketPool[id] = socket;
  socket.on('data', buffer => {


    // buffer is a strem of incoded data //encoded buffer(msg)cuz i stringufy it when i send it 

    console.log('buffer>>>>', buffer);
    //parse buffer
    let msg = JSON.parse(buffer.toString());
    console.log('Event:', msg);
    broadcast(msg);
  });
  server.on('error', (e) => {
    console.log('ERROR !!!!!!! ', e);
  });

  server.on('close', () => {
    delete socketPool[id];
  });

});
/**
 * function to send the order object inside msg to specific socket with its id 
 * @param {object} msg 
 */
function broadcast(msg) {
  let payload = JSON.stringify(msg);
  for (let id in socketPool) {
    // send the event to socket which has this id 
    socketPool[id].write(payload);
  }
}
