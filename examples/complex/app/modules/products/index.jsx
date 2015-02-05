/**
 * Products module entry point
 * Displays the products grid
 */

var React = require('rlux').React;
var actions = require('./actions');
var ProductsGrid = require('./components').ProductsGrid;

var Products = React.createClass({

  componentDidMount: function() {
    actions.loadProducts();
  },

  render: function() {
    return <ProductsGrid />;
  }

});

module.exports = Products;
