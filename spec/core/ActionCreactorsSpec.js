/**
 * Specs for core action creators
 */
describe("Core actions", function () {
  var React = require('react');
  var actions = require('../../core/actions');
  var name = 'module_example';

  var Module = React.createClass({
    render: function () {
      return null;
    }
  });
  var module = React.createElement(Module);

  it("should allow to initiate register module action", function () {
    expect(function () {
      actions.registerModule(name, module);
    }).not.toThrow();
  });

  it("should allow to initiate set default module action", function () {
    expect(function () {
      actions.setDefaultModule(module);
    }).not.toThrow();
  });

  it("should allow to initiate load module action", function() {
    expect(function () {
      actions.loadModule(module);
    }).not.toThrow();
  });

});
