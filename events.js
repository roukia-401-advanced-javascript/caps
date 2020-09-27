// Global Event Pool (shared by all modules)

'use strict';

const events = require('events'); //no need for installation came up with node

const newEvents = new events();

// I am exporting the same instance
// same events pool is exported
module.exports = newEvents;
