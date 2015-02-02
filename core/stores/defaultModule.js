/**
 * Stores containing information about default module
 */

var eventEmitter = new(require('events').EventEmitter)();
var dispatcher = require('../dispatcher');
var constants = require('../constants');

var eventName = 'defaultModuleStores_changed';

var defaultModule;

var defaultModuleStores = {};

/**
 * Returns true if default module was defined
 */
defaultModuleStores.isDefined = function () {
  return typeof(defaultModule) !== 'undefined' && defaultModule !== null;
};

/**
 * Returns the default module
 */
defaultModuleStores.getDefaultModule = function () {
  return defaultModule;
};

/**
 * Returns module with passed name
 */
 defaultModuleStores.getModule = function (name) {
  return modules.get(name);
};

/**
 * Adds listener for stores change event
 */
 defaultModuleStores.subscribe = function(listener) {
  eventEmitter.addListener(eventName, listener);
};

/**
 * Registers the default module stores handler into dispatcher
 */
defaultModuleStores.dispatchIndex = function () {
  if(payload.source !== constants.payloadSources.core){
    return;
  }
  var action = payload.action;

  switch(action.type){
    case constants.actions.setDefaultModule:
      defaultModule = action.module;
      eventEmitter.emit(eventName);
      break;
  }

  return;
};

module.exports = defaultModuleStores;
