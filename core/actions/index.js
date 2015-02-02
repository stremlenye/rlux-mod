/**
 * Action creators for core data flow.
 * Extends the main core api
 */
/*jslint node: true */
'use strict';

var React = require('react');
var Promise = require('promise');
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
	validateModule(module).then(function(result) {
		dispatcher.handleCoreAction(action);
	}, function(reason) {
		dispatcher.handleErrorAction({
			message: reason,
			original: action
		});
	});
};

/**
 * Dispatches 'set default module action'
 */
coreActionCreators.setDefaultModule = function(module) {
	var action = {
		type: constants.actions.setDefaultModule,
		module: module
	};

	validateModule(module).then(function() {
		dispatcher.handleCoreAction(action);
	}, function(err) {
		dispatcher.handleErrorAction({
			message: err,
			original: action
		});
	});
};

/**
 * Loads passed module as an active one
 */
coreActionCreators.loadModule = function(module) {
	var action = {
		type: constants.actions.loadModule,
		module: module
	};
	validateModule(module).then(function() {
		dispatcher.handleCoreAction(action);
	}, function(err) {
		dispatcher.handleErrorAction({
			message: err,
			original: action
		});
	});
};

/**
 * validates the module entry point to
 * @return promise which rejects if module is not the ReactJs component
 */
var validateModule = function(module) {
	return new Promise(function(fulfill, reject) {
		try {
			var isValid = module !== null;
			isValid = isValid && React.isValidElement(module);
			if (isValid){
				fulfill(isValid);
      }
			else
				reject("Passed module is not a React component");
		} catch (err) {
			reject(err);
		}
	});
};

module.exports = coreActionCreators;
