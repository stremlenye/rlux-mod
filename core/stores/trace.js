/**
 * Fake store to trace dispatchers activity and log it to console output
 */

var dispatcher = require('../dispatcher');

var traceStore = {
};

traceStore.dispatchIndex = dispatcher.register(function (payload) {
    if(!console){
      return;
    }
    console.log(payload);
});

module.exports = traceStore;
