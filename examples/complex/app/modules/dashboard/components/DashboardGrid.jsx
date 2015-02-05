/**
 * Dashboard view.
 * Shows tiles with some data retrieved from variouse data sources
 */

var React = require('react');
var actions = require('../actions');

var HomeButton = require('./molecules/HomeButton');
var Tile = require('./Tile');

var DashboardGrid = React.createClass({

  componentDidMount: function() {
    actions.loadData();
  },

  render: function() {
    return (
      <div>
        <HomeButton />
        <Tile title="Products" source="products" />
        <Tile title="Categories" source="categories" />
      </div>
    );
  }

});

module.exports = DashboardGrid;
