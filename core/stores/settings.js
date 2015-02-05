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

var settings = immutable.Map({}).set(constants.settings.groups.default, immutable.Map({}));

var settingsStore = {};

/**
 * Retrieves all group specific settings.
 * If group was not specified, retrives settings from default group
 */
settingsStore.getAll = function(group) {
  return settings.get(group ? group : constants.settings.groups.default);
};

/**
 * Retrieves all group specific setting.
 * If group was not specified, tryes to retrive setting from default group
 * If setting not found returns `undefined`
 */
settingsStore.get = function(key, group) {
  group = group ? group : constants.settings.groups.default;
  if (settings.has(group))
    return settings.get(group).get(key);
  return undefined;
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
settingsStore.dispatchIndex = dispatcher.register(function(payload) {
  if (payload.source !== constants.payloadSources.core) {
    return;
  }
  var action = payload.action;

  switch (action.type) {
    case constants.actions.setSetting:
      //checks does settings have group specified, if false then create new one
      var groupSettings = settings.has(action.group) ? settings.get(action.group) : immutable.Map({});
      settings = settings.set(action.group, groupSettings.set(action.key, action.value));
      eventEmitter.emit(eventName);
      break;
  }
  return;
});

module.exports = settingsStore;
