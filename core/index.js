/**
 * Core framework object
 */
 /*jslint node: true */
 'use strict';

var dispatcher = require('./dispatcher');
var immutable = require('immutable');
var React = require('react');

var modules = immutable.Map();
var defaultModule = null;

var core = {};
var started = false;

/**
 * Registers module into application
 */
core.registerModule = function (name, moduleEntryPoint) {
  if(started){
    throw "module cant be added after application was started."
  }
  if(validateModule(moduleEntryPoint) == false){
    throw "module entry point is not ReactJS Component";
  }
  modules = modules.set(name,moduleEntryPoint);
};

/**
 * Sets the default module for the application, which will be used in every
 * unexplicable situation
 */
core.setDefaultModule = function (moduleEntryPoint) {
  if(started){
    throw "default module cant be reset after application was started."
  }
  if(validateModule(moduleEntryPoint) == false){
    throw "module entry point is not ReactJS Component";
  }
  defaultModule = moduleEntryPoint;
};

/**
 * validates the module entry point to
 * @return true if entry point is valid (means it is a React Component with name)
 */
var validateModule = function (moduleEntryPoint) {
  return React.isValidElement(moduleEntryPoint);
};

module.exports = core;

module.exports.Dispatcher = dispatcher;
