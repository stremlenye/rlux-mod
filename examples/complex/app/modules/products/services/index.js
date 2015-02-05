/**
 * SPHERE.IO products api client
 */

//TODO hide this in settings or auth module
var access = {
  "access_token":"mwAjsOPX0qWHnqkRFH0eX8cFMztTg7pS",
  "token_type":"Bearer",
  "expires_in":172800,
  "scope":"manage_project:stremlenyes-stuff",
  projectKey:"stremlenyes-stuff"
};


var Http = require('../../../../../../core').Http;

var products = {};

products.loadProducts = function () {
  return new Http()
    .withUrl("https://api.sphere.io/" + access.projectKey + "/product-projections")
    .withMethod('GET')
    .withHeader('Authorization',access.token_type + " " + access.access_token)
    .withResponseType('json')
    .exec();
};

module.exports = products;
