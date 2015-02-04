/**
 * Products module entry point
 * Displays the products grid
 */

var React = require('react');
var actions = require('./actions');
var productsStore = require('./stores');

var Products = React.createClass({

  getInitialState: function() {
    return {
      status: 'pending'
    };
  },

  componentDidMount: function() {
    productsStore.subscribe(this.onChange);
    actions.loadProducts();
  },

  componentWillUnmount: function() {
    productsStore.unsubscribe(this.onChange);
  },

  onChange:function () {
    this.setState({
      status:'ready',
      products: productsStore.getAll()
    });
  },

  render: function() {
    if(this.state.status == 'pending'){
      return <div>Loading</div>;
    }
    if(this.state.status == 'error'){
      return <div>{this.state.error}</div>;
    }
    return (
      <div>{this.state.products}</div>
    );
  }

});

module.exports = Products;
