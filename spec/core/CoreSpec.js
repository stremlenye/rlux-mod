describe("Core", function () {
  var core = require('../../core');
  var React = require('react');


  it("should register Modules", function () {
    var Module = React.createClass({
      render: function () {
        return null;
      }
    });
    var entryPoint = React.createElement(Module);
    core.registerModule('some_Module', entryPoint);
  });

  it("shouldn't allow to register Modules which are not the exposed React component", function () {
    expect(function() {
      core.registerModule('legal name', {});
      }).toThrow();
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

  it("shouldn't allow to set as default Module not the exposed React component", function () {
    expect(function () {
      core.setDefaultModule('legal name', {});
    }).toThrow();
  });
});
