/**
 * Pretty simple dashboard stub
 */

var React = require('rlux').React;
var DashboardGrid = require('./components/DashboardGrid');
var ModuleActivationMixin = require('rlux').ModuleActivationMixin;

var Dashboard = React.createClass({

  render: function() {
    return (
      <DashboardGrid />
    );
  }

});

module.exports = Dashboard;
