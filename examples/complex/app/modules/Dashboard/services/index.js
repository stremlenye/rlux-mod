/**
 * Dashboard API service methods
 */

var Http = require('../../../../../../core').Http;
var Settings = require('../../../../../../core').Settings;

var dashboardService = {};

dashboardService.loadProducts = function () {
  var access = Settings.get('api_access');
  return new Http()
    .withUrl("https://api.sphere.io/" + access.projectKey + "/product-projections")
    .withMethod('GET')
    .withHeader('Authorization',access.token_type + " " + access.access_token)
    .withResponseType('json')
    .exec();
};

dashboardService.loadCategories = function () {
  var access = Settings.get('api_access');
  return new Http()
    .withUrl("https://api.sphere.io/" + access.projectKey + "/categories")
    .withMethod('GET')
    .withHeader('Authorization',access.token_type + " " + access.access_token)
    .withResponseType('json')
    .exec();
};

module.exports = dashboardService;
