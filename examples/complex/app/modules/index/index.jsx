/**
 * Index page module.
 * Displays links to all modules passed to Application
 */

var React = require('rlux').React;
var ModuleActivationMixin = require('rlux').ModuleActivationMixin;

var Index = React.createClass({
  mixins:[ModuleActivationMixin],

  /**
   * Loads module with passed name
   */
  loadModule: function (name) {
    this.activateModule(name);
  },

  test: function () {
    console.log("clicked");
  },

  render: function() {
    return (
      <div>
        <button onClick={this.loadModule.bind(this,'dashboard')}>Dashboard</button>
        <button onClick={this.loadModule.bind(this,'products')}>Products</button>
      </div>
    );
  }
});

module.exports = Index;
