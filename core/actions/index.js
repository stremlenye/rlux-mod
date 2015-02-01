/**
 * Action creators for core data flow.
 * Extends the main core api
 */

var dispatcher = require('../dispatcher');
var constants = require('../constants');
var React = require('react');

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
	if(validateModule(module) == false){
		dispatcher.handleErrorAction({
			message: "Passed module is not a React component",
			original: action
		});
	}
	dispatcher.handleCoreAction(action);
};

/**
 * Dispatches 'set default module action'
 */
coreActionCreators.setDefaultModule = function(module) {
	var action = {
		type: constants.actions.setDefaultModule,
		module: module
	};

	if(validateModule(module) == false){
		dispatcher.handleErrorAction({
			message: "Passed module is not a React component",
			original: action
		});
	}
	dispatcher.handleCoreAction(action);
};

/**
 * Loads passed module as an active one
 */
coreActionCreators.loadModule = function (module) {
  dispatcher.handleCoreAction({
    type: constants.actions.loadModule,
    module: module
  });
};

/**
* validates the module entry point to
* @return true if entry point is valid (means it is a React Component with name)
*/
var validateModule = function (moduleEntryPoint) {
	return React.isValidElement(moduleEntryPoint);
};

module.exports = coreActionCreators;
