/**
 * Core framework object
 */
 /*jslint node: true */
 'use strict';

var dispatcher = require('./dispatcher');
var actions = require('./actions');
var modulesStores = require('./stores').modules;
var defaultModuleStores = require('./stores').defaultModule;

var core = {};

/**
 * Registers module into application
 */
core.registerModule = function (name, module) {
  console.log(name + '\n');
  var storedModule = modulesStores.getModule(name);
  console.log(storedModule);
  if(storedModule){
    throw "Name \'" + name + "\' already reserved";
  }
  actions.registerModule(name, module);
};

/**
 * Sets the default module for the application, which will be used in every
 * unexplicable situation
 */
core.setDefaultModule = function (module) {
  actions.setDefaultModule(module);
};

/**
 * Return all modules
 */
core.getModules = function () {
  return modulesStores.getModules();
};

/**
 * Return module by name
 */
core.getModule = function (name) {
  return modulesStores.getModule(name);
};

/**
 * Returns the default module
 */
core.getDefaultModule = function () {
  return defaultModuleStores.getDefaultModule();
};


core.loadModule = function (name) {
  if(typeof(name) !== 'string'){
    throw "module name should be string";
  }
  var module = modulesStores.getModule(name);
  if(!module){
    actions.moduleNotFound(name);
    return;
  }
  actions.loadModule(module);
};

module.exports = core;

module.exports.Dispatcher = dispatcher;
