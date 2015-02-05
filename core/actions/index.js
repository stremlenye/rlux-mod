/**
 * Action creators for core data flow.
 * Extends the main core api
 */
/*jslint node: true */
'use strict';

var dispatcher = require('../dispatcher');
var constants = require('../constants');

var coreActionCreators = {};

/**
 * Dispatches register module action
 */
coreActionCreators.registerModule = function(name, module) {
  var action = {
    type: constants.actions.registerModule,
    module: module,
    name: name
  };
  dispatcher.handleCoreAction(action);
};

/**
 * Loads passed module as an active one
 */
coreActionCreators.loadModule = function(module) {
  var action = {
    type: constants.actions.loadModule,
    module: module
  };
  dispatcher.handleCoreAction(action);
};

/**
 * Dispatches 'Module not found' error
 */
coreActionCreators.moduleNotFound = function(name) {
  var action = {
    type: constants.actions.moduleNotFound,
    message: "Module \'" + name + "\' was not found",
    name: name
  };
  dispatcher.handleErrorAction(action);
};

module.exports = coreActionCreators;
