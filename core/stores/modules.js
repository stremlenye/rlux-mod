/**
 * Core stores for modules
 */

var eventEmitter = new(require('events').EventEmitter)();
var immutable = require('immutable');
var dispatcher = require('../dispatcher');
var constants = require('../constants');

var eventName = 'modulesStores_changed';

var modules = immutable.Map();

var modulesStores = {};

/**
 * Returns the modules map
 */
modulesStores.getModules = function () {
  return modules;
};

/**
 * Returns module with passed name
 */
modulesStores.getModule = function (name) {
  return modules.get(name);
};

/**
 * Adds listener for stores change event
 */
modulesStores.subscribe = function(listener) {
  eventEmitter.addListener(eventName, listener);
};

/**
 * Remove listener for stores change event
 */
modulesStores.unsubscribe = function(listener) {
  eventEmitter.removeListener(changeEvent, listener);
};

/**
 * Registers the module stores handler into dispatcher
 */
modulesStores.dispatchToken = dispatcher.register(function (payload) {
  if(payload.source !== constants.payloadSources.core){
    return;
  }
  var action = payload.action;

  switch(action.type){
    case constants.actions.registerModule:
      modules = modules.set(action.name, action.module);
      eventEmitter.emit(eventName);
      break;
  }
  return;
});

module.exports = modulesStores;
