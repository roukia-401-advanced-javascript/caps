# caps

A real-time service that allows for vendors, such as flower shops or restaurants, to alert a system of a package needing to be delivered, for drivers to instantly see what’s in their pickup queue, and then to alert the vendors as to the state of the deliveries (in transit, and then delivered).


## Author: Roukia Salahi

- [tests report](https://github.com/roukia-401-advanced-javascript/caps/actions)

## overview

- From the Vendor (store owner) perspective

  - As products are sold that need to be delivered, we need to alert the drivers that a package is ready for pickup/delivery
  - As a driver picks up a package, the store owner should know that the package is now “in transit”
Once the driver delivers a package, the store owner should know that the package has been delivered
Ideally, these notifications should be visible in real time on any device (screen, app, browser, etc)

- From the Driver’s perspective

  - As stores sell product and need a package delivered, Drivers need an instant notification to pick the package up
  - Drivers need a way to scan a package and alert the vendors that the package is in transit
  - Drivers need a way to scan a package and alert the vendors that the package has been delivered

- From the perspective of our company

  - Essential to this system working is that we have to operate in real time. As things happen with the packages, everyone needs to know at that moment, with a guarantee that every state change is visible even if they

  - We don’t want our clients having to refresh their browser to get the latest status updates
  - We also are aware that they will not always have their browser open …
So, if they leave & come back, it’s imperative that they can the state of things since they last logged in

## Technical Requirements

- Node.js
- Socket.io for realtime event management
- ES6 Classes and best practices
- ExpressJS Web Server
- For simulating pickup requests
- For simulating delivery scans
- In-Memory messaging queue
- Test Driven Development, using Jest
- Tests will be runnable locally
- Tests will auto-execute (CI) in your repo using GitHub actions
- Tests will use a 3rd party library called supergoose to:
  - “mock” the mongo running database
  - “mock” the running Express server
- Deployment to Heroku

## installation 

- `npm init -y`
- `npm i`
- `npm install faker`

## start server 

- `node caps/caps.js`
- `node vendor/vendor.js`
- `node driver/driver.js`

## run the test

- `npm test`

## UML

### lab-16

![UML](/assets/lab16-uml.JPG)

### lab-17

![UML](/assets/lab17-uml.JPG)

### lab-18

![UML](/assets/lab18-uml.JPG)

### lab-19

![UML](/assets/lab19-uml.JPG)

## Demo

![Demo](https://code-401-javascript-guide.s3-us-west-2.amazonaws.com/assets/caps.gif)



