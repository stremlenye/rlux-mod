jest.autoMockOff();

describe("Core", function() {
  var React = require('react');
  var Promise = require('promise');

  var core = require('../core');
  var Dispatcher = core.Dispatcher;
  var constants = require('../core/constants');

  var Module = React.createClass({
    render: function() {
      return null;
    }
  });

  var _dispatchToken;

  afterEach(function() {
    if (_dispatchToken)
      Dispatcher.unregister(_dispatchToken);
  });

  pit("should register Modules", function() {
    return new Promise(function(fulfill, reject) {
      _dispatchToken = Dispatcher.register(function(payload) {
        expect(payload.source).not.toEqual(constants.payloadSources.error);
        expect(payload.source).toEqual(constants.payloadSources.core);
        fulfill();
      });

      expect(function() {
        core.registerModule('should_register_Modules', <Module /> );
      }).not.toThrow();
    });
  });

  pit("should allow to set default Module", function() {
    return new Promise(function(fulfill, reject) {
      _dispatchToken = Dispatcher.register(function(payload) {
        expect(payload.source).not.toEqual(constants.payloadSources.error);
        expect(payload.source).toEqual(constants.payloadSources.core);
        fulfill();
      });

      var entryPoint = React.createElement( < Module /> );
      core.setDefaultModule(entryPoint);
    });
  });

  pit("should allow to get all modules", function() {
    return new Promise(function(fulfill, reject) {
      var modules = core.getModules();
      expect(modules).not.toBeNull();
      var initialSize = modules.size;

      _dispatchToken = Dispatcher.register(function(payload) {
        expect(payload.source).not.toEqual(constants.payloadSources.error);
        expect(payload.source).toEqual(constants.payloadSources.core);
        modules = core.getModules();
        expect(modules).not.toBeNull();
        expect(modules.size).toEqual(initialSize + 1);
        fulfill();
      });

      var entryPoint = React.createElement(Module);
      core.registerModule('should_allow_to_get_all_modules', < Module /> );
    });
  });

  pit("should allow to get module by name", function() {
    return new Promise(function(fulfill, reject) {
      var name = 'should_allow_to_get_module_by_name';
      var module = <Module />;

      _dispatchToken = Dispatcher.register(function(payload) {
        expect(payload.source).not.toEqual(constants.payloadSources.error);
        expect(payload.source).toEqual(constants.payloadSources.core);
        var actual = core.getModule(name);
        expect(module).not.toBeNull();
        expect(module).toBe(actual);
        fulfill();
      });

      core.registerModule(name, module);
    });
  });

  pit("should load module by name", function () {
    return new Promise(function (fulfill, reject) {
      var name = 'should_load_module_by_name';
      var module = <Module />;
      core.registerModule(name, module);

      _dispatchToken = Dispatcher.register(function(payload) {
        expect(payload.source).not.toEqual(constants.payloadSources.error);
        expect(payload.source).toEqual(constants.payloadSources.core);
        var actual = core.getActiveModule();
        expect(module).not.toBeNull();
        expect(module).toBe(actual);
        fulfill();
      });

      core.loadModule('name');
    });
  });

  pit("should not allow to add modules whith same name to prevent modules overwriting", function () {
    return new Promise(function (fulfill, regect) {
      var name = 'should_not_allow_to_add_modules_whith_same_name_to_prevent_modules_overwriting';
      core.registerModule(name, <Module />);

      _dispatchToken = Dispatcher.register(function(payload) {
        expect(payload.source).toEqual(constants.payloadSources.error);
        expect(payload.source).not.toEqual(constants.payloadSources.core);
        fulfill();
      });

      core.registerModule(name, <Module />);

    });
  });
});
