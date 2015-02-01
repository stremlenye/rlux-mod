/**
 * Stores containing information about default module
 */

var eventEmitter = new(require('events').EventEmitter)();
var dispatcher = require('../dispatcher');
var constants = require('../constants');

var eventName = 'defaultModuleStores_changed';

var defaultModule;

var defaultModuleStores = {};

defaultModuleStores.isDefined = function () {
  return typeof(defaultModule) !== 'undefined' && defaultModule !== null;
};

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
};

module.exports = defaultModuleStores;
