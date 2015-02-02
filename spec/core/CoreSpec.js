describe("Core", function () {
  var core = require('../../core');
  var dispatcher = core.Dispatcher;
  var constants = require('../../core/constants');
  var React = require('react');


  it("should register Modules", function (done) {

    var dispatchToken = dispatcher.register(function (payload) {
      console.log("Dispatched");
      expect(payload.source).not.toEqual(constants.payloadSources.error);
      expect(payload.source).toEqual(constants.payloadSources.core);
      expect(null).not.toBeNull();
      done();
    });

    var Module = React.createClass({
      render: function () {
        return null;
      }
    });

    var entryPoint = React.createElement(Module);
    expect(function () {
      core.registerModule('some_module', entryPoint);
    }).not.toThrow();

    dispatcher.unregister(dispatchToken);
  });

  it("should allow to set default Module", function () {
    var Module = React.createClass({
      render: function () {
        return null;
      }
    });
    var entryPoint = React.createElement(Module);
    core.setDefaultModule(entryPoint);
  });

  it("should allow to get all modules", function () {
    var Module = React.createClass({
      render: function () {
        return null;
      }
    });
    var modules = core.getModules();
    expect(modules).not.toBeNull();
    var initialSize = modules.size;

    var entryPoint = React.createElement(Module);
    core.registerModule('some_module', entryPoint);
    core.registerModule('some_module2', entryPoint);

    modules = core.getModules();
    expect(modules).not.toBeNull();
    expect(modules.size).toEqual(initialSize + 2);
  });

  it("should allow to get module by name", function () {
    var Module = React.createClass({
      render: function () {
        return null;
      }
    });
    var entryPoint = React.createElement(Module);
    var name = 'module_example';
    core.registerModule(name, entryPoint);
    var module = core.getModule(name);
    expect(module).not.toBeNull();
    expect(module).toBe(entryPoint);
  });
});
