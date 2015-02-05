/**
 * Grid of products
 */

var React = require('react');
var productsStore = require('../stores');
var constants = require('../constants');

var Product = require('./Product');

var ProductsGrid = React.createClass({

  getInitialState: function() {
    return {
     status: productsStore.getStatus()
    };
  },

  componentDidMount: function() {
    productsStore.subscribe(this.onChange);
  },

  componentWillUnmount: function() {
    productsStore.unsubscribe(this.onChange);
  },

  onChange:function () {
    this.setState({
      status: productsStore.getStatus(),
      products: productsStore.getAll()
    });
  },

  render: function() {
    if(this.state.status == constants.stores.products.statuses.empty){
      return <div>Loading</div>;
    }
    if(this.state.status == constants.stores.products.statuses.error){
      return <div>{this.state.error}</div>;
    }
    return (
      <div>
        {
          this.state.products.map(function (product) {
            return <Product key={product.id} product={product} />;
          })
        }
      </div>
    );
  }
});

module.exports = ProductsGrid;
