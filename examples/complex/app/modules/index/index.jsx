/**
 * Index page module.
 * Displays links to all modules passed to Application
 */

var React = require('react');
var ModuleActivationMixin = require('../../../../../core').ModuleActivationMixin;

var Index = React.createClass({
  mixins:[ModuleActivationMixin],

  /**
   * Loads module with passed name
   */
  loadModule: function (name) {
    this.activateModule(name);
  },

  render: function() {
    return (
      <div>
        <ul>
          <li onClick={this.loadModule.bind(this,'dashboard')}>Dashboard</li>
          <li onClick={this.loadModule.bind(this,'products')}>Products</li>
        </ul>
      </div>
    );
  }
});

module.exports = Index;
