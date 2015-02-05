/**
 * Dashboard module actions
 */

var services = require('../services');
var services = require('../constants');
var dispatcher = require('../../../../../../core').Dispatcher;

var dashboardActionsCreators = {

  /**
   * Loads all the data nessesary for dashboard
   */
  loadDashboardData: function () {
    services.loadProducts().then(function (products) {
      dispatcher.handlerServerAction({
        type: constants.actions.dataLoaded,
        dataSource: 'Products',
        data: products.response
      });
    }, function (reason) {
      dispatcher.handleErrorAction({
        type: constants.actions.dataLoadingFailed,
        reason: reason,
        dataSource: 'Products'
      });
    });
    services.loadCategories().then(function (categories) {
      dispatcher.handlerServerAction({
        type: constants.actions.dataLoaded,
        dataSource: 'Categories',
        data: categories.response
      });
    }, function (reason) {
      dispatcher.handleErrorAction({
        type: constants.actions.dataLoadingFailed,
        reason: reason,
        dataSource: 'Categories'
      });
    });
  }
};

module.exports = dashboardActionsCreators;
