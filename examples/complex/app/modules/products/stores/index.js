/**
 * Products store
 */

var Dispatcher = require('../../../../../../core').Dispatcher;
var constants = require('../constants');
var eventEmitter = new(require('events').EventEmitter)();
var eventName = 'productsStore_changed';

var products;
var status = constants.stores.products.statuses.empty;

var productsStore = {};

productsStore.getAll = function () {
  return products;
};

productsStore.getStatus = function () {
  return status;
};

productsStore.subscribe = function (listener) {
  eventEmitter.addListener(eventName, listener);
};

productsStore.unsubscribe = function (listener) {
  eventEmitter.removeListener(eventName, listener);
};

productsStore.dispatchIndex = Dispatcher.register(function (payload) {
  var action = payload.action;

  switch(action.type){
    case constants.actions.productsLoaded:
      products = action.products.results;
      status = constants.stores.products.statuses.actual;
      eventEmitter.emit(eventName);
      break;

    case constants.actions.productLoadingFailed:
      status = constants.stores.products.statuses.error;
      eventEmitter.emit(eventName);
      break;
  }
});

module.exports = productsStore;
