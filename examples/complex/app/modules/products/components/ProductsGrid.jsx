/**
 * Grid of products
 */

var React = require('react');
var productsStore = require('../stores');
var constants = require('../constants');

var HomeButton = require('./molecules/HomeButton');
var Product = require('./Product');

var ProductsGrid = React.createClass({

  getState: function () {
    return {
      status: productsStore.getStatus(),
      products: productsStore.getAll()
    };
  },

  getInitialState: function() {
    return this.getState();
  },

  componentDidMount: function() {
    productsStore.subscribe(this.onChange);
  },

  componentWillUnmount: function() {
    productsStore.unsubscribe(this.onChange);
  },

  onChange:function () {
    this.setState(this.getState());
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
        <HomeButton />
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
