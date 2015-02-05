/**
 * SPHERE.IO products api client
 */

//TODO hide this in settings or auth module



var Http = require('rlux').Http;
var Settings = require('rlux').Settings;

var products = {};

products.loadProducts = function () {
  var access = Settings.get('api_access');
  return new Http()
    .withUrl("https://api.sphere.io/" + access.projectKey + "/product-projections")
    .withMethod('GET')
    .withHeader('Authorization',access.token_type + " " + access.access_token)
    .withResponseType('json')
    .exec();
};

module.exports = products;
