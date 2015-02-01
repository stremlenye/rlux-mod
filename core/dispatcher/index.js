/**
 * Core dispatcher implementation with splitting flows of view, server and error
 * actions
 */

var fluxDispatcher = require('flux').Dispatcher;

var dispatcher = {};

dispatcher.prototype = new fluxDispatcher();

/**
 * Dispatch view actions
 */
dispatcher.handleViewAction = function(action) {
	this.dispatch({
		source: constants.payloadSources.view,
		action: action
	});
};

/**
 * Dispatch server actions
 */
dispatcher.handleServerAction = function(action) {
	this.dispatch({
		source: constants.payloadSources.server,
		action: action
	});
};

/**
 * Dispatch error actions
 */
dispatcher.handleErrorAction = function(action) {
	this.dispatch({
		source: constants.payloadSources.error,
		action: action
	});
};

module.exports = dispatcher;
