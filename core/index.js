/**
 * Core framework object
 */
 /*jslint node: true */
 'use strict';

module.exports.Dispatcher = require('./dispatcher');
module.exports.App = require('./components');
module.exports.Module = require('./components/Module');
module.exports.DefaultModule = require('./components/DefaultModule');
module.exports.ModuleActivationMixin = require('./mixins/ModuleActivationMixin');

//utilities
module.exports.Http = require('./utilities/http');
module.exports.Settings = require('./utilities/settings');
