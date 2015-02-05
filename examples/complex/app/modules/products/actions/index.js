/**
 * Products module actions
 */

var productsActionCreators = {};
var Dispatcher = require('rlux').Dispatcher;
var constants = require('../constants');
var service = require('../services');

productsActionCreators.loadProducts = function () {
  service.loadProducts().then(function (products) {
    Dispatcher.handleServerAction({
      type: constants.actions.productsLoaded,
      products: products.response
    });
  },function (reason) {
    Dispatcher.handleErrorAction({
      type: constants.actions.productLoadingFailed,
      reason: reason
    });
  });
};

module.exports = productsActionCreators;
