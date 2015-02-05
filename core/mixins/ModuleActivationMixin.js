/**
 * Mixin for exposing functionality of switching active module
 * Encapsulates actions.loadModule call
 */

var actions = require('../actions');

var ModuleActivationMixin = {
  activateModule: function (name) {
    actions.loadModule(name);
  }
};


module.exports = ModuleActivationMixin;
