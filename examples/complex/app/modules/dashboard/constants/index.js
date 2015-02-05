/**
 * Dashboard constants
 */

var prefix = "dashboard_module_";

var dashboardConstants = {
  actions: {
    dataLoaded: prefix + 'dataLoaded'
  },
  stores: {
    statuses: {
      loading: 'loading',
      failed: 'failed',
      ready: 'ready'
    }
  }
};

module.exports = dashboardConstants;
