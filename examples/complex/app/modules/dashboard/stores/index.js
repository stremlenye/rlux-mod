/**
 * Dashboard data stores
 */

var dispatcher = require('../../../../../../core').Dispatcher;
var Map = require('immutable').Map;
var constants = require('../constants');
var eventEmitter = new(require('events').EventEmitter)();
var eventName = 'dashboardDataStore_changed';

var dashboardDataStore = {};

var data = Map({});

dashboardDataStore.get = function(source) {
  if (data.has(source))
    return data.get(source).data;
  return undefined;
};

dashboardDataStore.getStatus = function(source) {
  if (data.has(source))
    return data.get(source).status;
  return constants.stores.statuses.loading;
};

dashboardDataStore.subscribe = function(listener) {
  eventEmitter.addListener(eventName, listener);
};

dashboardDataStore.unsubscribe = function(listener) {
  eventEmitter.removeListener(eventName, listener);
};

dashboardDataStore.dispatchIndex = dispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.type) {
    case constants.actions.dataLoaded:
      setData(action.source, action.data);
      eventEmitter.emit(eventName);
      break;
    case constants.actions.dataLoadingFailed:
      setDataFailedStatus(action.source);
      eventEmitter.emit(eventName);
      break;
  }
});

/**
 * Adds or updates data in data store
 */
function setData(source, newData) {
  var d;
  if (data.has(source)) {
    d = data.get(source);
  } else {
    d = {};
  }
  d.data = newData.results;
  d.status = constants.stores.statuses.ready;
  data = data.set(source, d);
}

/**
 * Sets data in failed status in data store
 */
function setDataFailedStatus(source) {
  var d;
  if (data.has(source)) {
    d = data.get(source);
  } else {
    d = {};
  }
  d.data = null;
  d.status = constants.stores.statuses.failed;
  data = data.set(source, d);
}

module.exports = dashboardDataStore;
