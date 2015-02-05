/**
 * Settings store.
 * Keep environment and module specific key-value information to share it across
 * all application parts
 */

var eventEmitter = new(require('events').EventEmitter)();
var immutable = require('immutable');
var dispatcher = require('../dispatcher');
var constants = require('../constants');

var eventName = 'settingsStore_changed';

var settings = immutable.Map({});

var settingsStore = {};

settingsStore.getAll = function () {
  return settings;
};

settingsStore.get = function (key) {
  return settings.get(key);
};

/**
 * Adds listener for stores change event
 */
settingsStore.subscribe = function(listener) {
  eventEmitter.addListener(eventName, listener);
};

/**
 * Remove listener for stores change event
 */
settingsStore.unsubscribe = function(listener) {
  eventEmitter.removeListener(changeEvent, listener);
};

/**
 * Registers the settings store handler into dispatcher
 */
settingsStore.dispatchIndex = dispatcher.register(function (payload) {
  if(payload.source !== constants.payloadSources.core){
    return;
  }
  var action = payload.action;

  switch(action.type){
    case constants.actions.setSetting:
      settings = settings.set(action.key, action.value);
      eventEmitter.emit(eventName);
      break;
  }
  return;
});

module.exports = settingsStore;
