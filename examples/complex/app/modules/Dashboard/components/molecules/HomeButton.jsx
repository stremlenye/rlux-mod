/**
 * Button switch current active module to default
 */

var React = require('rlux').React;
var ModuleActivationMixin = require('rlux').ModuleActivationMixin;

var HomeButton = React.createClass({
  mixins:[ModuleActivationMixin],

  render: function() {
    return (
      <button onClick={this.activateModule.bind(this,null)}>Home</button>
    );
  }

});

module.exports = HomeButton;
