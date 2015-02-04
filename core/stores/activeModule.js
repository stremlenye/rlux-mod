/**
 * Sotores contains active module
 */
var eventEmitter = new(require('events').EventEmitter)();
var dispatcher = require('../dispatcher');
var constants = require('../constants');

var eventName = 'activeModulesStores_changed';

var activeModule;

var activeModuleStore = {};

/**
 * Return true if active module is defined
 */
activeModuleStore.isDefined = function () {
  return typeof(activeModule) !== 'undefined' && activeModule !== null;
};

/**
 * Return active module
 */
activeModuleStore.getActiveModule = function () {
  return activeModule;
};

/**
 * Adds listener for stores change event
 */
 activeModuleStore.subscribe = function(listener) {
  eventEmitter.addListener(eventName, listener);
};

/**
 * Remove listener for stores change event
 */
 activeModuleStore.unsubscribe = function(listener) {
  eventEmitter.removeListener(changeEvent, listener);
};

/**
 * Registers the active module stores handler into dispatcher
 */
activeModuleStore.dispatchToken = dispatcher.register(function (payload) {
  if(payload.source !== constants.payloadSources.core){
    return;
  }
  var action = payload.action;

  switch(action.type){
    case constants.actions.loadModule:
      activeModule = action.module;
      eventEmitter.emit(eventName);
      break;
  }

  return;
});

module.exports = activeModuleStore;
