/**
 * Dashboard module actions
 */

var services = require('../services');
var constants = require('../constants');
var dispatcher = require('../../../../../../core').Dispatcher;

var dashboardActionsCreators = {

  /**
   * Loads all the data nessesary for dashboard
   */
  loadData: function () {
    services.loadProducts().then(function (products) {
      dispatcher.handleServerAction({
        type: constants.actions.dataLoaded,
        source: 'products',
        data: products.response
      });
    }, function (reason) {
      dispatcher.handleErrorAction({
        type: constants.actions.dataLoadingFailed,
        reason: reason,
        source: 'products'
      });
    });
    services.loadCategories().then(function (categories) {
      dispatcher.handleServerAction({
        type: constants.actions.dataLoaded,
        source: 'categories',
        data: categories.response
      });
    }, function (reason) {
      dispatcher.handleErrorAction({
        type: constants.actions.dataLoadingFailed,
        reason: reason,
        source: 'categories'
      });
    });
  }
};

module.exports = dashboardActionsCreators;
