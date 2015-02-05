/**
 * Interface for settings interoperability.
 * Encapsulates the settings actions + store implementation
 */

var actions = require('../actions/settings');
var store = require('../stores/settings');

var settings = {};

settings.set = function (key, value, group) {
  actions.setSetting(key, value, group);
};

settings.getAll = function (group) {
  return store.getAll(group);
};

settings.get = function (key, group) {
  return store.get(key, group);
};

settings.subscribe = function (listener) {
  store.subscribe(listener);
};

settings.unsubscribe = function (listener) {
  store.unsubscribe(listener);
};

module.exports = settings;
